import React from 'react';
import { Carousel, Container } from 'react-bootstrap'
import Aralya1 from '../quotes/aralya1'
import Aralya2 from '../quotes/aralya2'
import Aralya3 from '../quotes/aralya3'
import Richard from '../quotes/rich'
import Dion from '../quotes/dion'
import Yeiber from '../quotes/yeiber'
import Colin from '../quotes/colin'



function Recommendations() {

    const recStyles = {
        marginTop: "0px",
        marginBottom: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
        fontSize: "calc(50% + 1vw + 1vh)",
    }

    const companyName = {
        fontSize: "12px"
    }

    function redirectToAbout() {
        console.log("FIRing")
        window.location.href = '/about'
    }

  return (
    <Container onClick={redirectToAbout} className='theBackground carouselTest'>
        <Carousel fade={true} pause={false} indicators={false}>

            <Carousel.Item>
                <Aralya1 Styles={recStyles} companyName={companyName}/>
            </Carousel.Item>

            <Carousel.Item>
                <Richard Styles={recStyles} companyName={companyName}/>
            </Carousel.Item>

            <Carousel.Item>
                <Aralya2 Styles={recStyles} companyName={companyName}/>
            </Carousel.Item>

            <Carousel.Item>
                <Dion Styles={recStyles} companyName={companyName}/>
            </Carousel.Item>

            <Carousel.Item>
                <Aralya3 Styles={recStyles} companyName={companyName}/>
            </Carousel.Item>

            <Carousel.Item>
                <Yeiber Styles={recStyles} companyName={companyName}/>
            </Carousel.Item>

            <Carousel.Item>
                <Colin Styles={recStyles} companyName={companyName}/>
            </Carousel.Item>
        </Carousel>
    </Container>
  );
}

export default Recommendations;