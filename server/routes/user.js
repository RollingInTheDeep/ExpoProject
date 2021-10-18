var express = require("express");
var router = express.Router();
const { getFolder, getPrivateArticle } = require("../db/user");

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

//폴더 조회
router.get("/private", async function (req, res, next) {
  const folderId = req.query.folderId;
  console.log(req);
  const rows = await getPrivateArticle({ folderId: folderId });
  res.json(rows);
});

module.exports = router;
