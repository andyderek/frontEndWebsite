import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import LinkedIn from '../assets/linkedIn.png'
import GitHub from '../assets/GitHub.png'
import Envelop from '../assets/envelop.png'

function Footer() {
  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <a href="https://www.linkedin.com/in/andydnixon/" style={{paddingRight: 20}}><Image src={LinkedIn} height="20px"></Image></a>
            <a href="https://github.com/andyderek"><Image src={GitHub} height="20px"></Image></a>
            <a href="mailto:andielane@yahoo.com>" style={{paddingLeft: 20}}><Image src={Envelop} height='18px'></Image></a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;