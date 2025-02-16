import React from 'react'
import Voltar from '../Assets/angle-small-left.svg?react';
import Avancar from '../Assets/angle-small-right.svg?react';
import styles from './GuiaJogos.module.css'

const GuiaJogos = () => {
  return (
    <>
    <div className={styles.guia}>
      <button id='btn-voltar' className={styles.btnVoltar}><Voltar />
      </button>
      <h1 className={styles.tituloGuia}>HOJE, 14 de setembro de 2024</h1>
      <button id='btn-avancar' className={styles.btnAvancar}>
      <Avancar />
      </button>
    </div>
    </>
  )
}

export default GuiaJogos