var express = require("express");
var router = express.Router();
const {
  getFolder,
  addFolder,
  getPrivateArticle,
  addPrivateArticle,
} = require("../db/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//폴더 조회
router.get("/folders", async function (req, res, next) {
  const userId = req.query.userId;
  const rows = await getFolder({ userId: userId });
  res.json(rows);
});

//폴더 추가
router.post("/folders", async function (req, res, next) {
  const name = req.body.name;
  const userId = req.body.userId;
  await addFolder({
    userId: userId,
    name: name,
  });
  res.json({ success: true });
});

//Private 글 조회
router.get("/private", async function (req, res, next) {
  const folderId = req.query.folderId;
  const rows = await getPrivateArticle({ folderId: folderId });
  res.json(rows);
});

//Private 글 추가
router.post("/private", async function (req, res, next) {
  const folderId = req.body.folderId;
  const content = req.body.content;

  await addPrivateArticle({
    folderId: folderId,
    content: content,
  });
  res.json({ success: true });
});

module.exports = router;
