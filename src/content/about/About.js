import React from 'react';
import AndyProfile from '../../assets/andyProfile.svg'
import { Image, Container, Col, Row } from 'react-bootstrap'
import AralyaFull from '../quotes/aralyaFull'
import Yeiber from '../quotes/yeiber'
import Rich from '../quotes/rich'
import Colin from '../quotes/colin'
import Dion from '../quotes/dion'
import './about.css'

function About() {

  const aboutStyles = {
    marginTop: "30px",
    marginBottom: "30px",
    fontSize: "18px",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingTop: "5px",
    paddingBottom: "10px"
  }

  const companyName = {
    fontSize: "12px"
  }

  return (
    <Container>
      <Container className="about">
        <Row className='design'>
          <Col lg={7} sm={12} className="about">
            <h1>Hi. I'm Andy.</h1>
            <div>I'm a front end engineer based in Oakland, CA. I work hard and I'm easy to work with. But don't just take my word for it...</div>
          </Col>
          <Col lg={5} sm={12}>
            <Image width='100%' className="andyImg" src={AndyProfile} fluid rounded/>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="d-flex flex-column align-items-center">
            <span style={{fontSize: 23, borderBottomStyle: 'solid', borderWidth: .5, marginBottom: 50}}>What My Colleagues are saying...</span>
          </Col>
        </Row>
      </Container>
      <Container className="design">
        <Row>
          <Yeiber Styles={aboutStyles} companyName={companyName}/>
        </Row>
      </Container>
      <Container>
        <Row>
          <Dion Styles={aboutStyles} companyName={companyName}/>
        </Row>
      </Container>
      <Container className="design">
        <Row>
          <Rich Styles={aboutStyles} companyName={companyName}/>
        </Row>
      </Container>
      <Container>
        <Row>
          <Colin Styles={aboutStyles} companyName={companyName}/>
        </Row>
      </Container>
      <Container className="design">
        <Row>
          <AralyaFull Styles={aboutStyles} companyName={companyName}/>
        </Row>
      </Container>
    </Container>
  );
}

export default About;