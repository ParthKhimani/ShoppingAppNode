const stripe = require("stripe")(
  "sk_test_51MlQ9rSBkF0GV1OMU9MK5lSLgkUtGJzy7S8vEz5023nn2ryQ95NKQd5NR3SHNLeJf4BVyYPtZcNnQI1tifC0BwJ100oxVCurec"
);

const Product = require("../Model/product");

exports.getCategory = (req, res, next) => {
  const productCategory = [];
  Product.find().then((result) => {
    for (let i = 0; i < result.length; i++) {
      productCategory.push(result[i].productCategory);
    }
    const individualCategory = new Set(productCategory);
    const individualCategoryArray = Array.from(individualCategory);
    res.json({ productsCategory: individualCategoryArray, status: 302 });
  });
};

exports.setFilter = (req, res, next) => {
  const { category, priceRange } = req.body;
  let filter = {};

  if (category && !priceRange) {
    filter = { productCategory: category };
  } else if (!category && priceRange) {
    const minPrice = priceRange.split("-")[0];
    const maxPrice = priceRange.split("-")[1];
    filter = {
      productPrice: { $gte: minPrice, $lte: maxPrice },
    };
  } else if (category && priceRange) {
    const minPrice = priceRange.split("-")[0];
    const maxPrice = priceRange.split("-")[1];
    filter = {
      productCategory: category,
      productPrice: { $gte: minPrice, $lte: maxPrice },
    };
  }

  Product.find(filter).then((result) => {
    res.json({ products: result });
  });
};

exports.getData = (req, res, next) => {
  Product.find().then((result) => {
    res.json({ products: result, status: 302 });
  });
};

exports.checkout = (req, res, next) => {
  console.log(req.body);
};
