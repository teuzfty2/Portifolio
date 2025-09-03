import { useEffect, useState } from "react";
import MenuDireito from "./MenuDireito/menuDireito";
import MenuEsquerdo from "./MenuEsquerdo";
import LuzMouse from "./LuzMouse";

export default function CorpoPai() {
  const [hasMouse, setHasMouse] = useState(false);

  useEffect(() => {
    // Detecta se há suporte a hover (mouse)
    const mql = window.matchMedia("(hover: hover)");
    setHasMouse(mql.matches);

    const handleChange = (e: MediaQueryListEvent) => setHasMouse(e.matches);
    mql.addEventListener("change", handleChange);

    return () => mql.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="flex min-h-screen w-full bg-gradient-to-b from-[#0f1729] to-[#0f1729] text-white">
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* LuzMouse só em dispositivos com mouse */}
          {hasMouse && <LuzMouse />}

          {/* Menu esquerdo */}
          <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <MenuEsquerdo />
          </div>

          {/* Conteúdo direito */}
          <div className="pt-24 lg:w-[52%] lg:py-24" id="content">
            <MenuDireito />
          </div>
        </div>
      </div>
    </div>
  );
}
