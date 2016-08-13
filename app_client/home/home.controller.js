(function() {
  angular
    .module('s2cLabApp')
    .controller('homeCtrl', homeCtrl);

function homeCtrl () {

  var vm = this;
  vm.title = 'S2C Lab';
  vm.pageHeader = {
    title : 'S2C Lab',
    strapline : '전북대학교 통계학과'
  };
  vm.message = "목록을 불러오는 중입니다.";
  
};
}) ();