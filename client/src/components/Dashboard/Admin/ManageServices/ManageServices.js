import React, { useEffect, useState } from 'react';
import EditDelete from './EditDelete/EditDelete';

const ManageServices = () => {
    const [manageService, setManageService] = useState([])

    useEffect(() => {
        fetch('https://event-photography-company.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setManageService(data))
    }, [])

    return (
        <div className="row">
            <div className="col-md-8">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th scope="col">Edit Or<br/>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageService.map(manage =><EditDelete manage={manage} key={manage._id}></EditDelete>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageServices;