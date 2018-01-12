let { appModule } = require('./modules/app-module'); 

let homeTemplate = require('./view/home.html');

require('./controllers/index');

require('./styles/main.scss');
appModule.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            template: homeTemplate,
            controller: 'HomeCtrl',
            controllerAs: 'vm'
        });
}]);