

$(document).ready(() => {
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
  var swiper__inspiration = new Swiper('.section__inspiration .swiper-container', {
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
      576: {
        slidesPerView: 2,
        slidesPerGroup: 1,

      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    }
  });
  var swiper__Choices = new Swiper('.section__resultList__sort.swiper-container', {
    slidesPerView:3,
    slidesPerGroup : 3,
    spaceBetween: 0,
    loop: false,
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
      1199: {
        slidesPerView: 4,
        slidesPerGroup : 4,
      },
    }
  });
  
  $(".js-btn").click(function () {
    $(this).find('.js-btn__info').toggleClass('invisible');
    if($(this).find(".js-btn__more").text()!="expand_less"){
      $(this).find(".js-btn__more").text("expand_less");
    }else{
      $(this).find(".js-btn__more").text("expand_more");
    }
  });
});