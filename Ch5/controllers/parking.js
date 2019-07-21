app.controller("parkingCtrl", ["$scope", "cars", parkingCtrl]);

function parkingCtrl($scope, cars) {
    // High coupling version of the park() controller action.
    // $scope.park = function () {
    //     $scope.car.entrance = new Date();
    //     $scope.cars.push($scope.car);
    //     delete $scope.car;
    // };

    // Low coupling version. Treat $scope as write-only inside the controller, i.e. pass the parameters directly from the view.
    $scope.parkCar = function (car) {
        alert("Car creation functionality hasn't added to $httpBackend yet...");
        // parkingHttpFacade.saveCar(car)
        //     .success(function () {
        //         retrieveCars();
        //         $scope.message = "The car was parked successfully!";
        //     })
        //     .error(errorHandler);
    };

    $scope.cars = cars.data;

    $scope.colors = [
        "White",
        "Black",
        "Blue",
        "Red",
        "Silver"
    ];

    // Demonstraiting how the controller scope $watch works.
    $scope.plateCounter = -1;
    $scope.$watch("car.plate", function () {
        $scope.plateCounter++;
    });

    // Subscribe to the $rootScope broadcast event.
    $scope.$on("TICK", function (event, data) {
        $scope.tick = data;
    })

    // Stop button click handler. Emits event upstream.
    $scope.stopTicking = function () {
        $scope.$emit("STOP_TICK");
    }
}