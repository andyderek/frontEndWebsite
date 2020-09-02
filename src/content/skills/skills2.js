import React from 'react';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap'

function Skills2() {

    return (
        <Container className="projects">
            <Row>
                <Col><h1>Skills & Education</h1></Col>
            </Row>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Skills
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                                <ul className='projectsList'>
                                    <Row>
                                        <Col>
                                            <li>JavaScript</li>
                                            <li>ReactJS</li>
                                            <li>React Native</li>
                                            <li>Redux</li> 
                                            <li>Angular</li>
                                            <li>BootStrap</li>
                                        </Col>
                                        <Col>
                                            <li>VueJS</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>NodeJS</li> 
                                            <li>ExpressJS</li> 
                                        </Col>
                                        <Col>
                                            <li>API</li>
                                            <li>REST</li>
                                            <li>Mongo</li>
                                            <li>Backbone.js</li>
                                        </Col>
                                    </Row>
                                </ul>
                            </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                    Education
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <ul className="projectsList">
                                <li>Hack Reactor | Advanced Software Engineering Immersive</li>
                                <li>University of Montevallo | BFA in Fine Art</li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    );
  }

export default Skills2;