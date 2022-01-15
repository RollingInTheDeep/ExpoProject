var express = require("express");
var router = express.Router();

const { findUserId, findUser, createUser } = require("../db/auth");
const { upload } = require("./multerS3");

//사용자 생성
router.post("/signup", async function (req, res, next) {
  const id = req.body.id;
  const pw = req.body.pw;

  const idCheck = await findUserId({
    id: id,
  });
  if (typeof idCheck != "undefined") {
    res.json({ success: false });
  } else {
    await createUser({
      id: id,
      pw: pw,
      nickname: req.body.nickname,
      description: req.body.description,
    });

    res.json({ success: true });
  }
});

//사용자 생성시 이미지 업로드
router.post(
  "/uploadImage",
  upload.single("file"),
  async function (req, res, next) {
    res.json({
      image: req.file.location,
    });
  }
);

router.get("/signin", async function (req, res, next) {
  const id = req.query.id;
  const pw = req.query.pw;
  const rows = await findUser({ id: id, pw: pw });
  res.json(rows);
});

module.exports = router;
