import React, { useEffect, useState } from 'react'
import styles from './ListaJogos.module.css'
import Voltar from '../Assets/angle-small-left.svg?react';
import Avancar from '../Assets/angle-small-right.svg?react';
import Jogo from './Jogo';

function ListaJogos(){
  const [jogos, setJogos] = useState([])

  useEffect(() => {
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
      {jogos.map((jogo) => (
        <Jogo {...jogo} key={jogo.id}/>
      ))}
    </ul>
    </div>
  )
}
export default ListaJogos