import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddService = () => {

    const [imageURL, setImageURL] = useState(null);
    const [upload, setUpload] = useState('')
    const [color, setColor] = useState('')

    const { register, handleSubmit, errors, reset } = useForm();
    const onSubmit = data => {

        const serviceData = {
            title:data.serviceTitle,
            description:data.serviceDescription,
            price:data.serviceCost,
            image:imageURL
        }
        if(imageURL == null){
            setUpload('Uploaded fail please try again');
            setColor('red');
        }
        if(imageURL !== null){
            setUpload('Uploaded successfull');
            setColor('green');
        }
        const url = `https://event-photography-company.herokuapp.com/addService`;

        fetch(url, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(serviceData)
        })
        .then(res => {
            console.log('server side response ', res)
            reset()
        })
    }


    const handleImageUpload = image =>{
        setUpload('')
        console.log(image.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '28dc48b6a06e6e1806a389a8a20f48be');
        imageData.append('image', image.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '570px' }} encType="multipart/form-data">

                <label htmlFor="serviceTitle">Service Title</label>
                <input type="text" placeholder="Enter title" name="serviceTitle" id="serviceTitle" className="form-control" ref={register({ required: true })} />
                {errors.serviceTitle && <span className="text-danger"><small>Service Title is required</small></span>}

                <div className="custom-file">
                    <input type="file" className="custom-file-input" style={{cursor:'pointer'}} id="customFile" name="file" onChange={handleImageUpload} required/>
                    <label className="custom-file-label" htmlFor="customFile">Upload an Image</label>
                </div>
                {errors.serviceImage && <span className="text-danger"><small>Service Thumbnail is required</small></span>}
                <br></br>
                <label htmlFor="serviceDescription">Service Description</label>
                <textarea name="serviceDescription" id="serviceDescription" cols="30" rows="10" ref={register({ required: true })} className="form-control" placeholder="Enter Description"></textarea>
                {errors.serviceDescription && <span className="text-danger"><small>Short description is required</small></span>}<br></br>
                <label htmlFor="serviceCost">Service Cost</label>
                <input type="number" placeholder="Enter Cost" name="serviceCost" id="serviceCost" className="form-control" ref={register({ required: true })} />
                {errors.serviceCost && <span className="text-danger"><small>Service Cost is required</small></span>}
                <br></br>
                <input type="submit" className="btn btn-primary px-3 py-2" value="Submit" />
            </form>
            <p style={{color:color}}>{upload}</p>
        </div>
    );
};

export default AddService;