webpackJsonp([2],{

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_info_page__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(138);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookInfoPageModule", function() { return BookInfoPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BookInfoPageModule = (function () {
    function BookInfoPageModule() {
    }
    return BookInfoPageModule;
}());
BookInfoPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__book_info_page__["a" /* BookInfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__book_info_page__["a" /* BookInfoPage */]),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateModule */].forChild()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__book_info_page__["a" /* BookInfoPage */]
        ]
    })
], BookInfoPageModule);

//# sourceMappingURL=book-info-page.module.js.map

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

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__protected_page_protected_page__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_books_service__ = __webpack_require__(275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookInfoPage; });
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





var BookInfoPage = (function (_super) {
    __extends(BookInfoPage, _super);
    function BookInfoPage(navCtrl, navParams, menuCtrl, storage, booksService) {
        var _this = _super.call(this, navCtrl, navParams, storage) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.menuCtrl = menuCtrl;
        _this.storage = storage;
        _this.booksService = booksService;
        _this.book = navParams.get('book');
        return _this;
    }
    BookInfoPage.prototype.editBook = function (book) {
        this.navCtrl.push('BookEditPage', { book: book });
    };
    BookInfoPage.prototype.deleteBook = function (book) {
        var _this = this;
        this.booksService.remove(book.id)
            .then(function () { return _this.navCtrl.pop(); })
            .catch(function (e) { return console.log("delete book error", e); });
    };
    return BookInfoPage;
}(__WEBPACK_IMPORTED_MODULE_2__protected_page_protected_page__["a" /* ProtectedPage */]));
BookInfoPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-book-info-page',template:/*ion-inline-start:"/home/victor/git/ionic3-seed-jwt/src/pages/book-info-page/book-info-page.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>    \n    <ion-title>{{ \'page.books.preview\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card *ngIf="book">\n    <ion-card-content>\n      <h1>{{ book.title }}</h1>\n      by {{ book.author_name }}, p. {{ book.pages_count }}\n    </ion-card-content>\n\n\n    <ion-row>\n      <ion-col>\n        <button ion-button icon-left clear small color="secondary" (click)="editBook(book)">\n          <ion-icon name="construct"></ion-icon>\n          <div>{{ \'button.edit\' | translate }}</div>\n        </button>          \n      </ion-col>\n      \n      <ion-col text-right>\n        <button ion-button icon-left clear small color="danger" (click)="deleteBook(book)">\n          <ion-icon name="trash"></ion-icon>\n          <div>{{ \'button.delete\' | translate }}</div>\n        </button>          \n      </ion-col>\n\n    </ion-row>\n\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/victor/git/ionic3-seed-jwt/src/pages/book-info-page/book-info-page.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_books_service__["a" /* BooksService */]])
], BookInfoPage);

//# sourceMappingURL=book-info-page.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map