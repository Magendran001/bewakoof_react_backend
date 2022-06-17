const express = require("express");
const app = express();
const cors = require("cors");

const connect = require("./config/db.js");
const productcontroller = require("./controller/productcontroller");
const usercontroller = require("./controller/usercontroller");
const logincontroller = require("./controller/logincontroller")
app.use(express.json())
app.use(cors())


app.get("/maggi", (req, res) => {

    return res.send("maggi")
})


app.use("/signup", usercontroller)


app.use("/products", productcontroller)
app.use("/login", logincontroller)

app.listen(2345, async () => {
    try {

        await connect()

        console.log("listening on port 2345");
    } catch (err) {
        console.log(err.message);
    }
});