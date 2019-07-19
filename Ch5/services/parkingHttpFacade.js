// Implementing "facade" over $http service using AngularJS factory API.

app.factory("parkingHttpFacade", function ($http) {
    // "Revealing module" pattern.
    var _getCars = function () {
        return $http.get("/cars"); // to use ngMockE2E fake responses, the path must match the one used in "whenGET" exactly.
    }
    /* Everything below is not supported by the $httpBackend yet. See run.js.
    var _getCar = function (id) {
        return $http.get("/cars/" + id);
    }

    var _saveCar = function (car) {
        return $http.post("/cars", car);
    }

    var _updateCar = function (car) {
        return $http.put("/cars" + car.id, car)
    }

    var _deleteCar = function (id) {
        $http.delete("/cars/" + id);
    }
*/
    return {
        getCars: _getCars,
        // getCar: _getCar,
        // saveCar: _saveCar,
        // updateCar: _updateCar,
        // deleteCar: _deleteCar
    };
})