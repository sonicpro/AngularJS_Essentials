app.factory("httpUnauthorizedInterceptor", function ($q, $rootScope) {
    // Implements responeError interceptor.
    return {
        "responseError": function (rejection) {
            if (rejection.status === 401) {
                // Show the login page.
                $rootScope.login = true;
            }
            return $q.reject(rejection);
        }
    }
});