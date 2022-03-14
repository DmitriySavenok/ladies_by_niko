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
