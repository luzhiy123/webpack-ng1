const angular = require('angular');

//js插件
require('jquery');
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
require('./home/moudes.js');

const { config } = require('./config.js');

//css模块

angular.module('app', [
    'base64',
    'ngCookies',
    'ui.bootstrap',
    'ui.router',
    'tb.ui',
    'dt.home'
]).config(config);