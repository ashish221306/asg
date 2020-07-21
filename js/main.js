 document.querySelector('.header .menu').onclick=function(){
        document.querySelector('.header .headerlist').classList.toggle('show');
      
    }
 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("gototop").style.display = "block";
    } else {
        document.getElementById("gototop").style.display = "none";
    }
   
}
function topFunction() {
 
     $('html, body').animate({scrollTop:0}, 'slow');
}