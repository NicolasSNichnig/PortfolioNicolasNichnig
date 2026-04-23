import ListaSkills from "./tecnologias"
import LinguagensLista from "./idiomas"

const HabilidadesDiv = () => {
    return(
        <div className="flex flex-col items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8 animate-fade animate-once animate-ease-out animate-alternate w-full">
            <ListaSkills/>
            <LinguagensLista/>
        </div>
    )
}

export default HabilidadesDiv