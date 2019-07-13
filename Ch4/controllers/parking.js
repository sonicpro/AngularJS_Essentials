app.controller("parkingCtrl", ["$scope", "$sce", "$filter", "parkingHttpFacade", parkingCtrl]);

function parkingCtrl($scope, $sce, $filter, parkingHttpFacade) {
    var errorHandler = function (data, status, headers, config) {
        switch(status) {
            case 401: {
                $scope.message = "You must be authenticated!";
                break;
            }
            case 500: {
                $scope.message = "Something went wrong!";
                break;
            }
        }
        console.log(data, status);
    };

    var retrieveCars = function () {
        parkingHttpFacade.getCars()
            .success(function (data) {
                $scope.cars = data;
            })
            .error(errorHandler);
    };

    $scope.cars = [
        { plate: "6MBV006" },
        { plate: "5BBM299" },
        { plate: "5AOJ230" }
    ];

    $scope.appTitle = $sce.trustAsHtml($filter("uppercase")("<b>[Packt] Parking</b>"));

    // High coupling version of the park() controller action.
    // $scope.park = function () {
    //     $scope.car.entrance = new Date();
    //     $scope.cars.push($scope.car);
    //     delete $scope.car;
    // };

    // Low coupling version.
    $scope.parkCar = function (car) {
        parkingHttpFacade.saveCar(car)
            .success(function () {
                retrieveCars();
                $scope.message = "The car was parked successfully!";
            })
            .error(errorHandler);
    };

    $scope.colors = [
        "White",
        "Black",
        "Blue",
        "Red",
        "Silver"
    ];

    $scope.alertTopic = "Something went wrong!";

    retrieveCars();
}