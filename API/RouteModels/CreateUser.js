const Database = require("../Database/ConnectDb");

const Insert_to_genaralUser = (req, res) => {
    const sql = `INSERT INTO genaral_user_information(first_name,last_name,date_of_birth,age,gender,email_address,password,phone_number)
    VALUES("${req.body.fname}",
            "${req.body.lname}",
            "${req.body.birthday}",
            ${req.body.age},
            "${req.body.gender}",
            "${req.body.email}",
            "${req.body.password1}",
            ${req.body.phone} );`;

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

const Insert_to_system_login = (req, res) => {
    const sql = `INSERT INTO system_login(email,password)
    VALUES("${req.body.email}",
            "${req.body.password1}");`;

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

const InsertUserDetails = (req, res) => {
    console.log("in insert method");
    // Insert Values

    Insert_to_genaralUser(req, res);
    Insert_to_system_login(req, res);

}

module.exports = {
    InsertUserDetails
};


