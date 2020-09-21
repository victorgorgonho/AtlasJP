import React, { useEffect, useState } from 'react';

import './styles.scss';

// Imagens
import noUser from '../../images/png/no-user.png';
import SendMessage from '../../images/svg/send-message.svg';

// Redux
import { useSelector, RootStateOrAny } from 'react-redux';

// Tipos
import { User } from '../../store/ducks/user/types';
import { Neighborhood } from '../../store/ducks/neighborhood/types';

// Componentes do Bootstrap
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface ModalProps {
  message: string,
  value: boolean,
  handleClose(): any;
};

const ModalFeedback: React.FC<ModalProps> = (props) => {
  const user: User = useSelector((state: RootStateOrAny) => state.user.user);
  const neighborhood: Neighborhood = useSelector((state: RootStateOrAny) => state.neighborhood.neighborhood);

  const [zone, setZone] = useState('');

  // Busca zona no localStorage ao atualizar estado de bairro no Redux
  useEffect(() => {
    const newZone = localStorage.getItem('@AtlasJP/Zone');

    if (newZone)
      setZone(newZone);
  }, [neighborhood]);

  return (
    <Modal show={props.value} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Mensagem enviada!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="header">
          <img src={SendMessage} alt="Mensagem enviada" />
        </div>
        <Modal.Header />
        <Container className="content">
          <Col>
            <Row noGutters>
              <Col className="profile" xs={3}>
                <img src={noUser} alt={user && user.name} />
              </Col>
              <Col xs={9}>
                <Row className="message-header" noGutters>
                  <h3>
                    {user && user.name}
                  </h3>
                  <h3>
                    Zona: {zone}
                    <br />
                    Bairro: {neighborhood.name} (id: {neighborhood.id})
                  </h3>
                </Row>
              </Col>
            </Row>
            <Row className="message-body" noGutters>
              <h3>
                {props.message}
              </h3>
            </Row>
          </Col>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default ModalFeedback;