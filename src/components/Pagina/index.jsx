import NuKenzie from "../../assests/NuKenzie.png"
import Group277 from "../../assests/Group277.png"
import './style.css'

function Pagina({setPagina}){

    return(
        <div className="pagina">
            <div className="informacoes">
                <img src={NuKenzie} alt='Kenzie'/>
                <h1>Centralize o controle de suas finanças</h1>
                <span>De forma rápida e segura</span>
                <button className="iniciar" onClick={()=> setPagina(true)}>
                    Iniciar
                </button>
            </div>
            <div className="itemFigura">
                <figure>
                <img className="imagemLado"  alt="fundo" src={Group277}></img>
                </figure>
            </div>
        </div>
    )
}

export default Pagina