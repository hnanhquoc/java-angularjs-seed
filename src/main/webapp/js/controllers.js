var controllers = angular.module("controllers", []);

controllers.controller("HomeController", ['$scope', '$http', function ($scope, $http) {
    $scope.debug = true;
    $scope.title = 'Hello ';

    $http.get("service/home").then(function (data) {
        $scope.data = data;
        $scope.title += $scope.data.message;
    });

    $scope.toggleDebug = function () {
        $scope.debug = !$scope.debug;
    };
}]);
