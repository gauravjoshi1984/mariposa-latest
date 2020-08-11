(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configcare-assignshoppinglist-assignshoppinglist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/assignshoppinglist/assignshoppinglist.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/assignshoppinglist/assignshoppinglist.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"title-text\">\n      Medication\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    \n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <ion-button [routerLink]=\"'/../'\" routerDirection=\"backward\">\n              <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n            </ion-button>\n            </ion-buttons>\n          <!-- <ion-buttons slot=\"start\">\n            <ion-back-button color=\"mdblack\" icon=\"chevron-back-outline\" defaultHref=\"admin-sign-in\"></ion-back-button>\n          </ion-buttons> -->\n        </ion-toolbar> \n        \n        </ion-col>\n        <ion-col size=\"8\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Shopping List</ion-text>\n           \n          </div> \n        </ion-col>\n        \n        \n      </ion-row>\n   \n  </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content>\n  <ion-grid class=\"selecttimegrid\">\n\n    <!-- SELECT TIME -->\n\n    <ion-row *ngFor=\"let item of timeList; let i = index\">\n      <p class=\"label-text\">Select Time</p>\n    \n      <ion-col size=\"12\" (click)=\"changeTime(i)\">\n        <ion-text color=\"primary\" class=\"timetext\">\n          <div class=\"timesec\">\n            <span>{{ getTimeHR(item.getHours()) }}</span\n            >&nbsp;&nbsp;:&nbsp;&nbsp;<span class=\"timemin\">{{\n              getMinFormat(item.getMinutes())\n            }}</span>\n          </div>\n          <div class=\"meridiemsec\">\n            <span [class.activemeridian]=\"item.getHours() < 12\">AM</span>\n            <span [class.activemeridian]=\"item.getHours() >= 12\">PM</span>\n          </div>\n          <div class=\"dltsec\" *ngIf=\"i != 0\">\n            <ion-button\n              fill=\"clear\"\n              shape=\"round\"\n              class=\"dltbtn\"\n              (click)=\"deleteTime(i)\"\n              \n            >\n              <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n              Delete\n            </ion-button>\n          </div>\n        </ion-text>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-button class=\"addbutton\" fill=\"outline\" shape=\"round\" (click)=\"addDate()\">\n      <ion-icon class=\"plusbutton\" slot=\"start\" name=\"add-circle\"></ion-icon>Add\n    </ion-button> -->\n    <ion-datetime\n      style=\"display: none;\"\n      [pickerOptions]=\"customPickerOptions\"\n      #datepicker\n      displayFormat=\"h:mm A\"\n    ></ion-datetime>\n    \n    <!-- SELECT TIME END -->\n\n\n\n    <div style=\"padding: 0px;\" class=\"nametag\">\n      <ion-text position=\"floating\" id=\"tag\">Assign to</ion-text>\n    </div>\n    <div style=\"padding-top: 5px;\">\n      <ion-select mode=\"md\" class=\"input\" placeholder=\"Select one\"></ion-select>\n    </div>\n\n  </ion-grid>\n  \n  <ion-grid class=\"productlistgrid\">\n    \n    <div>\n    <ion-text class=\"text\">Select items from the list</ion-text>\n    </div>\n    \n    <div style=\"margin-top:16px ;\">\n    <ion-text class=\"textsmall\">Product Name</ion-text>\n    </div>\n\n    <hr class=\"solid\" style=\"margin-top: 15px;margin-bottom:11px ;\">\n    \n    <div *ngFor=\"let item of shoppinglist  \" style=\"padding:0px\">\n      <ion-row style=\"align-items:center ;\">\n        <ion-col size=\"2\">\n          <ion-checkbox \n          [(ngModel)]=\"item.isChecked\"    \n          mode=\"md\" style=\"margin-left:4px ;\"></ion-checkbox>\n        </ion-col>\n        \n        <ion-col>\n          <ion-text class=\"productname\">{{item.name}}<br></ion-text>\n          <ion-text class=\"productbrand\">{{item.brand}}</ion-text>\n        </ion-col>\n      </ion-row>\n    \n      <div *ngIf=\"item.isChecked\">\n        <ion-row style=\"margin-top:6px;align-items: center;\">\n         <ion-col size=\"2\"></ion-col>\n          <ion-col style=\"padding-bottom: 0px;\">\n            <ion-text class=\"quantity\">Quantity</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"margin-top:6px;align-items: center;\">\n          <ion-col size=\"2\"></ion-col>\n          <ion-col size=\"5\">\n            <ion-input class=\"input\"></ion-input>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-select style=\"width:90%;float:right;\" class=\"input\"></ion-select>\n          </ion-col>\n        </ion-row>\n\n        \n\n      </div>\n      <hr class=\"solid\" style=\"margin-top: 11px;margin-bottom: 11px;\">\n    </div>\n    \n    \n\n  </ion-grid>\n  \n\n\n \n\n\n</ion-content>\n\n<ion-footer mode=\"md\">\n  <ion-toolbar>\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button\n            color=\"primary\"\n            expand=\"block\"\n            fill=\"outline\"\n            class=\"submitbtn lbtn\"\n            shape=\"round\"\n          >\n            ADD MORE\n          </ion-button></ion-col\n        >\n        <ion-col size=\"6\">\n          <ion-button\n            color=\"primary\"\n            expand=\"block\"\n            fill=\"solid\"\n            class=\"submitbtn rbtn\"\n            shape=\"round\"\n          >\n            SUBMIT\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/configcare/assignshoppinglist/assignshoppinglist-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/configcare/assignshoppinglist/assignshoppinglist-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AssignshoppinglistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignshoppinglistPageRoutingModule", function() { return AssignshoppinglistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _assignshoppinglist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignshoppinglist.page */ "./src/app/pages/configcare/assignshoppinglist/assignshoppinglist.page.ts");




const routes = [
    {
        path: '',
        component: _assignshoppinglist_page__WEBPACK_IMPORTED_MODULE_3__["AssignshoppinglistPage"]
    }
];
let AssignshoppinglistPageRoutingModule = class AssignshoppinglistPageRoutingModule {
};
AssignshoppinglistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AssignshoppinglistPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/configcare/assignshoppinglist/assignshoppinglist.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/configcare/assignshoppinglist/assignshoppinglist.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AssignshoppinglistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignshoppinglistPageModule", function() { return AssignshoppinglistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _assignshoppinglist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assignshoppinglist-routing.module */ "./src/app/pages/configcare/assignshoppinglist/assignshoppinglist-routing.module.ts");
/* harmony import */ var _assignshoppinglist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assignshoppinglist.page */ "./src/app/pages/configcare/assignshoppinglist/assignshoppinglist.page.ts");







