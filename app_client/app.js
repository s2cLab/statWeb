(function () {

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
        controllerAs : 'vm'
      })
      .when('/members', {
        templateUrl: '/memberList/memberList.view.html',
        controller :  'memberListCtrl',
        controllerAs : 'vm'
      })
      .when('/register', {
        templateUrl: '/auth/register/register.view.html',
        controller :  'registerCtrl',
        controllerAs : 'vm'
      })
      .when('/login', {
        templateUrl: '/auth/login/login.view.html',
        controller :  'loginCtrl',
        controllerAs : 'vm'
      })
      .otherwise({redirectTo: '/'});
      
      $locationProvider.html5Mode(true);
  }

angular
  .module('s2cLabApp')
  .config(['$routeProvider', '$locationProvider', config]);
  
})();