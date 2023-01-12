var openMenu = document.getElementById("open-menu")
var menuMobile = document.querySelector(".menu-mobile")
var closeMenu = document.getElementById("close-menu")


function Menu(){
  menuMobile.style.display = "block"
  menuMobile.style.animation = "slideDown 1s alternate" 
  closeMenu.style.animation = "none"
  closeMenu.style.display = "block"
}

function fecharMenu(){
  menuMobile.style.animation = "slideUp 1s alternate"
    closeMenu.style.animation = "fadeOut 1s alternate"
  
  setTimeout(function () {
    menuMobile.style.display = "none"
  }, 1000) 
}


var count = 1
document.getElementById("radio1").checked = true;

setInterval(function(){
  nextImage();
}, 5000)

function nextImage(){
count++;
if(count>8){
  count = 1;
}

document.getElementById("radio"+count).checked = true;
}