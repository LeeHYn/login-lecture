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

  fetch("/Login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.err(new Error("로그인 중 에러 발생"));
    });
}
