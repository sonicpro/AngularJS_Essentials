// Broadcasts the current date every second.
// Just for change, let's implement a service using module.service() API rather than module.factory() API.

app.service("tickGenerator", function($rootScope, $timeout) {
    // This function is a service constrictor.
    var _tickTimeout;

    var _start = function () {
        _tick();
    }
    var _tick = function () {
        $rootScope.$broadcast("TICK", new Date());
        _tickTimeout = $timeout(_tick, 1000);
    }

    var _stop = function () {
        $timeout.cancel(_tickTimeout);
    }

    // Controllers might emit "STOP_TICK" event.
    var _listenToStop = function () {
        $rootScope.$on("STOP_TICK", function (event, data) {
            _stop();
        });
    };

    _listenToStop();

    this.start = _start;
    this.stop = _stop;
    });