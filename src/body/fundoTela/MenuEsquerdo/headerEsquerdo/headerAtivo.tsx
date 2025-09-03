import { useEffect, useState } from "react";

interface HeaderAtivoProps {
  sections: { id: string; title: string }[];
}

export default function HeaderAtivo({ sections }: HeaderAtivoProps) {
  const [current, setCurrent] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta se é mobile
    const mql = window.matchMedia("(hover: none) and (pointer: coarse)");
    setIsMobile(mql.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handleChange);

    return () => mql.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            setCurrent(section.title);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // inicial

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, isMobile]);

  if (!isMobile || !current) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0f1729] text-white text-center py-2 z-50 shadow-md">
      <h2 className="text-lg font-bold">{current}</h2>
    </div>
  );
}
