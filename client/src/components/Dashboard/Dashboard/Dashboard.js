import React, { useContext, useEffect, useState } from 'react';
import User from '../User/User';
import Admin from '../Admin/Admin';
import { UserContext } from '../../../App';

const Dashboard = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {email} = loggedInUser;
    
    const [admin, setAdmin] = useState(null);

    useEffect(()=>{
        fetch(`https://event-photography-company.herokuapp.com/admin?email=${email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.length))
    },[email])

    return (
        <section className="container">
                {
                    admin == 1  && <Admin></Admin>
                }
                {
                    admin == 0 && <User></User>
                }
        </section>
    );
};

export default Dashboard;