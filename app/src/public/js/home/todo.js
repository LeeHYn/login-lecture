"use strict"

let today = new Date();   


let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let hours = today.getHours(); // 시
let minutes = today.getMinutes();  // 분 

function addItem() {
  let list = document.getElementById("todolist");
  let todo = document.getElementById("item");
  let listitem = document.createElement("li");
  let xbtn = document.createElement("button");
  
  let nowTime = year + '년 ' + month + '월 ' + date +"일 " + hours + '시' + minutes +"분";

  listitem.className = "list-group-item";
  xbtn.className = "close";
  xbtn.innerHTML = "&times;";
  //닫기 버튼 이벤트 생성
  xbtn.onclick = function (e) {
    let x = e.target.parentNode;
    list.removeChild(x);
  };

  listitem.innerText = todo.value +"\n" + nowTime;
  listitem.appendChild(xbtn);

  list.appendChild(listitem);

  todo.value = "";
  todo.focus();
}
