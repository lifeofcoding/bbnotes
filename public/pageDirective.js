angular.module("ang-bbnotes").controller("pageController", ['navService',function (navService) {
    this.page = navService.page;
}]);


angular.module("ang-bbnotes").directive("pageTitle", ['navService', function (navService) {
    var nav = navService;
    return {
        restrict: 'E',
        template: "<h1>{{pageCtl.page.title}}</h1>",
        controller: 'pageController as pageCtl'
    };
}]);
