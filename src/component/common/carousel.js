import React from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselContainer(props) {
    return (
        <div>
            <Carousel fade={false} nextLabel="" prevLabel="" >
                <Carousel.Item interval={4000}>
                    <img
                        
                        className="d-block w-100 img-fit" 
                        src={props.img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-black fw-bolder border border-2 p-5 shadow-sm  test fs-1">SUMMER SEASON</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100 img-fit"
                        src={props.img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-black fw-bolder border border-2 p-5 shadow-sm  test fs-1">go to the beach.</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselContainer;