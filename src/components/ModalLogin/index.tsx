import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import AuthIMG from '../../images/svg/authentication.svg';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { updateUser } from '../../store/ducks/user/actions';

import './styles.scss';

interface ModalProps {
  value: boolean,
  handleClose(): any;
};

const ModalLogin: React.FC<ModalProps> = (props) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {
    const user = {
      id: '1',
      email: email.trim(),
      name: 'Victor Gorgonho',
      token: 'Logado'
    }

    if (email === 'josegorgonho@eng.ci.ufpb.br' && password === 'teste123') {
      dispatch(updateUser({ user }));
      enqueueSnackbar('Usuário logado!', { variant: "success" });
      props.handleClose();
    } else {
      setEmail('');
      setPassword('');
      enqueueSnackbar('Falha ao autenticar.', { variant: "error" });
    }
  };

  return (
    <Modal show={props.value} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Faça login para acessar sua conta.</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <img src={AuthIMG} alt="Login" />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              Nós nunca compartilharemos seu email com ninguém.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={props.handleClose}>
          Voltar
        </Button>
        <Button variant="outline-primary" onClick={signIn}>
          Entrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalLogin;