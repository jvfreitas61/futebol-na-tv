import React from 'react'
import styles from './ListaJogos.module.css'
import Voltar from '../Assets/angle-small-left.svg?react';
import Avancar from '../Assets/angle-small-right.svg?react';
import Jogo from './Jogo';

const tabelasJogos = [];

const ListaJogos = () => {
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
      <Jogo/>
      <Jogo/>
    </ul>
    </div>
  )
}

export default ListaJogos