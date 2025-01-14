import React, { useEffect, useState } from 'react'
import styles from './ListaJogos.module.css'
import Voltar from '../Assets/angle-small-left.svg?react';
import Avancar from '../Assets/angle-small-right.svg?react';
import Jogo from './Jogo';

/*const ListaJogos = () => {
  
  
}*/

function ListaJogos(){
  const [jogos, setJogos] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/jogos', {
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
  },[])

  return (
    <div>
    <div className={styles.guia}>
      <button id='btn-voltar' className={styles.btnVoltar}><Voltar />
      </button>
      <h1 className={styles.tituloGuia}>HOJE, 14 de setembro de 2024</h1>
      <button id='btn-avancar' className={styles.btnAvancar}>
      <Avancar />
      </button>
    </div>
    <ul id='tabelaJogos' className={styles.tabelaJogos}>
    {jogos.length > 0 && 
      jogos.map((jogos) => (
        <Jogo dataJogo={jogos.dataJogo} horaJogo={jogos.horaJogo} campeonato={jogos.estadio} nomeMandante={jogos.mandante.nome} nomeVisitante={jogos.visitante.nome} logoMandante={jogos.mandante.escudo} logoVisitante={jogos.visitante.escudo}/>
      ))}
    </ul>
    </div>
  )
}

/*

*/
export default ListaJogos