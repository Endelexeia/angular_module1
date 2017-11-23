  (function () {
    'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', function($scope) {


  var size =   function splitString(stringToSplit, separator) {
      var arrayOfStrings = stringToSplit.split(separator);

      console.log('The original string is: "' + stringToSplit + '"');
      console.log('The separator is: "' + separator + '"');
      console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
      return arrayOfStrings.length;
  }


  });

  })();
