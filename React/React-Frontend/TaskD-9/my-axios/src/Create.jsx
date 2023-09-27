import axios from 'axios';
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'


function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/users', values)
        .then(res => {
            console.log(res);
            navigate('/')
        })
        .catch(err => console.log(err));
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-light'>
        <div className='border bg-white shadow px-5 pt-3 pb-5 rounded '> 
            <h3>Add a User</h3>
            <br></br>
            <form onSubmit={handleSubmit}>
                <div className='mb-2'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' className='form-control' placeholder='Enter Name' 
                    onChange={e => setValues({...values, name: e.target.value})}/>
                </div>
                <br></br>
                <div className='mb-2'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' className='form-control' placeholder='Enter Email' 
                    onChange={e => setValues({...values, email: e.target.value})}/>
                </div>
                <br></br>
                <div className='mb-2'>
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" name='phone' className='form-control' placeholder='Enter Phone Number' 
                    onChange={e => setValues({...values, phone: e.target.value})}/>
                </div>
                <br></br>
                <button className='btn btn-success'>Submit</button>
                <Link to="/" className='btn btn-primary ms-3'>Back</Link>
            </form>
        </div>
    </div>
  )
}

export default Create