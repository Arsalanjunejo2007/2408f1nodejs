import { Router } from "express";

import adminRoutes from "./routes/adminRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRouters.js";



const router = Router();


router.use("/", productRoutes);

router.use("/admin", adminRoutes);

router.use("/user", userRoutes);
router.use("/auth", authRoutes)

export default router;
