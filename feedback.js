angular.module('app').controller('Feedback', function($scope){
  var keystrokes;

  $scope.workshop = {
    score : 10
  };

  $scope.save = function(workshop){
    alert('Thanks for the ' + workshop.score + '!');
  };
});