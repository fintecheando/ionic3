webpackJsonp([3],{

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_edit_page__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEditPageModule", function() { return BookEditPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BookEditPageModule = (function () {
    function BookEditPageModule() {
    }
    return BookEditPageModule;
}());
BookEditPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__book_edit_page__["a" /* BookEditPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__book_edit_page__["a" /* BookEditPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__book_edit_page__["a" /* BookEditPage */]
        ]
    })
], BookEditPageModule);

//# sourceMappingURL=book-edit-page.module.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtectedPage; });
var ProtectedPage = (function () {
    function ProtectedPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    ProtectedPage.prototype.ionViewCanEnter = function () {
        var _this = this;
        this.storage.get('id_token').then(function (id_token) {
            if (id_token === null) {
                _this.navCtrl.setRoot('LoginPage');
                return false;
            }
        });
        return true;
    };
    return ProtectedPage;
}());

//# sourceMappingURL=protected-page.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protected_page_protected_page__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_books_service__ = __webpack_require__(275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookEditPage; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BookEditPage = (function (_super) {
    __extends(BookEditPage, _super);
    function BookEditPage(navCtrl, navParams, menuCtrl, storage, formBuilder, booksService) {
        var _this = _super.call(this, navCtrl, navParams, storage) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.menuCtrl = menuCtrl;
        _this.storage = storage;
        _this.formBuilder = formBuilder;
        _this.booksService = booksService;
        _this.book = navParams.get('book');
        _this.bookData = _this.formBuilder.group({
            title: [_this.book.title, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required],
            author_name: [_this.book.author_name, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required],
            pages_count: [_this.book.pages_count, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* Validators */].required],
        });
        return _this;
    }
    BookEditPage.prototype.process = function () {
        var _this = this;
        var updatedBook = Object.assign(this.book, this.bookData.value);
        this.booksService.update(updatedBook)
            .then(function () { return _this.navCtrl.pop(); })
            .catch(function (e) { return console.log("add book error", e); });
    };
    return BookEditPage;
}(__WEBPACK_IMPORTED_MODULE_2__protected_page_protected_page__["a" /* ProtectedPage */]));
BookEditPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-book-edit-page',template:/*ion-inline-start:"/home/victor/git/ionic3-seed-jwt/src/pages/book-edit-page/book-edit-page.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>    \n    <ion-title>{{ \'page.books.edit\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row justify-content-around>\n      <ion-col col-sm-6 col-md-6 col-lg-4 col-xl-3  align-self-center>\n        <form [formGroup]="bookData" (ngSubmit)="process()">\n          <ion-item>\n            <ion-label floating>{{ \'label.title\' | translate }}:</ion-label>\n            <ion-input type="text" formControlName="title"></ion-input>\n          </ion-item>\n          \n          <ion-item>\n            <ion-label floating>{{ \'label.author_name\' | translate }}:</ion-label>\n            <ion-input type="text" formControlName="author_name"></ion-input>\n          </ion-item>\n          \n          <ion-item>\n            <ion-label floating>{{ \'label.pages\' | translate }}:</ion-label>\n            <ion-input type="number" formControlName="pages_count"></ion-input>\n          </ion-item>\n          \n\n          <button margin-top ion-button type="submit" [disabled]="!bookData.valid">{{ \'button.submit\' | translate }}</button>\n\n        </form>\n        \n      </ion-col>\n\n    </ion-row>\n    \n    \n    \n  </ion-grid>  \n  \n</ion-content>\n'/*ion-inline-end:"/home/victor/git/ionic3-seed-jwt/src/pages/book-edit-page/book-edit-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__providers_books_service__["a" /* BooksService */]])
], BookEditPage);

//# sourceMappingURL=book-edit-page.js.map

/***/ })

});
//# sourceMappingURL=3.main.js.map