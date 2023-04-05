"use strict";

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

// const users = {
//   id: ["qwer", "1234", "이현진"],
//   pwd: ["1234", "1234", "1234"],
// };

const UserStorage = require("../../models/UserStorage");

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pwd = req.body.pwd;

    const users = UserStorage.getUsers("id", "pwd");

    const response = {};

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pwd[idx] === pwd) {
        response.success = true;
        return res.json(response);
      }
    }
    response.success = false;
    response.msg = "로그인에 실패하셧습니다";
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
