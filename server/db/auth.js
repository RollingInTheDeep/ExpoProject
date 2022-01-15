const connection = require("./connection");
const mysql = require("mysql2");

//사용자 아이디 중복조회
async function findUserId({ id }) {
  let [rows, fields] = await connection.query(
    `SELECT * FROM User WHERE id="${id}"`
  );
  return rows[0];
}

//사용자 조회
async function findUser({ id, pw }) {
  let [rows, fields] = await connection.query(
    `SELECT * FROM User WHERE id="${id}" AND pw="${pw}"`
  );
  return rows[0];
}

//사용자 생성
async function createUser({ id, pw, nickname, description }) {
  const query = mysql.format("INSERT INTO User SET ?", {
    id: id,
    pw: pw,
    nickname: nickname,
    description: description,
  });
  let [rows, fields] = await connection.query(query);
  return rows;
}

module.exports = {
  findUserId,
  findUser,
  createUser,
};
