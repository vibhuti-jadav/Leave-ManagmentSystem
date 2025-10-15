import express  from "express";

import auth from "../middleware/auth.js";
import leaveController from "../controllers/leaveController.js";
import authorize from "../middleware/authorize.js";

const router = express.Router();

router.use(auth);

router.post("/apply",leaveController.applyLeave);


router.get("/myLeaves",authorize("employee"),leaveController.getMyLeaves)

router.get("/getTeamLeaves",authorize("manager"),leaveController.getTeamLeaves)

export default router;