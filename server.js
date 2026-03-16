import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";

import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
