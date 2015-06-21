$(document).ready(function () {

    var page;
    var specific_page;
    var position;

    $("#nav li a").click(function (e) {
        e.preventDefault();
        $("#nav li a").removeClass("active");
        $(this).addClass("active");
        page = $(this).attr("href");
        specific_page = $("div" + page);
        position = specific_page.offset().top;
        $("body").animate({scrollTop: position}, 1000);
    });

    $("#logo a").click(function (e) {
        e.preventDefault();
        $("body").animate({scrollTop: 0}, 1000);
        $("#nav li a").removeClass("active");
    });

    var top_position = [];
    var temp;
    for (var i = 1; i <= $("#nav ul li").size(); i++) {
        temp = $("#content-wrapper div:nth-child(" + i + ")").attr("id");
        temp = "#" + temp;
        temp = $(temp).offset().top - $(window).scrollTop();
        top_position.push(temp);
        console.log(top_position);
    }

});