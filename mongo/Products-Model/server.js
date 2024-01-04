import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import productsRouter from "./routes/product.routes.js";
dotenv.config();
const app = express();

app.use(express.json());

app.use("/", productsRouter);

const PORT = process.env.PORT || 3000;
mongoose.connect('mongodb+srv://yazeeddaher:XliN5Vyg4eJIyL9Z@cluster0.tnxocke.mongodb.net/?retryWrites=true&w=majority').then(
    app.listen(PORT, () => {
        console.log(`server is listening on port ${PORT}`);
    })
);
