const express = require("express");
const validPositions = require("../controllers/main");
const router = express.Router();

router.route("/").get(validPositions);

module.exports = router;
