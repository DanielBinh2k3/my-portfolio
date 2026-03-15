import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef({ value: 0 });

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(counterRef.current, {
      value: 100,
      duration: 2.4,
      ease: "power1.inOut",
      onUpdate() {
        setProgress(Math.round(counterRef.current.value));
      },
    }).to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.35,
        ease: "power3.in",
        onComplete,
      },
      "+=0.15"
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#010103" }}
    >
      {/* Giant background watermark number */}
      <span
        className="pointer-events-none absolute select-none font-black text-white"
        style={{
          fontSize: "clamp(160px, 30vw, 360px)",
          lineHeight: 1,
          opacity: 0.03,
          letterSpacing: "-0.05em",
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        {progress}
      </span>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Name / brand */}
        <p
          className="font-generalsans text-xs tracking-[0.5em] uppercase"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          Gia Bình · Portfolio
        </p>

        {/* Large percentage counter */}
        <div className="flex items-end gap-1 leading-none">
          <span
            className="font-black tabular-nums text-white font-generalsans"
            style={{ fontSize: "clamp(72px, 12vw, 120px)", lineHeight: 1 }}
          >
            {progress}
          </span>
          <span
            className="font-black text-white font-generalsans pb-2"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              opacity: 0.4,
            }}
          >
            %
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="relative overflow-hidden rounded-full"
          style={{ width: "clamp(200px, 35vw, 320px)", height: "1px", background: "rgba(255,255,255,0.08)" }}
        >
          <div
            ref={barRef}
            className="absolute inset-y-0 left-0 rounded-full bg-white"
            style={{ width: `${progress}%`, transition: "width 60ms linear" }}
          />
        </div>

        {/* Loading label */}
        <p
          className="font-generalsans text-xs tracking-[0.35em] uppercase"
          style={{ color: "rgba(255,255,255,0.2)" }}
        >
          Loading
        </p>
      </div>
    </div>
  );
};
