"use strict"

let lastEl = document.querySelector(".game-end")

lastEl.onclick = function () {
  let gameField = document.querySelector(".game-field")
  gameField.innerHTML = ""
  gameField.style.background = 'url("lesson_9/img/screamer.jpeg") no-repeat center / cover'
}
