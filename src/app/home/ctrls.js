
export class HomeCtrl {
    constructor(DialogService) {
        DialogService.alert('签名失败!');
        this.url = 'https://github.com/preboot/angular-webpack';
    }
}

HomeCtrl.$inject = ['DialogService'];