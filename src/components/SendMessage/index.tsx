import React, { useEffect } from 'react';

import './styles.scss';
import Question from '../../images/svg/question.svg';
import Map from '../../images/svg/map.svg';
import Form from 'react-bootstrap/Form';

import { useSelector, RootStateOrAny } from 'react-redux';

interface Neighborhood {
  id: number;
  name: string;
  image_url: string;
  location: [number, number];
}

const SendMessage: React.FC = () => {
  const neighborhood = useSelector((state: RootStateOrAny) => state.neighborhood.neighborhood);

  return (
    <div id="message">
      <div className="main">
        <div className="main-header">
          <main>
            <h1>{`Você selecionou o bairro ${neighborhood ? neighborhood.name : "ops"}`}</h1>
            {/* ` */}
          </main>
        </div>
        <div className="content">
          <div className="content-left">
            <div className="content-img">
              {
                neighborhood && neighborhood.image_url ?
                  <img src={neighborhood.image_url} alt={neighborhood.name} />
                  :
                  <img id="no-img" src={Question} alt="Bairro não selecionado" />
              }
            </div>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Que feedback gostaria de deixar sobre o bairro?</Form.Label>
                <Form.Control as="textarea" />
              </Form.Group>
            </Form>
          </div>
          <div className="content-right">
            <img src={Map} alt="Map" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMessage;