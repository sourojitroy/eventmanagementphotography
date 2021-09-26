import React , { useState } from 'react';
import { useForm } from "react-hook-form";

const List = ({orders}) => {

    const {_id, userName, serviceTitle, bookingState} = orders;

    const [bookedState, setBookedState] = useState('Pending');
    const { register, handleSubmit } = useForm();

    const [success, setSuccess] = useState('');

    const onSubmit = data => {

        const changeBookedState = {
            bookingState:bookedState
        }

        fetch(` https://event-photography-company.herokuapp.com/changeBookState/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(changeBookedState)
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    setSuccess('Status Changed')
                }else{
                    setSuccess('Nothing Changed')
                }
            })
    }

    return (
        <tr>
            <td>{userName}<br />{orders.userEmail}</td>
            <td>{serviceTitle}</td>
            <td>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <select name="status" ref={register} onChange={(event) =>
                        setBookedState(event.target.options[event.target.selectedIndex].value)}>
                        <option value={bookingState}>{bookingState}</option>
                        <option value="Done">{bookingState == 'Pending' ? 'Done' : 'Pending'}</option>
                    </select>
                    <input type="submit" value="change" />
                </form>
                <p style={{color:'green'}}>{success}</p>
            </td>
        </tr>
    );
};

export default List;