const mysql = require("mysql");

const db = mysql.createConnection({
    host: "node-lhy.coxuqaaz1s7c.ap-northeast-2.rds.amazonaws.com",
    user:"admin",
    password : "jack9812",
    database: "login_lecture"
});

db.connect();
module.exports = db;