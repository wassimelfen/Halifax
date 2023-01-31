import React from 'react'
import {Carousel} from 'react-bootstrap'

const Hero = () => {
    return (
        <div className='herostyle'>
            <Carousel>
                <Carousel.Item   >
                    <img
                        className="heropic d-block w-100"
                        src="images/image1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='carouselCaption'>
                        <h3>Halifax !</h3>
                        <p>Rejoignez nos programmes de formation complets pour atteindre votre plein potentiel</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="heropic d-block w-100"
                        src="images/image2.jpg"
                        alt="Second slide"
                        
                    />
                    <Carousel.Caption className='carouselCaption'>
                        <h3>Halifax !</h3>
                        <p>Accélérez votre carrière avec nos solutions de formation innovantes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="heropic d-block w-100"
                        src="images/image5.jpg"
                        alt="Third slide"
                        
                    />
                    <Carousel.Caption className='carouselCaption'>
                        <h3>Halifax !</h3>
                        <p>Donnez un coup de pouce à vos compétences grâce à nos formations expert</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Hero
