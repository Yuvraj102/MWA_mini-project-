import React from 'react';
import '../css/Login.css';

const Login = () => {
    function handleSubmit(event){
        event.preventDefault()
        // alert(event.target.email.value)
        const email = event.target.email.value 
        const password = event.target.password.value 
        window.location.href = '/home';
    }
    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                <p>Don't have an account? <a href="#">Register here</a></p>
            </div>
            </form>
        </div>
    );
}

export default Login;
