(function() {
  
  angular
    .module('s2cLabApp')
    .directive('footerGeneric', footerGeneric);

  function footerGeneric () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/footerGeneric/footerGeneric.template.html',
      controller : 'footerCtrl as ftvm'
    };
  }
}) ();