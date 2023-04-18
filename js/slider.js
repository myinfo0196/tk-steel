$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:5000,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive:{
        1:{
            items:1
        },
        1:{
            items:3
        },
        1:{
            items:1
        }
    }
})


$('.owl-carousel .owl-item').on('mouseenter',function(e){
    $(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
  })
  $('.owl-carousel .owl-item').on('mouseleave',function(e){
    $(this).closest('.owl-carousel').trigger('play.owl.autoplay',[500]);
  })
