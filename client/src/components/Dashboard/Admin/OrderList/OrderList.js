import React, { useEffect, useState } from 'react';
import List from './List/List';

const OrderList = () => {

    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('https://event-photography-company.herokuapp.com/allBooking')
            .then(res => res.json())
            .then(data => setOrderList(data))
    }, [])

    return (
        <div className="row">
            <div className="col-md-8">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name and<br />Email ID</th>
                            <th scope="col">Service</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderList.map(orders =><List orders={orders} key={orders._id}></List>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;