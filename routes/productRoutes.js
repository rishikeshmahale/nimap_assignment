import express from "express";

import {
  getProducts,
  showAddProduct,
  addProduct,
  deleteProduct,
  editProduct,
  updateProduct
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);

router.get("/add", showAddProduct);

router.post("/add", addProduct);

router.get("/delete/:id", deleteProduct);

router.get("/edit/:id", editProduct);

router.post("/update/:id", updateProduct);

export default router;