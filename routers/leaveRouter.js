import express  from "express";

import auth from "../middleware/auth.js";
import leaveController from "../controllers/leaveController.js";
import authorize from "../middleware/authorize.js";
import validate from "../middleware/validate.js";
import leaveValidationSchema from "../validations/leaveValidation.js"

const router = express.Router();

router.use(auth);

router.post("/apply",leaveController.applyLeave);


router.get("/myLeaves",authorize("employee"),leaveController.getMyLeaves)

router.get("/getTeamLeaves",authorize("manager"),leaveController.getTeamLeaves)

router.patch("/update/:id",validate(leaveValidationSchema.updateLeave),authorize
("admin","manager"),leaveController.updateLeaves)

router.get("/stats",authorize("admin"),leaveController.leaveStats )

export default router;