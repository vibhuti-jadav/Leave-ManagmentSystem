import express  from "express";

import auth from "../middleware/auth.js";
import leaveController from "../controllers/leaveController.js";

const router = express.Router();

router.use(auth);

router.post("/apply",leaveController.applyLeave);

export default router;