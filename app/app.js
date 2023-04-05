// const http = require("http");
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html;charset=utf=8" });
//   if (req.url === "/") {
//     res.end("여기는 루트입니다");
//   } else if (req.url === "/Login") {
//     res.end("여기는 로그인 화면입니다");
//   }
// });

// app.listen(3000, () => {
//   console.log("http로 가동한 서버입니다");
// });

//모듈
const express = require("express");
const app = express();
const PORT = 3000;
//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//라우팅
const home = require("./src/routes/home");

app.use(express.static(`${__dirname}/src/public`));
app.use("/", home); // use -> 미들웨어를 등록해주는 메서드

module.exports = app;
