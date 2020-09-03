import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap'
import Aralya from '../../assets/aralya.svg'

function AralyaFull(props){
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <span style={props.Styles}><em>"Andy is focused and driven. He will find efficient solutions to complicated problems and deliver high quality products for all stakeholders. His eye for pixel perfect design will also give users a great experience. Andy enjoys tackling technical problems, collaborating to find the best solutions, and would be a great addition to any engineering team."</em></span>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className='quoteImages' src={Aralya} fluid roundedCircle/>
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

export default AralyaFull;