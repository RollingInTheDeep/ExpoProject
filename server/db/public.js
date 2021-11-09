const connection = require("./connection");
const mysql = require("mysql2");

//폴더 조회
async function getPublicArticle() {
  let [rows, fields] = await connection.query(`SELECT * FROM Public`);
  return rows;
}

module.exports = {
  getPublicArticle,
};
