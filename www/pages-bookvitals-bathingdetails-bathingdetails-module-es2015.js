(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bookvitals-bathingdetails-bathingdetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/bathingdetails/bathingdetails.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/bathingdetails/bathingdetails.page.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar >\n    <!-- <ion-row>\n      <ion-col size=\"2\">\n        <ion-toolbar> -->\n          <ion-buttons slot=\"start\">\n            <ion-button [routerLink]=\"'../'\" routerDirection=\"backward\">\n              <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n          <ion-title>Bathing Details</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"deletebathing($event)\">\n              <ion-icon slot=\"icon-only\"  class=\"menuicon\" src=\"assets/MariposaIcons/Kebab menu.svg\" ></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        \n        <!-- </ion-toolbar>\n      </ion-col>\n      <ion-col size=\"8\">\n        <div>\n          <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\"\n            >Bathing Details</ion-text\n          >\n        </div>\n      </ion-col> -->\n      <!-- <ion-col size=\"2\">\n        <div >\n          <ion-icon slot=\"end\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"maindiv\" >\n    <p class=\"hdng\">Activity details </p>\n    <p class=\"timng\">Today 8 am & 7pm </p>\n    <p class=\"dscrptn\" >Repeats Every Sunday, Tuesday, Thursday & Saturday</p>\n  </div>\n\n  <div class=\"ion-no-padding\">\n    <hr />\n  </div>\n\n  <div class=\"maindiv2\" >\n    <p class=\"hdng\">Assigned to </p>\n    <p class=\"name\">Mary </p>\n    <p class=\"work\" >Caregiver</p>\n  </div>\n\n  <div class=\"ion-no-padding hr2\">\n    <hr />\n  </div>\n\n  <div class=\"maindiv3\" >\n    <p class=\"hdng\">Instructions</p>\n    <p class=\"decpt\">bathing should done with warm water, allergic to bleach water </p>\n    \n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button>Edit</ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/bathingdetails/dltbathingpopover/dltbathingpopover.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/bathingdetails/dltbathingpopover/dltbathingpopover.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-item (click)=\"delete()\" detail=\"false\" lines=\"none\" button>Delete Bathing</ion-item>\n");

/***/ }),

/***/ "./src/app/pages/bookvitals/bathingdetails/bathingdetails-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/bookvitals/bathingdetails/bathingdetails-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: BathingdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BathingdetailsPageRoutingModule", function() { return BathingdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bathingdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bathingdetails.page */ "./src/app/pages/bookvitals/bathingdetails/bathingdetails.page.ts");




const routes = [
    {
        path: '',
        component: _bathingdetails_page__WEBPACK_IMPORTED_MODULE_3__["BathingdetailsPage"]
    }
];
let BathingdetailsPageRoutingModule = class BathingdetailsPageRoutingModule {
};
BathingdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BathingdetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/bookvitals/bathingdetails/bathingdetails.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/bookvitals/bathingdetails/bathingdetails.module.ts ***!
  \**************************************************************************/
/*! exports provided: BathingdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BathingdetailsPageModule", function() { return BathingdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _bathingdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bathingdetails-routing.module */ "./src/app/pages/bookvitals/bathingdetails/bathingdetails-routing.module.ts");
/* harmony import */ var _bathingdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bathingdetails.page */ "./src/app/pages/bookvitals/bathingdetails/bathingdetails.page.ts");







let BathingdetailsPageModule = class BathingdetailsPageModule {
};
BathingdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bathingdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["BathingdetailsPageRoutingModule"]
        ],
        declarations: [_bathingdetails_page__WEBPACK_IMPORTED_MODULE_6__["BathingdetailsPage"]]
    })
], BathingdetailsPageModule);



/***/ }),

