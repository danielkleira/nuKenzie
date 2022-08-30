import BlackKenzie from "../../assests/NuKenzieBlack.png"
import './style.css'

function Header({setPagina}){
    return(
    <header className="header">
        <figure>
        <img src={BlackKenzie} alt='Logo'/>
        </figure>
    <button className="inicio" onClick={()=> setPagina(false)}>
        Início
    </button>
    </header>
    )
}

export default Header