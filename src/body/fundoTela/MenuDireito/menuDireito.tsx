//Componentes
import Sobre from "./headerDireito/sobre";
import Experiencia from "./headerDireito/experiencia";

const sections = [
    { id: "sobre", title: "Sobre" },
    { id: "experiencia", title: "Experiência" },
    { id: "projetos", title: "Projetos" },
    { id: "formacoes", title: "Formações" },
];

export default function MenuDireito() {


    return (

        <div>
            <div>
                <section id="sobre" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" arial-label="Sobre mim"> {/* <-- este ID será usado para rolar até aqui */}
                    <Sobre />
                </section>
            </div>

            <div>
                <section id="experiencia" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" arial-label="Experiência profissional">
                    <Experiencia/>
                </section>
            </div>

            <div>
                <section id="formacoes" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" arial-label="Formações">

                </section>
            </div>
        </div>



    );


}