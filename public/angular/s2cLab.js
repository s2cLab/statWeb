angular.module('s2cLabApp', []);

var s2cData = function ($http) {
  var memberList = function () {
    return $http.get('/api/members');
  };
  return {
    memberList : memberList
  };
};

var memberListCtrl = function ($scope, s2cData) {  

  $scope.message = "목록을 불러오는 중입니다."
  $scope.getData = function () {
    s2cData.memberList()
      .success(function(data) {
        $scope.message = data.length > 0 ? "" : "member가 존재하지 않습니다.";
        $scope.data = { memberList: data };
      })
      .error(function (e) {
        $scope.message = "Oops! 무언가 잘못되었군요. 다시 접속해보세요!";
      });
  }();
};

angular
  .module('s2cLabApp')
  .controller('memberListCtrl', memberListCtrl)
  .service('s2cData', s2cData);