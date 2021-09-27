import React from "react";
import '../styles/header.css';

function Header() {
  return (
    <header className="cabeça">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <nav>
        <ul>
          <li><a href="">PRODUTOS</a></li>
          <li><a href="">SERVIÇOS</a></li>
          <li><a href="">AVALIAÇÃO</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;