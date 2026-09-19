import ProductModel from "../models/productModel.js";


export const productpage = async (req, res) => {
    try {
        const products = await ProductModel.find();

        res.status(200).json({
            success: true,
            data: products
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "DB not available",
            error: error.message
        });
    }
};
export const productid = async (req, res) => {
    try {
        const products = await ProductModel.findById(req.params.id)();

        res.status(200).json({
            success: true,
            data: products
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "DB not available",
            error: error.message
        });
    }
};



export const addProduct = async (req, res) => {
    try {
        const product = await ProductModel.create(req.body);

        res.status(201).json({
            success: true,
            msg: "Product added successfully",
            data: product
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            msg: "Product could not be added",
            error: error.message
        });
    }
};
