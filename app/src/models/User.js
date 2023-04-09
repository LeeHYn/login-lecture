"use strict";
const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    const client = this.body;
    try {
      const { id, pwd } = await UserStorage.getUserInfo(client.id);

    //promise를 반환하는 애한테는 awit을 붙여 promise가 데이터를 전부 전달 받을 때까지 기다리라고 명령할수있다.
    if (id) {
      if (id === client.id && pwd === client.pwd) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디입니다" };
    } catch (err) {
      return { success: false, msg: "로그인중 에러가 발생하셧습니다." };
    }
    
  }
  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;
