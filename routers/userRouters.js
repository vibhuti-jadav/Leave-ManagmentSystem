import express from "express";
import validate from "../middleware/validate.js";
import userValidation from "../validations/userValidation.js";
import userController from "../controllers/userController.js";

const router = express.Router();
router.post("/addUser",validate(userValidation.registerUser),userController.addUser)

export default router;