import {Router} from "express"
import { auth, login, signup } from "../controllers/authController.js"
const authRoutes=Router()


authRoutes.post("/signup",signup)
authRoutes.post("/login", login)
authRoutes.get("/auth",auth)


export default authRoutes