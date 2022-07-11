const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const connect = require("./config/db.js");
const productcontroller = require("./controller/productcontroller");
const usercontroller = require("./controller/usercontroller");
const logincontroller = require("./controller/logincontroller");
const wishlistcontroller = require("./controller/wishlistcontroller")
app.use(express.json())
app.use(cors())


app.get("", productcontroller)


app.use("/signup", usercontroller)


app.use("/products", productcontroller)
app.use("/login", logincontroller)
app.use("/wishlist", wishlistcontroller)

app.listen(process.env.PORT || 5000, async () => {
    try {

        await connect()

        console.log("listening on port 2345");
    } catch (err) {
        console.log(err.message);
    }
});