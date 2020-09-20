import React from 'react';

import './styles.scss';

import logo from '../../images/svg/home-map.svg';
import goDown from '../../images/gif/arrow-down.gif';

const AboutProject: React.FC = () => {
  return (
    <div id="homepage">
      <div className="content">
        <div className="content-text">
          <main>
            <h1>Como funciona?</h1>
            <p>Selecione abaixo a zona ao qual seu bairro pertence, em seguida, selecione-o no marcador que irá aparecer no mapa e deixe seu feedback sobre o bairro selecionado.</p>
          </main>
        </div>
        <div className="content-img">
          <img src={logo} alt="Map" />
        </div>
      </div>
      <div className="footer">
        <img src={goDown} alt="go-down" />
      </div>
    </div>
  );
}

export default AboutProject;