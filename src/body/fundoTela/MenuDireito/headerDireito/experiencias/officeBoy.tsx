export default function OfficeBoy() {
    return (
        <section
            id="experiencia"
            className="mb-16 mt-10 scroll-mt-2 md:mb-24 lg:mb-6 lg:scroll-mt-24 hover:shadow-lg"
            aria-label="Experiência profissional"
        >
            <a
                href="https://www.instagram.com/oticasreal.oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full p-4 hover:bg-slate-100/5 backdrop-blur-md transition-colors duration-300 group rounded-lg select-none"
            >
                <div className="flex gap-6">
                    {/* Ano */}
                    <div className="flex-shrink-0">
                        <span className="text-[#8ea1bf]">2019 — 2020</span>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 flex flex-col gap-2">
                        <h2 className="font-bold text-lg group-hover:text-[#57d9cc]">
                            Office Boy, Óticas Real
                        </h2>

                        <p className="text-sm leading-normal text-[#8ea1bf] mb-2">
                            <br />
                            Desempenhava atividades relacionadas ao suporte operacional e administrativo, incluindo entrega e coleta de documentos, além de auxiliar na organização de arquivos e no controle de correspondências.
                            <br />
                            Além das atividades internas, também atuava no atendimento ao público, recepcionando clientes, fornecendo informações sobre produtos e serviços, esclarecendo dúvidas e garantindo uma experiência positiva e satisfatória.

                        </p>

                        {/* Tecnologias */}
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-[#122e47] text-[#57d9cc] px-2 py-1 rounded-3xl">
                               Atendimento ao público
                            </span>
                            <span className="bg-[#122e47] text-[#57d9cc] px-2 py-1 rounded-3xl">
                                Suporte à equipe
                            </span>
                            <span className="bg-[#122e47] text-[#57d9cc] px-2 py-1 rounded-3xl">
                              Logística
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </section>
    );
}
