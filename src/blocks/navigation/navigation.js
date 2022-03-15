// Открытие и закрытие меню на смартфонах
var logo = document.getElementById("logo");
var navigation = document.getElementById("navigation");
var body = document.querySelector("body");
var photo = document.querySelector(".photo-main");

function navigationToggle() {
    navigation.classList.toggle("navigation__opened");
    photo.classList.toggle("stop-photo-scroll");
    logo.classList.toggle("logo-fixed")
    body.classList.toggle("stop-scroll")
}

let isScroll = 0, // доп. проверка
    targetScroll = 10; // расстояние до действия / в px

// Добавление класса со стилями для подложки навигации
$(window).on('scroll', function(){
  if ($(window).width() > 760 && $(window).width() < 1200) {
    if(isScroll === 0 && $(this).scrollTop() >= targetScroll) {
      isScroll = 1;
      $('.navigation').addClass('navigation-tablet-background');
      console.info('change 1');
    } else if(isScroll === 1 && $(this).scrollTop() < targetScroll) {
      isScroll = 0;
      $('.navigation').removeClass('navigation-tablet-background')
      console.info('change 0');
    }
  }
  if ($(window).width() > 1224) {
    if(isScroll === 0 && $(this).scrollTop() >= targetScroll) {
      isScroll = 1;
      $('.first-screen-button').addClass('button-hide');
    } else if(isScroll === 1 && $(this).scrollTop() < targetScroll) {
      isScroll = 0;
      $('.first-screen-button').removeClass('button-hide')
    }
  }
});

// Смещение навигации при выбора последней секции на ПК версии
$(document).ready(function() {
  jQuery(".desktop-contact").click(function () {
    $('.navigation__block').removeClass('navigation-to-bottom');
    if($(window).width() > 1400) {
      $('.navigation__block').addClass('navigation-to-bottom');
    }
  });
});

$(document).ready(function() {
  jQuery(".desktop-tariffs").click(function () {
    $('.navigation__block').removeClass('navigation-to-bottom');
    if($(window).width() > 1400) {
      if($(".navigation__block").hasClass("navigation-to-bottom"));{
        $('.navigation__block').removeClass('navigation-to-bottom');
      }
    }
  });
});

// Смещение навигации при скроле до последнего элемента.
$(document).ready(function() {
  if ($(window).width() > 1400) {
    $(document).ready(function(){
      var $element = $('.contacts');
      let counter = 0;
      $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();
        //Если скролл до конца елемента
        var offset = $element.offset().top + $element.height();
        //Если скролл до начала елемента
        //var offset = $element.offset().top

        if (scroll > offset && counter == 0) {
          $('.navigation__block').addClass('navigation-to-bottom');
          counter = 0;
        }
      });
    });
  }
});

$(window).on('scroll', function(){
  $('.navigation__block').removeClass('navigation-to-bottom');
  let isScroll1 = 0, // доп. проверка
    targetScroll1 = 10; // расстояние до действия / в px
  if ($(window).width() > 1400) {
    if(isScroll1 === 0 && $(this).scrollTop() <= targetScroll1) {
      isScroll1 = 1;
      if($(".navigation__block").hasClass("navigation-to-bottom"));{
        $('.navigation__block').removeClass('navigation-to-bottom');
      }
    } else if(isScroll1 === 1 && $(this).scrollTop() > targetScroll1) {
      isScroll1 = 0;
      $('.navigation__block').addClass('navigation-to-bottom');
    }
  }
});

// Скролинг до нужного раздела сайта при нажатии
$(document).ready(function() {
  jQuery(".scrollto").click(function () {
  elementClick = jQuery(this).attr("href")

  $('.navigation__block').removeClass('navigation-to-bottom');
  $('#navigation').removeClass('navigation__opened')
  $('#logo').removeClass('logo-fixed')
  $('#body').removeClass('stop-scroll')
  $(".photo-main").removeClass('stop-photo-scroll')
  if($(".navigation__block").hasClass("navigation-to-bottom"));{
    $('.navigation__block').removeClass('navigation-to-bottom');
  }

  destination = jQuery(elementClick).offset().top - 70;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
  return false;
  });
});
