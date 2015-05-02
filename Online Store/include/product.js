$(document).ready(function () {

    var products;
    $.getJSON("json/products.json", function (data) {
        products = data;
        var id = getId();
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
            $("#container").html("Продуктът не е намерен");
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
                    $("#container").html();
                }
            }
            if (found == false) {
                $("#container").html("Продуктът не е намерен");
            }
        }
    }
});