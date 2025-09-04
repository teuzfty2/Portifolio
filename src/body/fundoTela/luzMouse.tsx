import { useEffect, useRef, useState } from "react";

interface LuzMouseProps {
  className?: string;
}

export default function LuzMouse({ className }: LuzMouseProps) {
  const luzRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const checkZoom = () => {
      // Usando devicePixelRatio para detectar zoom
      const zoom = Math.round(window.devicePixelRatio * 100);

      if (zoom >= 175) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    checkZoom();
    window.addEventListener("resize", checkZoom);
    return () => window.removeEventListener("resize", checkZoom);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (luzRef.current && visible) {
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
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-screen ${className || ""
        }`}
    >
      <div
        ref={luzRef}
        className="absolute w-[400px] h-[400px] bg-[#3151a1b6] opacity-10 rounded-full blur-[80px]"
        style={{ transform: "translate(0px, 0px)" }}
      />
    </div>
  );
}
