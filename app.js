  (function () {
    'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController );

    LunchCheckController.$inject = ['$scope','$filter'];

    function LunchCheckController($scope,$filter){
      $scope.message;
      $scope.listOfFoods = "";
      $scope.color = "";

      $scope.displayMessage = function(){
        var finalmessage = "";
        var numOfArguments = splitString($scope.listOfFoods,",")
        if ( numOfArguments > 3  ) {
          finalmessage = "too many";
          $scope.color = "green";
        }
        else if (numOfArguments <= 3 && numOfArguments > 0) {
          finalmessage = "enjoy";
          $scope.color = "green";
        }
        else {
          finalmessage = "not enough arguments";
          $scope.color = "red";
        }
        $scope.message = finalmessage;

      function splitString(stringToSplit, separator) {
        var arrayOfStrings = stringToSplit.split(separator);
        if (arrayOfStrings.length == 1 && arrayOfStrings[0].length == 0 )
          return 0;
        else
          return arrayOfStrings.length - findEmptyFields(arrayOfStrings);
      };

      function findEmptyFields(array)
      {
        var counter = 0;
        for (var i = 0; i < array.length; i++) {
          if (array[i].trim() == "") {
            counter++;
          }

        }
        return counter;
      }

    }
  }
})();
