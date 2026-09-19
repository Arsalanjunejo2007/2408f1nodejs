import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs"
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Please enter a valid email"
        ]
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"],
        match: [
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            "Password must contain uppercase, lowercase, number and special character"
        ]
    },

    gender: {
        type: String,
        enum: ["Male", "Female"]
    }
});

userSchema.pre("save", async function  () {
const oldpass = this.password 
this.password=await bcrypt.hash(oldpass,10)    
} )

const usermodel = model("users", userSchema);

export default usermodel;
