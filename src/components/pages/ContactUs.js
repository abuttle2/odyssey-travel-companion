import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function ContactUs() {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setLoading(true);
        
    }
    
  
        return (            
            <Container className="py-5">
                <Row>
                    <Col className="col-sm-12 col-md-6 col-lg-4 mx-auto">
                        <h3 className="text-form text-center mb-4">Get in Touch</h3> 
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required                             
                            />
                            </Form.Group>   

                            <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required                             
                            />
                            </Form.Group>

                            <Form.Group controlId="message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                type="textarea"
                                rows={3}
                                placeholder="Enter message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required                             
                            />
                            </Form.Group>
                            <Button variant="dark" type="submit" disabled={loading}>
                                {loading ? 'Submiting...' : 'Send message'}
                            </Button>
                        </Form>                    
                    </Col>
                </Row>
            </Container>            
    )
}
export default ContactUs;