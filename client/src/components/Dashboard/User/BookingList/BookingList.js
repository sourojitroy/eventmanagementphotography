import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import List from './List/List';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { email } = loggedInUser;

    const[bookedData, setBookedData] = useState([])

    useEffect(()=>{
        fetch(`https://event-photography-company.herokuapp.com/userBooked?email=${email}`)
        .then(res => res.json())
        .then(data => setBookedData(data))
    },[email])

    return (
        <ol>
            {
                bookedData.map(bookInfo =><List bookInfo={bookInfo} key={bookInfo._id}></List>)
            }
        </ol>
    );
};

export default BookingList;