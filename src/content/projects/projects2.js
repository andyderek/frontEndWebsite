import React from 'react';
import { Container, Row, Col, Accordion, Card, Image} from 'react-bootstrap'
import Feastly  from "../../assets/feastly.jpeg"
import Hacker from "../../assets/HackerHabitat.jpeg"

function Projects2() {

    return (
        <Container className="projects">
            <Row>
                <Col><h1>Projects</h1></Col>
            </Row>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        May 2016-Current | Front End Engineer | Feastly
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Row>
                                <Col lg={7} sm={3}>
                                    <Image src={Feastly} fluid></Image>
                                </Col>
                                <Col lg={5}>
                                    <ul className='projectsList'>
                                        <li>Migrated from Yummly's Api to Spoonacular's Api</li>
                                        <li>Architected a user-friendly front-end using AngularJS</li>
                                        <li>Created an Angular factory that retrieved search results from Yummly’s API</li>
                                        <li>Built views and controllers to render components and added functionality</li>
                                        <li>Customized CSS and HTML to ensure on-screen readability as well as a sleek design</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        2016 | Hacker Habitat | Front end Engineer
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Row>
                                <Col lg={7} sm={3}>
                                    <Image src={Hacker} fluid ></Image>
                                </Col>
                                <Col lg={5}>
                                    <ul className='projectsList'>
                                        <li>Designed and implemented sign-up and create profile views and business logic using React and Redux</li>
                                        <li>Integrated the Sendgrid API to facilitate messaging between users</li>
                                        <li>Created routes for components to render new views using React-Router</li>
                                        <li>Coordinated with back-end engineer on server-side database solutions</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Body>      
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    );
  }

export default Projects2;