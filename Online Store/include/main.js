$(document).ready(function () {

    var products;
    $.getJSON("json/products.json", function (data) {
        products = data;
        listProducts(products);
    }).fail(function (xhr, textStatus, errorThrown) {
        alert("error ajax" + xhr + " " + textStatus + " " + errorThrown);
    });


    function listProducts(products) {
        var box = "";
        for (var i = 0; i < products.length; i++) {
            var id = products[i]["id"];
            var name = products[i]["name"];
            var image = products[i]["colors"][0]["image"];
            var price = products[i]["sizes"][0]["price"];
            box = box + '<a href="product.html?id='+id+'"><div class="product-wrapper"><img src="' + image + '"><div class="title">' + name + '</div><hr><div class="price">' + price + ' лв.</div></div></a>';
        }
        $("#container").html(box);

        //hover product image
        $(".product-wrapper").hover(function () {
            $(this).find("img").stop().animate({opacity: 0.35}, 200);
        }, function () {
            $(this).find("img").stop().animate({opacity: 1}, 200);
        });

    }

});

