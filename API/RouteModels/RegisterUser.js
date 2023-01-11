const Database = require("../Database/ConnectDb");

const InsertUserDetails = (req, res) => {
    console.log("in insert method");
    // Insert Values
    const sql = `INSERT INTO table1(id, first_name)
        VALUES(1,"kamal");`;

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
    InsertUserDetails
};