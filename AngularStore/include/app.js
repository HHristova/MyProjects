
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

app.controller("productController", function ($scope, $routeParams) {
    this.items = products;
    $scope.product_id = $routeParams.product_id;
    
});

app.controller("productsListController", function ($scope, $routeParams) {
    this.items = products;
});
