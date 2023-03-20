import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



function Footer () {
    return (
      <footer className="footer bg-light"> 
        <Container>
            <Row>
              <Col className='col-sm-12 col-md-6 col-lg-8'>
                <p className='copyright-text'>&copy; Copyright © 2022 | All Rights Reserved.</p>          
              </Col>
                <Col className='col-sm-12 col-md-6 col-lg-4 text-center py-3'>
                  <ul className='social_media-icons'>
                    <li>
                      <a href="https://github.com/Adriana-Camarotto">
                        <FontAwesomeIcon icon={faGithub} /> Adriana
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/abuttle2">
                        <FontAwesomeIcon icon={faGithub} /> Alex
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/willguille">
                        <FontAwesomeIcon icon={faGithub} /> Guillermo
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/aobiaderi">
                        <FontAwesomeIcon icon={faGithub} /> Obiaderi
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