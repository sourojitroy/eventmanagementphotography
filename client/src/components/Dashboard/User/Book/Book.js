import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../../App';
import ProcessPayment from './ProcessPayment/ProcessPayment';

const Book = () => {
    let { id } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, email } = loggedInUser;

    const [serviceFind, setServiceFind] = useState({});
    const { title, price, image } = serviceFind;

    const [visible, setVisible] = useState(null)

    useEffect(() => {
        fetch(`https://event-photography-company.herokuapp.com/getService?_id=${id}`)
            .then(res => res.json())
            .then(data => {
                setServiceFind(data[0])
                setVisible(data.length)
            })
    }, [id])

    const { register, reset } = useForm();

    const handlePaymentSuccess = paymentId => {
        const bookingData = {
            userName: name,
            userEmail: email,
            serviceTitle: title,
            serviceImg: image,
            serviceCost: price,
            payId: paymentId,
            bookingState: 'Pending'
        }
        const url = `https://event-photography-company.herokuapp.com/addBooking`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(response => {
                if (response.ok) {
                    alert('booking successfull');
                }
            })
    }

    return (
        <main>
            {
                visible == 1 && <div>
                    <div className="col-6">
                        <form style={{ maxWidth: '570px' }}>

                            <h4>User Name:<input type="text" name="name" placeholder="Your name/ Company name" className="form-control" defaultValue={name} ref={register({ required: true })} disabled /></h4>

                            <h4>User Email:<input type="email" name="email" placeholder="Your email address" className="form-control" defaultValue={email} ref={register({ required: true })} disabled /></h4>

                            <h4>Service Name:<input type="text" name="service" placeholder="Service Title" className="form-control" defaultValue={title} ref={register({ required: true })} disabled /></h4>
                            <br></br>

                            <h5>Your Service charged will be <span className="text-primary">${price}</span></h5> <br />
                        </form>
                    </div>
                    <div className="col-6">
                        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                    </div>
                </div>
            }
            {
                visible !== 1 && <div>
                    <h5 className="text-primary">Please Select a Service from Service Section for booking</h5>
                </div>
            }
        </main>
    );
};

export default Book;