import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Works></Works>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;