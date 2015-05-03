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
        var loadedProduct;
        if (id == "") {
            $("#container").html("<div id='nothing-found'>Продуктът не е намерен</div>");
        }
        else {
            for (var i = 0; i < products.length; i++) {
                if (products[i]["id"] == id) {
                    found = true;
                    loadedProduct = products[i];
                    var name = products[i]["name"];
                    var description = products[i]["description"];
                    var brand = products[i]["brand"];
                    var defaultColorBg = products[i]["colors"][0]["labelbg"];
                    var defaultImage = products[i]["colors"][0]["image"];

                    //Colors
                    var colors = products[i]["colors"];
                    var colorsHtml = "";
                    for (var i = 0; i < colors.length; i++) {
                        if (i == 0) {
                            colorsHtml = colorsHtml + "<div class='selectedColor' style='background: " + colors[i]["label"] + ";' data-color='" + colors[i]["labelbg"] + "' data-info='" + colors[i]["label"] + "'></div>";
                        }
                        else {
                            colorsHtml = colorsHtml + "<div style='background: " + colors[i]["label"] + ";' data-color='" + colors[i]["labelbg"] + "' data-info='" + colors[i]["label"] + "'></div>";
                        }
                    }
                    //Sizes
                    var sizes = products[i]["sizes"];
                    var sizesHtml = "";
                    var pricesHtml = sizes[0]["price"]
                    for (var i = 0; i < sizes.length; i++) {
                        sizesHtml = sizesHtml + "<option>" + sizes[i]["label"] + "</option>";
                    }
                    $(".single-product-wrapper").html('<div class="single-image"><img src="' + defaultImage + '"/></div><div class="right-side-content"><div class="single-title">' + name + ' - <span>' + defaultColorBg + '</span></div><div class="single-description">' + description + '</div><div class="single-brand">Производител: <span>' + brand + '</span></div><div class="single-colors">Цвят:<br/>' + colorsHtml + '</div><div class="single-size">Размер: <select>' + sizesHtml + '</select></div><div class="single-price">' + pricesHtml + ' лв.</div>');
                }
            }
            if (found == false) {
                $("#container").html("<div id='nothing-found'>Продуктът не е намерен</div>");
            }
            $(".single-colors div").click(function () {

                //add/remove class selectedColor
                $(".single-colors div").removeClass("selectedColor");
                $(this).addClass("selectedColor");

                //Insert selected color in product title
                var selectedColor = $(this).attr("data-color");
                $(".single-title span").html(selectedColor);

                var label = $(this).attr("data-info");

                findImage(loadedProduct, label);

            });

            $(".single-size").change(function () {

            });
        }
    }

    function findImage(product, label) {

        var colors = product["colors"];
        var color = "";
        for (var i = 0; i < colors.length; i++) {
            color = color + " " + colors[i]["image"];
        }
        console.log(color);
    }
});