const connection = require("./connection");
const mysql = require("mysql2");

//폴더 조회
async function getFolder({ userId }) {
  let [rows, fields] = await connection.query(
    `SELECT name, folderId FROM Folder WHERE userId=${userId}`
  );
  return rows;
}

//폴더 추가
async function addFolder({ userId, name }) {
  const query = mysql.format("INSERT INTO Folder SET ?", {
    userId,
    name,
  });
  let [rows, fields] = await connection.query(query);
  return rows;
}

//폴더 삭제
async function deleteFolder({ selectedItem }) {
  const query = mysql.format(
    `DELETE FROM Folder WHERE folderId in (${selectedItem})`
  );
  let [rows, fields] = await connection.query(query);
  return rows;
}

//Private 글 조회
async function getPrivateArticle({ folderId }) {
  let [rows, fields] = await connection.query(
    `SELECT content FROM Private WHERE folderId=${folderId}`
  );
  return rows;
}

//Private 글 추가
async function addPrivateArticle({ folderId, content }) {
  const query = mysql.format("INSERT INTO Private SET ?", {
    folderId,
    content,
  });
  let [rows, fields] = await connection.query(query);
  return rows;
}

//Profile 조회
async function getPrivateInfo({ userId }) {
  let [rows, fields] = await connection.query(
    `SELECT * FROM User WHERE userId=${userId}`
  );
  return rows;
}

module.exports = {
  getFolder,
  addFolder,
  deleteFolder,
  getPrivateArticle,
  addPrivateArticle,
  getPrivateInfo,
};
