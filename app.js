let searchForm =document.querySelector('.search-form');
document.querySelector('#search-btn').onclick =()=>{
    searchForm.classList.toggle('active');
}

window.onscroll=()=>{
    searchForm.classList.remove('active');
}

$(document).ready(function() {

    $(window).scroll(function(){
        if(this.scrollY >5){
            $('.navbar-below').addClass('sticky')
        }else{
            $('.navbar-bottom').removeClass('sticky')
        }
    })
    //owl caurosel
    $('.owl-carousel').owlCarousel({
        margin: 5,
        navigation: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
}); // close the function and fix the parentheses
