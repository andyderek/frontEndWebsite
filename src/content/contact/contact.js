import React from 'react';
import { Container, Col } from 'react-bootstrap'

function Contact() {
  return (
      <Container className='design'>
        <Col className='contact' >
          <a href="mailto:andielane@yahoo.com" style={{textDecoration: 'none', color: 'black'}}>andielane@yahoo.com</a>  
        </Col>
      </Container>
  );
}

export default Contact;