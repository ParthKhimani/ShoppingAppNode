const Product = require("../Model/product");

exports.getData = (req, res, next) => {
  Product.find().then((result) => {
    res.json({ products: result, status: 302 });
  });
};
