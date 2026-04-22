import { useState } from "react"

import DownSVG from "../public/downSVG.jsx"
import RightSVG from "../public/RightSVG.jsx"

const LinguagensLista = () => {
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(){
        setIsOpen(!isOpen)
    }

    return(
        <div className="flex flex-col justify-center items-center w-full">
            <button onClick={handleClick} className={isOpen ? "flex justify-between text-xl md:text-3xl w-full text-center mb-5 p-2 rounded-[4px] bg-[#006494] transition-colors duration-300 cursor-pointer" : "flex justify-between text-xl md:text-3xl w-full text-center mb-5 bg-[#0c1527]/65 p-2 rounded-[4px] hover:bg-[#006494] transition-colors duration-300 cursor-pointer"}>
            <span>Linguas</span>
            
            <div className="flex-1"></div>
                
                {!isOpen && (
                    <RightSVG/>
                )} 
                
                {isOpen && (
                    <DownSVG className="animate-fade animate-once animate-ease-out animate-alternate"/>
                )} 
            </button>

            {isOpen && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5 w-full rounded-md text-base md:text-[20px] animate-fade-down animate-once animate-ease-out animate-fill-forwards">
                    <div className="flex flex-col items-center text-center p-3 rounded-[12px] bg-[#0c1527]/40 hover:bg-[#0c1527]/60 hover:scale-105 transition-colors duration-300">
                        <span>Inglês - C1</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-3 rounded-[12px] bg-[#0c1527]/40 hover:bg-[#0c1527]/60 hover:scale-105 transition-colors duration-300">
                        <span>Português - Nativo</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default LinguagensLista