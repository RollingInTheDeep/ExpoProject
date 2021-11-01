var express = require("express");
var router = express.Router();

const { findUser, createUser } = require("../db/auth");
const { upload } = require("./multerS3");

//사용자 생성
router.post("/signup", async function (req, res, next) {
  const result = await findUser({
    name: req.body.name,
    email: req.body.email,
  });
  if (!result.length) {
    await createUser({
      name: req.body.name,
      email: req.body.email,
      image: req.body.image,
      nickname: req.body.nickname,
      description: req.body.description,
    });
  }
  res.json({ success: true });
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

module.exports = router;
