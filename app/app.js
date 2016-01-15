angular
    .module('pizzaApp', ['ionic'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$ionicConfigProvider',
        function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
            $ionicConfigProvider.backButton.text('');

            $urlRouterProvider
                .otherwise('/order');

            $stateProvider
                .state('base', {
                    url: '/',
                    abstract: true,
                    templateUrl: 'app/templates/base.html',
                    controller: 'BaseCtrl'
                })
                .state('base.order', {
                    url: 'order',
                    views: {
                        'menuContent@base': {
                            templateUrl: 'app/templates/order.html',
                            controller: 'OrderCtrl'
                        }
                    }
                })
                .state('base.detail', {
                    url: 'pizza/:id',
                    views: {
                        'menuContent@base': {
                            templateUrl: 'app/templates/detail.html',
                            controller: 'DetailCtrl'
                        }
                    }
                })
                .state('base.cart', {
                    url: 'cart',
                    views: {
                        'menuContent@base': {
                            templateUrl: 'app/templates/cart.html',
                            controller: 'CartCtrl'
                        }
                    }
                });
        }
    ]);
