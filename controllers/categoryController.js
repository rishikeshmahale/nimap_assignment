import Category from "../models/categoryModel.js";

export const createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;

    await Category.create({ categoryName });

    res.redirect("/categories");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating category");
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.render("categories", { categories });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching categories");
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.redirect("/categories");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting category");
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.render("editCategory", { category });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching category");
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;

    await Category.findByIdAndUpdate(req.params.id, { categoryName });

    res.redirect("/categories");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating category");
  }
};