import React, { useState, useEffect } from 'react';


const Normal_user_SignIn = () => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [birthday, setBirthday] = useState("");
    const [age, setAge] = useState();
    const [gender, setGender] = useState("male");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [phone, setPhone] = useState();

    const insertUserData = (e) => {
        e.preventDefault();
        const User_Object = { fname, lname, birthday, age, gender, email, password1, password2, phone };
        console.log(User_Object);
    }

    return (
        <div>
            <h1>SIgn IN</h1>

            <form onSubmit={insertUserData}>

                <div className="form-group">
                    <label htmlFor="fname"> First Name: </label>
                    <input type="text" className="form-control" id="fname" placeholder="Enter first name"
                        value={fname} onChange={(event) => { setFname(event.target.value) }} />
                </div>

                <div className="form-group">
                    <label htmlFor="lname"> Last Name: </label>
                    <input type="text" className="form-control" id="lname" placeholder="Enter last name"
                        value={lname} onChange={(event) => { setLname(event.target.value) }} />
                </div>

                <div className="form-group">
                    <label htmlFor="birthday">Birthday: </label>
                    <input type="date" className="form-control" id="birthday"
                        value={birthday} onChange={(event) => { setBirthday(event.target.value) }} />
                </div>

                <div className="form-group">
                    <label htmlFor="age"> Age: </label>
                    <input type="number" className="form-control" id="age" placeholder="Age"
                        value={age} onChange={(event) => { setAge(event.target.value) }} />
                </div>

                <div className="form-group">
                    <label htmlFor="gender">Gender: </label>
                    <select className="form-control" id="gender"
                        value={gender} onChange={(event) => { setGender(event.target.value) }}>

                        <option value={"male"}>Male </option>
                        <option value={"female"}>Female </option>
                        <option value={"non"}>Not prefered</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address: </label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email"
                        value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </div>

                <div className="form-group">
                    <label htmlFor="password1">Password: </label>
                    <input type="password" className="form-control" id="password1" placeholder="Enter password"
                        value={password1} onChange={(event) => { setPassword1(event.target.value) }} />
                </div>

                <div className="form-group">
                    <label htmlFor="password2">Confirm Password: </label>
                    <input type="password" className="form-control" id="password2" placeholder="Confirm password"
                        value={password2} onChange={(event) => { setPassword2(event.target.value) }} />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone: </label>
                    <input type="number" className="form-control" id="phone" placeholder="Eter a phone number"
                        value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                </div>

                <button type="submit" className="btn btn-primary">Registor Me</button>
            </form>
        </div>
    );
};

export default Normal_user_SignIn;