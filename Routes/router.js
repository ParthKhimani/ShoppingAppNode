const express = require("express");
const controller = require("../Controller/controller");

const router = express();

router.post("/getCategory", controller.getCategory);

router.post("/setCategory", controller.setCategory);

router.post("/getData", controller.getData);

module.exports = router;
