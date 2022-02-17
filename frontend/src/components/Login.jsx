import React from "react";
import  '../docs/styles/root.css';
import  '../docs/styles/login.css';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    function handleSuccess() {
       navigate('/', { replace: true });
    }

    function handleRegister() {
        navigate('/register', { replace: true });
    }

    return (
        <div className="login-form">
            <form>
                <h1>Login</h1>
                <div className="login-container">
                    <div className="input-field">
                        <label>
                            <input placeholder="Email" type="email"/>
                        </label>
                    </div>
                    <div className="input-field">
                        <label>
                            <input autoComplete="new-password" placeholder="Password" type="password"/>
                        </label>
                    </div>
                </div>

                <div className="action">
                    <button onClick={handleRegister}>Register</button>
                    <button id="main-button" onClick={handleSuccess}>Sign in</button>
                </div>
            </form>
        </div>
    );
}