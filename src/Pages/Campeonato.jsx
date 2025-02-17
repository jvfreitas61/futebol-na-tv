import React from 'react';
import ListaJogos from '../Components/ListaJogos';
import { Link, useParams } from 'react-router-dom';
import { jogos } from '../database/jogos';

const Campeonato = () => {
  /*const{compeonato} = jogos.filter((jogo)=> jogo.campeonato === )*/
  console.log(useParams())

  return (
    <section className="container">
      <ListaJogos />
    </section>
  );
};

export default Campeonato;
