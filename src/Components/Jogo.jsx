import React from 'react'
import styles from './Jogo.module.css'
import Trophy from '../Assets/trophy.svg'
import Screen from '../Assets/screen.svg'

const Jogo = ({dataJogo, horaJogo, campeonato, logoCampeonato, nomeMandante, nomeVisitante, logoMandante, logoVisitante, nomeCanal, logoCanal}) => {
    
  return (
    <div className={styles.jogo}>
      <div className={styles.jogoHeader}>
        <span className={styles.logoCompetition}><img src={logoCampeonato} alt="Logo da competição" /></span>
        <p className={styles.tituloJogo}>{campeonato}</p>
      </div>
      <div className={styles.infoJogo}>
        
        <div className={styles.confronto}>
          <div className={styles.timeMandante}>
            <span className={styles.logoTime}><img src={logoMandante} alt={nomeMandante} /></span>
            <span className={styles.nomeTime}>{nomeMandante}</span>
          </div>
          <div className={styles.timeVisitante}>
            <span className={styles.logoTime}><img src={logoVisitante} alt={nomeVisitante} /></span>
            <span className={styles.nomeTime}>{nomeVisitante}</span>
          </div>
        </div>
        <div className={styles.agendaJogo}>
          <p>{dataJogo}</p>
          <p>{horaJogo}</p>
        </div>
      </div>
      <div className={styles.transmissao}>
        <img className={styles.logoScreen} src={Screen} alt="" />
        <ul className={styles.canais}>
          <li>
            <img className={styles.logoTransmissao} src={logoCanal} alt={nomeCanal} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Jogo