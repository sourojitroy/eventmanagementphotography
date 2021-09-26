import React from 'react';
import NavBar from '../../NavBar/NavBar';
import headerImg from '../../../images/headerImg.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header-bg">
            <NavBar></NavBar>
            <section className="container">
                <div className="row pt-3 pb-5">
                    <div className="col-md-5 d-flex flex-column justify-content-center align-items-start order-1 order-md-0">
                        <h1 className="font-weight-bold py-3">Let's Make<br></br> Your Event More Amazing</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem repellendus similique, aliquam id aspernatur nostrum?</p>
                        <button className="btn btn-warning px-4">Hire Us</button>
                    </div>
                    <div className="col-md-7 d-flex align-items-center justify-content-center order-0 order-md-1">
                        <img src={headerImg} alt="" className="w-100"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;