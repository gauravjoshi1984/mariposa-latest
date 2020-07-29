(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configcare-addbeauty-addbeauty-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/addbeauty/addbeauty.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/addbeauty/addbeauty.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"title-text\">\n      Add Medicine\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    <ion-grid>\n      <ion-row style=\"align-items: center; margin-top: 32px;\">\n        <ion-col size=\"10\">\n          <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\"\n            >Beauty & Grooming</ion-text\n          >\n        </ion-col>\n        <ion-col>\n          <ion-icon\n            style=\"zoom: 1.2; color: black; float: right;\"\n            name=\"close-outline\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"listtitle\">Grooming Type</p>\n  <app-m-select [value]=\"'Capsule'\"></app-m-select>\n  \n  <ion-grid fixed class=\"configurecaregrid\">\n    \n    <m-selectdate></m-selectdate>\n    \n  </ion-grid>\n\n  \n  \n\n  <p class=\"label-text\">Repeat</p>\n  <div class=\"chipdiv\">\n    <ion-chip\n      color=\"primary\"\n      mode=\"ios\"\n      outline=\"true\"\n      [class.selectedchip]=\"selectedDays.includes(day.value)\"\n      *ngFor=\"let day of daysList\"\n      (click)=\"addremoveDay(day)\"\n    >\n      <ion-label>{{day.name}}</ion-label>\n    </ion-chip>\n    \n  </div>\n  \n  <!-- <p class=\"listtitle listtitle4\">Medication Duration</p>\n  <ion-grid class=\"configurecaregrid\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"datelabel\">Start Date</p>\n        <ion-button fill=\"outline\" class=\"datebtn\">\n          <ion-datetime\n            value=\"2020-05-12T13:47:20.789\"\n            displayFormat=\"DD-MMM-YYYY\"\n          ></ion-datetime>\n          <ion-icon\n            slot=\"end\"\n            src=\"assets/MariposaIcons/Calendar icon.svg\"\n          ></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"datelabel\">End Date</p>\n        <ion-button fill=\"outline\" class=\"datebtn\">\n          <ion-datetime\n            value=\"2020-05-12T13:47:20.789\"\n            displayFormat=\"DD-MMM-YYYY\"\n          ></ion-datetime>\n          <ion-icon\n            slot=\"end\"\n            src=\"assets/MariposaIcons/Calendar icon.svg\"\n          ></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <p class=\"instruction\">Instructions (optional)</p>\n  <ion-textarea\n    rows=\"5\"\n    placeholder=\"Write here\"\n    [(ngModel)]=\"instructions\"\n  ></ion-textarea>\n  <ion-button fill=\"clear\" class=\"btn2\" (click)=\"addImage()\">\n    <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n    ADD IMAGES\n  </ion-button>\n  <ion-text>\n    <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n      <span>{{img.substring(img.lastIndexOf(\"/\") + 1)}}</span>\n      <ion-icon slot=\"end\" name=\"trash\" (click)=\"removeImg(j)\"></ion-icon>\n    </div>\n  </ion-text>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button\n      color=\"primary\"\n      expand=\"block\"\n      fill=\"solid\"\n      class=\"submitbtn\"\n      shape=\"round\"\n    >\n      Submit\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/configcare/addbeauty/addbeauty-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/configcare/addbeauty/addbeauty-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: AddbeautyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbeautyPageRoutingModule", function() { return AddbeautyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addbeauty_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addbeauty.page */ "./src/app/pages/configcare/addbeauty/addbeauty.page.ts");




const routes = [
    {
        path: '',
        component: _addbeauty_page__WEBPACK_IMPORTED_MODULE_3__["AddbeautyPage"]
    }
];
let AddbeautyPageRoutingModule = class AddbeautyPageRoutingModule {
};
AddbeautyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddbeautyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/configcare/addbeauty/addbeauty.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/configcare/addbeauty/addbeauty.module.ts ***!
  \****************************************************************/
/*! exports provided: AddbeautyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbeautyPageModule", function() { return AddbeautyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addbeauty_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addbeauty-routing.module */ "./src/app/pages/configcare/addbeauty/addbeauty-routing.module.ts");
/* harmony import */ var _addbeauty_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addbeauty.page */ "./src/app/pages/configcare/addbeauty/addbeauty.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let AddbeautyPageModule = class AddbeautyPageModule {
};
AddbeautyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addbeauty_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddbeautyPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_addbeauty_page__WEBPACK_IMPORTED_MODULE_6__["AddbeautyPage"]]
    })
], AddbeautyPageModule);



