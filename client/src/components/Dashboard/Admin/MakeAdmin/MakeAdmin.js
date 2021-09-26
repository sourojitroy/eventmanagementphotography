import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const {register, handleSubmit, errors, reset} = useForm();
    const onSubmit = data => {
        const adminEmail = {
            email:data.email
        }
        const url = `https://event-photography-company.herokuapp.com/addAdmin`;

        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(adminEmail)
        })
        .then(res => {
            if(res.ok){
                alert('New admin email added successfully');
                reset();
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={{maxWidth:'570px'}}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="enter a valid admin gmail ex: example@gmail.com" ref={register({required:true})} className="form-control"/>
                {errors.email && <span className="text-danger"><small>Email cannot be empty</small></span>}
                <br></br>
                <input type="submit" className="btn btn-primary px-3 py-2"value="Submit"/>
            </form>
        </div>
    );
};

export default MakeAdmin;