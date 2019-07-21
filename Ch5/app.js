var app = angular.module("app", ["ngAnimate", "ngRoute", "ngMockE2E"]);

// Start tickGenerator service.
app.run(function (tickGenerator) {
    tickGenerator.start();
});