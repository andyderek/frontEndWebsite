import React from 'react';
import { Container, Row, Col, Accordion, Card, Image} from 'react-bootstrap'
import IATSE from 'https://andydixonwebsite.s3-us-west-1.amazonaws.com/iatse.jpeg'

function Employment2() {

    return (
        <Container className="employment d-flex flex-column align-items-center">
            <Row>
                <Col><h1>Employment History</h1></Col>
            </Row>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        April 2010 to March 2020 | IATSE Local 16 | Lighting Console Programmer
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row>
                                <Col lg={7}>
                                    <Image width='100%' src={IATSE} fluid rounded/>
                                </Col>
                                <Col lg={5} className="projectsList">
                                    <ul>
                                        <li>Programmed up to 100 fixtures over 2 universes of DMX channels on GrandMA, High End Hog4, and ETC EOS family consoles for conferences, shows, and events in San Francisco</li>
                                        <li>Lead teams of up to 17 people in the safe and efficient implementation of 50 events and shows</li>
                                        <li>Calculated electrical systems to ensure safety of large-scale events with up to 60,000 attendees</li>
                                        <li>Executed designs from over 65 shows a year with union crews of up to 100 workers</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        2007 | OBEY Giant Art | Online Accounts Manager 
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <ul>
                                <li>Restructured the order fulfillment department from shipping within a week to within 24 hours</li>
                                <li>Established protocols for tracking and maintaining inventory, eliminating a month-long shipping backlog and increased next day order fulfillment to 99% to ensure the satisfaction of consumers</li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    );
  }

export default Employment2;