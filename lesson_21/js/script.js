// Menu opening
const icon = document.querySelector(".header__icon")
icon.addEventListener("click", function () {
  document.documentElement.classList.toggle("menu-opened")
})

// Main Swiper
const mainSwiper = new Swiper("#main-swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  autoplay: {
    delay: 5000,
  },
})

// Main buttons remove
const mainSwiperContainer = document.getElementById("main-swiper")
const swiperButtonNext = mainSwiperContainer.querySelector(".swiper-button-next")
const swiperButtonPrev = mainSwiperContainer.querySelector(".swiper-button-prev")

function updateSwiperButtons() {
  if (window.innerWidth < 477) {
    swiperButtonNext.classList.add("swiper-button-hidden")
    swiperButtonPrev.classList.add("swiper-button-hidden")
  } else {
    swiperButtonNext.classList.remove("swiper-button-hidden")
    swiperButtonPrev.classList.remove("swiper-button-hidden")
  }
}

document.addEventListener("DOMContentLoaded", updateSwiperButtons)
window.addEventListener("resize", updateSwiperButtons)

// Card Swiper
const cardSwiper = new Swiper("#card-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 0,

  breakpoints: {
    1031: {
      slidesPerView: 4,
      spaceBetween: 36,
    },
    694: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    490: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
})

// const cardSwiperEl = document.querySelector("#card-swiper")
// const cardSwiperCardsArray = cardSwiperEl.getElementsByClassName("swiper-slide")

// function changeCardsMargin(cardsArray) {
//   for (let i = 0; i < cardsArray.length; i++) {
//     cardsArray[i].style.marginRight = "0px"
//   }
// }
// changeCardsMargin(cardSwiperCardsArray)
