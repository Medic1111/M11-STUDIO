const productsRouter = require("express").Router();
const productsControl = require("../controllers/products");

productsRouter.route("/").get(productsControl.getControl);

module.exports = productsRouter;
