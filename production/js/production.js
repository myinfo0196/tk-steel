

$('.right ul li').eq(0).addClass("on")

$('.left .nav ul li').click(function(e){
    e.preventDefault();
    let i = $(this).index();
    $('.left .nav ul li .submenu').slideUp().eq(i).slideDown();
    
    $('.right ul li').removeClass("on").eq(i+1).addClass("on");

})