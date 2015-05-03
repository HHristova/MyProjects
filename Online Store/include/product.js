$(document).ready(function () {

    var products;
    $.getJSON("json/products.json", function (data) {
        products = data;
        var id = getId();
        loadProduct(id, products);
        $(".single-product-wrapper").fadeIn("slow");
    }).fail(function (xhr, textStatus, errorThrown) {
        alert("error ajax" + xhr + " " + textStatus + " " + errorThrown);
    });

    function getId() {
        var url = window.location.href + "";
        var id = url.replace(/.+?id=/, "");
        if (isNaN(id) == true) {
            id = "";
        }
        return id;
    }


    function loadProduct(id, products) {
        var found = false;
        if (id == "") {
            $("#container").html("<div id='nothing-found'>Продуктът не е намерен</div>");
        }
        else {
            for (var i = 0; i < products.length; i++) {
                if (products[i]["id"] == id) {
                    found = true;
                    var name = products[i]["name"];
                    var description = products[i]["description"];
                    var brand = products[i]["brand"];
                    var defaultColor = products[i]["colors"][0]["label"];
                    var defaultColorBg = products[i]["colors"][0]["labelbg"];
                    var defaultImage = products[i]["colors"][0]["image"];
                    var defaultSize = products[i]["sizes"][0]["sizes"];
                    var defaultPrice = products[i]["sizes"][0]["price"];
                    $(".single-product-wrapper").html('<div class="single-image"><img src="'+defaultImage+'"/></div><div class="right-side-content"><div class="single-title">'+name+'</div><div class="single-description">'+description+'</div><div class="single-brand">Производител: <span>'+brand+'</span></div><div class="single-colors">Цвят:<br/></div>');
                }
            }
            if (found == false) {
                $("#container").html("<div id='nothing-found'>Продуктът не е намерен</div>");
            }
        }
    }
});