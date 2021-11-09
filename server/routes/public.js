var express = require("express");
var router = express.Router();
const { getPublicArticle, addPublicArticle } = require("../db/public");

//Public 글 조회
router.get("/article", async function (req, res, next) {
  const rows = await getPublicArticle();
  res.json(rows);
});

//Public 글 추가
router.post("/article", async function (req, res, next) {
  console.log(req);

  const userId = req.body.userId;
  const title = req.body.title;
  const content = req.body.content;
  const hashTag = req.body.hashTag;
  await addPublicArticle({
    userId: userId,
    title: title,
    content: content,
    hashTag: hashTag,
  });
  res.json({ success: true });
});

module.exports = router;
