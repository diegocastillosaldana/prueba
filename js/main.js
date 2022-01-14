AOS.init();

if (navigator.userAgent.indexOf('Mac OS X') != -1) {
  $("body").addClass("mac");
}

/* close nav when clicking on a nav item */
document.addEventListener("click", function (e) {
  if (e.target.closest(".contact") ||
    e.target.closest(".contact2") ||
    e.target.closest(".contact3") ||
    e.target.closest(".contact4") ||
    e.target.closest(".contact5") ||
    e.target.closest(".contact6") ||
    e.target.closest(".contact7")) {
    jQuery('body').addClass('scrollhidden');
  }
  if (e.target.closest(".close")) {
    toggleNav();
    jQuery('body').removeClass('scrollhidden');
  }
});

/* MENU MOVIL */
var menumovil = document.querySelector(".icon-menu");
menumovil.addEventListener("click", menumovilact);

function menumovilact() {
  menumovil.classList.toggle("activo");
  document.querySelector(".secmenumovil").classList.toggle("open");
}

/* close nav when clicking on a nav item */
document.addEventListener("click", function (e) {
  if (e.target.closest(".close-menu-movil")) {
    menumovilact();
  }
});

/* CONTACTO */
var navToggler = document.querySelector(".contact");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
  navToggler.classList.toggle("activo");
  document.querySelector(".contacto").classList.toggle("open");
  console.log("entro")
}

/* close nav when clicking on a nav item */
// document.addEventListener("click", function (e) {
//   if (e.target.closest(".close")) {
//     toggleNav();
//   }
// });


var navToggler = document.querySelector(".contact2");
navToggler.addEventListener("click", toggleNav);

var navToggler = document.querySelector(".contact3");
navToggler.addEventListener("click", toggleNav);

var navToggler = document.querySelector(".contact4");
navToggler.addEventListener("click", toggleNav);

var navToggler = document.querySelector(".contact5");
navToggler.addEventListener("click", toggleNav);

var navToggler = document.querySelector(".contact6");
navToggler.addEventListener("click", toggleNav);

var navToggler = document.querySelector(".contact7");
navToggler.addEventListener("click", toggleNav);

var navToggler = document.querySelector(".contact8");
navToggler.addEventListener("click", toggleNav);


// /* carrusel de imagenes equipo administrativo */
// const slider = document.querySelector("#slider1");
// let sliderSection = document.querySelectorAll(".slider__section");
// let sliderSectionLast = sliderSection[sliderSection.length -1];

// const btnRight = document.querySelector("#btn-right");
// const btnLeft = document.querySelector("#btn-left");

// slider.insertAdjacentElement('afterbegin',sliderSectionLast);

// function Next(){
//     let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
//     slider.style.marginLeft = "-200%";
//     slider.style.transition = "all 0.5s";
//     setTimeout(function(){
//         slider.style.transition = "none";
//         slider.insertAdjacentElement('beforeend', sliderSectionFirst);
//         slider.style.marginLeft = "-100%";
//     }, 500);
// }

// function Prev(){
//     let sliderSection = document.querySelectorAll(".slider__section");
//     let sliderSectionLast = sliderSection[sliderSection.length -1];
//     slider.style.marginLeft = "0";
//     slider.style.transition = "all 0.5s";
//     setTimeout(function(){
//         slider.style.transition = "none";
//         slider.insertAdjacentElement('afterbegin',sliderSectionLast);
//         slider.style.marginLeft = "-100%";
//     }, 500);
// }

// btnLeft.addEventListener('click', function(){
//     Next();
// });

// btnRight.addEventListener('click', function(){
//     Prev();
// });

// setInterval(function(){
//     Next();
// }, 5000);

function cambiar(imgchange) {
  document.getElementById('cuadro').style.backgroundImage = imgchange;
  document.getElementById('title1').style.display = 'block';
  document.getElementById('title2').style.display = 'none';
  document.getElementById('title3').style.display = 'none';
  document.getElementById('title4').style.display = 'none';
}

function cambiartexto() {
  document.getElementById('title1').style.display = 'block';
  document.getElementById('title2').style.display = 'none';
  document.getElementById('title3').style.display = 'none';
  document.getElementById('title4').style.display = 'none';
}

function cambiartexto2() {
  document.getElementById('title1').style.display = 'none';
  document.getElementById('title2').style.display = 'block';
  document.getElementById('title3').style.display = 'none';
  document.getElementById('title4').style.display = 'none';
}

function cambiartexto3() {
  document.getElementById('title1').style.display = 'none';
  document.getElementById('title2').style.display = 'none';
  document.getElementById('title3').style.display = 'block';
  document.getElementById('title4').style.display = 'none';
}

function cambiartexto4() {
  document.getElementById('title1').style.display = 'none';
  document.getElementById('title2').style.display = 'none';
  document.getElementById('title3').style.display = 'none';
  document.getElementById('title4').style.display = 'block';
}

function cambiarcolor(col, colnn) {
  document.getElementById('btn1').style.backgroundColor = col;
  document.getElementById('btn2').style.backgroundColor = colnn;
  document.getElementById('btn3').style.backgroundColor = colnn;
  document.getElementById('btn4').style.backgroundColor = colnn;
  document.getElementById('btn1').style.color = '#FFF';
  document.getElementById('btn2').style.color = '#494748';
  document.getElementById('btn3').style.color = '#494748';
  document.getElementById('btn4').style.color = '#494748';
}

function cambiarcolor2(col, colnn) {
  document.getElementById('btn1').style.backgroundColor = colnn;
  document.getElementById('btn2').style.backgroundColor = col;
  document.getElementById('btn3').style.backgroundColor = colnn;
  document.getElementById('btn4').style.backgroundColor = colnn;
  document.getElementById('btn2').style.color = '#FFF';
  document.getElementById('btn1').style.color = '#494748';
  document.getElementById('btn3').style.color = '#494748';
  document.getElementById('btn4').style.color = '#494748';
}

function cambiarcolor3(col, colnn) {
  document.getElementById('btn1').style.backgroundColor = colnn;
  document.getElementById('btn2').style.backgroundColor = colnn;
  document.getElementById('btn3').style.backgroundColor = col;
  document.getElementById('btn4').style.backgroundColor = colnn;
  document.getElementById('btn3').style.color = '#FFF';
  document.getElementById('btn2').style.color = '#494748';
  document.getElementById('btn1').style.color = '#494748';
  document.getElementById('btn4').style.color = '#494748';
}

function cambiarcolor4(col, colnn) {
  document.getElementById('btn1').style.backgroundColor = colnn;
  document.getElementById('btn2').style.backgroundColor = colnn;
  document.getElementById('btn3').style.backgroundColor = colnn;
  document.getElementById('btn4').style.backgroundColor = col;
  document.getElementById('btn4').style.color = '#FFF';
  document.getElementById('btn2').style.color = '#494748';
  document.getElementById('btn3').style.color = '#494748';
  document.getElementById('btn1').style.color = '#494748';
}

$(document).ready(function () {
  $('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.slider-equipo').slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});