angular.module('s2cLabApp', ['ngRoute', 'ngSanitize']);

  function config ($routeProvider, $locationProvider) {
    
    if(window.location.pathname !== '/' ) {
      window.location.href = '/#' + window.location.pathname;
    }
    
    $routeProvider
      .when('/', {
        templateUrl: '/home/home.view.html',
        controller :  'homeCtrl',
        controllerAs : 'vm',
        title : 'S2C Lab'
      })
      .when('/about', {
        templateUrl: '/about/aboutS2C.view.html',
        controller :  'aboutCtrl',
        controllerAs : 'vm',
        title : 'About S2C'
      })
      .when('/members', {
        templateUrl: '/memberList/memberList.view.html',
        controller :  'memberListCtrl',
        controllerAs : 'vm',
        title : 'About members'
      })
      .otherwise({redirectTo: '/'});
      
      $locationProvider.html5Mode(true);
  }

angular
  .module('s2cLabApp')
  .config(['$routeProvider', '$locationProvider', config]);