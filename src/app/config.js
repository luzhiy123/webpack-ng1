
export function config ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];