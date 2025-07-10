import { useEffect, useRef } from "react";
//Luz que segue o mouse
export default function LuzMouse() {
  const luzRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (luzRef.current) {
        const x = e.clientX - 300;
        const y = e.clientY - 300;
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
        className="absolute w-[600px] h-[600px] bg-[#3151a1] opacity-20 rounded-full blur-[150px]"
        style={{
          transform: "translate(0px, 0px)",
        }}
      />
    </div>
  );
}

