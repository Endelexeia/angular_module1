  (function () {
    'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController );

    LunchCheckController.$inject = ['$scope','$filter'];

    function LunchCheckController($scope,$filter){
      $scope.message;
      $scope.listOfFoods = "";
      var separator = ",";

      $scope.displayMessage = function(){
        var finalmessage = "";
        var numOfArguments = splitString($scope.listOfFoods,separator)
        if ( numOfArguments > 3  ) {
          finalmessage = "too many";
        }
        else if (numOfArguments <= 3 && numOfArguments > 0) {
          finalmessage = "enjoy";
        }
        else {
          finalmessage = "not enough arguments";
        }
        $scope.message = finalmessage;

      function splitString(stringToSplit, separator) {
        var arrayOfStrings = stringToSplit.split(separator);
        if (arrayOfStrings.length == 1 && arrayOfStrings[0].length == 0 )
          return 0;
        else
          return arrayOfStrings.length;
      };
    }
  }
})();
