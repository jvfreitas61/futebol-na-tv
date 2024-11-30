import React from "react";
import styles from './Header.module.css'
import { Link } from "react-router-dom";
import Menu from '../Assets/menu-burger.svg?react';
import Fechar from '../Assets/cross.svg?react';

const Header = () => {
  return (
  <header className={styles.header}>
    <button className={styles.btnMenu}>
      <Menu />
    </button>
    <menu id="menu">
      <div className={styles.headerMenu}>
      <button className={styles.btnFechar}>
        <Fechar />
      </button>
      <h1 className={styles.tituloMenu}>MENU</h1>
      </div>
      <ul>
        <li>
        <Link to="/" className={styles.link}>JOGOS DE HOJE</Link>
        </li>
      <li>
      <Link to="/brasileiro-serie-a" className={styles.link}>BRASILEIRÃO SERIE A</Link>
      </li>
      <li>
      <Link to="/copa-do-brasil" className={styles.link}>COPA DO BRASIL</Link>
      </li>
      <li>
      <Link to="/libertadores" className={styles.link}>COPA LIBERTADORES</Link>  
      </li>
      
      </ul>
    </menu>
    <h1>GUIA DE JOGOS NA TV</h1>
    <nav className={styles.nav}>
      <Link to="/">JOGOS DE HOJE</Link>
      <Link to="/brasileiro-serie-a">BRASILEIRÃO SERIE A</Link>
      <Link to="/copa-do-brasil">COPA DO BRASIL</Link>
      <Link to="/libertadores">COPA LIBERTADORES</Link>
    </nav>
  </header>
  );
};

export default Header;