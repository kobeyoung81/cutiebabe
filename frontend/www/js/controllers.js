angular.module('app.controllers', [])

.controller('statisticsCtrl', function($scope) {

})

.controller('entryCtrl', function($scope, $http) {
  $scope.form = {};
  $scope.feed = function() {
    alert("In here!");

    $http({method: 'POST', url: 'http://192.168.1.102:3000/feed'})
      .then(function successCallback(response){
        alert(response.status);
      }, function errorCallback(response){
        alert(response.status);
      });
  };

  $scope.poop = function() {
    alert("poop");
  };

  $scope.normalsleep = function() {
    alert("normalsleep");
  };

  $scope.hugsleep = function() {
    alert("hugsleep");
  };

  $scope.feedsleep = function() {
    alert("feedsleep");
  };

  $scope.wake = function() {
    alert("wake");
  };
})

.controller('historyCtrl', function($scope) {

})
