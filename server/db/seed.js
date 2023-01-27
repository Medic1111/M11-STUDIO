const { mockProducts, mockUsers } = require("../db/mock_data");
const mongoose = require("mongoose");
require("dotenv").config();
const { User } = require("../models/users");
const { Product } = require("../models/products");

const connection = async () => {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(process.env.DB_URI, { useNewUrlParser: true })
    .then(() => console.log("DB READY TO SEED"))
    .catch((err) => console.log(err));
};

const seedDB = async (model, mockData) => {
  await connection();
  await model
    .create(mockData)
    .then(() => console.log(`Seeded`))
    .catch((err) => console.log(err));
  process.exit();
};

const clearDB = async (model) => {
  await connection();
  await model
    .deleteMany()
    .then(() => console.log("Deleted"))
    .catch((err) => console.log(err));
  process.exit();
};

if (process.argv[2] === "--seedDB-user") {
  seedDB(User, mockUsers);
} else if (process.argv[2] === "--seedDB-product") {
  seedDB(Product, mockProducts);
} else if (process.argv[2] === "--clearDB-user") {
  clearDB(User);
} else if (process.argv[2] === "--clearDB-product") {
  clearDB(Product);
}
