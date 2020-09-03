import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap'
import YeiberPic from '../../assets/Yeiber2.svg'

function Yeiber(props){
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <span style={props.Styles}><em>"You want to have Andy in your team: Andy brings solid technical skills, but more importantly Andy has strong work ethics and he is fun to work with. We had fun working together building two open source projects."</em></span><br/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className="quoteImages" src={YeiberPic} fluid roundedCircle/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                        Yeiber Cano
                </Col>
            </Row>
            <Row>
                <Col style={props.companyName} className="d-flex justify-content-center">
                        Front End Engineer | Adobe Systems
                </Col>
            </Row>
        </Container>
    )
}

export default Yeiber;

