import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap'
import DionPic from '../../assets/Dion2.svg'

function Dion(props){
    return (
        <Container>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <span style={props.Styles}><em>"Andy's attention to detail and tenacity as an engineer always leads to a streamlined working experience. His ability to clearly articulate his design decisions and implement them makes him a great addition to any team."</em></span><br/>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                        <Image width="20%" src={DionPic} fluid roundedCircle/>
                    </Col>
                </Row>
                <Row>
                    <Col className="d-flex justify-content-center">
                            Dion Fulwood 
                    </Col>
                </Row>
                <Row>
                    <Col style={props.companyName} className="d-flex justify-content-center">
                            Software Engineer | Headspace
                    </Col>
                </Row>
        </Container>
    )
}

export default Dion;