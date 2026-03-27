import express from "express";
import {
  getAllProducts,
  getAddProductPage,
  createProduct,
  deleteProduct,
  getProductById,
  updateProduct
} from "../controllers/productController.js";

const router = express.Router();

// get all
router.get("/", getAllProducts);

// add page
router.get("/new", getAddProductPage);

// create
router.post("/", createProduct);

// edit page
router.get("/:id/edit", getProductById);

// update
router.put("/:id", updateProduct);

// delete
router.delete("/:id", deleteProduct);

export default router;