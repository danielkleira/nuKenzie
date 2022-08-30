import "./style.css";

function Card({transaction,transactionRemover}){
    return(
        <div className="Card">
            {transaction.tipo==="entrada" ?(
                <div className="entradaCard">
                    <div className="tipo">
                        <div className="descricao">{transaction.descricao}</div>
                        <div className="Tipo">{transaction.tipo}</div>


                    </div>

                    <div className="valoer">
                        {Number(transaction.valor).toLocaleString('pt-BR',{
                            style:'currency',//definir funcao remover no app
                            currency:'BRL',
                        })}
                    <button className='lixeira' onClick={()=> transactionRemover(transaction)}/>

                    </div>
                </div>
            ):(
                <div className="saidaCard">
                    <div className="tipo">
                        <div className="descricao">{transaction.descricao}</div>
                        <div className="Tipo">{transaction.tipo}</div>


                    </div>

                    <div className="valoer">
                        {Number(transaction.valor).toLocaleString('pt-BR',{
                            style:'currency',
                            currency:'BRL',
                        })}
                    <button className='lixeira' onClick={()=> transactionRemover(transaction)}/>

                    </div>

                </div>
            )
            }
        </div>
    )
}

export default Card