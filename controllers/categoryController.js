import Category from "../models/categoryModel.js";

// create category controller 
export const createCategory = async (req, res) => {

  const { categoryName } = req.body;

  await Category.create({
    categoryName
  });

  res.redirect("/categories");
}


// read category controller
export const readCategory = async (req, res) => {

  const categories = await Category.find();

  res.render("categories", { categories });

}


// delete controller

export const deleteController = async (req, res) => {

  await Category.findByIdAndDelete(req.params.id);

  res.redirect("/categories");

}


export const editController = async (req, res) => {

  const categoryData = await Category.findById(req.params.id);

  res.render("editCategory", { category: categoryData });

}


export const updateController = async (req, res) => {

  const { categoryName } = req.body;

  await Category.findByIdAndUpdate(req.params.id, {
    categoryName
  });

  res.redirect("/categories");

}