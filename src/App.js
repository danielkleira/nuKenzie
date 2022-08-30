
import './App.css';
import { useState } from 'react';
import List from './components/List';
import TotalMoney from './components/TotalMoney';
import Form from './components/Form';
import Pagina from './components/Pagina';
import Header from './components/Header';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'




function App() {

  const [listTransactions,setListTransactions]=useState([]);
  const [pagina,setPagina]=useState(false);
  const [listaNovasTransacoes,setListaNovasTransacoes]=useState([])
  


  function filtrarEntrada(){
    const entradas = listTransactions.filter((elemento)=>{
      return elemento.tipo==="entrada";
    });
    if(entradas.length>0){
      setListaNovasTransacoes(entradas)
    }
  }

  function filtrarSaida(){
    const saidas = listTransactions.filter((elemento)=>{
      return elemento.tipo==="despesa";
    });
    setListaNovasTransacoes(saidas)
    
   
  }

  function filtrarTodos(){
    setListaNovasTransacoes([])
  }

  function removerTransacao(item){
    const excluir = listTransactions.filter((elemento)=>{
      return elemento !== item;
    });
    
    setListTransactions([...excluir])    
    
    
  }

 



  return (
    <div className="App">
      
      {pagina === false ?(
        <Pagina setPagina={setPagina}/>
      ):(
        <header className='App-header'>
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover/>
          <div className='cabecalho'>
          <Header setPagina={setPagina}/>
          </div>

          <div className='conteudo'>

          <div className='colunaForm'>
            {
              <Form listTransactions={listTransactions} setListTransactions={setListTransactions}
              />
            }

            {
              <TotalMoney listaTransacoes={listTransactions} listaNovasTransacoes={listaNovasTransacoes} setListTransactions={setListTransactions}/>
            }

          </div>

          <div className='colunaLista'>
            <div className='headerLista'>
              <p className='resumo'>Resumo financeiro</p>
              <div className='botoes'>
                <button className='btnTodos' onClick={filtrarTodos}>
                  Todos
                </button>

                <button className='btnEntrada' onClick={filtrarEntrada}>
                  Entradas
                </button>

                <button className='btnSaida' onClick={filtrarSaida}>
                  Despesas
                </button>
              </div>
            </div>

            <div className='lista'>
              {
                <List remover={removerTransacao} setListTransactions={setListTransactions} setListaNovasTransacoes={setListaNovasTransacoes}
                listTransactions={listaNovasTransacoes.length> 0 ? listaNovasTransacoes: listTransactions}
                />
              }
              
            </div>

          </div>


          </div>





        </header>
      )}
      
    </div>
  );
}

export default App;
