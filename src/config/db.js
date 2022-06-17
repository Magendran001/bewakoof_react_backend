const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://bewakoofClone:bewakoofClone_123@cluster0.o4kpy.mongodb.net/bewakoofProjectreact?retryWrites=true&w=majority");
}
