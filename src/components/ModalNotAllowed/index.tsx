import React, { useState } from 'react';

import './styles.scss';

// Imagens
import NotAuthenticated from '../../images/svg/not-authenticated.svg';

// Componentes do Bootstrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// Componentes locais
import ModalLogin from '../ModalLogin';

interface ModalProps {
  value: boolean,
  handleClose(): any;
};

const ModalNotAllowed: React.FC<ModalProps> = (props) => {
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const handleClick = () => {
    props.handleClose();
    handleShowLogin();
  }

  return (
    <>
      <Modal show={props.value} onHide={props.handleClose} className="modal-not-allowed">
        <Modal.Header closeButton>
          <Modal.Title>Você precisa estar logado para comentar.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={NotAuthenticated} alt="Faça login" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={props.handleClose}>
            Voltar
          </Button>
          <Button variant="outline-primary" onClick={handleClick}>
            Fazer login
          </Button>
        </Modal.Footer>
      </Modal>
      <ModalLogin value={showLogin} handleClose={handleCloseLogin} />
    </>
  );
}

export default ModalNotAllowed;