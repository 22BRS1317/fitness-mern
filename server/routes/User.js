import express from "express";
import {
  UserLogin,
  UserRegister,
  addWorkout,
  deleteWorkout,
  getUserDashboard,
  getWorkoutsByDate,
} from "../controllers/User.js";
import { verifyToken } from "../middleware/verifyToken.js";


const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserLogin);
router.delete("/user/workouts/:id",deleteWorkout);
router.get("/dashboard", verifyToken, getUserDashboard);
router.get("/workout", verifyToken, getWorkoutsByDate);
router.post("/workout", verifyToken, addWorkout);

export default router;
