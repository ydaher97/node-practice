import { Product } from "../model/productsModel.js";

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        res.status(500).send("error:" + error.message);
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            res.status(404);
            throw new Error("No such product");
        }
        res.send(product);
    } catch (error) {
        res.send("error:" + error.message);
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).send(product);
    } catch (error) {
        res.status(500).send("error:" + error.message);
    }
};

const getAllActiveProducts = async (req, res) => {
    try {
        const products = await Product.find({ isActive: true });
        res.send(products);
    } catch (error) {
        res.status(500).send("error:" + error.message);
    }
};

const getByPrice = async(req, res) => {
    try {
        const { min, max } = req.query;
        console.log(min, max)
        const products = await Product.find({
            'details.price': { $gt: min, $lt: max }
        });
        console.log(products)
        res.send(products);

    } catch (error) {
        res.status(500).send("error:" + error.message);
    }
  };

  const updateProduct = async (req, res) => {
    try {
        const { productId, isActive, discount } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { isActive, 'details.discount': discount },
            { new: true } 
        );

        res.send(updatedProduct);
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};

export { getAllProducts, getProductById, createProduct ,getAllActiveProducts,getByPrice,updateProduct};
