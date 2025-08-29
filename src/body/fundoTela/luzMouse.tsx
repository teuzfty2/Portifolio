import { useEffect, useRef } from "react";

export default function LuzMouse() {
  const luzRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (luzRef.current) {
        const rect = luzRef.current.getBoundingClientRect();
        const offsetX = rect.width / 2;
        const offsetY = rect.height / 2;

        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        luzRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-screen">
      <div
        ref={luzRef}
        className="absolute w-[400px] h-[400px] bg-[#3151a1b6] opacity-10 rounded-full blur-[80px]"
        style={{ transform: "translate(0px, 0px)" }}
      />
    </div>
  );
}
