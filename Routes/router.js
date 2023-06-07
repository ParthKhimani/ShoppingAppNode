const express = require("express");
const controller = require("../Controller/controller");

const router = express();

router.post("/getData", controller.getData);

module.exports = router;
