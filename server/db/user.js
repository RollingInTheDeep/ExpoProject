const connection = require("./connection");
const mysql = require("mysql2");

//폴더 조회
async function getFolder({ userId }) {
  let [rows, fields] = await connection.query(
    `SELECT name FROM Folder WHERE userId=${userId}`
  );
  return rows;
}

module.exports = {
  getFolder,
};
