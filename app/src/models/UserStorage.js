"use strict";

const fs = require("fs").promises;
class UserStorage {
  //은닉화한 메서드는 항상 클래스의 최상단으로 올려야한다(코딩 컨밴션)
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); // => [id,pwd,name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
  static #getUsers(data, isALL, ...field) {
    const users = JSON.parse(data);
    if (isALL == true) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isALL, ...fields) {
    return fs.readFile("./src/databases/users.json").then((data) => {
      return this.#getUserInfo(data, isALL, ...fields);
    });
  }
  static getUserInfo(id) {
    return fs.readFile("./src/databases/users.json").then((data) => {
      return this.#getUserInfo(data, id);
    });
  }

  static async save(userInfo) {
    const users = await this.getUsers(true);
    if (users.id.includes(userInfo.id)) {
      throw "존재하는 아이디입니다";
    }
    users.name.push(userInfo.name);
    users.id.push(userInfo.id);
    users.pwd.push(userInfo.pwd);
    fs.writeFile("./src/databases/users.json", JSON.stringify(users));
    return { succes: true };
  }
}

module.exports = UserStorage;
