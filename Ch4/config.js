// Configure $httpProvider.
app.config(function ($httpProvider) {
    // Limit Accept request header to application/json for any method.
    $httpProvider.defaults.headers.common.Accept = "application/json";
    // Additonally add text/html for GET (for alert directive template loading).
    $httpProvider.defaults.headers.get = { "Accept" : "text/html" }
    $httpProvider.defaults.cache = true;
    $httpProvider.interceptors.push("httpUnauthorizedInterceptor");
});

// Configure routes.
app.config(function ($routeProvider) {
    $routeProvider
        .when("/parking", {
            templateUrl: "partials/parking.html",
            controller: "parkingCtrl",
            // Save parking controller from calling parkingHttpFacade directly.
            // Instead of injecting parkingHttpFacade inject ready-to-ue car data into controller.
            resolve: {
                "cars": function (parkingHttpFacade) {
                    return parkingHttpFacade.getCars();
                }
            }
        })
        .otherwise({
            redirectTo: "/parking"
        });
});