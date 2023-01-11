import React, { useState, useEffect } from 'react';

const Normal_user_LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const authenticateUser = (e) => {
        const Authenticate_Object = { email, password };
        console.log(Authenticate_Object);
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={authenticateUser}>

                <div className="form-group">
                    <label htmlFor="email">Email address: </label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email"
                        value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password"
                        value={password} onChange={(event) => { setPassword(event.target.value) }} />
                </div>

                <button type="submit" className="btn btn-primary">LOGIN</button>
            </form>
        </div>
    );
};

export default Normal_user_LogIn;