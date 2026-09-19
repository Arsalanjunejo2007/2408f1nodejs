import {Router} from "express"
import { contact, deletepage, home,  showbyid, updatepage } from "../controllers/userController.js"
import Authenticate from "../middleware/authenticate.js"
const userRoutes=Router()


// userRoutes.get("/", index)

userRoutes.post("/create",Authenticate,home)
userRoutes.get("/showid/:id",Authenticate, showbyid)
userRoutes.put("/update/:id",Authenticate, updatepage )
userRoutes.delete("/delete/:id",Authenticate, deletepage)



userRoutes.get("/contact",Authenticate,contact)

export default userRoutes