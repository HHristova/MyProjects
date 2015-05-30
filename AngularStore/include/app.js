
var app = angular.module("onlineStore", ['ngRoute']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
                when('/product/:product_id', {
                    templateUrl: 'product.html',
                    controller: 'productController'
                }).
                otherwise({
                    templateUrl: 'list.html',
                    controller: 'productsListController'
                });
    }]);

app.controller("productsListController", function ($scope, $routeParams) {
    this.items = products;
    
    this.order = "name";
});

app.controller("productController", function ($scope, $routeParams) {
    $scope.product_id = $routeParams.product_id;
    this.info;

    //tyrsim produkta po ID
    for (var i = 0; i < products.length; i++) {
        if ($scope.product_id == products[i].id) {
            this.info = products[i];
            break;
        }
    }

    //vzimame pyrvata defaultna snimka
    this.currentImage = this.info.colors[0].image;
    this.activeColor = this.info.colors[0].label;
    this.selectedSize = this.info.sizes[0].label;
    this.selectedPrice = this.info.sizes[0].price;
    
    //funkciq za smqna na cvqt
    this.changeColor = function (label) {
        for(var i = 0; i < this.info.colors.length; i++){
            if(label == this.info.colors[i].label){
                this.currentImage = this.info.colors[i].image;
                break;
            }
        }
        this.activeColor = label;
    };
    
    //promqna na razmera i cenata
    this.changeSize = function(){
        for(var i = 0; i < this.info.sizes.length; i++){
            if(this.selectedSize == this.info.sizes[i].label){
                this.selectedPrice = this.info.sizes[i].price;
                break;
            }
        }
        
    };

});

//directives (za include na template)
/*
app.directive('productContainer', function(){
   return{
     restrict: 'E', (Type of directive - element) //HTML <product-container></product-container>; restrict: 'A' (attribute) //HTML <div product-container></div>
     templateUrl: 'template.html',
     controller: function(){},
     controllerAs: 'the name of the controller'
   };
});
*/
