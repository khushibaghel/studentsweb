//----------------------- NAVBAR --------------------------------
window.onscroll = function () {
    myFunction();
  };
var navbar = document.getElementById("nav");
var navRight = document.getElementById("navRight");
var sticky = navbar.offsetTop;
var firstPageSpace = document.getElementById("firstPageSpace");
var responsive = false;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.style.backgroundColor = "#2e7eed";
    firstPageSpace.style.height = "81.3vh";
  } else {
    navbar.style.backgroundColor = "#f1f1f177";
    navbar.classList.remove("sticky");
    firstPageSpace.style.height = "75vh";
  }
}
function expandNavbar() {
  if (responsive) {
    navbar.classList.remove("navbarResponsive");
    navRight.classList.remove("navRightResponsive");
    if (!navbar.classList.contains("sticky"))
      firstPageSpace.style.height = "75vh";
      responsive = false;
  } else {
    navbar.className += " navbarResponsive";
    navRight.className += " navRightResponsive";
    if (!navbar.classList.contains("sticky"))
    firstPageSpace.style.height = "81.3vh";
    responsive = true;
  }
}
// ------------------------------------------------------------------

// ---------------------- FIRST PAGE -------------------------
const [red, green, blue] = [255, 255, 255];
const section1 = document.querySelector(".firstPage");
const section1text = document.querySelector("#firstPageText");
const section1footer = document.querySelector("#firstPageFooter");
const incentives = document.querySelector('#incentivesContainer');
window.addEventListener("scroll", () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 150;
  const [r, g, b] = [red / y, green / y, blue / y].map(Math.round);
  const [fr, fg, fb] = [255 - red / y, 255 - green / y, 255 - blue / y];
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  section1.style.color = `rgb(${fr}, ${fg}, ${fb})`;
  // section1footer.style.transform = `scale(${1 - (y - 1) / 5})`;
});
// ------------------------------------------------------------------

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// AUTOMATIC SLIDESHOW
// var slideIndex = 0;
// showSlides();

// function showSlides() {
  //   var i;
  //   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
  //     slides[i].style.display = "none";
  //   }
  //   slideIndex++;
  //   if (slideIndex > slides.length) {slideIndex = 1}
  //   slides[slideIndex-1].style.display = "block";
  //   setTimeout(showSlides, 5000); // Change image every 2 seconds
  // }
  
  