export default function Projetos() {
    return (
        <section
            id="experiencia"
            className="mb-16 mt-10 scroll-mt-2 md:mb-24 lg:mb-6 lg:scroll-mt-24 hover:shadow-lg"
            aria-label="Experiência profissional"
        >
            <div className="mb-6 text-[#ffff] font-bold font-sans text-2xl">
                Projetos
            </div>
            <a
                href="https://chromewebstore.google.com/detail/extract-leads/bhkibpbnfknollmiebgefgadfkjhnaph?hl=pt-BR&utm_source=ext_sidebar"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full p-4 hover:bg-slate-100/5 backdrop-blur-md transition-colors duration-300 group rounded-lg select-none"
            >
                <div className="flex gap-6">

                    {/* Conteúdo */}
                    <div className="flex-1 flex flex-col gap-2">

                        <span><img src="/src/imagem/logo.png" alt="Logo" className="flex justify-center" /></span>

                        <p className="mt-2 text-sm leading-normal text-[#8ea1bf] mb-2">
                            Fui responsável pelo desenvolvimento de novas funcionalidades e aprimoramentos visuais da plataforma, incluindo a recriação completa da página de login, com atualização de layout, paleta de cores, componentes e fluxos de interação, garantindo uma experiência mais moderna, intuitiva e eficiente para os usuários.
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
                            <span className="bg-[#122e47] text-[#57d9cc] px-2 py-1 rounded-3xl">
                                HTML
                            </span>
                            <span className="bg-[#122e47] text-[#57d9cc] px-2 py-1 rounded-3xl">
                                Tailwind
                            </span>
                            <span className="bg-[#122e47] text-[#57d9cc] px-2 py-1 rounded-3xl">
                                Css
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </section>
    );
}
