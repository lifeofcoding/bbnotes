angular.module("ang-bbnotes").controller("navController", ["$state", "navService", "$scope",
function ($state, navService, $scope) {
    this.page = navService.page;
}]);
