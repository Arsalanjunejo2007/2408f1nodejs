import { Router } from "express";
import {
    addProduct,
    productid,
    productpage
} from "../controllers/productController.js";

const productRoutes = Router();


productRoutes.post("/product/add", addProduct);
productRoutes.post("/pro/:id", productid);


productRoutes.get("/product", productpage);

export default productRoutes;
