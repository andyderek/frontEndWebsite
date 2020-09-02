import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap'
import ColinPic from '../../assets/Colin.svg'

function Colin(props){
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <span style={props.Styles}><em>"Andy is a smart, dedicated software engineer. He has a remarkable ability to breakdown a project into easy to manage pieces that any team would benefit from."</em></span><br/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Image width="20%" src={ColinPic} fluid roundedCircle/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                        Colin Macdonald
                </Col>
            </Row>
            <Row>
                <Col style={props.companyName} className="d-flex justify-content-center">
                        Senior Software Engineer | Marqeta
                </Col>
            </Row>
        </Container>
    )
}

export default Colin;