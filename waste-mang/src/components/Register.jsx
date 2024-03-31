import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../css/Register.css';
import { addEntity, registerUser } from '../datastore/databse';
import { uuidv4 } from '@firebase/util';
import {Redirect} from 'react-router-dom'
const Register = () => {
    const history = useHistory();
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const role = event.target.role.value;
        const result = await registerUser({
            email,
            password,
            role,
            points: 0,
            created_at: new Date(),
            id: uuidv4()
        });
        // alert(result);
        setRedirect(true);
        
    }

    if (redirect) {
        
        window.location.href = '/home';
        
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Role</label>
                    <input type="text" id="role" name="role" placeholder='ngo, user, company' />
                </div>
                <button type="submit">Register</button>
                <div className="login-link">
                    <p>Already have an account? <a href="/login">Sign in here</a></p>
                </div>
            </form>
        </div>
    );
}

export default Register;
