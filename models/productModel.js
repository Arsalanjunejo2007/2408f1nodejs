import { Schema, model } from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
            trim: true
        },

        description: {
            type: String,
            required: [true, "Product description is required"],
            trim: true
        },

        price: {
            type: Number,
            required: [true, "Product price is required"],
            min: 0
        },

        category: {
            type: String,
            required: [true, "Product category is required"],
            trim: true
        },

        brand: {
            type: String,
            required: [true, "Product brand is required"],
            trim: true
        },

        stock: {
            type: Number,
            required: true,
            min: 0,
            default: 0
        },

        image: {
            type: String,
            required: [true, "Product image is required"]
        },

        rating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0
        }
    },
    {
        timestamps: true
    }
);

const ProductModel = model("products", productSchema);

export default ProductModel;
