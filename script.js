window.addEventListener('scroll',function(){
    let stickyNav = document.querySelector('.navbar');
    if (window.pageYOffset >= 696) {
        stickyNav.classList.add("sticky");
    } else {
        stickyNav.classList.remove("sticky");
    }
})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoWidth:true,
    loop:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
