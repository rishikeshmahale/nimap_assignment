import express from "express";
import {
  createCategory,
  getAllCategories,
  deleteCategory,
  getCategoryById,
  updateCategory
} from "../controllers/categoryController.js";

const router = express.Router();

// get all
router.get("/", getAllCategories);

// create
router.post("/", createCategory);

// edit page
router.get("/:id/edit", getCategoryById);

// update 
router.put("/:id", updateCategory);

// delete 
router.delete("/:id", deleteCategory);

export default router;