



export default function HtmlCss() {



    return (
        <div>
            <section id="formacoes" className="mb-16 mt-10 scroll-mt-2 md:mb-24 lg:mb-6 lg:scroll-mt-24 hover:shadow-lg w-full group h-full p-4 hover:bg-slate-100/5 backdrop-blur-md transition-colors duration-300 group rounded-lg select-none" arial-label="Formações">
                <div className="flex gap-6">
                    {/* Ano */}
                    <div className="flex-shrink-0">
                        <span><img src="/src/imagem/htmlcsss.png" alt="HTMLCSS" className="h-25 w-25 rounded" /></span>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 flex flex-col gap-2">
                        <h2 className="font-bold text-lg group-hover:text-[#57d9cc]">
                            HTML & CSS — Curso em Video
                        </h2>

                        <p className="mt-2 text-sm leading-normal text-[#8ea1bf] mb-2">
                           Possuo experiência com HTML e CSS, desenvolvendo interfaces estruturadas e responsivas, aplicando boas práticas de acessibilidade, usabilidade e design para proporcionar uma experiência visual consistente e intuitiva
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}