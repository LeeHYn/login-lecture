"use static";

const id = document.querySelector("#id");
psw = document.querySelector("#pwd");
loginbtn = document.querySelector("button");

loginbtn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    pwd: pwd.value,
  };
  console.log(req);
}
