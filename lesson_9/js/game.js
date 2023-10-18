"use strict"

let lastEl = document.querySelector(".game-end")

lastEl.onclick = function () {
  let gameField = document.querySelector(".game-field")
  gameField.innerHTML = ""
  gameField.style.background = 'url("../img/../img/screamer.jpeg") no-repeat center / cover'
}
