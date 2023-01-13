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


const ReadUserTableByID = (req, res) => {
    const sql = `SELECT * FROM genaral_user_information
                    WHERE id = ${req.params.id}`;

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

const ReadLoginTableByID = (req, res) => {
    const sql = `SELECT * FROM system_login
                    WHERE id = ${req.params.id}`;

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

module.exports = {
    ReadUserTable,
    ReadUserTableByID,

    ReadLoginTable,
    ReadLoginTableByID
};


