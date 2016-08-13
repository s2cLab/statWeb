angular.module('s2cLabApp', ['ngRoute', 'ngSanitize']);

  function config ($routeProvider) {
    
    if(window.location.pathname !== '/' ) {
      window.location.href = '/#' + window.location.pathname;
    }
    
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller :  'homeCtrl',
        controllerAs : 'vm'
      })
      .when('/about', {
        templateUrl: '/about/aboutS2C.view.html',
        controller :  'aboutCtrl',
        controllerAs : 'vm'
      })
      .when('/members', {
        templateUrl: '/memberList/memberList.view.html',
        controller :  'memberListCtrl',
        controllerAs : 'vm'
      })
      .otherwise({redirectTo: '/'});
  }

angular
  .module('s2cLabApp')
  .config(['$routeProvider', config]);