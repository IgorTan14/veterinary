$(function(){
     $('.reviews__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        Infinite: true,
        autoplay: true,
        autoplaySpeed: 3000
     })

     $('.header__burger').on('click', function(){ 
      $('.burger__content').toggleClass('burger__content--active');
      $('.header__burger').toggleClass('header__burger--active');
    });

});




