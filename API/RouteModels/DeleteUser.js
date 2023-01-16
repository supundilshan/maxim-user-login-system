const Database = require("../Database/ConnectDb");

const DeleteUser = (req, res) => {
    DeleteFromUserTable(req, res);
    DeleteFromLoginTable(req, res);
}

const DeleteFromUserTable = (req, res) => {
    const sql = `DELETE FROM genaral_user_information WHERE id = ${req.params.id};`;

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

const DeleteFromLoginTable = (req, res) => {
    const sql = `DELETE FROM system_login WHERE id = ${req.params.id};`;

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

module.exports = { DeleteUser }