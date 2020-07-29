(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configcare-addmedicine-addmedicine-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/addmedicine/addmedicine.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/addmedicine/addmedicine.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"title-text\">\n      Add Medicine\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    <ion-grid>\n      <ion-row style=\"align-items: center; margin-top: 32px;\">\n        <ion-col size=\"10\">\n          <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\"\n            >Add Medicine</ion-text\n          >\n        </ion-col>\n        <ion-col>\n          <ion-icon\n            style=\"zoom: 1.2; color: black; float: right;\"\n            name=\"close-outline\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"medicineForm\">\n    <p class=\"listtitle\">Medicine Type</p>\n    <app-m-select\n      [value]=\"'Capsule'\"\n      [selectOptions]=\"selectData\"\n      (result)=\"setData($event,'medicineType')\"\n    ></app-m-select>\n    <p class=\"listtitle listtitle2\">Medicine Name</p>\n    <ion-input\n      mode=\"md\"\n      class=\"input\"\n      value=\"Ibuprofine MKal 100mg\"\n      formControlName=\"medicineName\"\n    ></ion-input>\n    <ion-grid fixed class=\"configurecaregrid\">\n      <!-- <ion-row *ngFor=\"let item of timeList;let i = index\">\n      <p class=\"label-text\">Select Time</p>\n\n      <ion-col size=\"12\" (click)=\"changeTime(i)\">\n        <ion-text color=\"primary\" class=\"timetext\">\n          <div class=\"timesec\">\n            <span>{{item.getHours()}}</span>&nbsp;&nbsp;:&nbsp;&nbsp;<span\n              class=\"timemin\"\n              >{{item.getMinutes()}}</span\n            >\n          </div>\n          <div class=\"meridiemsec\">\n            <span [class.activemeridian]=\"(item.getHours() < 12) \">AM</span>\n            <span [class.activemeridian]=\"(item.getHours() >= 12) \">PM</span>\n          </div>\n        </ion-text>\n      </ion-col>\n    </ion-row> -->\n      <m-selectdate></m-selectdate>\n      <!-- <ion-row>\n      <ion-col size=\"4\" class=\"time-sec\">\n        <ion-input\n          type=\"tel\"\n          value=\"06\"\n          max=\"12\"\n          min=\"01\"\n          maxlength=\"2\"\n        ></ion-input\n        >&nbsp;\n        <p>:</p>\n        &nbsp;\n        <ion-input\n          type=\"tel\"\n          value=\"00\"\n          maxlength=\"2\"\n          max=\"60\"\n          min=\"00\"\n        ></ion-input>\n      </ion-col>\n      <ion-col size=\"2\" class=\"timecol\">\n        <button class=\"timebtn\">AM</button>\n        <button class=\"timebtn\">PM</button>\n      </ion-col>\n      <ion-col size=\"6\"> </ion-col>\n    </ion-row> -->\n    </ion-grid>\n    <!-- <ion-datetime\n    style=\"display: none;\"\n    [pickerOptions]=\"customPickerOptions\"\n    #datepicker\n    displayFormat=\"h:mm A\"\n  ></ion-datetime> -->\n    <!-- <ion-button class=\"btn1\" fill=\"outline\" shape=\"round\" (click)=\"addDate()\">\n    <ion-icon slot=\"start\" name=\"add-circle\"></ion-icon>Add\n  </ion-button> -->\n\n    <p class=\"label-text\">Repeat</p>\n    <div class=\"chipdiv\">\n      <ion-chip\n        color=\"primary\"\n        mode=\"ios\"\n        outline=\"true\"\n        [class.selectedchip]=\"selectedDays.includes(day.value)\"\n        *ngFor=\"let day of daysList\"\n        (click)=\"addremoveDay(day)\"\n      >\n        <ion-label>{{day.name}}</ion-label>\n      </ion-chip>\n      <!-- <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n      <ion-label>M</ion-label> </ion-chip\n    ><ion-chip color=\"primary\" mode=\"ios\" outline=\"true\" class=\"selectedchip\">\n      <ion-label>T</ion-label> </ion-chip\n    ><ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n      <ion-label>W</ion-label> </ion-chip\n    ><ion-chip color=\"primary\" mode=\"ios\" outline=\"true\" class=\"selectedchip\">\n      <ion-label>T</ion-label>\n    </ion-chip>\n    <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n      <ion-label>F</ion-label>\n    </ion-chip>\n    <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\" class=\"selectedchip\">\n      <ion-label>S</ion-label>\n    </ion-chip> -->\n    </div>\n    <p class=\"listtitle listtitle3\">Dosage</p>\n    <app-m-select\n      [value]=\"'1'\"\n      [selectOptions]=\"selectData2\"\n      (result)=\"setData($event,'dosage')\"\n    ></app-m-select>\n    <p class=\"listtitle listtitle4\">Medication Duration</p>\n    <ion-grid class=\"configurecaregrid\">\n      <ion-row>\n        <ion-col size=\"6\">\n          <p class=\"datelabel\">Start Date</p>\n          <ion-button fill=\"outline\" class=\"datebtn\">\n            <ion-datetime\n              displayFormat=\"DD-MMM-YYYY\"\n              formControlName=\"startDate\"\n            ></ion-datetime>\n            <ion-icon\n              slot=\"end\"\n              src=\"assets/MariposaIcons/Calendar icon.svg\"\n            ></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <p class=\"datelabel\">End Date</p>\n          <ion-button fill=\"outline\" class=\"datebtn\">\n            <ion-datetime\n              displayFormat=\"DD-MMM-YYYY\"\n              formControlName=\"endDate\"\n            ></ion-datetime>\n            <ion-icon\n              slot=\"end\"\n              src=\"assets/MariposaIcons/Calendar icon.svg\"\n            ></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <p class=\"label-text\">Instructions (optional)</p>\n    <ion-textarea\n      rows=\"5\"\n      placeholder=\"Write if any bathing information\"\n      [(ngModel)]=\"instructions\"\n      formControlName=\"instructions\"\n    ></ion-textarea>\n    <app-addimage (click)=\"addImage()\"></app-addimage>\n    <ion-text>\n      <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n        <ion-grid fixed class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col style=\"padding-top: 11px;\" size=\"8\"><span>{{img.substring(img.lastIndexOf(\"/\") + 1) | slice:0:12}}</span></ion-col>\n            <ion-col size=\"4\">\n              <ion-button\n              fill=\"clear\"\n              shape=\"round\"\n              class=\"dltbtn\"\n              (click)=\"removeImg(j)\"        >\n              <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n              Delete\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </div>\n    </ion-text>\n  </form>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button\n      color=\"primary\"\n      expand=\"block\"\n      fill=\"solid\"\n      class=\"submitbtn\"\n      shape=\"round\"\n      (click)=\"submit()\"\n    >\n      Submit\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/configcare/addmedicine/addmedicine-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/configcare/addmedicine/addmedicine-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AddmedicinePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmedicinePageRoutingModule", function() { return AddmedicinePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addmedicine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addmedicine.page */ "./src/app/pages/configcare/addmedicine/addmedicine.page.ts");




const routes = [
    {
        path: '',
        component: _addmedicine_page__WEBPACK_IMPORTED_MODULE_3__["AddmedicinePage"]
    }
];
let AddmedicinePageRoutingModule = class AddmedicinePageRoutingModule {
};
AddmedicinePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddmedicinePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/configcare/addmedicine/addmedicine.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/configcare/addmedicine/addmedicine.module.ts ***!
  \********************************************************************/
/*! exports provided: AddmedicinePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmedicinePageModule", function() { return AddmedicinePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addmedicine_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addmedicine-routing.module */ "./src/app/pages/configcare/addmedicine/addmedicine-routing.module.ts");
/* harmony import */ var _addmedicine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addmedicine.page */ "./src/app/pages/configcare/addmedicine/addmedicine.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let AddmedicinePageModule = class AddmedicinePageModule {
};
AddmedicinePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addmedicine_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddmedicinePageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [_addmedicine_page__WEBPACK_IMPORTED_MODULE_6__["AddmedicinePage"]],
    })
], AddmedicinePageModule);



