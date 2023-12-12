// Menu opening
const icon = document.querySelector(".icon-menu")
icon.addEventListener("click", function () {
  document.documentElement.classList.toggle("menu-opened")
})

// Sub-menu opening
const menuList = document.querySelector(".menu__list")

menuList.addEventListener("click", function (e) {
  if (window.innerWidth <= 990) {
    const target = e.target
    if (target.classList.contains("menu__link") && target.closest(".menu__item--parent")) {
      const menuItem = target.closest(".menu__item--parent")
      const subMenu = target.nextElementSibling
      menuItem.classList.toggle("sub-menu-opened")
    }
  }
})
