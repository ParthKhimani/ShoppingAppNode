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
  const categoryObject = req.body;
  const category = categoryObject.category;
  const price = categoryObject.priceRange;
  const minPrice = price.split("-")[0];
  const maxPrice = price.split("-")[1];
  Product.find({
    productCategory: category,
    productPrice: { $gte: minPrice, $lte: maxPrice },
  }).then((result) => {
    res.json({ products: result });
  });
};

exports.addToCart = (req, res, next) => {
  console.log(req.body);
};

exports.getData = (req, res, next) => {
  Product.find().then((result) => {
    res.json({ products: result, status: 302 });
  });
};
