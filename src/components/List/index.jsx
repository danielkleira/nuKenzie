import Card from "../Card"
import './style.css'
import NoCard from '../../assests/NoCard.png'

function List({listTransactions,remover}){
    return(
        <>
        
        {listTransactions.length===0 ?(
            <>
            <h2 className="semTitulo">Você ainda não possui nenhum lançamento</h2>
            <img className='image' src={NoCard} alt="NoCard"></img>
            </>
            
        ):(
            <ul className="card">
                {listTransactions.map((transactions,index)=>(
                    <Card 
                    transaction={transactions}
                    transactionRemover={remover} //funcao de remover que vem do app
                    key={index}
                    />
                ))}

            </ul>
        )}
        
        </>
    )
}

export default List