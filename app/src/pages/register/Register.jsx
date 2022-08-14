import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './register.css';

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (confirmPassword.current.value !== password.current.value) {
            confirmPassword.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                navigate("/login");
            } catch (err) {
                console.log(err);
            }
        }
    };
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <img className="loginLogo" src="/assets/richardcode.svg" alt="" />
                    <span className="loginDesc">
                        Display your projects for everyone to see on richardcode
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" required ref={email} type="email" className="loginInput" />
                        <input placeholder="Password" required ref={password} type="password" minLength={6} className="loginInput" />
                        <input placeholder="Confirm Password" required ref={confirmPassword} type="password" minLength={6} className="loginInput" />
                        <button className="loginButton" type='submit'>Sign Up</button>
                        <button className="loginRegisterButton">
                            Log into account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
