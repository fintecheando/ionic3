webpackJsonp([7],{

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_page__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ForgotPageModule = (function () {
    function ForgotPageModule() {
    }
    return ForgotPageModule;
}());
ForgotPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__forgot_page__["a" /* ForgotPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_page__["a" /* ForgotPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__forgot_page__["a" /* ForgotPage */]
        ]
    })
], ForgotPageModule);

//# sourceMappingURL=forgot-page.module.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(139);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForgotPage = (function () {
    function ForgotPage(navCtrl, navParams, menuCtrl, storage, formBuilder, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.forgotData = this.formBuilder.group({
            egn: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(10), , __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].maxLength(10)])],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
        });
    }
    ForgotPage.prototype.ionViewDidLoad = function () {
        //hide menu when on the login page, regardless of the screen resolution
        this.menuCtrl.enable(false);
    };
    return ForgotPage;
}());
ForgotPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-forgot-page',template:/*ion-inline-start:"/home/victor/git/ionic3-seed-jwt/src/pages/forgot-page/forgot-page.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>       \n    <ion-title>{{ \'page.forgotten_password\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row justify-content-around>\n      <ion-col col-sm-6 col-md-6 col-lg-4 col-xl-3  align-self-center>\n        <form [formGroup]="forgotData" (ngSubmit)="login()">\n          <ion-item>\n            <ion-label floating>{{ \'label.email\' | translate }}:</ion-label>\n            <ion-input type="email" formControlName="email"></ion-input>\n          </ion-item>\n\n          <button margin-top ion-button type="submit" [disabled]="!forgotData.valid">{{ \'button.submit\' | translate }}</button>\n\n        </form>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/git/ionic3-seed-jwt/src/pages/forgot-page/forgot-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */]])
], ForgotPage);

//# sourceMappingURL=forgot-page.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map