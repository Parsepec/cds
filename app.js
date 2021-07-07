const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  height: 1000,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: false,
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
