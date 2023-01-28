// GENERAL PACKAGES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const AppError = require("./utils/app_error");
require("dotenv").config();
const app = express();

// MIDDLEWARES:

app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.use(helmet.hsts());
app.use(helmet.ieNoOpen());
app.use(helmet.noSniff());
app.use(helmet.dnsPrefetchControl());
app.use(helmet.expectCt());
app.use(helmet.originAgentCluster());
app.use(helmet.referrerPolicy());
// config for image reading outta self-src
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https: data:"],
    },
  })
);
app.use(
  helmet({
    crossOriginEmbedderPolicy: false,
  })
);
const limiter = rateLimit({
  max: 100,
  window: 60 * 60 * 1000,
  message: "Too many requests from this IP, try again in an hour",
});
app.use("/api", limiter);
process.env.NODE_ENV === "development" && app.use(morgan("dev"));
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use(cors({ origin: "*" }));
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(express.static(path.resolve(__dirname, "../client/build")));

// PERSONAL MIDDLEWARES
const errController = require("./controllers/errController");
const authRouter = require("./routes/auth");
const productsRouter = require("./routes/products");
const cartRouter = require("./routes/cart");

// ROUTES
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/user", cartRouter);

// UNIVERSAL/UNHANDLED ROUTES
if (process.env.NODE_ENV === "production") {
  app.all("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"))
  );
} else {
  app.all("*", (req, res, next) => {
    next(new AppError(`${req.originalUrl} is not supported`, 404));
  });
}

// ERR MIDDLEWARE/CONTROLLER
app.use(errController);

module.exports = app;
