const Database = require("../Database/ConnectDb");

const ReadByID = (req, res) => {
    const sql = `SELECT * FROM genaral_user_information
                    WHERE id = ${req.params.id}`;

    // Exicute Quary
    Database.DB.query(sql, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Success");
        }
    });
}

module.exports = {
    ReadByID
};


