$(document).ready(function(){ //시작

   // 2차메뉴
   $(".gnb > li").hover(function () {
    $(this).find(".depth2").stop().fadeToggle();
  });

  // 검색
  $(".btn_search").click(function () {
    $(".search").fadeIn();
  });
  $(".search_close").click(function () {
      $(".search").fadeOut();
  });

  // 모바일메뉴
  $(".ham").click(function () {
    $(".dim").fadeIn();
    $(".mgnb_wrap").animate({
        "right": "0"
    });
  });

  $(".mgnb_close").click(function () {
      $(".mgnb_wrap").animate({
          right: "-100%"
      });
      $(".dim").fadeOut();
  });


  const visual_list = new Swiper(".visual_list", {
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
  });

  const landmark_list = new Swiper(".landmark_list", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1000: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
    },
  });

  const brand_txt_list = new Swiper(".brand_txt_list", {
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
  });

  const brand_img_list = new Swiper(".brand_img_list", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  });

  brand_txt_list.controller.control = brand_img_list;
  brand_img_list.controller.control = brand_txt_list;


  $(".gallery ul li").hover(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

}); // 끝