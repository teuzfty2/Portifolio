import { div } from "framer-motion/client";
import LuzMouse from "./planoFundo";

export default function CorpoPai() {
  // Plano de fundo
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-b from-[#0f1729] to-[#0f1729]  text-white">
      <LuzMouse />
      {/* Titulo nome esquerda*/}
      <div className="flex rounded-lg w-full justify-center items-center  h-full  bg-gray-700 border border-none">
        <h1 className="text-4xl font-bold tracking-tight text-slate-200">
          Matheus Filipe
        </h1>
      </div>
      {/* Titulo nome direita*/}
      <div className="flex justify-center w-full  bg-[#0f1729] border border-none">
        <h1>Explicações</h1>
      </div>
    </div>
  );
}
