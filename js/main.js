/* const topBtn = document.querySelector(".top_btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    gsap.to(topBtn, 03, { opacity: 1 });
  } else {
    gsap.to(topBtn, 03, { opacity: 0 });
  }
});
topBtn.addEventListener("click", () => {
  gsap.to(window, 0.5, { scrollTo: 0 });
});

const imgEls = document.querySelectorAll(".img_box div");

imgEls.forEach((imgEl, index) => {
  gsap.to(imgEl, 2, {
    delay: index * 0.5,
    opacity: 1,
  });
});

//txt
const txtEls = document.querySelectorAll(".txt_box div");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    gsap.to(txtEls[0], 0.5, {
      opacity: 1,
    });
    gsap.to(txtEls[1], 1, {
      opacity: 1,
    });
    gsap.to(txtEls[2], 1, {
      opacity: 1,
    });
  }
}); */

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
