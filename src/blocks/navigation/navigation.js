// Открытие и закрытие меню на смартфонах
var logo = document.getElementById("logo");
var navigation = document.getElementById("navigation");

function navigationToggle() {
    navigation.classList.toggle("navigation__opened");
    logo.classList.toggle("logo-fixed")
}

// Добавление класса со стилями для подложки навигации
let isScroll = 0, // доп. проверка
    targetScroll = 10; // расстояние до действия / в px

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
  if($(".navigation__block").hasClass("navigation-to-bottom"));{
    $('.navigation__block').removeClass('navigation-to-bottom');
  }


  destination = jQuery(elementClick).offset().top - 70;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
  return false;
  });
});
