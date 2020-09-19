import React, { useEffect, useState } from 'react';

import './styles.scss';
import Question from '../../images/svg/question.svg';
import Map from '../../images/svg/map.svg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ModalFeedback from '../ModalFeedback';
import ModalNotAllowed from '../ModalNotAllowed';
import { useSnackbar } from 'notistack';

import { useSelector, RootStateOrAny } from 'react-redux';

interface Neighborhood {
  id: number;
  name: string;
  image_url: string;
  location: [number, number];
}

const SendMessage: React.FC = () => {
  const neighborhood: Neighborhood = useSelector((state: RootStateOrAny) => state.neighborhood.neighborhood);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const scrollToMap = () => document.querySelector('#map')?.scrollIntoView({ behavior: 'smooth' });

  const showModal = () => {
    if (message !== '') {
      handleShow();
    } else {
      enqueueSnackbar('Preencha o campo de mensagem!', { variant: 'error' });
    }
  }

  return (
    <>
      <div id="message">
        <div className="header">
          <main>
            {neighborhood.name !== '' ?
              <h1>{`Você selecionou ${neighborhood.name}`}</h1>
              :
              <h1>Por favor, selecione um bairro no mapa acima para deixar seu feedback.</h1>
            }
          </main>
        </div>
        <div className="content">
          {neighborhood && neighborhood.image_url ?
            <div className="content-left">
              <div className="content-img">
                <img src={neighborhood.image_url} alt={neighborhood.name} />
              </div>
              <Form>
                <Form.Group controlId="Form.ControlTextarea1">
                  <Form.Label>Que feedback gostaria de deixar sobre o bairro?</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div className="btn-justify">
                    <Button variant="outline-danger" onClick={scrollToMap}>
                      Voltar
                    </Button>
                    <Button variant="outline-primary" onClick={showModal}>
                      Enviar
                  </Button>
                  </div>
                </Form.Group>
              </Form>
            </div>
            :
            <div className="no-content">
              <img id="no-img" src={Question} alt="Bairro não selecionado" />
            </div>
          }

          {neighborhood.name !== '' &&
            <div className="content-right">
              <img src={Map} alt="Map" />
            </div>
          }
        </div>
      </div>
      <ModalFeedback message={message} value={show} handleClose={handleClose} />
      {/* <ModalNotAllowed value={show} handleClose={handleClose} /> */}
    </>
  );
}

export default SendMessage;