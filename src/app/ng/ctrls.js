
export class HomeCtrl {
    /* @ngInject */
    constructor(DialogService) {
        DialogService.alert('签名失败!');
        this.url = 'https://github.com/preboot/angular-webpack';
    }
}

// webpack4中 ng-annotate-loader在class中不生效手动注入
HomeCtrl.$inject = ['DialogService'];