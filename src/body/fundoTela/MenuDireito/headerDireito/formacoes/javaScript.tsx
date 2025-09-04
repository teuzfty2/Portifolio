



export default function JavaScript() {



    return (
        <div>
            <div className="mb-6 text-[#ffff] font-bold font-sans text-2xl">
                Formações
            </div>
            <section id="formacoes" className="mb-16 mt-10 scroll-mt-2 md:mb-24 lg:mb-6 lg:scroll-mt-24 hover:shadow-lg w-full group h-full p-4 hover:bg-slate-100/5 backdrop-blur-md transition-colors duration-300 group rounded-lg select-none" arial-label="Formações">
                <div className="flex gap-6">
                    {/* Ano */}
                    <div className="flex-shrink-0">
                        <span><img src="/src/imagem/javaScript.png" alt="JavaScript" className="h-26 w-26 rounded" /></span>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 flex flex-col gap-2">
                        <h2 className="font-bold text-lg group-hover:text-[#57d9cc]">
                            JavaScript — Curso em Video
                        </h2>

                        <p className="mt-2 text-sm leading-normal text-[#8ea1bf] mb-2">
                            Possuo experiência com JavaScript, desenvolvendo aplicações voltadas à interação com o usuário, implementação de boas práticas de usabilidade e performance no front-end.
                        </p>

                    </div>
                </div>
            </section>
        </div>
    )
}