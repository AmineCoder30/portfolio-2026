import "./App.css";


import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import Services from "./components/layout/Services";
import Projects from "./components/layout/Projects";
import Blog from "./components/layout/Blog";
import Contact from "./components/layout/Contact";

import { useEffect, useState } from "react";
import { Loader } from "./components/ui/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has visited in this session
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setIsLoading(false);
    } else {
      // If not visited, keep loading (Loader handles the time/logic)
      // When loader finishes, it calls onFinish
    }
  }, []);

  const handleLoadFinish = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasVisited", "true");
  };

  return (
    <div className="App relative w-full min-h-screen">
      {isLoading ? (
        <Loader onFinish={handleLoadFinish} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Services />
          <Projects />
          <Blog />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
