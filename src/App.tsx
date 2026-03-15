import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import { LoadingScreen } from "./components/LoadingScreen";
import { About } from "./sections/About";
import { Clients } from "./sections/Clients";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";
import { Projects } from "./sections/Projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isLoading && mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { scale: 0.88, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.75, ease: "power3.out" }
      );
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}

      <main
        ref={mainRef}
        className="relative mx-auto max-w-7xl"
        style={{ opacity: 0 }}
      >
        <Navbar />

        <Hero />
        <About />
        <Projects />
        <Clients />
        <Experience />
        <Contact />

        <Footer />
      </main>
    </>
  );
}

export default App;
