const connection = require("./connection");
const mysql = require("mysql2");

//Public 글 조회
async function getPublicArticle() {
  let [rows, fields] = await connection.query(`SELECT * FROM Public`);
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

module.exports = {
  getPublicArticle,
  addPublicArticle,
};
