import React from "react";
import  '../docs/styles/root.css';
import  '../docs/styles/login.css';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    function handleSuccess() {
        navigate('/', { replace: true });
    }

    return (
        <div className="login-form">
            <form>
                <h1>Register</h1>
                <div className="login-container">
                    <div className="input-field">
                        <label>
                            <input placeholder="Username" type="text"/>
                        </label>
                    </div>
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
                    <div className="input-field">
                        <label>
                            <input autoComplete="new-password" placeholder="re-enter your password" type="password"/>
                        </label>
                    </div>
                </div>
                <p>By registering, you agree to the Terms and Conditions.</p>
                <div className="action">
                    <button id="main-button" onClick={handleSuccess}>Register</button>
                </div>
            </form>
        </div>
    );
}