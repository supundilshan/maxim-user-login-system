const Database = require("../Database/ConnectDb");

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

module.exports = { DeleteFromUserTable }