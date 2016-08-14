(function() {
  angular
    .module('s2cLabApp')
    .controller('homeCtrl', homeCtrl);

function homeCtrl () {

  var vm = this
  vm.message = "목록을 불러오는 중입니다.";
  
};
}) ();