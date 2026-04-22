import ListaSkills from "./listaSkills"
import LinguagensLista from "./linguagens"

const HabilidadesDiv = () => {
    return(
        <div className="flex flex-col items-center justify-center pt-0 pb-0 p-20 animate-fade animate-once animate-ease-out animate-alternate">
            <ListaSkills/>
            <LinguagensLista/>
        </div>
    )
}

export default HabilidadesDiv