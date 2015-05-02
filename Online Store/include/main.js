$(document).ready(function () {
    var products;
    console.log("fuuuuuu");
    $.getJSON("json/products.json", function (data) {
        console.log("ok");
        products = data;
        console.log(products);
    }).fail(function (xhr, textStatus, errorThrown) {
        alert("error ajax" + xhr + " " + textStatus + " " + errorThrown);
    });
    console.log("chrome sucks")

});

