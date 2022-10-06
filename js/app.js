var btn = document.querySelector(".menu_btn");
btn.addEventListener("click", function () {
  var menu = document.querySelector(".menu");
  var menu_btn = document.querySelector(".menu_btn");
  menu.classList.toggle("active");
  menu_btn.classList.toggle("active");
});

var list = document.querySelectorAll(".menu ul li");
for (var i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    var menu = document.querySelector(".menu");
    var menu_btn = document.querySelector(".menu_btn");
    menu.classList.remove("active");
    menu_btn.classList.remove("active");
  });
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

$(document).ready(function () {
  $(".bck").backToTop({
    trigger: 300,
  });

  $(".demo").slick();

  $(".list-item").click(function () {
    let value = $(this).attr("data-filter");
    if (value == "all") {
      $(".list-box").show("600");
    } else {
      $(".list-box")
        .not("." + value)
        .hide("600");
      $(".list-box")
        .filter("." + value)
        .show("600");
    }
  });
  $(".list-item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // $(".owl-carousel").owlCarousel({
  //     loop: true,
  //     animateOut: "slideOutDown",
  //     animateIn: "flipInX",
  //     margin: 30,
  //     stagePadding: 30,
  //     smartSpeed: 450,
  //     responsive: {
  //       0: {
  //         items: 1,
  //       },
  //       600: {
  //         items: 1,
  //       },
  //       1000: {
  //         items: 1,
  //       },
  //     },
  //   });

  $(".scrollspy").scrollSpy();

  $(".list-item").click(function () {
    let value = $(this).attr("data-filter");
    if (value == "all") {
      $(".list-box").show("600");
    } else {
      $(".list-box")
        .not("." + value)
        .hide("600");
      $(".list-box")
        .filter("." + value)
        .show("600");
    }
  });
  $(".list-item").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // $(window).on("load", function () {
  //     $("#spin").fadeOut("fast");

  // });

  $(".list-box").slice(0, 6).show();
  $(".load_btn").on("click", function () {
    $(".list-box:hidden").slice(0, 6).slideDown();
    if ($(".list-box:hidden").length == 0) {
      $(".load_btn").fadeOut();
    }
  });
});
