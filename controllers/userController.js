const User = require('../model/userModel');

exports.userRegister = async (req, res) => {

    try {

        const user = new User(req.body);
        /*console.log("req.body", req); */
        const result = await user.save();

        res.status(201).json({ status: true, message: "Data Inserted", data: result });

    } catch (error) {
        res.status(500).json({ error: error , message: 'Internal Server Error' });   
    }


}