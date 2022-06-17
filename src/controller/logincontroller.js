const User = require("../models/user.model");
const express = require("express")
const router = express.Router();
const jwt = require("jsonwebtoken");
const newToken = (user) => {
    return jwt.sign({ user }, "abcd");
};


router.post("", async (req, res) => {
    try {
        // we will try to find the user with the email provided
        const user = await User.findOne({ mobile_number: req.body.mobile_number });

        // If user is not found then return error
        if (!user)
            return res
                .status(400)
                .send({ User: "Please try another mobile number or password" });

        // if user is found then we will match the passwords
        const match = user.checkPassword(req.body.password);

        if (!match)
            return res
                .status(400)
                .send({ message: "Please try another mobile number or password" });

        // then we will create the token for that user
        const token = newToken(user);

        // then return the user and the token
        return res.send({ user, token });
    } catch (err) {
        res.status(500).send(err.message);
    }
})

module.exports = router