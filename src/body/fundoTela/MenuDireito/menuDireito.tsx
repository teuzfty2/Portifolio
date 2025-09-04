//Componentes
import Sobre from "./sobre.tsx";
import Experiencia from "./headerDireito/experiencias/desenvolvedor.tsx";
import Estoquista from "./headerDireito/experiencias/estoquista.tsx";
import OfficeBoy from "./headerDireito/experiencias/officeBoy.tsx";
import JavaScript from "./headerDireito/formacoes/javaScript.tsx";
import HtmlCss from "./headerDireito/formacoes/htmlCss.tsx";
import Git from "./headerDireito/formacoes/git.tsx";
import NodeJS from "./headerDireito/formacoes/node.tsx";
import Projetos from "./headerDireito/projetos/projetos.tsx";
import RodaPeDireito from "./rodaPeDireito.tsx";

const sections = [
    { id: "sobre", title: "Sobre" },
    { id: "experiencia", title: "Experiência" },
    { id: "projetos", title: "Projetos" },
    { id: "formacoes", title: "Formações" },
];

export default function MenuDireito() {


    return (

        <div className="flex-col">
            <div>
                <section id="sobre" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" arial-label="Sobre mim"> {/* <-- este ID será usado para rolar até aqui */}
                    <Sobre />
                </section>
            </div>

            <div>
                <section id="experiencia" className="mb-10 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" arial-label="Experiência profissional">
                    <Experiencia/>
                    <Estoquista/>
                    <OfficeBoy/>
                </section>
            </div>

            <div>
                <section id="formacoes" className="mb-10 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" arial-label="Formações">
                    <JavaScript/>
                    <HtmlCss/>
                    <Git/>
                    <NodeJS/>               
                </section>
            </div>
            <div>
                <section id="projetos" className="mb-10 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Projetos"> 
                    <Projetos/>
                </section>
            </div>

            <div id="projetos" className="mb-10 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Projetos">
                <RodaPeDireito/>
            </div>
        </div>



    );


}