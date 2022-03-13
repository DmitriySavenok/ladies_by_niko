var logo = document.getElementById("logo");
  var navigation = document.getElementById("navigation");
  var buttonOpen = document.getElementById("navigation-button-open");
  var buttonClose = document.getElementById("navigation-button-close");
  var navigatioList = document.querySelector(".navigation__list");


function navigationToggle() {
  var navigationIsClose = navigation.classList.contains("navigation-closed");

  if (navigationIsClose == true) {
    navigation.classList.remove("navigation-closed")
    navigation.classList.add("navigation__opened")
    buttonOpen.classList.add("visually-hidden")
    buttonClose.classList.remove("visually-hidden")
    navigatioList.classList.remove("visually-hidden")
    logo.classList.add("logo-fixed")
  }

  if (navigationIsClose == false) {
    navigation.classList.add("navigation-closed")
    navigation.classList.remove("navigation__opened")
    buttonOpen.classList.remove("visually-hidden")
    buttonClose.classList.add("visually-hidden")
    navigatioList.classList.add("visually-hidden")
    logo.classList.remove("logo-fixed")
  }
}

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('.scrollto').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      navigation.classList.add("navigation-closed")
      navigation.classList.remove("navigation__opened")
      buttonOpen.classList.remove("visually-hidden")
      buttonClose.classList.add("visually-hidden")
      navigatioList.classList.add("visually-hidden")
      logo.classList.remove("logo-fixed")

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});
