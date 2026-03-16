import express from "express";
import { createCategory, deleteController, editController, readCategory, updateController } from "../controllers/categoryController.js";

const router = express.Router();

// create category
router.post("/add", createCategory);

// read category
router.get("/", readCategory);

// delete category
router.get("/delete/:id", deleteController);

// edit category
router.get("/edit/:id", editController);

// update category
router.post("/update/:id", updateController);


export default router;