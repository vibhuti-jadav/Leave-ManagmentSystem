
import httpError from "../middleware/errorHandler.js";
import User from "../model/User.js";
import registerUser from "../validations/userValidation.js";

const addUser = async (req,res,next)=>{
    try {
        const {error , value} = registerUser.validate(req.body);

        if(error){
            return res.status(400).json(error.message);
        }
      req.body = value;

      const {name , email,password,role,department}=value;

      let existingUser  = await User.findOne({email});

      if(existingUser){
        return next(new httpError("user already exist  with this id",400))
      }

      const newUser = {
        name,
        email,
        password,
        role,
        department,
      };

      const saveUser = new User(newUser);

      await saveUser.save()

      res.status(201).json({message:"user create sucessfully",saveUser})


    } catch (error) {
        return next(new httpError(error.message,500))
    }
}

export default {addUser}