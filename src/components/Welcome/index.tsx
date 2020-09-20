import React from 'react';

import './styles.scss';

import logo from '../../images/png/logo2.png';

import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="AtlasJP" />
          <h3>tlasJP</h3>
        </header>

        <main>
          <h1>Sua ferramenta para envio de feedback em bairros de João Pessoa.</h1>
          <p>Ajude as pessoas enviando informações sobre bairros em João Pessoa de forma eficiente.</p>

          <Link to="/home">
            <span>
              <FiLogIn />
            </span>
            <strong>Acessar</strong>
          </Link>
        </main>
      </div>
    </div>
  );
}

export default Welcome;