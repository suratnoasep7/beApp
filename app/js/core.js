var beApp = angular.module('beApp', ['ngRoute']);

beApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/signup', {
            templateUrl : 'pages/signup.html',
            controller  : 'signupController'
        })
    });

beApp.controller('mainController', function($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});

beApp.controller('signupController', function($scope, $location) {
});

