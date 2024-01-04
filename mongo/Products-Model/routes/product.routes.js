import express from "express";
import {
    createProduct,
    getAllProducts,
    getProductById,
    getAllActiveProducts,
    getByPrice,
    updateProduct
} from "../controller/productController.js";

const router = express.Router();

router.get("/api/products", getAllProducts);
router.put("/api/products/update", updateProduct);

router.get("/api/products/filter", getByPrice);


router.get("/api/products/active", getAllActiveProducts);

router.get("/api/products/:id", getProductById);


router.post("/api/products", createProduct);


export default router;
