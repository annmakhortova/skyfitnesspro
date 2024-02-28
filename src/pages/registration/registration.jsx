import React, { useState } from 'react';
import { Button } from "../../UI/Button/Button";
import { Logo } from "../../UI/Logo/Logo";
import style from "./Registration.module.scss";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const LoginSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); 

    // Function to handle user registration
    const handleRegistration = async (e) => {
        e.preventDefault(); // Prevent default form submission
        if(password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            // Redirect to login page or dashboard after successful registration
            navigate('/login');
        } catch (error) {
            console.error(error.message);
            alert("Error during registration: " + error.message);
        }
    };

    return (
        <div className={style.container}>
            <header>
              <Logo className={style.logo} />
            </header>
    
            <div className={style.inputs}>
                <div className={style.input}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className={style.input}>
                    <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className={style.input}>
                    <input type="password" placeholder="Повторите пароль" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
            </div>
    
            <div className={style.buttonsContainer}>
             <button className={style.registerButton} onClick={handleRegistration}>Зарегистрироваться</button>
            </div>
    
        </div>
    );
};
