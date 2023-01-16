const Database = require("../Database/ConnectDb");

const ReadUserTable = (req, res) => {
    const sql = `SELECT * FROM genaral_user_information`;

    // Exicute Quary
    Database.DB.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
}


const ReadUserTableByEmail = (req, res) => {
    const sql = `SELECT * FROM genaral_user_information
                    WHERE email_address = "${req.params.id}"`;

    // Exicute Quary
    Database.DB.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
}

const ReadLoginTable = (req, res) => {
    const sql = `SELECT * FROM system_login;`;

    // Exicute Quary
    Database.DB.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
}

const ReadLoginTableByEmail = (req, res) => {
    const sql = `SELECT * FROM system_login
                    WHERE email = "${req.body.email}" AND password = "${req.body.password}"`;

    // Exicute Quary
    Database.DB.query(sql, (err, result) => {
        let Login_Success;
        let id, userType;

        if (err) {
            Login_Success = false;
            console.log("err is====>" + err);
        }
        else {
            console.log(result[0]);

            if (result[0] == undefined || result[0] == null) {
                Login_Success = false; //login failed
                email = null;
                userType = null;
            }
            else {
                Login_Success = true; //login succeed
                email = result[0].email;
                userType = result[0].user_type;
            }

            const Login_Info = { Login_Success, userType, email }

            // return login information to front
            console.log(Login_Info);
            res.send(Login_Info);
        }
    });
}

module.exports = {
    ReadUserTable,
    ReadUserTableByEmail,

    ReadLoginTable,
    ReadLoginTableByEmail
};


