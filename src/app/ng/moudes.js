

const homeTemplate = require('./template/index.html');
const { HomeCtrl } = require('./ctrls.js');

require('./index.scss');

/* @ngInject */
function ngRoute($stateProvider) {
    $stateProvider
        .state('ng', {
            url: '/ng',
            template: homeTemplate,
            controller: HomeCtrl,
            controllerAs: 'vm'
        });
}

let angular = require('angular');
angular.module('model-ng', []).config(ngRoute);
export {
    ngRoute
};