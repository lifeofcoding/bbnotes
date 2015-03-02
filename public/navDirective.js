angular.module("ang-bbnotes").directive("navBar", ['navService', '$state', function (navService) {
    return {
        restrict: 'E',
        templateUrl: "./nav.html",
        controller: "navController as navCtl"
    };
}]);
