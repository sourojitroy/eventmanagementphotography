import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';

const Review = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { name, photo} = loggedInUser;

    const {register, handleSubmit, errors, reset} = useForm();
    const onSubmit = data => {
        const userReview = {
            image:data.photoURL,
            name:data.name,
            designation:data.company,
            review:data.review
        }

        const url = `https://event-photography-company.herokuapp.com/addReview`;

        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(userReview)
        })
        .then(res =>{
            if(res.ok){
                alert('Review added successfully');
                reset();
            }
        })
        
    }

    return (
        <div>
            <form style={{maxWidth:'570px'}} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="name" defaultValue={name} placeholder="Your name" className="form-control" ref={register({required: true})}/>
                {errors.name && <span className="text-danger"><small>Name is required</small></span>}
                <input type="text" name="company" placeholder="Company's name / Designation" className="form-control" ref={register({required: true})}/>
                {errors.company && <span className="text-danger"><small>Company name / Designation is required</small></span>}
                <textarea name="review" placeholder="Review" cols="30" rows="10" className="form-control" ref={register({required: true})}></textarea>
                {errors.review && <span className="text-danger"><small>Review cannot be empty.</small></span>}
                <br></br>
                <input type="hidden" name="photoURL" ref={register} defaultValue={photo}/>
                <input type="submit" className="btn btn-primary px-3 py-2"value="Submit"/>
            </form>
        </div>
    );
};

export default Review;