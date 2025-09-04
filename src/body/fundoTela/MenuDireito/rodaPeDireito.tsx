import { motion } from "framer-motion"

export default function RodaPeDireito(){

    return (
        <div className="flex justify-center">
             {/* Rodapé */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94], // ease-out suave (custom bezier)
            type: "tween", // evita "spring" que pode travar se não bem configurado
          }}
        >
          <p className="p-5 text-[#8ea1bf] mt-24 select-none pointer-events-none">
            © 2025 Matheus Filipe. Todos os direitos reservados.
          </p>
        </motion.div>
        </div>
    )
}