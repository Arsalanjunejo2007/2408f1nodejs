import {Router} from "express"
import { auth, login, refresh, signup } from "../controllers/authController.js"
const authRoutes=Router()


authRoutes.post("/signup",signup)
authRoutes.post("/login", login)
authRoutes.get("/auth",auth)
authRoutes.get("/refresh",refresh)



export default authRoutes