const express = require("express");
const router = express.Router();
const controller = require("../controllers/getdata");
const data = require("../middleware/middleware");

router.get("/assets", data.myFunction, controller.myapi);

module.exports = router;