/***/ }),

/***/ "./src/app/pages/configcare/addbeauty/addbeauty.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/configcare/addbeauty/addbeauty.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-text {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  color: #1a1a1a;\n  height: 19px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\ninput {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  /* identical to box height */\n  /* Direct Black */\n  color: #1a1a1a;\n}\n\n.listtitle {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  margin: 0;\n  padding-bottom: 8px;\n  color: #1a1a1a;\n}\n\n.listtitle2 {\n  padding-top: 16px !important;\n  padding-bottom: 7px !important;\n}\n\n.listtitle3 {\n  padding-top: 24px !important;\n  padding-bottom: 8px !important;\n}\n\n.listtitle4 {\n  padding-top: 24px !important;\n  padding-bottom: 16px !important;\n}\n\nion-content {\n  --padding-bottom: 24px;\n  --padding-end: 24px;\n  --padding-start: 24px;\n  --padding-top: 24px;\n}\n\n.time-sec {\n  display: contents;\n}\n\n.time-sec ion-input {\n  --padding-start: 0;\n  font-size: 40px;\n  line-height: 40px;\n  font-weight: bold;\n  height: 40px;\n  color: #7e7e7e;\n}\n\n.time-sec p {\n  font-size: 40px;\n  line-height: 40px;\n  color: #4137ff;\n  font-weight: bold;\n  height: 40px;\n  margin: 0;\n}\n\n.time-sec ion-input:first-child {\n  color: #4137ff;\n}\n\n.btn1 {\n  --border-radius: 8px;\n  margin-top: 16px;\n  padding-top: 0;\n  --border: 1px solid #4137ff;\n  width: 120px;\n  height: 44px;\n}\n\n.timebtn {\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: 500;\n  background: white;\n  line-height: 20px;\n}\n\n.timecol {\n  display: grid;\n  padding: 0;\n}\n\n.timecol button:first-child {\n  color: #4137ff;\n}\n\n.timecol button {\n  color: #7e7e7e;\n}\n\n.chipdiv {\n  justify-content: space-around;\n  display: flex;\n  list-style: none;\n  padding: 0;\n}\n\n.chipdiv ion-chip {\n  width: 26px;\n  height: 26px;\n  text-align: center;\n  display: inline-flex;\n  background: #e0e0e0;\n  color: #7e7e7e;\n  justify-content: center;\n  border: none;\n}\n\n.chipdiv ion-chip ion-label {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  text-transform: capitalize;\n}\n\n.selectedchip {\n  background: #4137ff !important;\n  color: white !important;\n}\n\nhr {\n  background: #e0e0e0;\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n\nion-textarea {\n  border: 1px solid #b8b8b8;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.btn2 {\n  margin-top: 12px;\n  margin-bottom: 30px;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  text-transform: uppercase;\n  /* Direct Black */\n  color: #1a1a1a;\n}\n\n.btn2 ion-icon {\n  color: #4137ff;\n}\n\nion-header ion-toolbar {\n  box-shadow: 0px 2px 8px rgba(65, 55, 255, 0.14);\n}\n\nion-title {\n  padding-left: 24px;\n}\n\n.submitbtn {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  color: #ffffff;\n  --border-radius: 8px;\n  width: 87.5%;\n  margin: 16px 24px;\n  height: 44px;\n}\n\nion-footer ion-toolbar {\n  box-shadow: 0px -2px 8px rgba(65, 55, 255, 0.08);\n}\n\nion-content {\n  --padding-start: 24px;\n  --padding-end: 24px;\n}\n\n.configurecaregrid {\n  padding: 0px;\n  padding-top: 8px;\n}\n\n.timetext {\n  display: flex;\n}\n\n.timesec {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 49px;\n}\n\n.timemin {\n  color: #7e7e7e;\n}\n\n.meridiemsec {\n  display: grid;\n  padding-left: 16px;\n}\n\n.meridiemsec span {\n  display: inline-flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  text-transform: capitalize;\n  color: #7e7e7e;\n}\n\n.activemeridian {\n  color: #4137ff !important;\n}\n\n.imagelist {\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  color: #000000;\n  margin-bottom: 10px;\n}\n\n.imagelist span {\n  padding-right: 30px;\n}\n\n.datelabel {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  padding-bottom: 6px;\n  color: #1a1a1a;\n  margin: 0;\n}\n\n.datebtn {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: #1a1a1a;\n  --border-color: #b8b8b8;\n  --border-width: 1px;\n  --border-style: solid;\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 94.5%;\n  height: 44px;\n}\n\n.datebtn ion-icon {\n  font-size: 22px;\n}\n\n.datebtn::part(native) {\n  padding: 0;\n}\n\nion-datetime {\n  padding: 0;\n}\n\nion-icon {\n  zoom: 1;\n}\n\n.instruction {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  color: #1a1a1a;\n  height: 19px;\n  margin-top: 24px;\n  margin-bottom: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9hZGRiZWF1dHkvYWRkYmVhdXR5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9hZGRiZWF1dHkvYWRkYmVhdXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxpQkFBQTtFQUVBLGNBQUE7QUNESjs7QURHRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUU7RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FEQ0U7RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0FDRUo7O0FEQUU7RUFDRSw0QkFBQTtFQUNBLCtCQUFBO0FDR0o7O0FEREU7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0lKOztBRERFO0VBb0JFLGlCQUFBO0FDZko7O0FESkk7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNNTjs7QURKSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDTU47O0FESkk7RUFDRSxjQUFBO0FDTU47O0FERkU7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNLSjs7QURIRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ01KOztBREpFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUNPSjs7QUROSTtFQUNFLGNBQUE7QUNRTjs7QUROSTtFQUNFLGNBQUE7QUNRTjs7QURMRTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ1FKOztBRE5JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFFQSxZQUFBO0FDT047O0FETE07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDT1I7O0FESEU7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0FDTUo7O0FESkU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNPSjs7QURMRTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRE5FO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSx5QkFBQTtFQUVBLGlCQUFBO0VBRUEsY0FBQTtBQ01KOztBRExJO0VBQ0UsY0FBQTtBQ09OOztBREhJO0VBQ0UsK0NBQUE7QUNNTjs7QURIRTtFQUNFLGtCQUFBO0FDTUo7O0FESkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ09KOztBREpJO0VBQ0UsZ0RBQUE7QUNPTjs7QURKRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUNPSjs7QURERTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZFO0VBQ0UsYUFBQTtBQ0tKOztBREhFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKRTtFQUNFLGNBQUE7QUNPSjs7QURMRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRFBJO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNTTjs7QURORTtFQUNFLHlCQUFBO0FDU0o7O0FEUEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUlBLGNBQUE7RUFDQSxtQkFBQTtBQ09KOztBRE5JO0VBQ0UsbUJBQUE7QUNRTjs7QURMRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxTQUFBO0FDT0o7O0FETEU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ09KOztBRE5JO0VBQ0UsZUFBQTtBQ1FOOztBRExFO0VBQ0UsVUFBQTtBQ1FKOztBRE5FO0VBQ0UsVUFBQTtBQ1NKOztBRFBFO0VBQ0UsT0FBQTtBQ1VKOztBRFBFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ2NhcmUvYWRkYmVhdXR5L2FkZGJlYXV0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtdGV4dCB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgY29sb3I6ICMxYTFhMWE7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAvLyBtYXJnaW46IDA7XG4gIH1cbiAgaW5wdXQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBcbiAgICAvKiBEaXJlY3QgQmxhY2sgKi9cbiAgXG4gICAgY29sb3I6ICMxYTFhMWE7XG4gIH1cbiAgLmxpc3R0aXRsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIGNvbG9yOiAjMWExYTFhO1xuICB9XG4gIC5saXN0dGl0bGUyIHtcbiAgICBwYWRkaW5nLXRvcDogMTZweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgfVxuICAubGlzdHRpdGxlMyB7XG4gICAgcGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmxpc3R0aXRsZTQge1xuICAgIHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbiAgfVxuICBpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICAtLXBhZGRpbmctZW5kOiAyNHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgICAtLXBhZGRpbmctdG9wOiAyNHB4O1xuICB9XG4gIFxuICAudGltZS1zZWMge1xuICAgIGlvbi1pbnB1dCB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgY29sb3I6ICM3ZTdlN2U7XG4gICAgfVxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICBjb2xvcjogIzQxMzdmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICBpb24taW5wdXQ6Zmlyc3QtY2hpbGQge1xuICAgICAgY29sb3I6ICM0MTM3ZmY7XG4gICAgfVxuICAgIGRpc3BsYXk6IGNvbnRlbnRzO1xuICB9XG4gIC5idG4xIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIC0tYm9yZGVyOiAxcHggc29saWQgIzQxMzdmZjtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICB9XG4gIC50aW1lYnRuIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAudGltZWNvbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gICAgICBjb2xvcjogIzQxMzdmZjtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgIGNvbG9yOiAjN2U3ZTdlO1xuICAgIH1cbiAgfVxuICAuY2hpcGRpdiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gIFxuICAgIGlvbi1jaGlwIHtcbiAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgICAgY29sb3I6ICM3ZTdlN2U7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gICAgICBib3JkZXI6IG5vbmU7XG4gIFxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zZWxlY3RlZGNoaXAge1xuICAgIGJhY2tncm91bmQ6ICM0MTM3ZmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuICBociB7XG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAgaW9uLXRleHRhcmVhIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjhiOGI4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG4gIC5idG4yIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgXG4gICAgLyogRGlyZWN0IEJsYWNrICovXG4gIFxuICAgIGNvbG9yOiAjMWExYTFhO1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiAjNDEzN2ZmO1xuICAgIH1cbiAgfVxuICBpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDY1LCA1NSwgMjU1LCAwLjE0KTtcbiAgICB9XG4gIH1cbiAgaW9uLXRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIH1cbiAgLnN1Ym1pdGJ0biB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiA4Ny41JTtcbiAgICBtYXJnaW46IDE2cHggMjRweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gIH1cbiAgaW9uLWZvb3RlciB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgYm94LXNoYWRvdzogMHB4IC0ycHggOHB4IHJnYmEoNjUsIDU1LCAyNTUsIDAuMDgpO1xuICAgIH1cbiAgfVxuICBpb24tY29udGVudCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDI0cHg7XG4gIH1cbiAgLy9pb24tZ3JpZCB7XG4gIC8vICBwYWRkaW5nOiAwO1xuICAvL31cbiAgXG4gIC5jb25maWd1cmVjYXJlZ3JpZHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcGFkZGluZy10b3A6OHB4O1xuICB9XG4gIC50aW1ldGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAudGltZXNlYyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0OXB4O1xuICB9XG4gIC50aW1lbWluIHtcbiAgICBjb2xvcjogIzdlN2U3ZTtcbiAgfVxuICAubWVyaWRpZW1zZWMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHNwYW4ge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICBjb2xvcjogIzdlN2U3ZTtcbiAgICB9XG4gIH1cbiAgLmFjdGl2ZW1lcmlkaWFuIHtcbiAgICBjb2xvcjogIzQxMzdmZiAhaW1wb3J0YW50O1xuICB9XG4gIC5pbWFnZWxpc3Qge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgc3BhbiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIH1cbiAgfVxuICAuZGF0ZWxhYmVsIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgXG4gICAgY29sb3I6ICMxYTFhMWE7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC5kYXRlYnRuIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIFxuICAgIGNvbG9yOiAjMWExYTFhO1xuICAgIC0tYm9yZGVyLWNvbG9yOiAjYjhiOGI4O1xuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiA5NC41JTtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cbiAgfVxuICAuZGF0ZWJ0bjo6cGFydChuYXRpdmUpIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIGlvbi1kYXRldGltZSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBpb24taWNvbiB7XG4gICAgem9vbTogMTtcbiAgfVxuICBcbiAgLmluc3RydWN0aW9ue1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGNvbG9yOiAjMWExYTFhO1xuICAgIGhlaWdodDogMTlweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuIiwiLmxhYmVsLXRleHQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgLyogRGlyZWN0IEJsYWNrICovXG4gIGNvbG9yOiAjMWExYTFhO1xufVxuXG4ubGlzdHRpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIGNvbG9yOiAjMWExYTFhO1xufVxuXG4ubGlzdHRpdGxlMiB7XG4gIHBhZGRpbmctdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3R0aXRsZTMge1xuICBwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0dGl0bGU0IHtcbiAgcGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAtLXBhZGRpbmctZW5kOiAyNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gIC0tcGFkZGluZy10b3A6IDI0cHg7XG59XG5cbi50aW1lLXNlYyB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuLnRpbWUtc2VjIGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICM3ZTdlN2U7XG59XG4udGltZS1zZWMgcCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjNDEzN2ZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDA7XG59XG4udGltZS1zZWMgaW9uLWlucHV0OmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICM0MTM3ZmY7XG59XG5cbi5idG4xIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICAtLWJvcmRlcjogMXB4IHNvbGlkICM0MTM3ZmY7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG4udGltZWJ0biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLnRpbWVjb2wge1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAwO1xufVxuLnRpbWVjb2wgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICM0MTM3ZmY7XG59XG4udGltZWNvbCBidXR0b24ge1xuICBjb2xvcjogIzdlN2U3ZTtcbn1cblxuLmNoaXBkaXYge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi5jaGlwZGl2IGlvbi1jaGlwIHtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgY29sb3I6ICM3ZTdlN2U7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG59XG4uY2hpcGRpdiBpb24tY2hpcCBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnNlbGVjdGVkY2hpcCB7XG4gIGJhY2tncm91bmQ6ICM0MTM3ZmYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4YjhiODtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uYnRuMiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC8qIERpcmVjdCBCbGFjayAqL1xuICBjb2xvcjogIzFhMWExYTtcbn1cbi5idG4yIGlvbi1pY29uIHtcbiAgY29sb3I6ICM0MTM3ZmY7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDY1LCA1NSwgMjU1LCAwLjE0KTtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuXG4uc3VibWl0YnRuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA4Ny41JTtcbiAgbWFyZ2luOiAxNnB4IDI0cHg7XG4gIGhlaWdodDogNDRweDtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XG4gIGJveC1zaGFkb3c6IDBweCAtMnB4IDhweCByZ2JhKDY1LCA1NSwgMjU1LCAwLjA4KTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDI0cHg7XG59XG5cbi5jb25maWd1cmVjYXJlZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLnRpbWV0ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRpbWVzZWMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDlweDtcbn1cblxuLnRpbWVtaW4ge1xuICBjb2xvcjogIzdlN2U3ZTtcbn1cblxuLm1lcmlkaWVtc2VjIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLm1lcmlkaWVtc2VjIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICM3ZTdlN2U7XG59XG5cbi5hY3RpdmVtZXJpZGlhbiB7XG4gIGNvbG9yOiAjNDEzN2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5pbWFnZWxpc3Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pbWFnZWxpc3Qgc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5kYXRlbGFiZWwge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIGNvbG9yOiAjMWExYTFhO1xuICBtYXJnaW46IDA7XG59XG5cbi5kYXRlYnRuIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgLS1ib3JkZXItY29sb3I6ICNiOGI4Yjg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogOTQuNSU7XG4gIGhlaWdodDogNDRweDtcbn1cbi5kYXRlYnRuIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uZGF0ZWJ0bjo6cGFydChuYXRpdmUpIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgcGFkZGluZzogMDtcbn1cblxuaW9uLWljb24ge1xuICB6b29tOiAxO1xufVxuXG4uaW5zdHJ1Y3Rpb24ge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/configcare/addbeauty/addbeauty.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/configcare/addbeauty/addbeauty.page.ts ***!
  \**************************************************************/
