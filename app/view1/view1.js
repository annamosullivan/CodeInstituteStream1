'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    controller: 'View1Ctrl',
    templateUrl: 'view1/view1.html'});
  }])
.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.slides = ["album.jpg", "album2.jpg", "band.jpg", "cover.jpg", "cover1.jpg"]
}]);

