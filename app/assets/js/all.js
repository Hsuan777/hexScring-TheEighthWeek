

$(document).ready(() => {
  var swiper__inspiration = new Swiper('.section__inspiration .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      
    }
  });
  var swiper__Choices = new Swiper('.section__topChoices .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 2,
      },
      1199: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
      
    }
  });
      
  
});
