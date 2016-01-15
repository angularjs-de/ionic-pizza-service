angular
    .module('pizzaApp')
    .service('cartService', [
        function () {
            var cart = [];

            this.getCart = function () {
                return cart;
            };

            this.addCartItem = function (pizza) {
                cart.push({
                    name: pizza.name,
                    price: pizza.price
                });
            };

            this.removeCartItem = function (index) {
                cart.splice(index, 1);
            };
        }
    ]);
