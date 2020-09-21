import React, { useState, useEffect } from 'react';

import './styles.scss';

// Imagens
import logo from '../../images/png/logo2.png';
import noUser from '../../images/png/no-user.png';

// Funções
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { removeUser } from '../../store/ducks/user/actions';
import { isAuthenticated } from '../../services/auth';
import { useSnackbar } from 'notistack';

// Tipos 
import { User } from '../../store/ducks/user/types';

// Componentes do Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

// Componentes locais
import ModalLogin from '../ModalLogin';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const user: User = useSelector((state: RootStateOrAny) => state.user.user);
  const { enqueueSnackbar } = useSnackbar();

  const [show, setShow] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const scrollToMap = () => document.querySelector('#map')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContactUs = () => document.querySelector('#footer')?.scrollIntoView({ behavior: 'smooth' });

  // Atualiza estado de autenticação sempre que o usuário mudar
  useEffect(() => {
    const response = isAuthenticated();
    setIsLogged(response);
  }, [user]);

  const logout = () => {
    enqueueSnackbar('Usuário deslogado com sucesso!', { variant: "info" });
    dispatch(removeUser());
  }

  return (
    <>
      <Navbar expand="lg" id="page-header" collapseOnSelect bg="light" variant="light" >
        <Navbar.Brand>
          <img
            alt="AtlasJP"
            src={logo}
          />
          <h3>tlasJP</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="content">
            <Nav className="links">
              <Nav.Link onClick={scrollToMap}>Mapa</Nav.Link>
              <Nav.Link onClick={scrollToContactUs}>Contate-nos</Nav.Link>
            </Nav>
            {/* Mostra perfil se estiver logado, botão para logar se estiver deslogado */}
            {isLogged ?
              <div className="profile" onClick={logout}>
                <img src={noUser} alt={user.name} />
                <h3>{user.name}</h3>
              </div>
              :
              <Button variant="outline-primary" onClick={handleShow}>Fazer login</Button>
            }
          </div>
        </Navbar.Collapse>
      </Navbar>
      <ModalLogin value={show} handleClose={handleClose} />
    </>
  );
}

export default Header;