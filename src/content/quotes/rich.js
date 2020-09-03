import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap'
import RichPic from '../../assets/richard-1.svg'

function Rich(props){
    return (
        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <span style={props.Styles}><em>"I have worked with Andy on several projects and find that he is a reliable, hard working, and passionate engineer. Andy is driven to succeed professionally with a down to Earth personality."</em></span><br/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image className='quoteImages' src={RichPic} fluid roundedCircle/>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                        Richard Hong
                </Col>
            </Row>
            <Row>
                <Col style={props.companyName} className="d-flex justify-content-center">
                        Software Engineer | Disney Streaming Service
                </Col>
            </Row>
        </Container>
    )
}

export default Rich;