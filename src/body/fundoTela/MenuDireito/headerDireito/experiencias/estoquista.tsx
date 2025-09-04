export default function Estoquista() {
    return (
        <section
            id="experiencia"
            className="mb-16 mt-10 scroll-mt-2 md:mb-24 lg:mb-6 lg:scroll-mt-24 hover:shadow-lg"
            aria-label="Experiência profissional"
        >
            <a
                href="https://pmartinsautopecas.com.br/?pht=115271707942344951&utm_source=google&utm_medium=cpc&keyword=pereira%20martins&gad_source=1&gad_campaignid=20959288786&gbraid=0AAAAACAVBahw8XpHRXpFJHdYAhE34u9WN&gclid=Cj0KCQjw8eTFBhCXARIsAIkiuOziUBFeTUbIDGnU5Gp-_8O82mFSKX-GtJp5M4vYd9ySDQWMA_fisB0aAqwyEALw_wcB"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full p-4 hover:bg-slate-100/5 backdrop-blur-md transition-colors duration-300 group rounded-lg select-none"
            >
                
                <div className="flex gap-6">
                    {/* Ano */}
                    <div className="flex-shrink-0">
                        <span className="text-[#8ea1bf]">2021 — 2023</span>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 flex flex-col gap-2">
                        <h2 className="font-bold text-lg group-hover:text-[#57d9cc]">
                            Estoquista, Pereira Martins
                        </h2>

                        <p className="mt-2 text-sm leading-normal text-[#8ea1bf] mb-2">
                            Desempenhava atividades relacionadas à organização e controle de estoque, incluindo recebimento, conferência, armazenagem e separação de mercadorias, além do apoio às rotinas de inventário e logística.
                            <br />
                            Além das atividades de estoque, desempenhava atendimento ao público, oferecendo suporte direto a clientes e colaboradores, esclarecendo dúvidas, orientando sobre produtos e assegurando uma experiência positiva e satisfatória.
                        </p>

                        {/* Tecnologias */}
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-[#122e47] text-[#57d9cc] px-2 py-1 rounded-3xl">
                                Atendimento ao público
                            </span>
                            <span className="bg-[#122e47] text-[#57d9cc] px-2 py-1 rounded-3xl">
                                Organização
                            </span>
                            <span className="bg-[#122e47] text-[#57d9cc] px-2 py-1 rounded-3xl">
                                Suporte à equipe
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </section>
    );
}
