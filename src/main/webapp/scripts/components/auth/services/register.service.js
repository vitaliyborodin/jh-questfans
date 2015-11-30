'use strict';

angular.module('questfansApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


