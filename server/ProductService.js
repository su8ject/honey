import Product from "./Product.js";

class ProductService {
    async create(postproduct) {
        const createdProduct = await Product.create(postproduct);
        return createdProduct;
    };

    async getAll(req, res) {
        try {
            const products = await Product.find();
            return res.json(products);
        } catch (e) {
            res.status(500).json(e);
        };

    };

    async getOne(id) {
        if (!id) {
          throw new Error("ID не вказано");
        }
        const product = await Product.findById(id);
        return product;
    };

    async update(req, res) {
        try {
            const product = req.body;
            if (!product._id) {
                return res.status(400).json({message: "ID не вказано"});
            }
            const updatedProduct = await Product.findByIdAndUpdate(product._id, product, {new: true});
            return res.json(updatedProduct);
        } catch (e) {
            res.status(500).json(e);
        };
    };

    async delete(req, res) {
        try {
            const {id} = req.params;
            if (!id) {
                return res.status(400).json({message: "ID не вказано"});
            }
            const product = await Product.findByIdAndDelete(id);
            return res.json(product);
        } catch (e) {
            res.status(500).json(e);
        };
    };
};

export default new ProductService();