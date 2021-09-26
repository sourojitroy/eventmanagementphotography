import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'white' }}>
            <div className="text-center">
                <ul>
                    <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                    <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                    <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                </ul>
            </div>
            <div className="text-center text-dark py-3">
                <small>
                    Copyright © Event Photography {new Date().getFullYear()}
                </small>
            </div>
        </footer>
    );
};

export default Footer;