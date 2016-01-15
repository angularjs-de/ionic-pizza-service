angular
    .module('pizzaApp')
    .controller('OrderCtrl', [
        '$scope',
        '$timeout',
        'cartService',
        'pizzaService',
        function ($scope, $timeout, cartService, pizzaService) {
            var pizzas = [];

            function loadPizzas(refresh) {
                if (!refresh) {
                    $scope.loading = true;
                }
                return pizzaService
                    .getPizzas()
                    .then(function (result) {
                        pizzas = result;
                    }, function () {
                        // error case
                    })
                    .finally(function () {
                        // show the spinner a little bit longer
                        $timeout(function () {
                            $scope.loading = false;
                        }, 2000);
                    });
            }
            loadPizzas();

            $scope.refresh = function () {
                loadPizzas(true)
                    .finally(function () {
                        $scope.$broadcast('scroll.refreshComplete');
                    });
            };

            $scope.addToCart = function ($event, pizza) {
                // DO NOT BUBBLE!
                $event.stopPropagation();

                cartService.addCartItem(pizza);
                $scope.$emit('cartItemAdded', cartService.getCart().length);
            };

            $scope.filterPizza = function () {
                if (!$scope.search) {
                    return pizzas;
                }

                var i = 0,
                    result = [];
                for (i; i < pizzas.length; i = i + 1) {
                    if (pizzas[i].name.match(new RegExp($scope.search, 'i'))) {
                        result.push(pizzas[i]);
                    }
                }

                return result;
            };
        }
    ]);
