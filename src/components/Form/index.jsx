
import { useState } from "react";
import './style.css'

function Form({listTransactions,setListTransactions}){
    const [descricao,setDescricao]=useState('');
    const [tipo, setTipo]=useState('entrada');
    const [valor,setValor]=useState(0);

    const adicionar = ()=>{
        const novaEntrada= {descricao,tipo,valor};
        if(descricao!=='' && valor !==0){
        setListTransactions([...listTransactions,novaEntrada])
    }}

    return(
        <div className="Form">
            <div className="Descricao">
                <p className="Titulo">Descricao</p>

                <input 
                onChange={(evento)=> setDescricao(evento.target.value)}
                type='text'
                className="InputDescricao"
                placeholder="Digite aqui a descrição"
                ></input>
                <p className="exemplo">Ex: Salário</p>
            </div>

            <div className="Valor">
            <div>
                <p className="Titulo">Valor</p>

                <input
                onChange={(evento)=> setValor(Number(evento.target.value))}
                type='number'
                className="InputValor"
                placeholder="R$ xx,xx"
                />
            </div>
            
            <div className="Tipo">
                <p className="Titulo">Tipo de operação</p>
                <select className="select"
                value={tipo}
                onChange={(evento)=> setTipo(evento.target.value)}
                >
                    <option value='entrada' selected>Entrada</option>
                    <option value='despesa' >Despesa</option>

                </select>
            </div>            
            </div>

            <button className="botaoAdd" onClick={()=>adicionar()}>
                
                Inserir Valor
            </button>
        </div>
    )

}

export default Form