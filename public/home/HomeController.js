/**
 * Home page functionality (currently there is none)
 */
angular.module("ang-bbnotes").controller("HomeController", ["$state", "navService", function ($state, navService) {
    navService.setPage($state.current.data);
}]);
