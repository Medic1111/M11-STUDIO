const cartRouter = require("express").Router();
const cartControl = require("../controllers/cart");
const validate = require("../utils/validate");

cartRouter
  .route("/:user_id/cart")
  .post(validate, cartControl.addControl)
  .patch(validate, cartControl.patchControl);

cartRouter
  .route("/:user_id/cart/checkout")
  .post(validate, cartControl.checkoutControl);

module.exports = cartRouter;
