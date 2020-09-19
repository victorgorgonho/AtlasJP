import React, { useState } from 'react';

import './styles.scss';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ModalLogin from '../ModalLogin';

import logo from '../../images/png/logo2.png';

const Header: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const scrollToMap = () => document.querySelector('#map')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" id="page-header">
        <Navbar.Brand>
          <img
            alt="AtlasJP"
            src={logo}
          />
          <h3>tlasJP</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="content">
            <Nav.Link onClick={scrollToMap}>Mapa</Nav.Link>
            <Nav.Link>Contate-nos</Nav.Link>
          </Nav>
          <Button variant="outline-primary" onClick={handleShow}>Fazer login</Button>
        </Navbar.Collapse>
      </Navbar>
      <ModalLogin value={show} handleClose={handleClose} />
    </>
  );
}

export default Header;