/***/ }),

/***/ "./src/app/pages/configcare/addmedicine/addmedicine.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/configcare/addmedicine/addmedicine.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-text {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  color: #1a1a1a;\n  height: 19px;\n  margin-top: 24px;\n  margin-bottom: 8px;\n}\n\ninput {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  /* identical to box height */\n  /* Direct Black */\n  color: #1a1a1a;\n}\n\n.listtitle {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  margin: 0;\n  padding-bottom: 8px;\n  color: #1a1a1a;\n}\n\n.listtitle2 {\n  padding-top: 16px !important;\n  padding-bottom: 7px !important;\n}\n\n.listtitle3 {\n  padding-top: 24px !important;\n  padding-bottom: 8px !important;\n}\n\n.listtitle4 {\n  padding-top: 24px !important;\n  padding-bottom: 16px !important;\n}\n\nion-content {\n  --padding-bottom: 24px;\n  --padding-end: 24px;\n  --padding-start: 24px;\n  --padding-top: 24px;\n}\n\n.time-sec {\n  display: contents;\n}\n\n.time-sec ion-input {\n  --padding-start: 0;\n  font-size: 40px;\n  line-height: 40px;\n  font-weight: bold;\n  height: 40px;\n  color: #7e7e7e;\n}\n\n.time-sec p {\n  font-size: 40px;\n  line-height: 40px;\n  color: #4137ff;\n  font-weight: bold;\n  height: 40px;\n  margin: 0;\n}\n\n.time-sec ion-input:first-child {\n  color: #4137ff;\n}\n\n.btn1 {\n  --border-radius: 8px;\n  margin-top: 16px;\n  padding-top: 0;\n  --border: 1px solid #4137ff;\n  width: 120px;\n  height: 44px;\n}\n\n.timebtn {\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: 500;\n  background: white;\n  line-height: 20px;\n}\n\n.timecol {\n  display: grid;\n  padding: 0;\n}\n\n.timecol button:first-child {\n  color: #4137ff;\n}\n\n.timecol button {\n  color: #7e7e7e;\n}\n\n.chipdiv {\n  justify-content: space-around;\n  display: flex;\n  list-style: none;\n  padding: 0;\n}\n\n.chipdiv ion-chip {\n  width: 26px;\n  height: 26px;\n  text-align: center;\n  display: inline-flex;\n  background: #e0e0e0;\n  color: #7e7e7e;\n  justify-content: center;\n  border: none;\n}\n\n.chipdiv ion-chip ion-label {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  text-transform: capitalize;\n}\n\n.selectedchip {\n  background: #4137ff !important;\n  color: white !important;\n}\n\nhr {\n  background: #e0e0e0;\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n\nion-textarea {\n  border: 1px solid #b8b8b8;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.btn2 {\n  margin-top: 12px;\n  margin-bottom: 30px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  text-transform: uppercase;\n  /* Direct Black */\n  color: #1a1a1a;\n}\n\n.btn2 ion-icon {\n  color: #4137ff;\n}\n\nion-header ion-toolbar {\n  box-shadow: 0px 2px 8px rgba(65, 55, 255, 0.14);\n}\n\nion-title {\n  padding-left: 24px;\n}\n\n.submitbtn {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  color: #ffffff;\n  --border-radius: 8px;\n  width: 87.5%;\n  margin: 16px 24px;\n  height: 44px;\n}\n\nion-footer ion-toolbar {\n  box-shadow: 0px -2px 8px rgba(65, 55, 255, 0.08);\n}\n\nion-content {\n  --padding-start: 24px;\n  --padding-end: 24px;\n}\n\n.configurecaregrid {\n  padding: 0px;\n}\n\n.timetext {\n  display: flex;\n}\n\n.timesec {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 49px;\n}\n\n.timemin {\n  color: #7e7e7e;\n}\n\n.meridiemsec {\n  display: grid;\n  padding-left: 16px;\n}\n\n.meridiemsec span {\n  display: inline-flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  text-transform: capitalize;\n  color: #7e7e7e;\n}\n\n.activemeridian {\n  color: #4137ff !important;\n}\n\n.imagelist {\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  color: #000000;\n  margin-bottom: 10px;\n}\n\n.imagelist span {\n  padding-right: 30px;\n}\n\n.datelabel {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  padding-bottom: 6px;\n  color: #1a1a1a;\n  margin: 0;\n}\n\n.datebtn {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: #1a1a1a;\n  --border-color: #b8b8b8;\n  --border-width: 1px;\n  --border-style: solid;\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 94.5%;\n  height: 44px;\n}\n\n.datebtn ion-icon {\n  font-size: 22px;\n}\n\n.datebtn::part(native) {\n  padding: 0;\n}\n\nion-datetime {\n  padding: 0;\n}\n\nion-icon {\n  zoom: 1;\n}\n\n.dltbtn {\n  float: right;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 14px;\n  text-transform: uppercase;\n  /* Direct Black */\n  color: #1a1a1a;\n}\n\n.dltbtn ion-icon {\n  font-size: 16px;\n  --color: #1a1a1a !important;\n}\n\n.dltbtn::part(native) {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9hZGRtZWRpY2luZS9hZGRtZWRpY2luZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbmZpZ2NhcmUvYWRkbWVkaWNpbmUvYWRkbWVkaWNpbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUVBLGlCQUFBO0VBRUEsY0FBQTtBQ0RGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURFQTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURDQTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7QUNFRjs7QURBQTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7QUNHRjs7QUREQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSUY7O0FEREE7RUFvQkUsaUJBQUE7QUNmRjs7QURKRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ01KOztBREpFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNNSjs7QURKRTtFQUNFLGNBQUE7QUNNSjs7QURGQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0tGOztBREhBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDTUY7O0FESkE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQ09GOztBRE5FO0VBQ0UsY0FBQTtBQ1FKOztBRE5FO0VBQ0UsY0FBQTtBQ1FKOztBRExBO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDUUY7O0FETkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUVBLFlBQUE7QUNPSjs7QURMSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNPTjs7QURIQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7QUNNRjs7QURKQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ09GOztBRExBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDUUY7O0FETkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUVBLHlCQUFBO0VBRUEsaUJBQUE7RUFFQSxjQUFBO0FDTUY7O0FETEU7RUFDRSxjQUFBO0FDT0o7O0FESEU7RUFDRSwrQ0FBQTtBQ01KOztBREhBO0VBQ0Usa0JBQUE7QUNNRjs7QURKQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDT0Y7O0FESkU7RUFDRSxnREFBQTtBQ09KOztBREpBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQ09GOztBRERBO0VBQ0UsWUFBQTtBQ0lGOztBREZBO0VBQ0UsYUFBQTtBQ0tGOztBREhBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNNRjs7QURKQTtFQUNFLGNBQUE7QUNPRjs7QURMQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ1FGOztBRFBFO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNTSjs7QUROQTtFQUNFLHlCQUFBO0FDU0Y7O0FEUEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUlBLGNBQUE7RUFDQSxtQkFBQTtBQ09GOztBRE5FO0VBQ0UsbUJBQUE7QUNRSjs7QURMQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxTQUFBO0FDT0Y7O0FETEE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ09GOztBRE5FO0VBQ0UsZUFBQTtBQ1FKOztBRExBO0VBQ0UsVUFBQTtBQ1FGOztBRE5BO0VBQ0UsVUFBQTtBQ1NGOztBRFBBO0VBQ0UsT0FBQTtBQ1VGOztBRExBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUVBLGlCQUFBO0VBRUEsY0FBQTtBQ01GOztBREpFO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FDTUo7O0FERkE7RUFDRSxVQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25maWdjYXJlL2FkZG1lZGljaW5lL2FkZG1lZGljaW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIGhlaWdodDogMTlweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAvLyBtYXJnaW46IDA7XG59XG5pbnB1dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICAvKiBEaXJlY3QgQmxhY2sgKi9cblxuICBjb2xvcjogIzFhMWExYTtcbn1cbi5saXN0dGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgY29sb3I6ICMxYTFhMWE7XG59XG4ubGlzdHRpdGxlMiB7XG4gIHBhZGRpbmctdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbn1cbi5saXN0dGl0bGUzIHtcbiAgcGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xufVxuLmxpc3R0aXRsZTQge1xuICBwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAtLXBhZGRpbmctZW5kOiAyNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gIC0tcGFkZGluZy10b3A6IDI0cHg7XG59XG5cbi50aW1lLXNlYyB7XG4gIGlvbi1pbnB1dCB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY29sb3I6ICM3ZTdlN2U7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiAjNDEzN2ZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgaW9uLWlucHV0OmZpcnN0LWNoaWxkIHtcbiAgICBjb2xvcjogIzQxMzdmZjtcbiAgfVxuICBkaXNwbGF5OiBjb250ZW50cztcbn1cbi5idG4xIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICAtLWJvcmRlcjogMXB4IHNvbGlkICM0MTM3ZmY7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuLnRpbWVidG4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4udGltZWNvbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDA7XG4gIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gICAgY29sb3I6ICM0MTM3ZmY7XG4gIH1cbiAgYnV0dG9uIHtcbiAgICBjb2xvcjogIzdlN2U3ZTtcbiAgfVxufVxuLmNoaXBkaXYge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcblxuICBpb24tY2hpcCB7XG4gICAgd2lkdGg6IDI2cHg7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgIGNvbG9yOiAjN2U3ZTdlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbiAgfVxufVxuLnNlbGVjdGVkY2hpcCB7XG4gIGJhY2tncm91bmQ6ICM0MTM3ZmYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5ociB7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5pb24tdGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjhiOGI4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uYnRuMiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAvKiBEaXJlY3QgQmxhY2sgKi9cblxuICBjb2xvcjogIzFhMWExYTtcbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiAjNDEzN2ZmO1xuICB9XG59XG5pb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoNjUsIDU1LCAyNTUsIDAuMTQpO1xuICB9XG59XG5pb24tdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG4uc3VibWl0YnRuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA4Ny41JTtcbiAgbWFyZ2luOiAxNnB4IDI0cHg7XG4gIGhlaWdodDogNDRweDtcbn1cbmlvbi1mb290ZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgYm94LXNoYWRvdzogMHB4IC0ycHggOHB4IHJnYmEoNjUsIDU1LCAyNTUsIDAuMDgpO1xuICB9XG59XG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgLS1wYWRkaW5nLWVuZDogMjRweDtcbn1cbi8vaW9uLWdyaWQge1xuLy8gIHBhZGRpbmc6IDA7XG4vL31cblxuLmNvbmZpZ3VyZWNhcmVncmlke1xuICBwYWRkaW5nOiAwcHg7XG59XG4udGltZXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRpbWVzZWMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDlweDtcbn1cbi50aW1lbWluIHtcbiAgY29sb3I6ICM3ZTdlN2U7XG59XG4ubWVyaWRpZW1zZWMge1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGNvbG9yOiAjN2U3ZTdlO1xuICB9XG59XG4uYWN0aXZlbWVyaWRpYW4ge1xuICBjb2xvcjogIzQxMzdmZiAhaW1wb3J0YW50O1xufVxuLmltYWdlbGlzdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBzcGFuIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICB9XG59XG4uZGF0ZWxhYmVsIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuXG4gIGNvbG9yOiAjMWExYTFhO1xuICBtYXJnaW46IDA7XG59XG4uZGF0ZWJ0biB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcblxuICBjb2xvcjogIzFhMWExYTtcbiAgLS1ib3JkZXItY29sb3I6ICNiOGI4Yjg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogOTQuNSU7XG4gIGhlaWdodDogNDRweDtcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgfVxufVxuLmRhdGVidG46OnBhcnQobmF0aXZlKSB7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWljb24ge1xuICB6b29tOiAxO1xufVxuXG4vL2RlbGV0ZWJ1dHRvblxuXG4uZGx0YnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgLyogRGlyZWN0IEJsYWNrICovXG5cbiAgY29sb3I6ICMxYTFhMWE7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAtLWNvbG9yOiAjMWExYTFhICFpbXBvcnRhbnQ7XG5cbiAgfVxufVxuLmRsdGJ0bjo6cGFydChuYXRpdmUpIHtcbiAgcGFkZGluZzogMDtcbn0iLCIubGFiZWwtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjMWExYTFhO1xuICBoZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW5wdXQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIC8qIERpcmVjdCBCbGFjayAqL1xuICBjb2xvcjogIzFhMWExYTtcbn1cblxuLmxpc3R0aXRsZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBjb2xvcjogIzFhMWExYTtcbn1cblxuLmxpc3R0aXRsZTIge1xuICBwYWRkaW5nLXRvcDogMTZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0dGl0bGUzIHtcbiAgcGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdHRpdGxlNCB7XG4gIHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgLS1wYWRkaW5nLWVuZDogMjRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICAtLXBhZGRpbmctdG9wOiAyNHB4O1xufVxuXG4udGltZS1zZWMge1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cbi50aW1lLXNlYyBpb24taW5wdXQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjN2U3ZTdlO1xufVxuLnRpbWUtc2VjIHAge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzQxMzdmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwO1xufVxuLnRpbWUtc2VjIGlvbi1pbnB1dDpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiAjNDEzN2ZmO1xufVxuXG4uYnRuMSB7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgLS1ib3JkZXI6IDFweCBzb2xpZCAjNDEzN2ZmO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogNDRweDtcbn1cblxuLnRpbWVidG4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbi50aW1lY29sIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZzogMDtcbn1cbi50aW1lY29sIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGNvbG9yOiAjNDEzN2ZmO1xufVxuLnRpbWVjb2wgYnV0dG9uIHtcbiAgY29sb3I6ICM3ZTdlN2U7XG59XG5cbi5jaGlwZGl2IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2hpcGRpdiBpb24tY2hpcCB7XG4gIHdpZHRoOiAyNnB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIGNvbG9yOiAjN2U3ZTdlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxuLmNoaXBkaXYgaW9uLWNoaXAgaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5zZWxlY3RlZGNoaXAge1xuICBiYWNrZ3JvdW5kOiAjNDEzN2ZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5ociB7XG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiOGI4Yjg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLmJ0bjIge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAvKiBEaXJlY3QgQmxhY2sgKi9cbiAgY29sb3I6ICMxYTFhMWE7XG59XG4uYnRuMiBpb24taWNvbiB7XG4gIGNvbG9yOiAjNDEzN2ZmO1xufVxuXG5pb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSg2NSwgNTUsIDI1NSwgMC4xNCk7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn1cblxuLnN1Ym1pdGJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogODcuNSU7XG4gIG1hcmdpbjogMTZweCAyNHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICBib3gtc2hhZG93OiAwcHggLTJweCA4cHggcmdiYSg2NSwgNTUsIDI1NSwgMC4wOCk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICAtLXBhZGRpbmctZW5kOiAyNHB4O1xufVxuXG4uY29uZmlndXJlY2FyZWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi50aW1ldGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50aW1lc2VjIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ5cHg7XG59XG5cbi50aW1lbWluIHtcbiAgY29sb3I6ICM3ZTdlN2U7XG59XG5cbi5tZXJpZGllbXNlYyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5tZXJpZGllbXNlYyBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjN2U3ZTdlO1xufVxuXG4uYWN0aXZlbWVyaWRpYW4ge1xuICBjb2xvcjogIzQxMzdmZiAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2VsaXN0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaW1hZ2VsaXN0IHNwYW4ge1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4uZGF0ZWxhYmVsIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGF0ZWJ0biB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIC0tYm9yZGVyLWNvbG9yOiAjYjhiOGI4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDk0LjUlO1xuICBoZWlnaHQ6IDQ0cHg7XG59XG4uZGF0ZWJ0biBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmRhdGVidG46OnBhcnQobmF0aXZlKSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1pY29uIHtcbiAgem9vbTogMTtcbn1cblxuLmRsdGJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAvKiBEaXJlY3QgQmxhY2sgKi9cbiAgY29sb3I6ICMxYTFhMWE7XG59XG4uZGx0YnRuIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICAtLWNvbG9yOiAjMWExYTFhICFpbXBvcnRhbnQ7XG59XG5cbi5kbHRidG46OnBhcnQobmF0aXZlKSB7XG4gIHBhZGRpbmc6IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/configcare/addmedicine/addmedicine.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/configcare/addmedicine/addmedicine.page.ts ***!
  \******************************************************************/
