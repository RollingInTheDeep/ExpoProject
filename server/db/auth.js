const connection = require("./connection");
const mysql = require("mysql2");

//사용자 조회
async function findUser({ name, email }) {
  let [rows, fields] = await connection.query(
    `SELECT * FROM User WHERE name="${name}" AND email="${email}"`
  );
  return rows[0];
}

//사용자 생성
async function createUser({ name, email, image, nickname, description }) {
  const query = mysql.format("INSERT INTO User SET ?", {
    name: name,
    email: email,
    image: image,
    nickname: nickname,
    description: description,
  });
  let [rows, fields] = await connection.query(query);
  return rows;
}

module.exports = {
  findUser,
  createUser,
};
