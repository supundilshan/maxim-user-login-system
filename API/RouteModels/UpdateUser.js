const Database = require("../Database/ConnectDb");

const Update = (req, res) => {
    // console.log("update")
    UpdateUserTable(req, res);

}

const UpdateUserTable = (req, res) => {
    console.log("update user")
    const sql = `UPDATE genaral_user_information SET 
                    first_name = "${req.body.fname}",
                    last_name = "${req.body.lname}",
                    date_of_birth = "${req.body.birthday}",
                    age = ${req.body.age},
                    gender = "${req.body.gender}",
                    email_address = "${req.body.email}",
                    phone_number = ${req.body.phone}
                    WHERE id = ${req.params.id};`;

    // Exicute Quary
    Database.DB.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Updated Login Table");
        }
    });
}

const UpdateLoginTable = () => {
    const sql = `SELECT * FROM genaral_user_information`;

    // Exicute Quary
    Database.DB.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Updated Login Table");
        }
    });
    console.log("upsate");
}

module.exports = { Update };