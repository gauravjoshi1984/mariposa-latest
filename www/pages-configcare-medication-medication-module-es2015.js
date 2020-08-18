(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configcare-medication-medication-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/medication/medication.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/medication/medication.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title class=\"title-text\">\n      Medication\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    \n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <ion-button [routerLink]=\"'/../'\" routerDirection=\"backward\">\n              <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n            </ion-button>\n            </ion-buttons>\n          <!-- <ion-buttons slot=\"start\">\n            <ion-back-button color=\"mdblack\" icon=\"chevron-back-outline\" defaultHref=\"admin-sign-in\"></ion-back-button>\n          </ion-buttons> -->\n        </ion-toolbar> \n        \n        </ion-col>\n        <ion-col size=\"5\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Medication</ion-text>\n           \n          </div> \n        </ion-col>\n        <ion-col>\n          <div>\n          <ion-text \n          [routerLink]=\"'/configcare/deletemedicine'\"\n          style=\"float: right;\n          font-weight: 600;\n          font-size: 12px;\n          line-height: 14px;\n          color: #4137FF;\n          margin-top: 3px;\">EDIT\n          </ion-text>\n          </div>\n        </ion-col>\n        \n      </ion-row>\n   \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"listtitle\">Medication List</p>\n  \n  <div style=\"padding: 0px;\" *ngFor=\"let item of ccmedicineinfo\">\n  <ion-card   style=\"width: 105%;right: 8px;margin-top:10px ;\">\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"7\">\n          <p class=\"text1\">{{item.name}}</p>  \n        </ion-col>\n        <ion-col size=\"5\" style=\"text-align: end;\">\n          <p class=\"text1\">{{item.frequency}}</p>     \n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top:13px ;\">\n        <ion-col size=\"7\">         \n          <p class=\"text2\">Dosage: <span>{{item.dosage}}</span></p>\n        </ion-col>\n        <ion-col size=\"5\" style=\"text-align: end;\">   \n          <p class=\"text2\">Time: <span>{{item.time}}</span></p>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  </div>\n\n</ion-content>\n\n<ion-footer mode=\"md\">\n  <ion-toolbar>\n    <ion-grid class=\"ion-no-padding\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button\n            color=\"primary\"\n            expand=\"block\"\n            fill=\"outline\"\n            class=\"submitbtn lbtn\"\n            shape=\"round\"\n          >\n            ADD MORE\n          </ion-button></ion-col\n        >\n        <ion-col size=\"6\">\n          <ion-button\n            color=\"primary\"\n            expand=\"block\"\n            fill=\"solid\"\n            class=\"submitbtn rbtn\"\n            shape=\"round\"\n          >\n            SUBMIT\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/configcare/medication/medication-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/configcare/medication/medication-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: MedicationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationPageRoutingModule", function() { return MedicationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _medication_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medication.page */ "./src/app/pages/configcare/medication/medication.page.ts");




const routes = [
    {
        path: '',
        component: _medication_page__WEBPACK_IMPORTED_MODULE_3__["MedicationPage"]
    }
];
let MedicationPageRoutingModule = class MedicationPageRoutingModule {
};
MedicationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MedicationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/configcare/medication/medication.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/configcare/medication/medication.module.ts ***!
  \******************************************************************/
/*! exports provided: MedicationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationPageModule", function() { return MedicationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _medication_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medication-routing.module */ "./src/app/pages/configcare/medication/medication-routing.module.ts");
/* harmony import */ var _medication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medication.page */ "./src/app/pages/configcare/medication/medication.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let MedicationPageModule = class MedicationPageModule {
};
MedicationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _medication_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicationPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_medication_page__WEBPACK_IMPORTED_MODULE_6__["MedicationPage"]],
    })
], MedicationPageModule);



/***/ }),

