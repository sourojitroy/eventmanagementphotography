import React from 'react';
import './List.css';

const List = ({ bookInfo }) => {
    const { serviceTitle, serviceImg, bookingState } = bookInfo;
    return (
        <li className='col-md-4 border p-2 mb-2' style={{maxWidth:'370px'}}>
            <div className="d-flex justify-content-start align-items-center mb-4">
                <div>
                    <img src={serviceImg} alt="" className="rounded-circle mr-4" width="60px"/>
                    <h5 className="text-secondary">{serviceTitle}</h5>
                </div>
                <h6 className={`book-${bookingState}`}>{bookingState}</h6>
            </div>
        </li>
    );
};

export default List;