/*! exports provided: AddbeautyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbeautyPage", function() { return AddbeautyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");



let AddbeautyPage = class AddbeautyPage {
    constructor(imagePicker) {
        // this.customPickerOptions = {
        //   buttons: [
        //     {
        //       text: "Submit",
        //       handler: (x) => {
        //         console.log("Clicked Save!", x);
        //         if (this.timeList[this.timeindex]) {
        //           let dateVar = new Date();
        //           dateVar.setHours(
        //             x.ampm.value == "pm" ? x.hour.value + 12 : x.hour.value
        //           );
        //           dateVar.setMinutes(x.minute.value);
        //           this.timeList[this.timeindex] = dateVar;
        this.imagePicker = imagePicker;
        this.timeList = [];
        this.instructions = "";
        this.imageList = [];
        this.daysList = [
            {
                name: "s",
                value: "Sunday",
            },
            {
                name: "m",
                value: "Monday",
            },
            {
                name: "t",
                value: "Tuesday",
            },
            {
                name: "w",
                value: "Wednesday",
            },
            {
                name: "t",
                value: "Thursday",
            },
            {
                name: "f",
                value: "Friday",
            },
            {
                name: "s",
                value: "Saturday",
            },
        ];
        this.selectedDays = [];
        //           console.log(this.timeList[this.timeindex]);
        //         }
        //       },
        //     },
        //     {
        //       text: "Delete",
        //       handler: () => {
        //         console.log("Clicked Log. Do not Dismiss.");
        //         // return false;
        //         this.timeList.splice(this.timeindex, 1);
        //       },
        //     },
        //   ],
        // };
    }
    refresh(ev) {
        setTimeout(() => {
            ev.detail.complete();
        }, 3000);
    }
    ngOnInit() {
        this.addDate();
    }
    addDate() {
        this.timeList.push(new Date());
    }
    // changeTime(i) {
    //   this.datepicker.open().then((x) => {
    //     console.log(x);
    //     this.timeindex = i;
    //   });
    // }
    addImage() {
        let options = {
            maximumImagesCount: 4,
        };
        this.imagePicker.getPictures(options).then((results) => {
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                this.imageList.push(results[i]);
            }
        }, (err) => { });
    }
    removeImg(i) {
        console.log("*", i);
        this.imageList.splice(i, 1);
    }
    addremoveDay(item) {
        if (this.selectedDays.includes(item.value)) {
            let index = this.selectedDays.indexOf(item.value);
            this.selectedDays.splice(index, 1);
        }
        else {
            this.selectedDays.push(item.value);
        }
    }
};
AddbeautyPage.ctorParameters = () => [
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"] }
];
AddbeautyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addbeauty',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addbeauty.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/addbeauty/addbeauty.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addbeauty.page.scss */ "./src/app/pages/configcare/addbeauty/addbeauty.page.scss")).default]
    })
], AddbeautyPage);



/***/ })

}]);
//# sourceMappingURL=pages-configcare-addbeauty-addbeauty-module-es2015.js.map