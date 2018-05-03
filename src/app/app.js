const angular = require('angular');

//js插件
import jQuery from 'jquery';
window.$ = window.jQuery = window.jq = jQuery;
require('lodash');
require('angular-base64');
require('angular-cookies');
require('angular-ui-bootstrap');
require('@uirouter/angularjs');
require('front-tb-ui');

//css插件
require('bootstrap/dist/css/bootstrap.css');
require('front-tb-ui/dist/css/main.css');

//js模块
require('./ng/moudes.js');
//css模块

angular
    .module('app', [
        'base64',
        'ngCookies',
        'ui.bootstrap',
        'ui.router',
        'tb.ui',
        'model-ng'
    ])
    .config( /* @ngInject */ ($locationProvider, $stateProvider, $urlRouterProvider) => {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/ng');
    })
    .factory('config', /* @ngInject */ () => {
        return {};
    });