/***/ "./src/app/pages/bookvitals/bathingdetails/bathingdetails.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/bookvitals/bathingdetails/bathingdetails.page.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menuicon {\n  padding: 0 0 0 11px;\n  font-size: 30px;\n}\n\n.maindiv {\n  padding: 26px 24px 0px 24px;\n}\n\n.maindiv p {\n  margin: 0;\n}\n\n.maindiv .timng {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: #1A1A1A;\n  padding-top: 16px;\n}\n\n.maindiv .dscrptn {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  color: #1A1A1A;\n  padding-top: 6px;\n  padding-bottom: 20px;\n}\n\n.hdng {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  /* Medium Grey */\n  color: #B8B8B8;\n}\n\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n  /* background: aquamarine; */\n  background: #e0e0e0;\n  margin: 8px 24px;\n}\n\n.maindiv2 {\n  padding: 0px 24px 0px 24px;\n}\n\n.maindiv2 p {\n  margin: 0px;\n}\n\n.name {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 19px;\n  padding-top: 12px;\n  color: #1A1A1A;\n}\n\n.hr2 {\n  margin-top: 20px !important;\n}\n\n.maindiv3 {\n  padding: 0px 24px 0px 24px;\n}\n\n.maindiv3 .hdng {\n  padding-top: 20px !important;\n}\n\n.maindiv3 p {\n  margin: 0px;\n}\n\n.maindiv3 .decpt {\n  padding-top: 16px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  /* Direct Black */\n  color: #1A1A1A;\n}\n\nion-footer ion-button {\n  margin: 0 0 0 26px;\n  width: 87%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYm9va3ZpdGFscy9iYXRoaW5nZGV0YWlscy9iYXRoaW5nZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Jvb2t2aXRhbHMvYmF0aGluZ2RldGFpbHMvYmF0aGluZ2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FER0E7RUFDSSwyQkFBQTtBQ0FKOztBRENJO0VBRUUsU0FBQTtBQ0FOOztBREdJO0VBQ0ksa0JBQUE7RUFDUixtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtBQ0ZBOztBRElJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDSFI7O0FETUE7RUFDSSxrQkFBQTtFQUNKLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFHQSxnQkFBQTtFQUVBLGNBQUE7QUNOQTs7QURTQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURRRTtFQUNFLDBCQUFBO0FDTEo7O0FEVUk7RUFDSSxXQUFBO0FDUlI7O0FEZUU7RUFFRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FDZEo7O0FEa0JFO0VBQ0UsMkJBQUE7QUNmSjs7QURrQkU7RUFBVSwwQkFBQTtBQ2RaOztBRGVJO0VBQ0ksNEJBQUE7QUNiUjs7QURlSTtFQUNJLFdBQUE7QUNiUjs7QURnQkk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ1IsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxpQkFBQTtFQUVBLGNBQUE7QUNoQkE7O0FEcUJJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDbEJSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm9va3ZpdGFscy9iYXRoaW5nZGV0YWlscy9iYXRoaW5nZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudWljb257XG4gICAgcGFkZGluZzogMCAwIDAgMTFweDtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG5cblxuLm1haW5kaXZ7XG4gICAgcGFkZGluZzoyNnB4IDI0cHggMHB4IDI0cHg7XG4gICAgcFxuICAgIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICBcbiAgICAudGltbmd7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XG5mb250LXNpemU6IDE0cHg7XG5saW5lLWhlaWdodDogMTdweDtcblxuY29sb3I6ICMxQTFBMUE7XG5wYWRkaW5nLXRvcDogMTZweDtcbiAgICB9XG4gICAgLmRzY3JwdG57XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgIFxuICAgICAgICBjb2xvcjogIzFBMUExQTtcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgfVxufVxuLmhkbmd7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuZm9udC13ZWlnaHQ6IDUwMDtcbmZvbnQtc2l6ZTogMTRweDtcbmxpbmUtaGVpZ2h0OiAxN3B4O1xuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuXG4vKiBNZWRpdW0gR3JleSAqL1xuXG5jb2xvcjogI0I4QjhCODtcbn1cblxuaHIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvcmRlci13aWR0aDogMDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAvKiBiYWNrZ3JvdW5kOiBhcXVhbWFyaW5lOyAqL1xuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgbWFyZ2luOiA4cHggMjRweDtcbiAgfVxuICAubWFpbmRpdjJ7XG4gICAgcGFkZGluZzowcHggMjRweCAwcHggMjRweDtcblxuICAgIC53b3Jre1xuXG4gICAgfVxuICAgIHB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBcbiAgICB9ICBcbiAgICBcblxufVxuXG4gIC5uYW1le1xuICAgIFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgXG4gICAgY29sb3I6ICMxQTFBMUFcbiAgICBcbiAgfVxuXG4gIC5ocjJ7XG4gICAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1haW5kaXYze3BhZGRpbmc6MHB4IDI0cHggMHB4IDI0cHg7XG4gICAgLmhkbmd7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBcbiAgICB9IFxuICAgIC5kZWNwdHtcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XG5mb250LXNpemU6IDE0cHg7XG5saW5lLWhlaWdodDogMTdweDtcblxuLyogRGlyZWN0IEJsYWNrICovXG5cbmNvbG9yOiAjMUExQTFBO1xuICAgIH1cbn1cbmlvbi1mb290ZXJ7XG4gICAgXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAyNnB4O1xuICAgICAgICB3aWR0aDogODclO1xuICAgIH1cbn0iLCIubWVudWljb24ge1xuICBwYWRkaW5nOiAwIDAgMCAxMXB4O1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5tYWluZGl2IHtcbiAgcGFkZGluZzogMjZweCAyNHB4IDBweCAyNHB4O1xufVxuLm1haW5kaXYgcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5tYWluZGl2IC50aW1uZyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgY29sb3I6ICMxQTFBMUE7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuLm1haW5kaXYgLmRzY3JwdG4ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiAjMUExQTFBO1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmhkbmcge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIC8qIE1lZGl1bSBHcmV5ICovXG4gIGNvbG9yOiAjQjhCOEI4O1xufVxuXG5ociB7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAvKiBiYWNrZ3JvdW5kOiBhcXVhbWFyaW5lOyAqL1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBtYXJnaW46IDhweCAyNHB4O1xufVxuXG4ubWFpbmRpdjIge1xuICBwYWRkaW5nOiAwcHggMjRweCAwcHggMjRweDtcbn1cbi5tYWluZGl2MiBwIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIGNvbG9yOiAjMUExQTFBO1xufVxuXG4uaHIyIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbmRpdjMge1xuICBwYWRkaW5nOiAwcHggMjRweCAwcHggMjRweDtcbn1cbi5tYWluZGl2MyAuaGRuZyB7XG4gIHBhZGRpbmctdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbmRpdjMgcCB7XG4gIG1hcmdpbjogMHB4O1xufVxuLm1haW5kaXYzIC5kZWNwdCB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIC8qIERpcmVjdCBCbGFjayAqL1xuICBjb2xvcjogIzFBMUExQTtcbn1cblxuaW9uLWZvb3RlciBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDAgMCAyNnB4O1xuICB3aWR0aDogODclO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/bookvitals/bathingdetails/bathingdetails.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/bookvitals/bathingdetails/bathingdetails.page.ts ***!
  \************************************************************************/
