app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: "../components/main.html"
        , controller: 'myCtrl'
        , controllerAs: 'my'
    }).when('/catalogue', {
        templateUrl: "../components/catalogue.html"
        , controller: 'myCtrl'
        , controllerAs: 'my'
        // , controllerAs: 'cat'
    }).when('/basket', {
        templateUrl: "../components/basket.html"
        , controller: 'myCtrl'
        , controllerAs: 'my'
        // , controllerAs: 'cat'
    }).when('/details', {
        templateUrl: '../components/details.html'
        , controller: 'myCtrl'
        , controllerAs: 'my'
        // , controllerAs: 'cont'
    }).otherwise({
        redirectTo: '/'
    })
});