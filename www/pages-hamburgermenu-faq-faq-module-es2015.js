(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hamburgermenu-faq-faq-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/faq/faq.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/faq/faq.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    <ion-grid>\n      <ion-row style=\"align-items: center; margin-top: 32px;\">\n        <ion-col size=\"10\">\n          <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\"\n            >FAQs</ion-text\n          >\n        </ion-col>\n        <ion-col>\n          <ion-icon\n            style=\"zoom: 1.2; color: black; float: right;\"\n            name=\"close-outline\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"content\">\n    <div *ngFor = \"let items of faqlist;index as i\">\n    <ion-card (click)= \"show() \" class= \"questions\" [ngStyle] = \"{'border-color' : color}\">\n      <ion-text >{{items.question}}</ion-text>\n      <div *ngIf = \"show1\">\n        <p class=\"para\">{{items.answer}}</p>\n      </div>\n    </ion-card>\n    </div>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/hamburgermenu/faq/faq-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/hamburgermenu/faq/faq-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FaqPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function() { return FaqPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/hamburgermenu/faq/faq.page.ts");




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FaqPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/hamburgermenu/faq/faq.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/hamburgermenu/faq/faq.module.ts ***!
  \*******************************************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-routing.module */ "./src/app/pages/hamburgermenu/faq/faq-routing.module.ts");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/hamburgermenu/faq/faq.page.ts");







let FaqPageModule = class FaqPageModule {
};
FaqPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"]
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
    })
], FaqPageModule);



/***/ }),

/***/ "./src/app/pages/hamburgermenu/faq/faq.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/hamburgermenu/faq/faq.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  padding-left: 24px;\n  padding-right: 28px;\n  padding-top: 16px;\n}\n\n.questions {\n  min-height: 44px;\n  margin: 0px;\n  padding-top: 16px;\n  box-shadow: 0px 2px 8px rgba(65, 55, 255, 0.08);\n  border-style: solid;\n  border-width: 1px;\n}\n\n.questions ion-text {\n  font-size: 14px;\n  line-height: 17px;\n  color: #000000;\n  margin-left: 16px;\n}\n\n.questions .para {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\ndiv {\n  margin: 8px;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvaGFtYnVyZ2VybWVudS9mYXEvZmFxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGFtYnVyZ2VybWVudS9mYXEvZmFxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBRUksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtFQUVBLG1CQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFFQSxpQkFBQTtBQ0hSOztBRE9JO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0xSOztBRFNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hhbWJ1cmdlcm1lbnUvZmFxL2ZhcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuLnF1ZXN0aW9uc3tcblxuICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSg2NSwgNTUsIDI1NSwgMC4wOCk7XG5cbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIC8vYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgIGlvbi10ZXh0e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICBjb2xvciA6ICMwMDAwMDA7XG4gICAgICAgIFxuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcblxuICAgIH1cblxuICAgIC5wYXJhe1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbn1cblxuZGl2e1xuICAgIG1hcmdpbjogOHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn0iLCIuY29udGVudCB7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgcGFkZGluZy1yaWdodDogMjhweDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi5xdWVzdGlvbnMge1xuICBtaW4taGVpZ2h0OiA0NHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoNjUsIDU1LCAyNTUsIDAuMDgpO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cbi5xdWVzdGlvbnMgaW9uLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4ucXVlc3Rpb25zIC5wYXJhIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuZGl2IHtcbiAgbWFyZ2luOiA4cHg7XG4gIHBhZGRpbmc6IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/hamburgermenu/faq/faq.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/hamburgermenu/faq/faq.page.ts ***!
  \*****************************************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FaqPage = class FaqPage {
    constructor() {
        this.show1 = false;
        this.color = 'transparent';
        this.faqlist = [
            { question: "How do you invite Care Giver ?",
                answer: "Please go to Hamburger Menu > Invite then please select Care Giver and fill details and click on send invite. Once care giver recieves invitation, care giver should authenticate email address and proceed to mariposa Note: This is sample text for a place holder",
            },
            { question: "How do you invite Care Giver ?",
                answer: "Please go to Hamburger Menu > Invite then please select Care Giver and fill details and click on send invite. Once care giver recieves invitation, care giver should authenticate email address and proceed to mariposa Note: This is sample text for a place holder",
            }
        ];
    }
    show() {
        if (this.show1 == false) {
            this.show1 = true;
            this.color = "blue";
        }
        else if (this.show1 == true) {
            this.show1 = false;
            this.color = "transparent";
        }
    }
    ngOnInit() {
    }
};
FaqPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./faq.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/faq/faq.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./faq.page.scss */ "./src/app/pages/hamburgermenu/faq/faq.page.scss")).default]
    })
], FaqPage);



/***/ })

}]);
//# sourceMappingURL=pages-hamburgermenu-faq-faq-module-es2015.js.map