/*! exports provided: BathingdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BathingdetailsPage", function() { return BathingdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _dltbathingpopover_dltbathingpopover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dltbathingpopover/dltbathingpopover.component */ "./src/app/pages/bookvitals/bathingdetails/dltbathingpopover/dltbathingpopover.component.ts");




let BathingdetailsPage = class BathingdetailsPage {
    constructor(popoverController) {
        this.popoverController = popoverController;
    }
    ngOnInit() {
    }
    deletebathing(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _dltbathingpopover_dltbathingpopover_component__WEBPACK_IMPORTED_MODULE_3__["DltbathingpopoverComponent"],
                cssClass: "popoverstyle",
                event: ev,
                translucent: true,
                mode: "ios",
            });
            // popover.onDidDismiss().then((x) => {
            //   if (x.data == "delete") {
            //     this.presentModal();
            //   }
            // });
            return yield popover.present();
        });
    }
};
BathingdetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
BathingdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bathingdetails',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bathingdetails.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/bathingdetails/bathingdetails.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./bathingdetails.page.scss */ "./src/app/pages/bookvitals/bathingdetails/bathingdetails.page.scss")).default]
    })
], BathingdetailsPage);



/***/ }),

/***/ "./src/app/pages/bookvitals/bathingdetails/dltbathingpopover/dltbathingpopover.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/bookvitals/bathingdetails/dltbathingpopover/dltbathingpopover.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #000000;\n  --min-height: 64px;\n  background: #FFFFFF;\n  --border-radius: 8px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYm9va3ZpdGFscy9iYXRoaW5nZGV0YWlscy9kbHRiYXRoaW5ncG9wb3Zlci9kbHRiYXRoaW5ncG9wb3Zlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYm9va3ZpdGFscy9iYXRoaW5nZGV0YWlscy9kbHRiYXRoaW5ncG9wb3Zlci9kbHRiYXRoaW5ncG9wb3Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0osZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLG9CQUFBO0VBQ0EsV0FBQTtBQ0FBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm9va3ZpdGFscy9iYXRoaW5nZGV0YWlscy9kbHRiYXRoaW5ncG9wb3Zlci9kbHRiYXRoaW5ncG9wb3Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA1MDA7XG5mb250LXNpemU6IDE0cHg7XG5saW5lLWhlaWdodDogMTdweDtcbmNvbG9yOiAjMDAwMDAwO1xuLS1taW4taGVpZ2h0OiA2NHB4O1xuYmFja2dyb3VuZDogI0ZGRkZGRjtcbi8vIGJveC1zaGFkb3c6IDBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4tLWJvcmRlci1yYWRpdXM6IDhweDtcbndpZHRoOiAxMDAlO1xuXG59IiwiaW9uLWl0ZW0ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICAtLW1pbi1oZWlnaHQ6IDY0cHg7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/bookvitals/bathingdetails/dltbathingpopover/dltbathingpopover.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/bookvitals/bathingdetails/dltbathingpopover/dltbathingpopover.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DltbathingpopoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DltbathingpopoverComponent", function() { return DltbathingpopoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DltbathingpopoverComponent = class DltbathingpopoverComponent {
    constructor() { }
    ngOnInit() { }
    delete() {
        this.popoverCntrl.dismiss("delete");
    }
};
DltbathingpopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dltbathingpopover',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dltbathingpopover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/bathingdetails/dltbathingpopover/dltbathingpopover.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dltbathingpopover.component.scss */ "./src/app/pages/bookvitals/bathingdetails/dltbathingpopover/dltbathingpopover.component.scss")).default]
    })
], DltbathingpopoverComponent);



/***/ })

}]);
//# sourceMappingURL=pages-bookvitals-bathingdetails-bathingdetails-module-es2015.js.map