import React, { useEffect, useState } from 'react'
import styles from './ListaJogos.module.css'
import Jogo from './Jogo';
import GuiaJogos from './GuiaJogos';

function ListaJogos({itemsArray , logoCampeonato, type}){
  console.log(logoCampeonato);
  /*const [jogos, setJogos] = useState([])*/
  
  /*const dataAtual = new Date();
  console.log(dataAtual);
  const dia = dataAtual.getDate();
  console.log(dia)
  const mes = dataAtual.getMonth()+1;
  console.log(mes)
  const ano = dataAtual.getFullYear();
  console.log(ano)*/

  /*useEffect(() => {
    fetch('http://localhost:3000/jogos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      setJogos(data)
    })
    .catch(err => console.log(err))
  },[])*/

  return (
    <div>
    
    <div className={styles.containerJogos}>
    <ul id='tabelaJogos' className={styles.tabelaJogos}>
      {itemsArray
      .map((jogo, index) => (
        type==="campeonato"?
        <Jogo {...jogo} logoCampeonato={logoCampeonato} key={`jogo-${index}`}/>
        : <Jogo {...jogo} key={`jogo-${index}`}/>
      ))}
    </ul>
    </div>
    
    </div>
  )
}
export default ListaJogos