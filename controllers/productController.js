import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";

export const getAllProducts = async (req, res) => {
  try {
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
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching products");
  }
};

export const getAddProductPage = async (req, res) => {
  try {
    const categories = await Category.find();
    res.render("addProduct", { categories });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error loading page");
  }
};

export const createProduct = async (req, res) => {
  try {
    const { productName, categoryId } = req.body;

    await Product.create({ productName, categoryId });

    res.redirect("/products");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating product");
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/products");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting product");
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const categories = await Category.find();

    res.render("editProduct", { product, categories });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching product");
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { productName, categoryId } = req.body;

    await Product.findByIdAndUpdate(req.params.id, {
      productName,
      categoryId
    });

    res.redirect("/products");
  } catch (error) {
    res.status(500).send("Error updating product");
  }
};