"use static";

const id = document.querySelector("#id");
name = document.querySelector("#name");
psw = document.querySelector("#pwd");
confirmPwd = document.querySelector("#confirm-pwd");
registerbtn = document.querySelector("#button");

registerbtn.addEventListener("click", register);

function register() {
  const req = {
    id: id.value,
    name: name.value,
    pwd: pwd.value,
    confirmPwd: confirmPwd.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/Login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.err(new Error("로그인 중 에러 발생"));
    });
}
