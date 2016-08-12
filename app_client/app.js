(function () {

angular.module('s2cLabApp', ['ngRoute']);

  function config ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.view.html'
      })
      .otherwise({redirectTo: '/'});
  }

angular
  .module('s2cLabApp')
  .config(['$routeProvider', config]);
  
})();