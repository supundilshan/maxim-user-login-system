import React from 'react';

const WelcomeNote = () => {
    return (
        <div className='welcome-container'>

            <div className='welcome-note-container'>
                <h2 className='welcome-note'>Welcome to Maxim Impressions Lanka (Pvt) Ltd.</h2>
            </div>


            <div className='btn-container'>

                <div classname='login-btn'>
                    <button className='btn'>
                        LOGIN
                    </button>
                </div>

                <div className='signin-btn'>
                    <button>
                        REGISTER
                    </button>
                </div>

            </div>
            <div class="trapezoid trapezoid1 "></div>
            <div class="trapezoid trapezoid2 "></div>

            <div className='foot-note'>
                <h4>If you have a Maxim account, please sign in</h4>
                <h4>If you do not have a Maxim account please register with us</h4>
            </div>
        </div>
    );
};

export default WelcomeNote;