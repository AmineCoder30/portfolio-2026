import { useEffect, useState } from "react";

export const Loader = ({ onFinish }: { onFinish: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500); // Wait a bit before unmounting
          return 100;
        }
        return prev + 2; // Adjust speed here
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-main backdrop-blur-3xl">
      {/* Bouncing Shapes */}
      <div className="flex gap-6 mb-12">
        <div className="w-8 h-8 bg-primary rounded-full border-3 border-black shadow-[4px_4px_0px_0px_#000000] animate-bounce [animation-delay:0ms]"></div>
        <div className="w-8 h-8 bg-secondary rotate-12 border-3 border-black shadow-[4px_4px_0px_0px_#000000] animate-bounce [animation-delay:150ms]"></div>
        <div className="w-8 h-8 bg-white border-3 border-black shadow-[4px_4px_0px_0px_#000000] animate-bounce [animation-delay:300ms]"></div>
      </div>

      {/* Loading Text */}
      <h2 className="text-4xl font-black uppercase tracking-widest text-text-main mb-8 animate-pulse">
        Loading...
      </h2>

      {/* Cartoon Progress Bar */}
      <div className="w-64 h-8 bg-white border-3 border-black rounded-full overflow-hidden shadow-[4px_4px_0px_0px_#000000]">
        <div
          className="h-full bg-primary border-r-3 border-black transition-all duration-75 ease-out"
          style={{ width: `${progress}%` }}
        >
          {/* Shine effect */}
          <div className="w-full h-full bg-white/20 -skew-x-12 translate-x-4"></div>
        </div>
      </div>

      <p className="mt-4 font-bold text-text-muted">{progress}%</p>
    </div>
  );
};
