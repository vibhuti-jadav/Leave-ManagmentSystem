import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    passport:{
        type:String,
        required:true,
        minlength:6,
        trim:true,
    },
    role:{
        type:String,
        enum:["employee","manager","admin"],
        default:"empolyee"
    },
    department:{
        type:String,
        enum:["sales","it","fiance","marketing","manufacturing"],
        default:"it",
    }
},
{
    timestamps:true
}
);

const User = mongoose.model("User",UserSchema);

export default User;