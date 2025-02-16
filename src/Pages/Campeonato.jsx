import React from 'react';
import ListaJogos from '../Components/ListaJogos';
import { jogos } from '../database/jogos';

const Campeonato = () => {
  /*const{compeonato} = jogos.filter((jogo)=> jogo.campeonato === )*/

  return (
    <section className="container">
      <ListaJogos />
    </section>
  );
};

export default Campeonato;
