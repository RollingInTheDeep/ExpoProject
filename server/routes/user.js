var express = require("express");
var router = express.Router();
const { getFolder } = require("../db/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//폴더 조회
router.get("/folders", async function (req, res, next) {
  const userId = req.query.userId;
  console.log(req);
  const rows = await getFolder({ userId: userId });
  res.json(rows);
});

module.exports = router;
