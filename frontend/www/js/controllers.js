angular.module('app.controllers', [])

.controller('entryCtrl', function($scope, $http) {
  $scope.form = {};
  $scope.feed = function() {

    $http({method: 'POST', url: '/feed'})
      .then(function successCallback(response){
        if (response.status == 200) {
          alert("Successfully fed!");
        }
      }, function errorCallback(response){
        alert(response.data);
      });
  };

  $scope.poop = function() {

    $http({method: 'POST', url: '/poop'})
      .then(function successCallback(response){
        if (response.status == 200) {
          alert("Successfully poop!");
        }
      }, function errorCallback(response){
        alert(response.data);
      });
  };

  $scope.normalsleep = function() {

    $http({method: 'POST', url: '/sleep'})
      .then(function successCallback(response){
        if (response.status == 200) {
          alert("Successfully sleep!");
        }
      }, function errorCallback(response){
        alert(response.data);
      });
  };

  $scope.hugsleep = function() {

    $http({method: 'POST', url: '/hugsleep'})
      .then(function successCallback(response){
        if (response.status == 200) {
          alert("Successfully hugsleep!");
        }
      }, function errorCallback(response){
        alert(response.data);
      });
  };

  $scope.feedsleep = function() {

    $http({method: 'POST', url: '/feedsleep'})
      .then(function successCallback(response){
        if (response.status == 200) {
          alert("Successfully feedsleep!");
        }
      }, function errorCallback(response){
        alert(response.data);
      });
  };

  $scope.wake = function() {

    $http({method: 'POST', url: '/wake'})
      .then(function successCallback(response){
        if (response.status == 200) {
          alert("Cutie waked up :-P");
        }
      }, function errorCallback(response){
        alert(response.data);
      });
  };
})

.controller('statisticsCtrl', function($scope) {

})

.controller('historyCtrl', function($scope) {

})
