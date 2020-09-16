import React from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import './styles.scss';

interface ModalProps {
  value: boolean,
  handleClose(): any;
};

const ModalLogin: React.FC<ModalProps> = (props) => {

  return (
    <Modal show={props.value} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Entre em sua conta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />
            <Form.Text className="text-muted">
              Nós nunca compartilharemos seu email com ninguém.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={props.handleClose}>
          Voltar
        </Button>
        <Button variant="outline-primary" onClick={props.handleClose}>
          Entrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalLogin;