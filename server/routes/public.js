var express = require("express");
var router = express.Router();
const { getPublicArticle } = require("../db/public");

//Public 글 조회
router.get("/article", async function (req, res, next) {
  const rows = await getPublicArticle();
  res.json(rows);
});

module.exports = router;
