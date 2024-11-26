import React from "react";
import styles from './Header.module.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
  <header className={styles.header}>
    <h1>GUIA DE JOGOS NA TV</h1>
    <nav>
      <Link to="/">JOGOS DE HOJE</Link>
      <Link to="/brasileiro-serie-a">CAMPEONATO BRASILEIRO SERIE A</Link>
      <Link to="/copa-do-brasil">COPA DO BRASIL</Link>
      <Link to="/libertadores">COPA LIBERTADORES</Link>
    </nav>
  </header>
  );
};

export default Header;