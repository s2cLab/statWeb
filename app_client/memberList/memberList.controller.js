(function() {

  angular
    .module('s2cLabApp')
    .controller('memberListCtrl', memberListCtrl);
    
memberListCtrl.$inject = ['$scope', 's2cData'];
function memberListCtrl ($scope, s2cData) {

  var vm = this;
  vm.title = 'Members';
  vm.pageHeader = {
    title : 'S2C Lab Member',
    strapline : '전북대학교 통계학과'
  };
  vm.message = "목록을 불러오는 중입니다.";
  
  vm.getData = function () {
    s2cData.memberList()
      .success(function(data) {
        vm.message = data.length > 0 ? "" : "member가 존재하지 않습니다.";
        vm.data = { memberList: data };
      })
      .error(function (e) {
        vm.message = "Oops! 무언가 잘못되었군요. 다시 접속해보세요!";
      });
  }();
};
}) ();