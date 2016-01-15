angular
    .module('pizzaApp')
    .controller('BaseCtrl', [
        '$scope',
        '$state',
        '$timeout',
        '$ionicModal',
        '$ionicHistory',
        'cartService',
        function ($scope, $state, $timeout, $ionicModal, $ionicHistory, cartService) {
            $scope.cartItems = 0;

            $scope.$on('cartItemAdded', function (event, itemsCount) {
                $scope.itemAdded = true;
                $timeout(function () {
                    $scope.itemAdded = false;
                }, 300);
                $scope.cartItems = itemsCount;
            });

            $scope.$on('cartItemRemoved', function (event, itemsCount) {
                $scope.itemRemoved = true;
                $timeout(function () {
                    $scope.itemRemoved = false;
                }, 300);
                $scope.cartItems = itemsCount;
            });

            $ionicModal.fromTemplateUrl('app/templates/aboutModal.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.aboutModal = modal;
            });
        }
    ]);
