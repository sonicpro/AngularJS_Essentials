/*global app */

app.run(function ($rootScope, $window) {
  // $rootScope.$on("$routeChangeError", function(event, current, previous, rejection) {
  //   $window.location.href = "error.html";
  // });

  $rootScope.appTitle = "[Packt] Parking";
});

app.run(function ($httpBackend) {
  $httpBackend.whenGET("/cars").respond([
    {
      plate: "AAA9999",
      color: "Blue",
      entrance: new Date()
    },
    {
      plate: "AAA9988",
      color: "Blue",
      entrance: new Date()
    }
  ]);
  $httpBackend.whenGET(/./).passThrough();
});
