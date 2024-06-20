import { verify } from "crypto";
import mongoose from "mongoose";

const userSchema = new  mongoose.Schema({
    username : {
        type: String,
        required: [true, "Username is required"],
        unique: true,
    },
    email : {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password : {
        type: String,
        required: [true, "Password is required"],
    },
  
    isAdmin : {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken : {
        type: String,

    },
    forgotPasswordExpire : {
        type: Date,
    },
    verifyToken : {
        type: String,
    },
    verifyTokenExpire : {
        type: Date,
    },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;