/***/ "./src/app/pages/configcare/medication/medication.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/configcare/medication/medication.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-bottom: 24px;\n  --padding-end: 24px;\n  --padding-start: 24px;\n  --padding-top: 24px;\n}\n\n.listtitle {\n  margin: 0;\n  padding-bottom: 12px;\n}\n\nion-card {\n  background: #ffffff;\n  /* Medium Grey */\n  border: 0.4px solid #b8b8b8;\n  box-sizing: border-box;\n  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.25);\n  border-radius: 8px;\n  padding: 16px;\n  margin: 0;\n}\n\n.text1 {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  /* Direct Black */\n  color: #1a1a1a;\n  margin: 0;\n}\n\n.text2 {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  /* Dark Grey */\n  color: #7e7e7e;\n  margin: 0;\n}\n\n.text2 span {\n  color: #1a1a1a !important;\n}\n\n.submitbtn {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  color: #ffffff;\n  --border-radius: 8px;\n  width: 82.5%;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  height: 44px;\n}\n\n.lbtn {\n  margin-left: 24px;\n  --border-width: 1px;\n}\n\n.rbtn {\n  margin-right: 24px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9tZWRpY2F0aW9uL21lZGljYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25maWdjYXJlL21lZGljYXRpb24vbWVkaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsU0FBQTtFQUNBLG9CQUFBO0FDRUY7O0FEQUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBRUEsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRFQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEsaUJBQUE7RUFFQSxjQUFBO0VBQ0EsU0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEsY0FBQTtFQUVBLGNBQUE7RUFDQSxTQUFBO0FDQUY7O0FEQ0U7RUFDRSx5QkFBQTtBQ0NKOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25maWdjYXJlL21lZGljYXRpb24vbWVkaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDI0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgLS1wYWRkaW5nLXRvcDogMjRweDtcbn1cbi5saXN0dGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxuaW9uLWNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAvKiBNZWRpdW0gR3JleSAqL1xuXG4gIGJvcmRlcjogMC40cHggc29saWQgI2I4YjhiODtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA4KSwgMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW46IDA7XG59XG4udGV4dDEge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgLyogRGlyZWN0IEJsYWNrICovXG5cbiAgY29sb3I6ICMxYTFhMWE7XG4gIG1hcmdpbjogMDtcbn1cbi50ZXh0MiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICAvKiBEYXJrIEdyZXkgKi9cblxuICBjb2xvcjogIzdlN2U3ZTtcbiAgbWFyZ2luOiAwO1xuICBzcGFuIHtcbiAgICBjb2xvcjogIzFhMWExYSAhaW1wb3J0YW50O1xuICB9XG59XG4uc3VibWl0YnRuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA4Mi41JTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuLmxidG4ge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbn1cbi5yYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDI0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgLS1wYWRkaW5nLXRvcDogMjRweDtcbn1cblxuLmxpc3R0aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLyogTWVkaXVtIEdyZXkgKi9cbiAgYm9yZGVyOiAwLjRweCBzb2xpZCAjYjhiOGI4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRleHQxIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAvKiBEaXJlY3QgQmxhY2sgKi9cbiAgY29sb3I6ICMxYTFhMWE7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRleHQyIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAvKiBEYXJrIEdyZXkgKi9cbiAgY29sb3I6ICM3ZTdlN2U7XG4gIG1hcmdpbjogMDtcbn1cbi50ZXh0MiBzcGFuIHtcbiAgY29sb3I6ICMxYTFhMWEgIWltcG9ydGFudDtcbn1cblxuLnN1Ym1pdGJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogODIuNSU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIGhlaWdodDogNDRweDtcbn1cblxuLmxidG4ge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbn1cblxuLnJidG4ge1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/configcare/medication/medication.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/configcare/medication/medication.page.ts ***!
  \****************************************************************/
/*! exports provided: MedicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationPage", function() { return MedicationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MedicationPage = class MedicationPage {
    constructor() {
        this.ccmedicineinfo = [
            {
                name: "Ibuprofine Mkal 100mg",
                frequency: "Daily",
                dosage: "#1",
                time: "10.00 PM",
            },
            {
                name: "Ibuprofine Mkal 100mg",
                frequency: "Daily",
                dosage: "#1",
                time: "10.00 PM",
            },
        ];
    }
    ngOnInit() {
    }
};
MedicationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medication',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./medication.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/medication/medication.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./medication.page.scss */ "./src/app/pages/configcare/medication/medication.page.scss")).default]
    })
], MedicationPage);



/***/ })

}]);
//# sourceMappingURL=pages-configcare-medication-medication-module-es2015.js.map