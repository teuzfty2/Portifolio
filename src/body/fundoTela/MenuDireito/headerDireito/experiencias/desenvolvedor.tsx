export default function Experiencia() {
  return (
    <section
      id="experiencia"
      className="mb-16 mt-10 scroll-mt-2 md:mb-24 lg:mb-6 lg:scroll-mt-24 hover:shadow-lg"
      aria-label="Experiência profissional"
    >
        <div className="mb-6 text-[#ffff] font-bold font-sans text-2xl">
          Experiência
        </div>
      <a
        href="https://watools.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full p-4 hover:bg-slate-100/5 backdrop-blur-md transition-colors duration-300 group rounded-lg select-none"
      >
        <div className="flex gap-6">
          {/* Ano */}
          <div className="flex-shrink-0">
            <span className="text-[#8ea1bf]">2025 — PRESENTE</span>
          </div>

          {/* Conteúdo */}
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="font-bold text-lg group-hover:text-[#57d9cc]">
              Desenvolvedor Junior, waTools
            </h2>

            <p className="mt-2 text-sm leading-normal text-[#8ea1bf] mb-2">
              Desenvolver e aplicar estilizações em páginas web para melhorar a
              experiência do usuário.
              <br />
              Colaborar de forma próxima com equipes multifuncionais, incluindo
              desenvolvedores sênior e gerentes, para implementar e promover as
              melhores práticas de acessibilidade web.
            </p>

            {/* Tecnologias */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#122e47] text-[#57d9cc] px-2 py-1 rounded-3xl">
                JavaScript
              </span>
              <span className="bg-[#122e47] text-[#57d9cc] px-2 py-1 rounded-3xl">
                TypeScript
              </span>
              <span className="bg-[#122e47] text-[#57d9cc] px-2 py-1 rounded-3xl">
                React
              </span>
            </div>
          </div>
        </div>
      </a>
    </section>
  );
}
