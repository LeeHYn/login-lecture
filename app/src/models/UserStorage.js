"use strict";

class UserStorage {
  static #users = {
    id: ["qwer", "1234", "이현진"],
    pwd: ["1234", "1234", "1234"],
    name: ["우리밋", "123", "123"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;