
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
  var swiper__resultListSort = new Swiper('.section__resultList__sort.swiper-container', {
    slidesPerView: 3,
    slidesPerGroup: 3,
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
        slidesPerGroup: 4,
      },
    }
  });
  var swiper__detailBanner = new Swiper('.section__detailBanner .swiper-container', {
    slidesPerView: 1,
    slidesPerGroup: 1,
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
  });

  $(".js-btn").click(function () {
    $(this).find('.js-btn__info').toggleClass('invisible');
    if ($(this).find(".js-btn__more").text() != "expand_less") {
      $(this).find(".js-btn__more").text("expand_less");
    } else {
      $(this).find(".js-btn__more").text("expand_more");
    }
  });
  
  $(window).resize(function () {
    if ($(window).width() < 576) {
      $('.js-myBooking__item').addClass(' bg-secondary rounded--deepen');
      $('.js-myBooking__item').removeClass('border-bottom');
    } else {
      $('.js-myBooking__item').removeClass('bg-secondary rounded--deepen border-bottom');
    }
    if ($(window).width() > 576) {
      $('.js-myBooking__item').addClass('border-bottom');
    }

    if ($(window).width() < 992){
      $('.js-calendar__mobileDropdown').addClass('w-100');
      $('.js-calendar__mobileTable').addClass('table-sm');
    } else{
      $('.js-calendar__mobileDropdown').removeClass('w-100');
      $('.js-calendar__mobileTable').removeClass('table-sm');
    }
  });

  switch ($('title').text()) {

    case "Index":
      $(".js-nav").addClass('fixed-top');
      break;
    case "Result":
      $(".js-nav").addClass('fixed-top');
      break;
    case "Result - Detail":
      $(".js-nav").addClass('fixed-top');
      break;
    case "Login":
      $(".js-nav").hide();
      $(".js-footer__nav").hide();
      break;
    case "My Booking":
      $(".js-nav__signUp").hide();
      $(".js-nav__login").text('David Lin').addClass('dropdown-toggle login__navImage');
      break;
  }
  
});
