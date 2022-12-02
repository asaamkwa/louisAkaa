
var x=15;
if (x==15){
    console.log('true');
}




//sliders here 

// follow me
$(".owl-carousel").owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    dots:true,
    items:1,
 
});

//AOS ZOOMIN
AOS.init();
// click to scrol at the top
$('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop:0
        
    },600);
})

// new nav here
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");

hamburger.addEventListener("click",()=>{
    navLinks.classList.toggle("open");
});
