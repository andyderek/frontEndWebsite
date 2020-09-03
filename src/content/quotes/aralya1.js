import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap'
import Aralya from '../../assets/aralya.svg'

function arayla1(props){
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <span style={props.Styles}><em>"Andy is focused and driven. He will find efficient solutions to complicated problems and deliver high quality products for all stakeholders."</em></span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="quoteImages" src={Aralya} fluid roundedCircle/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                        Aralya Phinith 
                </Col>
            </Row>
            <Row>
                <Col style={props.companyName} className="d-flex justify-content-center">
                        Software Engineer | StyleSeat
                </Col>
            </Row>
        </Container>
    )
}

export default arayla1;