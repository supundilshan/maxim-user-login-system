import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayUserData = () => {

    const [userdata, getUserdata] = useState([]);

    useEffect(() => {
        // Get the details of that particuler book
        axios.get(`http://localhost:3001/user/${1}`)
            .then((res) => {
                getUserdata(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>

        </div>
    );
};

export default DisplayUserData;