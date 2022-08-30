import './style.css'

function TotalMoney({listaTransacoes,listaNovasTransacoes}){

    let total;

    if(listaNovasTransacoes.length>0){
        total=listaTransacoes.reduce((acumulador,atual)=>{
            return (acumulador+= atual.tipo ==='entrada' ? atual.valor : -atual.valor)},0
        );

    } else{
        total=listaTransacoes.reduce((acumulador,atual)=>{
            if(atual.tipo==='entrada'){
                return acumulador+=atual.valor
            }
            else{
                return acumulador-=atual.valor
            }
        },0
        );
    }

    return(
        <div className="dinheiro">
            <p  className="dinheiroTotal"> Valor Total:</p>
            <span>
                {total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
            </span>
        </div>
    )
}

export default TotalMoney