import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";


export const getProducts = async (req, res) => {

  const page = parseInt(req.query.page) || 1;

  const limit = 10;

  const skip = (page - 1) * limit;

  const products = await Product.find()
    .populate("categoryId")
    .skip(skip)
    .limit(limit);

  const totalProducts = await Product.countDocuments();

  const totalPages = Math.ceil(totalProducts / limit);

  res.render("products", {
    products,
    currentPage: page,
    totalPages
  });

};


export const showAddProduct = async (req, res) => {

  const categories = await Category.find();

  res.render("addProduct", { categories });

};


export const addProduct = async (req, res) => {

  const { productName, categoryId } = req.body;

  await Product.create({
    productName,
    categoryId
  });

  res.redirect("/products");

};


export const deleteProduct = async (req, res) => {

  await Product.findByIdAndDelete(req.params.id);

  res.redirect("/products");

};


export const editProduct = async (req, res) => {

  const product = await Product.findById(req.params.id);

  const categories = await Category.find();

  res.render("editProduct", { product, categories });

};


export const updateProduct = async (req, res) => {

  const { productName, categoryId } = req.body;

  await Product.findByIdAndUpdate(req.params.id, {
    productName,
    categoryId
  });

  res.redirect("/products");

};