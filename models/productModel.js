import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

  productName: {
    type: String,
    required: true
  },

  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }

});

const product = mongoose.model("Product", productSchema);

export default product;