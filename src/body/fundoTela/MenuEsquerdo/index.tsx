import NavLink from "./headerEsquerdo/navLink";
import RodaPe from "./RodaPe";

export default function MenuEsquerdo() {
  return (
    <div className="flex flex-col h-screen">
      {/* Bloco superior */}
      <div className="">
        <div className="text-7xl mb-2 font-bold tracking-tight text-slate-200 sm:text-5xl">
          Matheus Filipe
        </div>
        <span className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
         Software Developer (Júnior)
        </span>
        <p className="mt-4 text-md max-w-xs leading-normal text-[#8b9aad]">
          Sou desenvolvedor júnior em início de carreira, focado em aprender e evoluir em tecnologias front-end e back-end, com experiência em: React | Node.js | JavaScript | TypeScript | HTML&CSS | Tailwind.
        </p>
      </div>

      {/* Menu de links */}
      <div className="mt-8 sm:mt-16 flex flex-col">
        <NavLink text="Sobre" targetId="sobre" />
        <NavLink text="Experiência" targetId="experiencia" />
        <NavLink text="Formações" targetId="formacoes" />
        <NavLink text="Projetos" targetId="projetos"/>
      </div>

      {/* Rodapé */}
      <div className="mt-4 sm:mt-auto">
        <RodaPe />
      </div>
    </div>
  );
}
