import Product from "./Product.js";

class ProductService {
    async create(postproduct) {
        const createdProduct = await Product.create(postproduct);
        return createdProduct;
    };

    async getAll() {
        const products = await Product.find();
        return products;
    };

    async getOne(id) {
        if (!id) {
          throw new Error("ID не вказано");
        }
        const product = await Product.findById(id);
        return product;
    };

    async update(product) {
        if (!product._id) {
            throw new Error("ID не вказано");
        }
        const updatedProduct = await Product.findByIdAndUpdate(product._id, product, {new: true});
        return updatedProduct;
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