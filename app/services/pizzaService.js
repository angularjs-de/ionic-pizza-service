angular
    .module('pizzaApp')
    .service('pizzaService', [
        '$http',
        '$q',
        function ($http, $q) {
            this.getPizzas = function () {
                return $http.get('assets/pizza.json').then(function (res) {
                    return res.data;
                });
            };

            this.getPizza = function (id) {
                return $http
                    .get('assets/pizza.json')
                    .then(function (res) {
                        var i = 0;

                        for (i; i < res.data.length; i = i + 1) {
                            if (res.data[i].id === parseInt(id, 10)) {
                                return res.data[i];
                            }
                        }
                        return;
                    });
            };
        }
    ]);
