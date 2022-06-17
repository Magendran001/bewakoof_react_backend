const express = require("express");
const User = require("../models/user.model");
const router = express.Router();


// Get route

router.get("", async (req, res) => {
    try {
        const user = await User.find().lean().exec();
        return res.status(200).send(user)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// Get user by Id route

router.get("/:id", async (req, res) => {
    try {
        const user = await User.find(req.params.id).lean().exec();
        return res.status(200).send(user)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// post route

router.post("", async (req, res) => {
    try {


        let confirm = await User.find({ email: req.body.email, mobile_number: req.body.mobile_number }).lean().exec();
        console.log(confirm)

        if (confirm.length != 0) {
            return res.status(409).send({ data: "User ALready exits" })
        }


        const user = await User.create(req.body);
        return res.status(200).send(user)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// patch route

router.patch("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).send(user)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})

// delete route

router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        return res.status(200).send(user)
    }
    catch (err) {
        return res.status(500).send(err.message);
    }
})


// Creating user profile and updating it

// router.post("/profile",authenticate, async(req, res)=>{
//     try{
//         let user = req.user;
//         user.full_name = req.body.full_name;
//         user.date_of_birth = req.body.date_of_birth;
//         user.gender = req.body.gender;
//         return res.send(user);
//     }
//     catch(err){
//         return res.status(500).send(err.message);
//     }
// })

module.exports = router;