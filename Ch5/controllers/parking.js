app.controller("parkingCtrl", ["$scope", "cars", parkingCtrl]);

function parkingCtrl($scope, cars) {
    // High coupling version of the park() controller action.
    // $scope.park = function () {
    //     $scope.car.entrance = new Date();
    //     $scope.cars.push($scope.car);
    //     delete $scope.car;
    // };

    // Low coupling version.
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

    $scope.alertTopic = "Something went wrong!";
}