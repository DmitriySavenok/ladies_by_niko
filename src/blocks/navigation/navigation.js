// Открытие и закрытие меню на смартфонах
var logo = document.getElementById("logo");
var navigation = document.getElementById("navigation");

function navigationToggle() {
    navigation.classList.toggle("navigation__opened");
    logo.classList.toggle("logo-fixed")
}

$(document).ready(function() {
  jQuery(".scrollto").click(function () {
  elementClick = jQuery(this).attr("href")

  $('#navigation').removeClass('navigation__opened')
  $('#logo').removeClass('logo-fixed')


  destination = jQuery(elementClick).offset().top - 70;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
  return false;
  });
});

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
