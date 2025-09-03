import { useEffect, useState } from "react";

interface NavLinkProps {
  text: string;
  targetId: string;
}

export default function NavLink({ text, targetId }: NavLinkProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(targetId);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Se a seção estiver visível na tela
        setIsActive(rect.top <= 100 && rect.bottom > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // verifica ao montar

    return () => window.removeEventListener("scroll", handleScroll);
  }, [targetId]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className="group flex items-center py-3 w-max"
    >
      {/* Barra animada */}
      <span
        className={`
          nav-indicator mr-4 h-px w-8 transition-all duration-300
          ${isActive ? "w-16 bg-slate-200" : "bg-slate-600"}
          group-hover:w-16 group-hover:bg-slate-200
        `}
      ></span>

      {/* Texto animado */}
      <span
        className={`
          nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300
          ${isActive ? "text-slate-200" : "text-slate-500"}
          group-hover:text-slate-200
        `}
      >
        {text}
      </span>
    </a>
  );
}
