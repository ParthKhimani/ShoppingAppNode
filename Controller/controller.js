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

exports.getData = (req, res, next) => {
  console.log('called')
  Product.find().then((result) => {
    console.log(result)
    res.json({ products: result, status: 302 });
  });
};
