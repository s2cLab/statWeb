(function() {

  angular
    .module('s2cLabApp')
    .service('s2cData', s2cData);

  s2cData.$inject = ['$http'];
  function s2cData ($http) {
    var memberList = function () {
      return $http.get('/api/members');
    };
    return {
      memberList : memberList
    };
  }; 
}) ();