(function() {

  angular
    .module('s2cLabApp')
    .service('addHtmlLineBreaks', addHtmlLineBreaks);

  function addHtmlLineBreaks () {
    return function(text) {
      var output = text.replace(/\n/g, '<br/>');
      return output;
    }
  };
}) ();