  // swiper1
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
  // swiper1
  // swiper2
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
// swiper2
// scroll
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
    navScroll()
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
// scroll
// name 
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
}, 500);
// name 
// remove nav link
let btn = document.querySelector(".navbar-collapse");
let links = document.querySelectorAll(".navbar-nav .nav-link")

links.forEach(link => {
  link.onclick = () => {
    btn.classList.remove("show");
  }
});
// remove nav link
      // change nav link color
      let sections = document.querySelectorAll("section");
      let navlinks = document.querySelectorAll(".nav-item .nav-link");

        function navScroll() {
      sections.forEach((section) => {
        if (scrollY >= section.offsetTop - 300) {
        navlinks.forEach((a) => {
          a.classList.remove("active");
        if (a.getAttribute('href') == "#" + section.getAttribute("id")) {
        a.classList.add("active");
        }
      });
        }
    });
    }
      // change nav link color
      const slider = document.querySelector("#image-comparison-slider");
      const sliderImgWrapper = document.querySelector("#image-comparison-slider .img-wrapper");
      const sliderHandle = document.querySelector("#image-comparison-slider .handle");
      
      slider.addEventListener("mousemove", sliderMouseMove);
      slider.addEventListener("touchmove", sliderMouseMove);
      
      function sliderMouseMove(event) {
      
        if(isSliderLocked) return;
      
        const sliderLeftX = slider.offsetLeft;
        const sliderWidth = slider.clientWidth;
        const sliderHandleWidth = sliderHandle.clientWidth;
      
        let mouseX = (event.clientX || event.touches[0].clientX) - sliderLeftX;
        if(mouseX < 0) mouseX = 0;
        else if(mouseX > sliderWidth) mouseX = sliderWidth;
      
        sliderImgWrapper.style.width = `${((1 - mouseX/sliderWidth) * 100).toFixed(4)}%`;
        sliderHandle.style.left = `calc(${((mouseX/sliderWidth) * 100).toFixed(4)}% - ${sliderHandleWidth/2}px)`;
      }
      
      let isSliderLocked = false;
      
      slider.addEventListener("mousedown", sliderMouseDown);
      slider.addEventListener("touchstart", sliderMouseDown);
      slider.addEventListener("mouseup", sliderMouseUp);
      slider.addEventListener("touchend", sliderMouseUp);
      slider.addEventListener("mouseleave", sliderMouseLeave);
      
      function sliderMouseDown(event) {
        if(isSliderLocked) isSliderLocked = false;
        sliderMouseMove(event);
      }
      
      function sliderMouseUp() {
        if(!isSliderLocked) isSliderLocked = true;
      }
      
      function sliderMouseLeave() {
        if(isSliderLocked) isSliderLocked = false;
      }
      //////////////////////////////////////////////////////////////////////////////////////////////////
      const slider2 = document.querySelector(".image-comparison-slider2");
      const sliderImgWrapper2 = document.querySelector(".image-comparison-slider2 .img-wrapper2");
      const sliderHandle2 = document.querySelector(".image-comparison-slider2 .handle2");
      
      slider2.addEventListener("mousemove", sliderMouseMove1);
      slider2.addEventListener("touchmove", sliderMouseMove1);
      
      function sliderMouseMove1(event1) {
      
        if(isSliderLocked2) return;
      
        const sliderLeftX1 = slider2.offsetLeft;
        const sliderWidth1 = slider2.clientWidth;
        const sliderHandleWidth1 = sliderHandle2.clientWidth;
      
        let mouseX = (event1.clientX || event1.touches[0].clientX) - sliderLeftX1;
        if(mouseX < 0) mouseX = 0;
        else if(mouseX > sliderWidth1) mouseX = sliderWidth1;
      
        sliderImgWrapper2.style.width = `${((1 - mouseX/sliderWidth1) * 100).toFixed(4)}%`;
        sliderHandle2.style.left = `calc(${((mouseX/sliderWidth1) * 100).toFixed(4)}% - ${sliderHandleWidth1/2}px)`;
      }
      
      let isSliderLocked2 = false;
      
      slider2.addEventListener("mousedown", sliderMouseDown1);
      slider2.addEventListener("touchstart", sliderMouseDown1);
      slider2.addEventListener("mouseup", sliderMouseUp1);
      slider2.addEventListener("touchend", sliderMouseUp1);
      slider2.addEventListener("mouseleave", sliderMouseLeave1);
      
      function sliderMouseDown1(event1) {
        if(isSliderLocked2) isSliderLocked2 = false;
        sliderMouseMove1(event1);
      }
      
      function sliderMouseUp1() {
        if(!isSliderLocked2) isSliderLocked2 = true;
      }
      
      function sliderMouseLeave1() {
        if(isSliderLocked2) isSliderLocked2 = false;
      }
      //////////////////////////////////////////////////////////////////////////////////////////////////












      const slider3 = document.querySelector(".image-comparison-slider3");
      const sliderImgWrapper3 = document.querySelector(".image-comparison-slider3 .img-wrapper3");
      const sliderHandle3 = document.querySelector(".image-comparison-slider3 .handle3");
      
      slider3.addEventListener("mousemove", sliderMouseMove33);
      slider3.addEventListener("touchmove", sliderMouseMove33);
      
      function sliderMouseMove33(event3) {
      
        if(isSliderLocked3) return;
      
        const sliderLeftX33 = slider3.offsetLeft;
        const sliderWidth33 = slider3.clientWidth;
        const sliderHandleWidth33 = sliderHandle.clientWidth;
      
        let mouseX = (event3.clientX || event3.touches[0].clientX) - sliderLeftX33;
        if(mouseX < 0) mouseX = 0;
        else if(mouseX > sliderWidth33) mouseX = sliderWidth33;
      
        sliderImgWrapper3.style.width = `${((1 - mouseX/sliderWidth33) * 100).toFixed(4)}%`;
        sliderHandle3.style.left = `calc(${((mouseX/sliderWidth33) * 100).toFixed(4)}% - ${sliderHandleWidth33/2}px)`;
      }
      
      let isSliderLocked3 = false;
      
      slider3.addEventListener("mousedown", sliderMouseDown3);
      slider3.addEventListener("touchstart", sliderMouseDown3);
      slider3.addEventListener("mouseup", sliderMouseUp3);
      slider3.addEventListener("touchend", sliderMouseUp3);
      slider3.addEventListener("mouseleave", sliderMouseLeave3);
      
      function sliderMouseDown3(event3) {
        if(isSliderLocked3) isSliderLocked3 = false;
        sliderMouseMove33(event3);
      }
      
      function sliderMouseUp3() {
        if(!isSliderLocked3) isSliderLocked3 = true;
      }
      
      function sliderMouseLeave3() {
        if(isSliderLocked3) isSliderLocked3 = false;
      }