import React from 'react';

import { useNavigate } from 'react-router-dom';

const WelcomeNote = () => {

    const navigate = useNavigate();

    const directToUserLogin = () => {
        navigate(`/login`);
    }

    const directToUserSignin = () => {
        const usrObject = { title: "Register", fname: "", lname: "", birthday: "", age: 0, gender: "male", email: "", password1: "", phone: "" }
        navigate(`/signin`, { state: usrObject });
    }

    return (
        <div className='welcome-container'>

            <div className='welcome-note-container'>
                <h2 className='welcome-note'>Welcome to Maxim Impressions Lanka (Pvt) Ltd.</h2>
            </div>


            <div className='btn-container'>

                <div className='btn-wrapper'>
                    <div className='login-btn'>
                        <button className='button' onClick={directToUserLogin}>
                            LOGIN
                        </button>
                    </div>

                    <div className='signin-btn'>
                        <button className='button' onClick={directToUserSignin}>
                            SIGNIN
                        </button>
                    </div>
                </div>



            </div>

            <div className='foot-note'>
                <h4>If you have a Maxim account, please sign in</h4>
                <h4>If you do not have a Maxim account please register with us</h4>
            </div>
        </div>
    );
};

export default WelcomeNote;