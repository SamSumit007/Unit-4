const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({


    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: [{ type: String }],
}, {
    versionKey: false,
    timestamps: true,
});



userSchema.pre("save", function(next) {
    if (!this.isModified("password")) return next()

    var hash = bcrypt.hashSync(this.password, 8);
    this.password = hash
    return next()
})

userSchema.methods.checkpassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("user", userSchema); // user => users
module.exports = User;