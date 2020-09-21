import React, { useState, useEffect } from 'react';

import './styles.scss';

// Imagens
import Question from '../../images/svg/question.svg';
import Map from '../../images/svg/map.svg';

// Funções
import { isAuthenticated } from '../../services/auth';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useSnackbar } from 'notistack';

// Tipos
import { Neighborhood } from '../../store/ducks/neighborhood/types';

// Componentes do Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Componentes locais
import ModalFeedback from '../ModalFeedback';
import ModalNotAllowed from '../ModalNotAllowed';
import Footer from '../Footer';

const SendMessage: React.FC = () => {
  const neighborhood: Neighborhood = useSelector((state: RootStateOrAny) => state.neighborhood.neighborhood);
  const { enqueueSnackbar } = useSnackbar();

  const [message, setMessage] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [showForbidden, setShowForbidden] = useState(false);

  useEffect(() => {
    setMessage('');
  }, [neighborhood]);

  const handleShowFeedback = () => setShowFeedback(true);
  const handleCloseFeedback = () => setShowFeedback(false);

  const handleShowForbidden = () => setShowForbidden(true);
  const handleCloseForbidden = () => setShowForbidden(false);

  const scrollToMap = () => document.querySelector('#map')?.scrollIntoView({ behavior: 'smooth' });

  // Confere se usuário está autenticado e exibe modal adequado
  const showModal = () => {
    const isLogged = isAuthenticated();

    if (message !== '')
      if (isLogged)
        handleShowFeedback();
      else
        handleShowForbidden();
    else
      enqueueSnackbar('Preencha o campo de mensagem!', { variant: 'error' });
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

            /* Se o bairro tiver sido selecionado, exibe imagem + formulário  */
            <div className="container-left">
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
            </div>

            :

            /* Se não, exibe imagem padrão */
            <div className="no-content">
              <img id="no-img" src={Question} alt="Bairro não selecionado" />
            </div>
          }

          {/* Renderiza imagem da direita se bairro tiver sido selecionado */}
          {neighborhood.name !== '' &&
            <div className="container-right">
              <img src={Map} alt="Map" />
            </div>
          }
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
      <ModalFeedback message={message} value={showFeedback} handleClose={handleCloseFeedback} />
      <ModalNotAllowed value={showForbidden} handleClose={handleCloseForbidden} />
    </>
  );
}

export default SendMessage;