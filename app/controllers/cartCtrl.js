    angular
    .module('pizzaApp')
    .controller('CartCtrl', [
        '$scope',
        '$ionicPopup',
        'cartService',
        function ($scope, $ionicPopup, cartService) {
            $scope.$on('$ionicView.beforeEnter', function () {
                $scope.cart = cartService.getCart();
            });
            $scope.$on('$ionicView.enter', function () {
                if (!$scope.cart.length) {
                    return $ionicPopup.alert({
                        title: '<b>Dein Warenkorb ist leer!</b>',
                        template: 'Füge zuerst Produkte aus unseren Angebote zu Deinem Warenkorb hinzu.'
                    });
                }
            });

            $scope.removeFromCart = function (index) {
                cartService.removeCartItem(index);
                $scope.$emit('cartItemRemoved', $scope.cart.length);
            };

            $scope.calcTotalSum = function () {
                var i = 0,
                    sum = 0;

                if (!$scope.cart || !$scope.cart.length) {
                    return sum;
                }

                for (i; i < $scope.cart.length; i = i + 1) {
                    sum = sum + $scope.cart[i].price;
                }

                return sum;
            };
        }
    ]);
