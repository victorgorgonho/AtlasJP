import React from 'react';

import './styles.scss';

// Componentes do Bootstrap
import Container from "react-bootstrap/Container";

// Icones
import { FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

// Tipos 
import { Icon } from '../../services/types';

const Footer: React.FC = () => {

  // Icones com links para footer
  const icons: Icon[] = [
    { icon: FaGithub, link: 'https://github.com/victorgorgonho' },
    { icon: FaLinkedinIn, link: 'https://linkedin.com/in/victor-gorgonho-872068192' },
    { icon: FaInstagram, link: 'https://www.instagram.com/victorgorgonho/' },
    { icon: AiOutlineMail, link: 'mailto:josegorgonho@eng.ci.ufpb.br' }
  ];

  return (
    <Container fluid id="footer">
      <div className="footer-center">
        {icons.map(Icon => (
          <div className="footer-icon">
            <a href={Icon.link} target="__blank">
              <Icon.icon size={24} color={'#777777'} className="icon" />
            </a>
          </div>
        ))}
      </div>
      <div className="footer-end">
        &copy; {new Date().getFullYear()} Copyright: <a href="https://linkedin.com/in/victor-gorgonho-872068192" target="__blank" className="link"> Victor Gorgonho </a>
      </div>
    </Container>
  );
}

export default Footer;

