const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [True, "User must type name"],
        unique: true,
    },
    tocken: {
        type: String, 
    },
    onilne: {
        type: Boolean, 
        default: false,
    },
});

module.exports = mongoose.model("User", userSchema)