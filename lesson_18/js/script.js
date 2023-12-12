// Menu opening
const icon = document.querySelector(".icon-menu")
icon.addEventListener("click", function () {
  document.documentElement.classList.toggle("menu-opened")
})

// Icon counter
const icons = document.querySelector(".actions-header")

icons.addEventListener("click", function (e) {
  const favSpan = document.getElementById("fav-span")
  let favSpanNum = parseInt(document.getElementById("fav-span").innerText)

  const cartSpan = document.getElementById("cart-span")
  let cartSpanNum = parseInt(document.getElementById("cart-span").innerText)

  if (e.target.id === "fav" || e.target === favSpan) {
    if (!isNaN(favSpanNum)) {
      favSpanNum += 1
      favSpan.innerText = favSpanNum
    }
  } else if (e.target.id === "cart" || e.target === cartSpan) {
    if (!isNaN(cartSpanNum)) {
      cartSpanNum += 1
      cartSpan.innerText = cartSpanNum
    }
  }
  if (favSpanNum > 99) {
    favSpan.style.fontSize = "6px"
  }
  if (cartSpanNum > 99) {
    cartSpan.style.fontSize = "6px"
  }
})
