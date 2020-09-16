import React from 'react';

import logo from '../../images/home-map.svg';
import './styles.scss'

const AboutProject: React.FC = () => {
  return (
    <div id="homepage">
      <div className="content">
        <main>
          <h1>Como funciona?</h1>
          <p>Selecione abaixo a zona ao qual seu bairro pertence, em seguida, selecione-o no marcador que irá aparecer no mapa e deixe seu feedback sobre o bairro selecionado.</p>
        </main>
        <div className="content-img">
          <img src={logo} alt="Map" />
        </div>
      </div>
    </div>
  );
}

export default AboutProject;