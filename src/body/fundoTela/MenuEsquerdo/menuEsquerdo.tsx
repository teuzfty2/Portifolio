import { div } from "framer-motion/client";

export default function MenuEsquerdo() {

    return (
        <div className="flex flex-col ">
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


    )
}

