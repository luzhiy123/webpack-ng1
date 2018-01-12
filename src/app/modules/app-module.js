let angular = require('angular');

require('jquery');
require('lodash');
require('angular-base64');
require('angular-cookies');
require('angular-ui-bootstrap');
require('@uirouter/angularjs');
require('front-tb-ui');

require('bootstrap/dist/css/bootstrap.css');
require('front-tb-ui/dist/css/main.css');

let appModule = angular.module('app', [
    'base64',
    'ngCookies',
    'ui.bootstrap',
    'ui.router',
    'tb.ui'
]);

export {
    appModule
};