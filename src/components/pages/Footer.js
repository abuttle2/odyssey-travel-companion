import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



function Footer () {
    return (
      <footer className="footer  bg-dark" fixed={"bottom"}> 
        <Container className='container'>
            <Row>
              <Col className='C-1'>
                <p className='copyright-text'>&copy; Copyright 2023 | All Rights Reserved.</p>          
              </Col>
                <Col className='C-2  text-left'>
                  <ul className='social_media-icons'>
                    <li>
                      <a href="https://github.com/Adriana-Camarotto">
                        <FontAwesomeIcon className='icon' icon={faGithub} /> Adriana
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/abuttle2">
                        <FontAwesomeIcon className='icon' icon={faGithub} /> Alex
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/willguille">
                        <FontAwesomeIcon className='icon' icon={faGithub} /> Guillermo
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/aobiaderi">
                        <FontAwesomeIcon className='icon' icon={faGithub} /> Obiaderi
                      </a>   
                    </li>
                  </ul>                    
              </Col>
            </Row>
          </Container>
  
      </footer>
    );
}

export default Footer;