angular.module("ang-bbnotes").directive("note", function () {
    return {
        scope: {
            note: "=",
        },
        transclude: true,
        template: "{{note.title}} - {{note.text}} <ng-transclude></ng-transclude>",
    };
});
