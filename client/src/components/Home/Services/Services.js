import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(()=>{
        fetch(`https://event-photography-company.herokuapp.com/services`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])


    return (
        <section className="container my-5">
            <h1 className='text-center font-weight-bold py-4 mb-4'>Our Awesome Services</h1>
            <div className="row justify-content-center align-items-center">
                {
                    services.length == 0 && <h6>Loading....</h6>
                }
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;