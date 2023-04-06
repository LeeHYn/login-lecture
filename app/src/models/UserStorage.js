"use strict";

const fs = require("fs").promises;
class UserStorage {
  //은닉화한 메서드는 항상 클래스의 최상단으로 올려야한다(코딩 컨밴션)
  static #getUserInfo() {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id,pwd,name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static getUsers(...fields) {
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
  static getUserInfo(id) {
    return fs.readFile("./src/databases/users.json").then((data) => {
      return this.#getUserInfo(data, id);
    });
  }

  static save(userInfo) {
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pwd.push(userInfo.pwd);
    console.log(users);
  }
}

module.exports = UserStorage;
