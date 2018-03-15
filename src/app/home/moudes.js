

const homeTemplate = require('./template/home.html');
const { HomeCtrl } = require('./ctrls.js');

require('./home.scss');

function homeRoute($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            template: homeTemplate,
            controller: HomeCtrl,
            controllerAs: 'vm'
        });
}

homeRoute.$inject = ['$stateProvider'];

let angular = require('angular');
angular.module('dt.home', []).config(homeRoute);
export {
    homeRoute
};