let AssignshoppinglistPageModule = class AssignshoppinglistPageModule {
};
AssignshoppinglistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _assignshoppinglist_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssignshoppinglistPageRoutingModule"]
        ],
        declarations: [_assignshoppinglist_page__WEBPACK_IMPORTED_MODULE_6__["AssignshoppinglistPage"]]
    })
], AssignshoppinglistPageModule);



/***/ }),

/***/ "./src/app/pages/configcare/assignshoppinglist/assignshoppinglist.page.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/configcare/assignshoppinglist/assignshoppinglist.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".submitbtn {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  color: #ffffff;\n  --border-radius: 8px;\n  width: 82.5%;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  height: 44px;\n}\n\n.lbtn {\n  margin-left: 24px;\n  --border-width: 1px;\n}\n\n.rbtn {\n  margin-right: 24px;\n  float: right;\n}\n\n.selecttimegrid {\n  padding: 24px;\n  padding-top: 8px;\n}\n\n.productlistgrid {\n  padding: 16px;\n  padding-top: 8px;\n}\n\n.text {\n  font-size: 16px;\n  line-height: 19px;\n  font-weight: bold;\n  font-style: normal;\n  margin-left: 5px;\n}\n\n.textsmall {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  font-style: normal;\n  color: #7E7E7E;\n  margin-left: 8px;\n}\n\ndiv {\n  padding: 0px;\n}\n\n.productbrand {\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  font-style: normal;\n  color: #7E7E7E;\n}\n\n.productname {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 17px;\n  font-style: normal;\n  color: #1A1A1A;\n}\n\n.quantity {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  font-style: normal;\n  color: #1A1A1A;\n}\n\n.configurecaregrid {\n  padding: 0px;\n}\n\n.timetext {\n  display: flex;\n}\n\n.timesec {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 49px;\n}\n\n.timemin {\n  color: #B8B8B8;\n}\n\n.meridiemsec {\n  display: grid;\n  padding-left: 16px;\n}\n\n.meridiemsec span {\n  display: inline-flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  text-transform: capitalize;\n  color: #B8B8B8;\n}\n\n.activemeridian {\n  color: #4137ff !important;\n}\n\n.dltbtn {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n  /* Direct Black */\n  color: #1a1a1a;\n}\n\n.dltbtn ion-icon {\n  font-size: 16px;\n  --color: #1a1a1a !important;\n}\n\n.dltbtn::part(native) {\n  padding: 0;\n}\n\n.dltsec {\n  width: 100%;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9hc3NpZ25zaG9wcGluZ2xpc3QvYXNzaWduc2hvcHBpbmdsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9hc3NpZ25zaG9wcGluZ2xpc3QvYXNzaWduc2hvcHBpbmdsaXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBREFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0dGOztBREFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRENBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRElBO0VBQ0UsWUFBQTtBQ0RGOztBREdBO0VBQ0UsYUFBQTtBQ0FGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0dGOztBREZFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNJSjs7QUREQTtFQUNFLHlCQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFFQSxpQkFBQTtFQUVBLGNBQUE7QUNHRjs7QURERTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtBQ0dKOztBREFBO0VBQ0UsVUFBQTtBQ0dGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ2NhcmUvYXNzaWduc2hvcHBpbmdsaXN0L2Fzc2lnbnNob3BwaW5nbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VibWl0YnRuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDgyLjUlO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gIH1cbiAgLmxidG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIH1cbiAgLnJidG4ge1xuICAgIG1hcmdpbi1yaWdodDogMjRweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgXG4uc2VsZWN0dGltZWdyaWR7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5wcm9kdWN0bGlzdGdyaWR7XG4gIHBhZGRpbmc6MTZweCA7XG4gIHBhZGRpbmctdG9wOjhweDtcbn1cblxuLnRleHR7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi50ZXh0c21hbGx7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6MTdweDtcbiAgZm9udC1zdHlsZTpub3JtYWw7XG4gIGNvbG9yOiAjN0U3RTdFO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBcbn1cblxuZGl2e1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5wcm9kdWN0YnJhbmR7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6MTdweDtcbiAgZm9udC1zdHlsZTpub3JtYWw7XG4gIGNvbG9yOiAjN0U3RTdFOyBcbn1cblxuLnByb2R1Y3RuYW1le1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDoxN3B4O1xuICBmb250LXN0eWxlOm5vcm1hbDtcbiAgY29sb3I6ICMxQTFBMUE7IFxufVxuXG4ucXVhbnRpdHl7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6MTlweDtcbiAgZm9udC1zdHlsZTpub3JtYWw7XG4gIGNvbG9yOiAjMUExQTFBO1xufVxuXG5cbi8vdGltZSBjb21wb25lbnQgY3NzXG5cbi5jb25maWd1cmVjYXJlZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi50aW1ldGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udGltZXNlYyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OXB4O1xufVxuLnRpbWVtaW4ge1xuICBjb2xvcjogI0I4QjhCODtcbn1cbi5tZXJpZGllbXNlYyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgY29sb3I6ICNCOEI4Qjg7XG4gIH1cbn1cbi5hY3RpdmVtZXJpZGlhbiB7XG4gIGNvbG9yOiAjNDEzN2ZmICFpbXBvcnRhbnQ7XG59XG4uZGx0YnRuIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gIC8qIERpcmVjdCBCbGFjayAqL1xuXG4gIGNvbG9yOiAjMWExYTFhO1xuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLS1jb2xvcjogIzFhMWExYSAhaW1wb3J0YW50O1xuICB9XG59XG4uZGx0YnRuOjpwYXJ0KG5hdGl2ZSkge1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWljb24ge1xuICAvL3pvb206IDE7XG59XG4uZGx0c2VjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbiIsIi5zdWJtaXRidG4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDgyLjUlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbi5sYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG59XG5cbi5yYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zZWxlY3R0aW1lZ3JpZCB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5wcm9kdWN0bGlzdGdyaWQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi50ZXh0c21hbGwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGNvbG9yOiAjN0U3RTdFO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG5kaXYge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5wcm9kdWN0YnJhbmQge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGNvbG9yOiAjN0U3RTdFO1xufVxuXG4ucHJvZHVjdG5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBjb2xvcjogIzFBMUExQTtcbn1cblxuLnF1YW50aXR5IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBjb2xvcjogIzFBMUExQTtcbn1cblxuLmNvbmZpZ3VyZWNhcmVncmlkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4udGltZXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGltZXNlYyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OXB4O1xufVxuXG4udGltZW1pbiB7XG4gIGNvbG9yOiAjQjhCOEI4O1xufVxuXG4ubWVyaWRpZW1zZWMge1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4ubWVyaWRpZW1zZWMgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogI0I4QjhCODtcbn1cblxuLmFjdGl2ZW1lcmlkaWFuIHtcbiAgY29sb3I6ICM0MTM3ZmYgIWltcG9ydGFudDtcbn1cblxuLmRsdGJ0biB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLyogRGlyZWN0IEJsYWNrICovXG4gIGNvbG9yOiAjMWExYTFhO1xufVxuLmRsdGJ0biBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLS1jb2xvcjogIzFhMWExYSAhaW1wb3J0YW50O1xufVxuXG4uZGx0YnRuOjpwYXJ0KG5hdGl2ZSkge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGx0c2VjIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGVuZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/configcare/assignshoppinglist/assignshoppinglist.page.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/configcare/assignshoppinglist/assignshoppinglist.page.ts ***!
  \********************************************************************************/
/*! exports provided: AssignshoppinglistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignshoppinglistPage", function() { return AssignshoppinglistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AssignshoppinglistPage = class AssignshoppinglistPage {
    constructor() {
        this.shoppinglist = [
            {
                name: "Tissue Roll",
                brand: "Quality Brand",
                isChecked: false,
            },
            {
                name: "Tooth Paste",
                brand: "Pepsodent",
                isChecked: false,
            },
        ];
        this.timeList = [];
        this.customPickerOptions = {
            buttons: [
                {
                    text: "Submit",
                    handler: (x) => {
                        console.log("Clicked Save!", x);
                        if (this.timeList[this.timeindex]) {
                            let dateVar = new Date();
                            dateVar.setHours(x.ampm.value == "pm" ? x.hour.value + 12 : x.hour.value);
                            dateVar.setMinutes(x.minute.value);
                            this.timeList[this.timeindex] = dateVar;
                            console.log(this.timeList[this.timeindex]);
                        }
                    },
                },
                {
                    text: "Delete",
                    handler: () => {
                        console.log("Clicked Log. Do not Dismiss.");
                        // return false;
                        this.timeList.splice(this.timeindex, 1);
                    },
                },
            ],
        };
    }
    ngOnInit() {
        this.addDate();
    }
    addDate() {
        this.timeList.push(new Date());
    }
    getTimeHR(hr) {
        return ("0" + hr).slice(-2);
    }
    getMinFormat(min) {
        return (min < 10 ? "0" : "") + min;
    }
    changeTime(i) {
        this.datepicker.open().then((x) => {
            console.log(x);
            this.timeindex = i;
        });
    }
    deleteTime(i) {
        this.timeList.splice(i, 1);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("datepicker")
], AssignshoppinglistPage.prototype, "datepicker", void 0);
AssignshoppinglistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assignshoppinglist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assignshoppinglist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/assignshoppinglist/assignshoppinglist.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assignshoppinglist.page.scss */ "./src/app/pages/configcare/assignshoppinglist/assignshoppinglist.page.scss")).default]
    })
], AssignshoppinglistPage);



/***/ })

}]);
//# sourceMappingURL=pages-configcare-assignshoppinglist-assignshoppinglist-module-es2015.js.map