import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [displayText, setDisplayText] = useState("LOADING 0%");
  const [showCursor, setShowCursor] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef({ value: 0 });

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(counterRef.current, {
      value: 100,
      duration: 3,
      ease: "power1.inOut",
      onUpdate() {
        const val = Math.round(counterRef.current.value);
        setDisplayText(`LOADING ${val}%`);
      },
    })
      .to({}, { duration: 0.2, onComplete: () => setShowCursor(true) }) // Show block cursor
      .to({}, {
        duration: 0.6,
        ease: "none",
        onUpdate: function () {
          const fullText = "LOADING 100%";
          const p = (this as any).progress();
          const len = Math.max(0, Math.floor(fullText.length * (1 - p)));
          setDisplayText(fullText.substring(0, len));
        },
      })
      .to({}, { duration: 0.2 }) // Pause
      .to({}, {
        duration: 0.6,
        ease: "none",
        onUpdate: function () {
          const w = "WELCOME";
          const len = Math.floor((this as any).progress() * w.length);
          setDisplayText(w.substring(0, len));
        },
      })
      .to({}, { duration: 0.6 }) // Pause to show WELCOME
      .to(".text-cursor-container", {
        opacity: 0,
        duration: 0.1,
      }) // Fade out text quickly to avoid scaling it up
      .to([".top-logo", ".bg-text"], {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      }, "<") // Fade out other elements at the same time
      // Now scale the pill to cover the screen creating the black transition
      .to(pillRef.current, {
        scale: 150, // Massive scale to cover screen
        duration: 1.2,
        ease: "power2.inOut",
      })
      // The overlay background will be covered by the black pill.
      // Now dissolve the whole layer, revealing the website underneath seamlessly
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
          onComplete,
        },
        "+=0.1"
      );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#EAE8EC]"
    >
      <div className="bg-text absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="whitespace-nowrap font-black tracking-tighter text-[#1A1A1A] opacity-10 select-none"
          style={{ fontSize: "16vw" }}
        >
          AI ENGINEER
        </span>
      </div>

      <div
        ref={pillRef}
        className="relative z-10 flex h-[60px] w-[260px] md:h-[80px] md:w-[320px] items-center justify-center rounded-[100px] bg-[#050505] shadow-[0_0_40px_rgba(100,50,255,0.4)]"
      >
        <div className="absolute inset-0 rounded-[100px] border border-white/10" />
        <span
          className="text-cursor-container text-white font-generalsans text-sm md:text-lg tracking-[0.4em] font-medium flex items-center"
        >
          {displayText}
          {/* Block cursor */}
          <span
            className={`inline-block w-[10px] h-[16px] md:w-[14px] md:h-[20px] bg-white ml-2 ${showCursor ? 'opacity-100 animate-pulse' : 'opacity-0'}`}
          />
        </span>
      </div>

      {/* Top left Logo */}
      <div className="top-logo absolute top-8 left-8">
        <img src="/logo_D_B.png" alt="Gia Binh Logo" className="h-10 w-auto object-contain" />
      </div>
    </div>
  );
};

