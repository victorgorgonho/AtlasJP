import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalLogin from '../ModalLogin';

import AuthIMG from '../../images/svg/authentication.svg';

import './styles.scss';

interface ModalProps {
  value: boolean,
  handleClose(): any;
};

const ModalNotAllowed: React.FC<ModalProps> = (props) => {
  return (
    <>
      <Modal show={props.value} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Faça login para acessar sua conta.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={AuthIMG} alt="Login" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={props.handleClose}>
            Voltar
        </Button>
          <Button variant="outline-primary">
            Fazer login
        </Button>
        </Modal.Footer>
      </Modal>
      <ModalLogin value={false} handleClose={() => { }} />
    </>
  );
}

export default ModalNotAllowed;