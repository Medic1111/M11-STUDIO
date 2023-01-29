const handleAsync = require("../utils/handle_async");
const AppError = require("../utils/app_error");
const { User } = require("../models/users");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const sendEmail = require("../utils/send_email");
const { confirmation } = require("../assets/email");

const addControl = handleAsync(async (req, res, next) => {
  let user = await User.findByIdAndUpdate(
    { _id: req.params.user_id },
    { $push: { cart: req.body.product } },
    { new: true, runValidators: true }
  );

  res.status(200).json(user);
});

const patchControl = handleAsync(async (req, res, next) => {
  let user = await User.findByIdAndUpdate(
    { _id: req.params.user_id },
    { $pull: { cart: req.body.product } },
    { new: true, runValidators: true }
  );

  res.status(200).json(user);
});

const checkoutControl = handleAsync(async (req, res, next) => {
  const { amount, id, shippingInfo } = req.body;

  const payment = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "USD",
    description: "Medic1111",
    payment_method: id,
    confirm: true,
  });
  if (payment.statusCode === 402)
    return next(new AppError("Payment failed", 400));

  let user = await User.findByIdAndUpdate(
    { _id: req.params.user_id },
    { cart: [], $push: { transactions: payment.id } },
    { new: true, runValidators: true }
  );

  await sendEmail({
    email: user.email,
    subject: "m-11 Thank you for your purchase",
    // message: "This is the message",
    message: confirmation(payment.id),
  });

  res.status(200).json(user);
});

const cartControl = {
  addControl,
  patchControl,
  checkoutControl,
};

module.exports = cartControl;
