var swiper = new Swiper(".slide1", {
  navigation: {
    nextEl: ".next1",
    prevEl: ".prev1",
  },
  slidesPerView: 5,
  //   slidesPerView: "auto",
  spaceBetween: 16,
  centeredSlides: true,
  loop: true,
  loopAdditionalSlides: 30,

  //   effect: "coverflow",
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 50,
  //     modifier: 1,
  //     slideShadows: true,
  //   },
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
});
