const connection = require("./connection");
const mysql = require("mysql2");

//Public 글 조회
async function getPublicArticle() {
  let [rows, fields] = await connection.query(
    `SELECT P.title, P.content, P.hashTag, P.createDate, U.nickname, U.image, U.userId FROM Public P JOIN User U WHERE P.userId = U.userId ORDER BY P.createDate DESC`
  );
  return rows;
}

//Public 글 추가
async function addPublicArticle({ userId, title, content, hashTag }) {
  const query = mysql.format("INSERT INTO Public SET ?", {
    userId,
    title,
    content,
    hashTag,
  });
  let [rows, fields] = await connection.query(query);
  return rows;
}

//Public 글 User 별로 조회
async function getPublicArticleByUser({ userId }) {
  let [rows, fields] = await connection.query(
    `SELECT P.title, P.content, P.hashTag, P.createDate, U.nickname, U.image, U.userId FROM Public P JOIN User U WHERE P.userId = U.userId AND U.userId=${userId} ORDER BY P.createDate DESC`
  );
  return rows;
}

module.exports = {
  getPublicArticle,
  addPublicArticle,
  getPublicArticleByUser,
};
