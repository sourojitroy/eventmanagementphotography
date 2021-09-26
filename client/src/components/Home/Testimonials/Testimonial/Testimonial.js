import React from 'react';

const Testimonial = ({revew}) => {
    const {name, image, designation, review} = revew;
    return (
        <div className='col-md-4 border p-4 mb-3' style={{maxWidth:'370px'}}>
            
             <div className="d-flex justify-content-start align-items-center mb-4">
             <img src={image} alt="" className="rounded-circle mr-3" width="60px"/>
                <div>
                    <h5 className="font-weight-bolder">{name}</h5 >
                    <h6>{designation}</h6>
                </div>
             </div>
             <div className="text-muted">
                <p style={{overflow:'hidden'}}>{review}</p>
             </div>
        </div>
    );
};

export default Testimonial;