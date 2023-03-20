import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';


function ContactUs() {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
        return (            
            <Container className="py-5">
                <Row>
                    <Col className="col-sm-12 col-md-6 col-lg-4 mx-auto">
                        <h3 className="text-form text-center mb-4">Get in Touch</h3>                      
                    </Col>
                </Row>
            </Container>            
    )
}
export default ContactUs;