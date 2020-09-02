import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap'
import Aralya from '../../assets/aralya.svg'

function arayla2(props){
    return (
        <Container className="d-flex flex-column align-items-center">
            <Row>
                <Col className="d-flex justify-content-center aralya">
                    <span style={props.Styles}><em>"His eye for pixel perfect design will also give users a great experience."</em></span><br/>
                </Col>
            </Row>
            <Row>
            <Col className="d-flex justify-content-center">
                    <Image width="50%" src={Aralya} fluid roundedCircle/>
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

export default arayla2;