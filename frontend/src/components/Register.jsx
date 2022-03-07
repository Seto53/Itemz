import React, {useState} from "react";
import '../docs/styles/root.css';
import {useNavigate} from "react-router-dom";
import {LockClosedIcon} from "@heroicons/react/solid";

export default function Register() {
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_re, setPasswordRe] = useState("");

    const [usernameErr, setUsernameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});
    const [password_reErr, setPasswordReErr] = useState({});

    function handleSuccess() {
        navigate('/', {replace: true});
    }

    const handleValidation = (e) => {
        e.preventDefault();
        if (formValidation()) {

        }
    }

    const formValidation = () => {
        const usernameErr = {};
        const emailErr = {};
        const passwordErr = {};
        const password_reErr = {};
        let isValid = true;

        if (email.length === 0) {
            emailErr.noEmail = "Please enter your email"
            isValid = false
        } else if (!emailRegex.test(email)) {
            emailErr.invalidEmail = "Invalid email"
            isValid = false
        }

        if (username.length === 0) {
            usernameErr.noUsername = "Please enter a username"
            isValid = false
        } else if (username.trim().length < 5) {
            usernameErr.usernameTooShort = "Username too short"
            isValid = false
        }

        if (password.length === 0) {
            passwordErr.noPassword = "Please enter a password"
            isValid = false
        } else if (password.length < 8) {
            passwordErr.passwordTooShort = "Password too short"
            isValid = false
        } else if (password !== password_re) {
            if (password_re.length === 0) {
                password_reErr.noPasswordRe = "Re-enter your password"
            } else {
                password_reErr.passwordMissmatch = "Password must be identical"
            }
            isValid = false
        } else if (!passwordRegex.test(password)) {
            passwordErr.passwordInvalid = "Password must contain a number [0-9] and a special character [!@#$%^&*]"
            isValid = false
        }

        setEmailErr(emailErr)
        setUsernameErr(usernameErr)
        setPasswordErr(passwordErr)
        setPasswordReErr(password_reErr)
        return isValid
    }

    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src={require('../docs/assets/logo.png')}
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your ItemZ
                            account</h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true"/>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">
                                    Username
                                </label>
                                <input
                                    id="username"
                                    name="username"
                                    type="username"
                                    autoComplete="current-password"
                                    required
                                    value={username}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Username"
                                    onChange={(e) => {
                                        setUsername(e.target.value)
                                    }}
                                />
                                {Object.keys(usernameErr).map((key) => {
                                    return <div style={{color: "red", textAlign: "center"}}>{usernameErr[key]}</div>
                                })}
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                                {Object.keys(emailErr).map((key) => {
                                    return <div style={{color: "red", textAlign: "center"}}>{emailErr[key]}</div>
                                })}
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                                {Object.keys(passwordErr).map((key) => {
                                    return <div style={{color: "red", textAlign: "center"}}>{passwordErr[key]}</div>
                                })}
                            </div>
                            <div>
                                <label htmlFor="password-re" className="sr-only">
                                    Re-enter your password
                                </label>
                                <input
                                    id="password-re"
                                    name="password-re"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password_re}
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Re-enter your password"
                                    onChange={(e) => {
                                        setPasswordRe(e.target.value)
                                    }}
                                />
                                {Object.keys(password_reErr).map((key) => {
                                    return <div style={{color: "red", textAlign: "center"}}>{password_reErr[key]}</div>
                                })}
                            </div>
                        </div>

                        <div>
                            <button onClick={handleValidation}
                                    type="submit"
                                    className="bg-indigo-600 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
                            >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
                </span>
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}