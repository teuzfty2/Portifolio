// Ícones
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function RodaPe() {
    return (
        <div className="flex flex-col h-full">
             <div className="flex-grow">
                <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                    <li className="mr-5 shrink-0 text-2xl">
                        <a
                            href="https://github.com/teuzfty2"
                            title="GitHub"
                            aria-label="GitHub (abre em nova aba)"
                            rel="noreferrer noopener"
                            target="_blank"
                            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                        >
                            <FaGithub />

                        </a>
                    </li>
                    <li className="mr-5 shrink-0 text-2xl">
                        <a
                            href="https://www.linkedin.com/in/matheus-filipe-rodrigues-7724b0261/"
                            title="LinkedIn"
                            aria-label="LinkedIn (abre em nova aba)"
                            rel="noreferrer noopener"
                            target="_blank"
                            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                        >
                            <FaLinkedin />

                        </a>
                    </li>
                    <li className="mr-5 shrink-0 text-2xl">
                        <a
                            href="https://www.instagram.com/teuzfty/"
                            title="Instagram"
                            aria-label="Instagram (abre em nova aba)"
                            rel="noreferrer noopener"
                            target="_blank"
                            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                        >
                            <FaInstagram />

                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
