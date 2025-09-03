import NavLink from "./headerEsquerdo/navLink";
import RodaPe from "./RodaPe";

export default function MenuEsquerdo() {
  return (
    <div className="flex flex-col h-screen">
      {/* Bloco superior */}
      <div>
        <div className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Matheus Filipe
        </div>
        <span className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Desenvolvedor Junior
        </span>
        <p className="mt-4 max-w-xs leading-normal text-[#8b9aad]">
          Transformo ideias em interfaces web simples, acessíveis e visualmente consistentes.
        </p>
      </div>

      {/* Menu de links */}
      <div className="mt-8 sm:mt-16 flex flex-col gap-2">
        <NavLink text="Sobre" targetId="sobre" />
        <NavLink text="Experiência" targetId="experiencia" />
        <NavLink text="Formações" targetId="formacoes" />
      </div>

      {/* Rodapé */}
      <div className="mt-4 sm:mt-auto">
        <RodaPe />
      </div>
    </div>
  );
}
