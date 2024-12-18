import React from 'react'
import styles from './Jogo.module.css'
import Trophy from '../Assets/trophy.svg'
import Screen from '../Assets/screen.svg'

const Jogo = ({dataJogo, horaJogo}) => {
  

  return (
    <div className={styles.jogo}>
      <div className={styles.jogoHeader}>
        <span className={styles.logoCompetition}><img src="https://upload.wikimedia.org/wikipedia/pt/7/75/Campeonato_Brasileiro_de_Futebol_de_2024_-_S%C3%A9rie_A.png" alt="Logo da competição" /></span>
        <p className={styles.tituloJogo}>CAMPEONATO BRASILEIRO</p>
      </div>
      <div className={styles.infoJogo}>
        <div className={styles.agendaJogo}>
          <p>{dataJogo}</p>
          <p>{horaJogo}</p>
        </div>
        <div className={styles.confronto}>
          <div className={styles.timeMandante}>
            <span className={styles.logoTime}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/213px-Botafogo_de_Futebol_e_Regatas_logo.svg.png" alt="" /></span>
            <span className={styles.nomeTime}>BOTAFOGO</span>
          </div>
          <div className={styles.timeVisitante}>
            <span className={styles.logoTime}><img src="https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png" alt="" /></span>
            <span className={styles.nomeTime}>CORINTHIANS</span>
          </div>
        </div>
      </div>
      <div className={styles.transmissao}>
        <img className={styles.logoScreen} src={Screen} alt="" />
        <ul className={styles.canais}>
          <li>
            <img className={styles.logoTransmissao} src="https://upload.wikimedia.org/wikipedia/commons/2/26/SporTV_2021.png" alt="" />
          </li>
          <li>
            <img className={styles.logoTransmissao} src="https://upload.wikimedia.org/wikipedia/pt/a/a2/Logo_Premiere_FC_2018.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Jogo