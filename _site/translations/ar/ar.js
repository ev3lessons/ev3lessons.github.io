var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
$scope.language= window.location.hash.substr(1);
$scope.Introduction= 'Introductionaaa';

});
