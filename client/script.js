// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
        var myCrypto = angular.module('myCrypto', ['ngRoute']);
        
            // configure our routes
            myCrypto.config(function($routeProvider) {
                $routeProvider
        
                    // route for the home page
                    .when('/', {
                        templateUrl : 'pages/home.html',
                        controller  : 'mainController'
                    })
        
                    // route for the about page
                    .when('/about', {
                        templateUrl : 'pages/about.html',
                        controller  : 'aboutController'
                    })
        
                    // route for the contact page
                    .when('/contact', {
                        templateUrl : 'pages/contact.html',
                        controller  : 'contactController'
                    });
            });
        
            // create the controller and inject Angular's $scope
            myCrypto.controller('mainController', function($scope, $http) {
                // create a message to display in our view
                $scope.message = 'Everyone come and see how good I look!';
                $scope.formData = {};

                   
                $http.get('/api/coins').success(function(data) {

                    $scope.coin = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });




                $scope.createTodo = function() {
                    $http.post('/api/coins', $scope.formData).success(function(data) {


                            $scope.formData = {}; // clear the form so our user is ready to enter another
                        $scope.todos = data;
                            console.log(data);
                        })
                        .error(function(data) {
                            console.log('Error: ' + data);
                        });
                };




            });
        
            myCrypto.controller('aboutController', function($scope) {
                $scope.message = 'Look! I am an about page.';
            });
        
            myCrypto.controller('contactController', function($scope) {
                $scope.message = 'Contact us! JK. This is just a demo.';
            });
        