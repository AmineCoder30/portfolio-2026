import { useState, useRef, useEffect } from "react";

interface TerminalLine {
  type: "command" | "output" | "error" | "prompt";
  content: string;
}

type FlowState =
  | "idle"
  | "awaiting-action"
  | "message-flow"
  | "estimation-flow";

interface FlowData {
  action?: "message" | "estimation";
  name?: string;
  email?: string;
  message?: string;
  projectType?: string;
  budget?: string;
}

function CustomTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: "output",
      content: "Welcome to Portfolio Terminal v1.0.0",
    },
    {
      type: "output",
      content: 'Type "start" to begin or "help" for available commands.',
    },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [flowState, setFlowState] = useState<FlowState>("idle");
  const [flowData, setFlowData] = useState<FlowData>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const addLine = (line: TerminalLine) => {
    setLines((prev) => [...prev, line]);
  };

  const handleCommand = (command: string) => {
    const trimmedCommand = command.trim().toLowerCase();

    // Add command to history
    addLine({ type: "command", content: `$ ${command}` });

    // Handle different flow states
    if (flowState === "awaiting-action") {
      handleActionSelection(trimmedCommand);
    } else if (flowState === "message-flow") {
      handleMessageFlow(trimmedCommand);
    } else if (flowState === "estimation-flow") {
      handleEstimationFlow(trimmedCommand);
    } else {
      // Idle state - handle regular commands
      handleIdleCommand(trimmedCommand);
    }
  };

  const handleIdleCommand = (command: string) => {
    switch (command) {
      case "start":
        addLine({
          type: "prompt",
          content: "What would you like to do?",
        });
        addLine({
          type: "output",
          content: "  1. Send a message",
        });
        addLine({
          type: "output",
          content: "  2. Get project estimation",
        });
        addLine({
          type: "output",
          content: "",
        });
        addLine({
          type: "prompt",
          content:
            'Enter your choice (1 or 2, or type "message" or "estimation"):',
        });
        setFlowState("awaiting-action");
        break;

      case "help":
        addLine({
          type: "output",
          content: "Available commands:",
        });
        addLine({
          type: "output",
          content: "  start      - Start interactive session",
        });
        addLine({
          type: "output",
          content: "  help       - Show this help message",
        });
        addLine({
          type: "output",
          content: "  clear      - Clear terminal screen",
        });
        addLine({
          type: "output",
          content: "  about      - About this portfolio",
        });
        break;

      case "clear":
        setLines([]);
        break;

      case "about":
        addLine({
          type: "output",
          content: "Portfolio Terminal - Interactive Command Line Interface",
        });
        addLine({
          type: "output",
          content: "Built with React & TypeScript",
        });
        break;

      case "":
        // Empty command, do nothing
        break;

      default:
        addLine({
          type: "error",
          content: `Command not found: ${command}`,
        });
        addLine({
          type: "output",
          content: 'Type "help" for available commands.',
        });
    }
  };

  const handleActionSelection = (input: string) => {
    if (input === "1" || input === "message") {
      setFlowData({ action: "message" });
      setFlowState("message-flow");
      addLine({
        type: "output",
        content: "✉️  Message Form",
      });
      addLine({
        type: "output",
        content: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      });
      addLine({
        type: "prompt",
        content: "Enter your name:",
      });
    } else if (input === "2" || input === "estimation") {
      setFlowData({ action: "estimation" });
      setFlowState("estimation-flow");
      addLine({
        type: "output",
        content: "💰 Project Estimation",
      });
      addLine({
        type: "output",
        content: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      });
      addLine({
        type: "prompt",
        content: "Enter your name:",
      });
    } else if (input === "cancel" || input === "exit") {
      addLine({
        type: "output",
        content: "Operation cancelled.",
      });
      setFlowState("idle");
      setFlowData({});
    } else {
      addLine({
        type: "error",
        content:
          'Invalid choice. Please enter "1", "2", "message", or "estimation".',
      });
      addLine({
        type: "prompt",
        content:
          'Enter your choice (1 or 2, or type "message" or "estimation"):',
      });
    }
  };

  const handleMessageFlow = (input: string) => {
    if (input === "cancel" || input === "exit") {
      addLine({
        type: "output",
        content: "Message cancelled.",
      });
      setFlowState("idle");
      setFlowData({});
      return;
    }

    if (!flowData.name) {
      setFlowData({ ...flowData, name: input });
      addLine({
        type: "prompt",
        content: "Enter your email:",
      });
    } else if (!flowData.email) {
      // Basic email validation
      if (!input.includes("@")) {
        addLine({
          type: "error",
          content: "Please enter a valid email address.",
        });
        addLine({
          type: "prompt",
          content: "Enter your email:",
        });
        return;
      }
      setFlowData({ ...flowData, email: input });
      addLine({
        type: "prompt",
        content: "Enter your message:",
      });
    } else if (!flowData.message) {
      setFlowData({ ...flowData, message: input });

      // Display summary
      addLine({
        type: "output",
        content: "",
      });
      addLine({
        type: "output",
        content: "✅ Message Summary:",
      });
      addLine({
        type: "output",
        content: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
      });
      addLine({
        type: "output",
        content: `Name: ${flowData.name}`,
      });
      addLine({
        type: "output",
        content: `Email: ${flowData.email}`,
      });
      addLine({
        type: "output",
        content: `Message: ${input}`,
      });
      addLine({
        type: "output",
        content: "",
      });
      addLine({
        type: "output",
        content: "✨ Message sent successfully! I'll get back to you soon.",
      });

      // Reset flow
      setFlowState("idle");
      setFlowData({});
    }
  };

  const handleEstimationFlow = (input: string) => {
    if (input === "cancel" || input === "exit") {
      addLine({
        type: "output",
        content: "Estimation cancelled.",
      });
      setFlowState("idle");
      setFlowData({});
      return;
    }

    if (!flowData.name) {
      setFlowData({ ...flowData, name: input });
      addLine({
        type: "prompt",
        content: "Enter your email:",
      });
    } else if (!flowData.email) {
      // Basic email validation
      if (!input.includes("@")) {
        addLine({
          type: "error",
          content: "Please enter a valid email address.",
        });
        addLine({
          type: "prompt",
          content: "Enter your email:",
        });
        return;
      }
      setFlowData({ ...flowData, email: input });
      addLine({
        type: "output",
        content: "",
      });
      addLine({
        type: "output",
        content: "Select project type:",
      });
      addLine({
        type: "output",
        content: "  1. Website",
      });
      addLine({
        type: "output",
        content: "  2. Web Application",
      });
      addLine({
        type: "output",
        content: "  3. Mobile App",
      });
      addLine({
        type: "output",
        content: "  4. E-commerce",
      });
      addLine({
        type: "output",
        content: "  5. Other",
      });
      addLine({
        type: "prompt",
        content: "Enter your choice (1-5):",
      });
    } else if (!flowData.projectType) {
      const projectTypes: { [key: string]: string } = {
        "1": "Website",
        "2": "Web Application",
        "3": "Mobile App",
        "4": "E-commerce",
        "5": "Other",
      };

      if (projectTypes[input]) {
        setFlowData({ ...flowData, projectType: projectTypes[input] });
        addLine({
          type: "output",
          content: "",
        });
        addLine({
          type: "output",
          content: "Select your budget range:",
        });
        addLine({
          type: "output",
          content: "  1. $1,000 - $5,000",
        });
        addLine({
          type: "output",
          content: "  2. $5,000 - $10,000",
        });
        addLine({
          type: "output",
          content: "  3. $10,000 - $25,000",
        });
        addLine({
          type: "output",
          content: "  4. $25,000+",
        });
        addLine({
          type: "prompt",
          content: "Enter your choice (1-4):",
        });
      } else {
        addLine({
          type: "error",
          content: "Invalid choice. Please enter a number between 1 and 5.",
        });
        addLine({
          type: "prompt",
          content: "Enter your choice (1-5):",
        });
      }
    } else if (!flowData.budget) {
      const budgetRanges: { [key: string]: string } = {
        "1": "$1,000 - $5,000",
        "2": "$5,000 - $10,000",
        "3": "$10,000 - $25,000",
        "4": "$25,000+",
      };

      if (budgetRanges[input]) {
        setFlowData({ ...flowData, budget: budgetRanges[input] });

        // Display summary
        addLine({
          type: "output",
          content: "",
        });
        addLine({
          type: "output",
          content: "✅ Estimation Request Summary:",
        });
        addLine({
          type: "output",
          content: "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
        });
        addLine({
          type: "output",
          content: `Name: ${flowData.name}`,
        });
        addLine({
          type: "output",
          content: `Email: ${flowData.email}`,
        });
        addLine({
          type: "output",
          content: `Project Type: ${flowData.projectType}`,
        });
        addLine({
          type: "output",
          content: `Budget Range: ${budgetRanges[input]}`,
        });
        addLine({
          type: "output",
          content: "",
        });
        addLine({
          type: "output",
          content:
            "✨ Estimation request submitted! I'll prepare a detailed proposal for you.",
        });

        // Reset flow
        setFlowState("idle");
        setFlowData({});
      } else {
        addLine({
          type: "error",
          content: "Invalid choice. Please enter a number between 1 and 4.",
        });
        addLine({
          type: "prompt",
          content: "Enter your choice (1-4):",
        });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentInput.trim()) {
      handleCommand(currentInput);
      setCurrentInput("");
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="w-full terminal max-w-4xl mx-auto bg-[#1e1e1e] rounded-lg overflow-hidden shadow-2xl font-mono"
      style={{ minHeight: "500px" }}
    >
      {/* Mac-style window controls */}
      <div className="bg-[#323232] px-4 py-3 flex items-center border-b border-bg-main ">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex-1 text-center text-gradient text-sm">
          portfolio@terminal ~ %
        </div>
      </div>

      {/* Terminal content */}
      <div
        ref={terminalRef}
        className="p-4 h-125 overflow-y-auto cursor-text"
        onClick={handleTerminalClick}
      >
        {lines.map((line, index) => (
          <div
            key={index}
            className={`mb-1 ${
              line.type === "command"
                ? "text-[#4af626]"
                : line.type === "error"
                  ? "text-[#ff5f56]"
                  : line.type === "prompt"
                    ? "text-[#ffbd2e] font-semibold"
                    : "text-[#d4d4d4]"
            }`}
          >
            {line.content}
          </div>
        ))}

        {/* Input line */}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-[#4af626] mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            className="flex-1 bg-transparent text-[#d4d4d4] outline-none border-none"
            autoFocus
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
}

export default CustomTerminal;