/*! exports provided: AddmedicinePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmedicinePage", function() { return AddmedicinePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




let AddmedicinePage = class AddmedicinePage {
    constructor(imagePicker) {
        this.imagePicker = imagePicker;
        this.medicineForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            medicineType: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            medicineName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            timeList: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]),
            repeatDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]),
            dosage: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("1"),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("2020-05-12T13:47:20.789"),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("2020-05-12T13:47:20.789"),
            instructions: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            images: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]),
        });
        this.timeList = [];
        this.instructions = "";
        this.imageList = ["hgsdahgsafghsafdghasafdasfasgfjhdagfjhdgjsfdh.jpg", "myself.jpg"];
        this.selectData = [
            {
                value: "yes",
                name: "Yes",
            },
            {
                value: "no",
                name: "NO",
            },
        ];
        this.selectData2 = [
            {
                value: "1",
                name: "1",
            },
            {
                value: "2",
                name: "2",
            },
        ];
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
    setData(ev, formname) {
        console.log(ev, "|||||");
        this.medicineForm.patchValue({ [formname]: ev });
    }
    submit() {
        this.medicineForm.patchValue({ timeList: this.timeList });
        this.medicineForm.patchValue({ repeatDays: this.selectedDays });
        this.medicineForm.patchValue({ images: this.imageList });
        console.log(this.medicineForm.value);
    }
};
AddmedicinePage.ctorParameters = () => [
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"] }
];
AddmedicinePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-addmedicine",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmedicine.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/addmedicine/addmedicine.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmedicine.page.scss */ "./src/app/pages/configcare/addmedicine/addmedicine.page.scss")).default]
    })
], AddmedicinePage);



/***/ })

}]);
//# sourceMappingURL=pages-configcare-addmedicine-addmedicine-module-es2015.js.map