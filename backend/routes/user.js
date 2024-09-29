import express from "express";
import {
  loginUser,
  myProfile,
  register,
  verifyUser,
} from "../controllers/user.js";

import { isAuth } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/user/register", register); 
router.post("/user/login", loginUser);
router.post("/user/verify", verifyUser);
router.get("/user/me",isAuth,myProfile);
 
export default router;  