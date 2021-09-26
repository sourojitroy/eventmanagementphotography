import React from 'react';
import carousel1 from '../../../images/carousel1.jpg';
import carousel2 from '../../../images/carousel2.jpg';
import carousel3 from '../../../images/carousel3.jpg';
import { Carousel } from 'react-bootstrap';

const Works = () => {
    return (
        <div className='bg-dark'>
            <section className="container py-5">
                <h1 className='text-center font-weight-bold py-5 mb-4 text-white'>Here are some of our works</h1>
                <Carousel>
                    <Carousel.Item>
                        <div>
                            <img
                                className="d-block w-100"
                                src={carousel1}
                                alt="First slide"
                                className="w-100"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <img
                                className="d-block w-100"
                                src={carousel2}
                                alt="First slide"
                                className="w-100"
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>
                            <img
                                className="d-block w-100"
                                src={carousel3}
                                alt="First slide"
                                className="w-100"
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </section>
        </div>
    );
};

export default Works;