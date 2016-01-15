angular
    .module('pizzaApp')
    .controller('DetailCtrl', [
        '$scope',
        '$stateParams',
        'pizzaService',
        function ($scope, $stateParams, pizzaService) {
            var pizzaId = $stateParams.id;

            pizzaService
                .getPizza(pizzaId)
                .then(function (pizza) {
                    $scope.pizza = pizza;
                });
        }
    ]);
