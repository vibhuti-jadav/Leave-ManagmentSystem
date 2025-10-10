import mongoose from "mongoose";
import bcrypt from "bcrypt"

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
    password:{
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


UserSchema.pre("save",async function (next){
    try {
        const user = this;

        if(user.isModified("password")){
            user.password = await bcrypt.hash(user.password,8)
        }
        next()
    } catch (error) {
        next(error)
    }
});

UserSchema.statics.findByCredentials = async function (email,password){
    try {
        const user = await this.findOne({email});

        if(!user){
            throw new Error("unable to login");
        }

        const isMatched = await bcrypt.compare(password,user.password)

        if(!isMatched){
            throw new Error("unable to login")
        }

        return user
    } catch (error) {
        throw new Error(error.message)        
    }
}

const User = mongoose.model("User",UserSchema);

export default User;