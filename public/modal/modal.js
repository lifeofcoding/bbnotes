angular.module("ang-bbnotes").directive("modal", function () {
    return {
        restrict: "E",
        scope: {
            close: "&",
            show: "=",
        },
        transclude: true,
        templateUrl: "modal/modal.html",
    };
});
