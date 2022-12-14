import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    passwordHash: {type: String, required: true},
},{
    timestamps: true
});

const User = mongoose.model('user', userShema);
export default User;