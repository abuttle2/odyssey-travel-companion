import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



function Footer () {
    return (
      <footer> 
        <Container>
            <Row>
                <Col>
                    <p>&copy; Copyright © 2022 | All Rights Reserved.</p>
                </Col>
            </Row>
        </Container>
  
      </footer>
    );
}

export default Footer;