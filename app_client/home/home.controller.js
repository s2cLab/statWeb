(function() {
  angular
    .module('s2cLabApp')
    .controller('homeCtrl', homeCtrl);

homeCtrl.$inject = ['$location', 'authentication'];
function homeCtrl ($location, authentication) {

  var vm = this
  vm.title = "S2C Lab";
  vm.message = "목록을 불러오는 중입니다.";
  vm.currentPath = $location.path();

  vm.isLoggedIn = authentication.isLoggedIn();

  vm.currentUser = authentication.currentUser();

  vm.logout = function() {
    authentication.logout();
    $location.path('/');
  }
};
}) ();