window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 50) {
    navbar.classList.add("navbar-shrink");
  } else {
    navbar.classList.remove("navbar-shrink");
  }
}

$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    navigation: true,
  });
});

$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    navigation: true,
  });
});
