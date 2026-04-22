import Product from "./Product.js";
import fileService from "./fileService.js";

class ProductService {
    async create(postproduct, imageUrl) {
        const fileName = await fileService.saveFile(imageUrl);
        const createdProduct = await Product.create({ ...postproduct, imageUrl: fileName });
        return createdProduct;
    };

    async getAll() {
        const products = await Product.find();
        return products;
    };

    async getItems() {
        const items = await Product.find({ type: "item" });
        return items;
    };

    async getTools() {
        const tools = await Product.find({ type: "tool" });
        return tools;
    };

    async getType(type) {
        if (!type) {
            throw new Error("Тип не вказано");
        }
        const productType = await Product.find({ type: type });
        return productType;
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
        const updatedProduct = await Product.findByIdAndUpdate(product._id, product, { new: true });
        return updatedProduct;
    };

    async delete(id) {
        if (!id) {
            throw new Error("ID не вказано");
        }
        const product = await Product.findByIdAndDelete(id);
        return product;
    };
};

export default new ProductService();