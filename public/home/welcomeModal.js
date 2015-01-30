angular.module("ang-bbnotes").directive("welcomeModal", function () {
    return {
        restrict: "E",
        scope: true,
        templateUrl: "home/welcome-modal.html",
        controllerAs: "welcomeModal",
    };
});
