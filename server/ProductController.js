import Product from "./Product.js";
import ProductService from "./ProductService.js";

class PostController {
    async create(req, res) {
        try {
            const product = await ProductService.create(req.body);
            res.json(product);
        } catch (e) {
            res.status(500).json(e);
        };
    };

    async getAll(req, res) {
        try {
            const products = await ProductService.getAll();
            return res.json(products);
        } catch (e) {
            res.status(500).json(e);
        };
    };

    async getItems(req, res) {
        try {
            const items = await ProductService.getItems();
            return res.json(items);
        } catch (e) {
            res.status(500).json(e);
        };
    };

    async getTools(req, res) {
        try {
            const tools = await ProductService.getTools();
            return res.json(tools);
        } catch (e) {
            res.status(500).json(e);
        };
    };

    async getOne(req, res) {
        try {
            const product = await ProductService.getOne(req.params.id);
            return res.json(product);
        } catch (e) {
            res.status(500).json(e);
        };
    };

    async update(req, res) {
        try {
            const updatedProduct = await ProductService.update(req.body);
            return res.json(updatedProduct);
        } catch (e) {
            res.status(500).json(e);
        };
    };

    async delete(req, res) {
        try {
            const product = await ProductService.delete(req.params.id);
            return product;
        } catch (e) {
            res.status(500).json(e);
        };
    };
};

export default new PostController();