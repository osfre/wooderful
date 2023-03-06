var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
  });
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
  });

  let btn0 = document.querySelector(".goToNextSection1")
  let nav = document.querySelector(".navbar")
btn0.onclick = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
}
onscroll = () => {
  scrollToTop()
  navbar()
}
function scrollToTop() {
    if (window.scrollY >= 400) {
        btn0.style.display = "flex";
    }
    else {
        btn0.style.display = "none";
    }
}
function navbar() {
    if (window.scrollY >= 50) {
        nav.classList.add("show")
      }
      else {
      nav.classList.remove("show")
    }
}
let mainTitle = document.title;
window.onblur = () => {
	document.title = "Hey, Come Back";
}
window.onfocus = () => {
	document.title = mainTitle;
}

let myName = "وودرفول";
let index = 0;

function writeText() {
  document.querySelector(".name").textContent = myName.slice(0,index);
  index++;
  if (index > myName.length) {
    index = 1;
  }
}

setInterval(() => {
  writeText();
}, 500)