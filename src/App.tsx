import "./App.css";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { Loader } from "./components/ui/Loader";
import { CustomCursor } from "./components/ui/CustomCursor";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has visited in this session
    (() => {
      const hasVisited = sessionStorage.getItem("hasVisited");

      if (hasVisited) {
        setIsLoading(false);
      } else {
        // If not visited, keep loading (Loader handles the time/logic)
        // When loader finishes, it calls onFinish
      }
    })();
  }, []);

  const handleLoadFinish = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasVisited", "true");
  };

  return (
    <div className="App relative w-full h-screen">
      {isLoading ? (
        <Loader onFinish={handleLoadFinish} />
      ) : (
        <>
          {/* Grid pattern overlay */}
          {/* <div
            className="fixed inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          /> */}
          <CustomCursor />
          <Navbar />
          <Hero />
          <About />
        </>
      )}
    </div>
  );
}

export default App;
