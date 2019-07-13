app.directive("alert", function () {
    return {
        restrict: "E",
        scope: {
            // Left-hand side is the property in the directive scope.
            // Right-hand side is the name of the attribute of the <alert></alert> element.
            // "=" means two-way binding with the controller scope variables (those are "alertTopic" and "alertDescription" in parking.js).
            topic: "=", // "=topic",
            // "&" means the reference to the parent scope. Again, what is following "&", i.e. "close" is the <alert> element attribute.
            close: "&" // "&close"
        },
        templateUrl: "alert.html",
        replace: true,
        transclude: true
    };
});