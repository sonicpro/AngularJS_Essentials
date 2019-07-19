// Registring a new filter.
app.filter("plate", function () {
    return function (value) {
        var firstPart = value.slice(0, 3),
            secondPart = value.slice(3);
        return firstPart + "-" + secondPart;
    };
});