 
//Slider functionality

$ ('.slides').bxSlider({
    auto: true,
    touchenabled: true,
    pager: true,
    adaptiveHeight:false,
    slideWidth: 2000,
    mode: 'fade',
    captions: true,
    speed: 5000,
 });

//Toggle menu on click

 function myFunction(x) {
  x.classList.toggle("change");
  document.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.menu-container')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  }

