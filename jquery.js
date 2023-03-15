

// _____________________ ON Scroll menu ______________________

window.onscroll = function() {myFunction()};

var header = document.getElementById("Header");
var sticky = header.offsetTop;

var logo = document.getElementById("img_logo_black");

var progress50 = document.getElementById("progreso50")
var progress60 = document.getElementById("progreso60")
var progress70 = document.getElementById("progreso70")
var progress80 = document.getElementById("progreso80")
var progress90 = document.getElementById("progreso90")
var progress100 = document.getElementById("progreso100")

var progress50_2 = document.getElementById("progreso50_2")
var progress50_3 = document.getElementById("progreso50_3")
var progress60_2 = document.getElementById("progreso60_2")
var progress70_2 = document.getElementById("progreso70_2")
var progress70_3 = document.getElementById("progreso70_3")
var progress80_2 = document.getElementById("progreso80_2")
var progress90_2 = document.getElementById("progreso90_2")
var progress100_2 = document.getElementById("progreso100_2")

let mybutton = document.getElementById("back_to_top");

function myFunction() {
  if (document.documentElement.scrollTop > 700) {
    header.classList.add("sticky");
    mybutton.style.display = "block";
    logo.style.display = "none";

    if (document.documentElement.scrollTop > 1600){
      progress70.style.animationPlayState = "running";
      progress100.style.animationPlayState = "running";
      progress80.style.animationPlayState = "running";
      progress60.style.animationPlayState = "running";
      progress50.style.animationPlayState = "running";
      progress50_2.style.animationPlayState = "running";

      progress60_2.style.animationPlayState = "running";
      progress100_2.style.animationPlayState = "running";
      progress50_3.style.animationPlayState = "running";
      progress70_2.style.animationPlayState = "running";
      progress70_3.style.animationPlayState = "running";
    }
  

  } else {
    header.classList.remove("sticky");
    mybutton.style.display = "none";
    logo.style.display = "block";
  }
}

// _____________________ Botón ver mas en menu ______________________

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function BOTON_MAS() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

// _____________________ Botón ver mas en certificaciones ______________________
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// _____________________ Back to Top Button ______________________


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// _____________________ Smooth scrooling ______________________

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });