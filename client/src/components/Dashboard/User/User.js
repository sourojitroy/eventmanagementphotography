import React, { useContext, useState } from 'react';
import './User.css';
import logo from '../../../images/navLogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHdd, faShoppingCart, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import Book from './Book/Book';
import BookingList from './BookingList/BookingList';
import Review from './Review/Review';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
const User = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {name} = loggedInUser;

    let history = useHistory();
    function handleClick() {
        history.push("/");
      }

    const [book, setBook] = useState(true);
    const [bookingList, setBookingList] = useState(false);
    const [review, setReview] = useState(false);

    const handleBook = ()=>{
        setBook(true);
        setBookingList(false);
        setReview(false);
    }
    const handleBooking = ()=>{
        setBook(false);
        setBookingList(true);
        setReview(false);
    }
    const handleReview = () =>{
        setBook(false);
        setBookingList(false);
        setReview(true);
    }
    return (
        <>
            <div className="d-flex justify-content-between font-weight-bold">
                <p className="logo" onClick={handleClick}><img src={logo} alt="" width="40px" /> Event Photography</p>
                <h4 className="bg-warning">{name}</h4>
            </div><hr/>
            <div className="row">
                    <div className="col-md-12 col-lg-3 screen">
                        <h6 className={`${book?"text-secondary":""}`} onClick={handleBook}>
                            <FontAwesomeIcon icon={faShoppingCart}/> Book
                        </h6><br/>
                        <h6 className={`${bookingList?"text-secondary":""}`} onClick={handleBooking}>
                            <FontAwesomeIcon icon={faHdd}/> Booking List
                        </h6><br/>
                        <h6 className={`${review?"text-secondary":""}`} onClick={handleReview}>
                            <FontAwesomeIcon icon={faCommentDots}/> Review
                        </h6><br/>
                    </div>
                    <div className="col-md-12 col-lg-9">
                        {
                            book && <Book></Book>
                        }
                        {
                            bookingList && <BookingList></BookingList>
                        }
                        {
                            review && <Review></Review>
                        }
                    </div>
            </div>
        </>
    );
};

export default User;