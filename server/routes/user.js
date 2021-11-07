var express = require("express");
var router = express.Router();
const {
  getFolder,
  addFolder,
  deleteFolder,
  getPrivateArticle,
  addPrivateArticle,
  getProfile,
} = require("../db/user");

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

//폴더 삭제
router.delete("/folders", async function (req, res, next) {
  const selectedItem = req.body.selectedItem;
  const rows = await deleteFolder({ selectedItem: selectedItem });
  res.json(rows);
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

//Profile 조회
router.get("/profile", async function (req, res, next) {
  const userId = req.query.userId;
  const rows = await getProfile({ userId: userId });
  res.json(rows[0]);
});

module.exports = router;
