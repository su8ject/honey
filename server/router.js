import Router from "express";
import ProductController from "./ProductController.js";
import ApiaryController from "./ApiaryController.js";
import TextController from "./TextController.js";

const router = new Router();


router.post("/products", ProductController.create);
router.get("/products", ProductController.getAll);
router.get("/products/:id", ProductController.getOne);
router.put("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.delete);
router.get("/items", ProductController.getItems);
router.get("/tools", ProductController.getTools);
router.get("/type/:type", ProductController.getType);
router.get("/apiarys", ApiaryController.getAll);
router.get("/comments", TextController.getComments);
router.get("/advantages", TextController.getAdvantages);

export default router;