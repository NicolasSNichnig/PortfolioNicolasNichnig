import Link from 'next/link';

import LinkedInIcon from "../public/LinkedInIcon.jsx"
import InstagramIcon from "../public/InstagramIcon.jsx"
import GitHubIconm from "../public/GitHubIcon.jsx"

const SobreMim = () => {

    return(
    <div className="flex flex-col items-center justify-center animate-fade animate-once animate-ease-out animate-alternate">
      <div className="flex wrap-normal m-5 p-2 text-left flex-col md:flex-row"> 
        <img className="size-60 self-center mr-0 md:mr-5 rounded-2xl mb-5 md:mb-0" src="/fotoNicolas.jpg"></img>
        <div className="flex flex-col mt-0 md:mt-10 text-center md:text-left">
            <span className="mb-3 text-4xl" >Nicolas Nichnig</span>
            <span className="">Sou Desenvolvedor Fullstack Júnior em busca da primeira oportunidade no TI. Tenho foco em Front-end com tailwind. Estou sempre evoluindo e pronto para aprender mais.</span>
        </div>        
      </div>

      <div className="flex mb-5 place-content-around w-full">
          <a href="https://www.linkedin.com/in/nicolas-nichnig-b51601286/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon size={40} className="text-[#e8f1f2] hover:text-[#006494] hover:scale-105 transition-colors duration-300"/>
          </a>
          <a href="https://www.instagram.com/nicolas_nichnig/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon size={40} className="text-[#e8f1f2] hover:text-[#006494] hover:scale-105 transition-colors duration-300"/>
          </a>
          <a href="https://github.com/NicolasSNichnig" target="_blank" rel="noopener noreferrer">
            <GitHubIconm size={40} className="text-[#e8f1f2] hover:text-[#006494] hover:scale-105 transition-colors duration-300"/>       
          </a>
      </div>
      <Link href="/CV Nicolas Nichnig.pdf" download>
        <button className="text-4xl bg-[#0c1527]/65 mt-5 mb-5 p-2 rounded-[4px] hover:bg-[#006494]  hover:scale-105 transition-colors duration-300 cursor-pointer">Baixar CV</button>
      </Link>
    </div>
    )
}

export default SobreMim