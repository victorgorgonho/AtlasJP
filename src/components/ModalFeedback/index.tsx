import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import SendMessage from '../../images/svg/send-message.svg';
import { useSelector, RootStateOrAny } from 'react-redux';

import './styles.scss';

interface ModalProps {
  message: string,
  value: boolean,
  handleClose(): any;
};

interface Neighborhood {
  id: number;
  name: string;
  image_url: string;
  location: [number, number];
}

const ModalFeedback: React.FC<ModalProps> = (props) => {
  const [zone, setZone] = useState('');
  const neighborhood: Neighborhood = useSelector((state: RootStateOrAny) => state.neighborhood.neighborhood);

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
        <div className="content">
          <img src={SendMessage} alt="Mensagem enviada" />
          <Modal.Header />
          <div className="text-content">
            <h1>
              Zone: {zone}
              <br />
              Bairro: {neighborhood.name} (id: {neighborhood.id})
              <br />
              Usuário: a
              <br />
              Mensagem: {props.message}
            </h1>
          </div>
        </div>
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

export default ModalFeedback;