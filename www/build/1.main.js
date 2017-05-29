webpackJsonp([1],{

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__books_page__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksPageModule", function() { return BooksPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BooksPageModule = (function () {
    function BooksPageModule() {
    }
    return BooksPageModule;
}());
BooksPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__books_page__["a" /* BooksPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__books_page__["a" /* BooksPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__books_page__["a" /* BooksPage */]
        ]
    })
], BooksPageModule);

//# sourceMappingURL=books-page.module.js.map

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

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protected_page_protected_page__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_books_service__ = __webpack_require__(275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksPage; });
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





var BooksPage = (function (_super) {
    __extends(BooksPage, _super);
    function BooksPage(navCtrl, navParams, menuCtrl, storage, booksService) {
        var _this = _super.call(this, navCtrl, navParams, storage) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.menuCtrl = menuCtrl;
        _this.storage = storage;
        _this.booksService = booksService;
        return _this;
    }
    BooksPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.booksService.getAll().then(function (books) { return _this.books = books; });
    };
    BooksPage.prototype.bookInfo = function (book) {
        this.navCtrl.push('BookInfoPage', { book: book });
    };
    /**
     * Opens a paage
     *
     * @param page string Page name
     */
    BooksPage.prototype.openPage = function (page) {
        this.navCtrl.push(page);
    };
    return BooksPage;
}(__WEBPACK_IMPORTED_MODULE_2__protected_page_protected_page__["a" /* ProtectedPage */]));
BooksPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-books-page',template:/*ion-inline-start:"/home/victor/git/ionic3-seed-jwt/src/pages/books-page/books-page.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>    \n    <ion-title>{{ \'page.books.list\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button block (click)="openPage(\'BookAddPage\')">{{ \'button.add_book\' | translate }}</button>\n  \n  <ion-list *ngIf="books">\n    <button ion-item  *ngFor="let book of books" (click)="bookInfo(book)">{{ book.title }}</button>\n  </ion-list>\n  \n</ion-content>\n'/*ion-inline-end:"/home/victor/git/ionic3-seed-jwt/src/pages/books-page/books-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_books_service__["a" /* BooksService */]])
], BooksPage);

//# sourceMappingURL=books-page.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map