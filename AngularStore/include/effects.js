$(document).ready(function () {


//hover product image
    $(".product-wrapper").hover(function () {
        $(this).find("img").stop().animate({opacity: 0.35}, 200);
    }, function () {
        $(this).find("img").stop().animate({opacity: 1}, 200);
    });

});