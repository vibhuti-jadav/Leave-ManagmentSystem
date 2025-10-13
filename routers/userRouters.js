import express from "express";
import validate from "../middleware/validate.js";
import userValidation from "../validations/userValidation.js";
import userController from "../controllers/userController.js";
import loginValidation from "../validations/loginValidation.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.post("/addUser",validate(userValidation.registerUser),userController.addUser)


router.post("/login",validate(loginValidation),userController.login)

router.patch("/update",auth,validate(userValidation.updateUser),userController.update)


export default router;