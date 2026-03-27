import express from "express";
import connectDB from "./config/db.js";
import methodOverride from "method-override";
import dotenv from "dotenv";

import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

// method override
app.use(methodOverride("_method"));

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});