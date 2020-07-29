function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configcare-addothertasks-addothertasks-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/addothertasks/addothertasks.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/addothertasks/addothertasks.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfigcareAddothertasksAddothertasksPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"title-text\">\n      Add Medicine\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    \n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <ion-button [routerLink]=\"'/../'\" routerDirection=\"backward\">\n              <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n            </ion-button>\n            </ion-buttons>\n          <!-- <ion-buttons slot=\"start\">\n            <ion-back-button color=\"mdblack\" icon=\"chevron-back-outline\" defaultHref=\"admin-sign-in\"></ion-back-button>\n          </ion-buttons> -->\n        </ion-toolbar> \n        \n        </ion-col>\n        <ion-col size=\"8\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Other Tasks</ion-text>\n           \n          </div> \n        </ion-col>\n        \n        \n      </ion-row>\n   \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <p class=\"listtitle\">Name of Task</p>\n  <ion-input mode=\"md\" class=\"input\" value=\"\"></ion-input>\n  \n  <ion-grid fixed class=\"configurecaregrid\">\n    \n    <m-selectdate></m-selectdate>\n    \n  </ion-grid>\n\n  <p class=\"datetimeheader\">Duration of Task</p>\n  <ion-grid class=\"configurecaregrid\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"datelabel\">Start Date</p>\n        <ion-button fill=\"outline\" class=\"datebtn\">\n          <ion-datetime\n            value=\"2020-05-12T13:47:20.789\"\n            displayFormat=\"DD-MMM-YYYY\"\n          ></ion-datetime>\n          <ion-icon\n          class=\"datetimeicon\"\n            slot=\"end\"\n            src=\"assets/MariposaIcons/Calendar icon.svg\"\n          ></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"datelabel\">End Date</p>\n        <ion-button fill=\"outline\" class=\"datebtn\">\n          <ion-datetime\n            value=\"2020-05-12T13:47:20.789\"\n            displayFormat=\"DD-MMM-YYYY\"\n          ></ion-datetime>\n          <ion-icon\n            class=\"datetimeicon\"\n            slot=\"end\"\n            src=\"assets/MariposaIcons/Calendar icon.svg\"\n          ></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  \n  \n\n  <p class=\"label-text\">Repeat</p>\n  <div class=\"chipdiv\">\n    <ion-chip\n      color=\"primary\"\n      mode=\"ios\"\n      outline=\"true\"\n      [class.selectedchip]=\"selectedDays.includes(day.value)\"\n      *ngFor=\"let day of daysList\"\n      (click)=\"addremoveDay(day)\"\n    >\n      <ion-label>{{day.name}}</ion-label>\n    </ion-chip>\n    \n  </div>\n  \n  \n\n  <p class=\"instruction\">Instructions (optional)</p>\n  <ion-textarea\n    rows=\"5\"\n    placeholder=\"Write here\"\n    [(ngModel)]=\"instructions\"\n  ></ion-textarea>\n  <ion-button fill=\"clear\" class=\"btn2\" (click)=\"addImage()\">\n    <ion-icon class=\"camera\" slot=\"start\" name=\"camera\"></ion-icon>\n    ADD IMAGES\n  </ion-button>\n  <ion-text>\n    <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n      <span>{{img.substring(img.lastIndexOf(\"/\") + 1)}}</span>\n      <ion-icon slot=\"end\" name=\"trash\" (click)=\"removeImg(j)\"></ion-icon>\n    </div>\n  </ion-text>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button\n      color=\"primary\"\n      expand=\"block\"\n      fill=\"solid\"\n      class=\"submitbtn\"\n      shape=\"round\"\n    >\n      Submit\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/configcare/addothertasks/addothertasks-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/configcare/addothertasks/addothertasks-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: AddothertasksPageRoutingModule */

  /***/
  function srcAppPagesConfigcareAddothertasksAddothertasksRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddothertasksPageRoutingModule", function () {
      return AddothertasksPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _addothertasks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addothertasks.page */
    "./src/app/pages/configcare/addothertasks/addothertasks.page.ts");

    var routes = [{
      path: '',
      component: _addothertasks_page__WEBPACK_IMPORTED_MODULE_3__["AddothertasksPage"]
    }];

    var AddothertasksPageRoutingModule = function AddothertasksPageRoutingModule() {
      _classCallCheck(this, AddothertasksPageRoutingModule);
    };

    AddothertasksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddothertasksPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/addothertasks/addothertasks.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/configcare/addothertasks/addothertasks.module.ts ***!
    \************************************************************************/

  /*! exports provided: AddothertasksPageModule */

  /***/
  function srcAppPagesConfigcareAddothertasksAddothertasksModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddothertasksPageModule", function () {
      return AddothertasksPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _addothertasks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addothertasks-routing.module */
    "./src/app/pages/configcare/addothertasks/addothertasks-routing.module.ts");
    /* harmony import */


    var _addothertasks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addothertasks.page */
    "./src/app/pages/configcare/addothertasks/addothertasks.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var AddothertasksPageModule = function AddothertasksPageModule() {
      _classCallCheck(this, AddothertasksPageModule);
    };

    AddothertasksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addothertasks_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddothertasksPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_addothertasks_page__WEBPACK_IMPORTED_MODULE_6__["AddothertasksPage"]]
    })], AddothertasksPageModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/addothertasks/addothertasks.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/configcare/addothertasks/addothertasks.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfigcareAddothertasksAddothertasksPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".label-text {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  color: #1a1a1a;\n  height: 19px;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\ninput {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  /* identical to box height */\n  /* Direct Black */\n  color: #1a1a1a;\n}\n\n.listtitle {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  margin: 0;\n  padding-bottom: 8px;\n  color: #1a1a1a;\n}\n\n.listtitle2 {\n  padding-top: 16px !important;\n  padding-bottom: 7px !important;\n}\n\n.listtitle3 {\n  padding-top: 24px !important;\n  padding-bottom: 8px !important;\n}\n\n.listtitle4 {\n  padding-top: 24px !important;\n  padding-bottom: 16px !important;\n}\n\nion-content {\n  --padding-bottom: 24px;\n  --padding-end: 24px;\n  --padding-start: 24px;\n  --padding-top: 24px;\n}\n\n.time-sec {\n  display: contents;\n}\n\n.time-sec ion-input {\n  --padding-start: 0;\n  font-size: 40px;\n  line-height: 40px;\n  font-weight: bold;\n  height: 40px;\n  color: #7e7e7e;\n}\n\n.time-sec p {\n  font-size: 40px;\n  line-height: 40px;\n  color: #4137ff;\n  font-weight: bold;\n  height: 40px;\n  margin: 0;\n}\n\n.time-sec ion-input:first-child {\n  color: #4137ff;\n}\n\n.btn1 {\n  --border-radius: 8px;\n  margin-top: 16px;\n  padding-top: 0;\n  --border: 1px solid #4137ff;\n  width: 120px;\n  height: 44px;\n}\n\n.timebtn {\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: 500;\n  background: white;\n  line-height: 20px;\n}\n\n.timecol {\n  display: grid;\n  padding: 0;\n}\n\n.timecol button:first-child {\n  color: #4137ff;\n}\n\n.timecol button {\n  color: #7e7e7e;\n}\n\n.chipdiv {\n  justify-content: space-around;\n  display: flex;\n  list-style: none;\n  padding: 0;\n}\n\n.chipdiv ion-chip {\n  width: 26px;\n  height: 26px;\n  text-align: center;\n  display: inline-flex;\n  background: #e0e0e0;\n  color: #7e7e7e;\n  justify-content: center;\n  border: none;\n}\n\n.chipdiv ion-chip ion-label {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  text-transform: capitalize;\n}\n\n.selectedchip {\n  background: #4137ff !important;\n  color: white !important;\n}\n\nhr {\n  background: #e0e0e0;\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n\nion-textarea {\n  border: 1px solid #b8b8b8;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.btn2 {\n  margin-top: 12px;\n  margin-bottom: 30px;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  text-transform: uppercase;\n  /* Direct Black */\n  color: #1a1a1a;\n}\n\n.btn2 ion-icon {\n  color: #4137ff;\n}\n\nion-title {\n  padding-left: 24px;\n}\n\n.submitbtn {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  color: #ffffff;\n  --border-radius: 8px;\n  width: 87.5%;\n  margin: 16px 24px;\n  height: 44px;\n}\n\nion-footer ion-toolbar {\n  box-shadow: 0px -2px 8px rgba(65, 55, 255, 0.08);\n}\n\nion-content {\n  --padding-start: 24px;\n  --padding-end: 24px;\n}\n\n.configurecaregrid {\n  padding: 0px;\n  padding-top: 0px;\n}\n\n.timetext {\n  display: flex;\n}\n\n.timesec {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 49px;\n}\n\n.timemin {\n  color: #7e7e7e;\n}\n\n.meridiemsec {\n  display: grid;\n  padding-left: 16px;\n}\n\n.meridiemsec span {\n  display: inline-flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  text-transform: capitalize;\n  color: #7e7e7e;\n}\n\n.activemeridian {\n  color: #4137ff !important;\n}\n\n.imagelist {\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  color: #000000;\n  margin-bottom: 10px;\n}\n\n.imagelist span {\n  padding-right: 30px;\n}\n\n.datelabel {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  padding-bottom: 6px;\n  color: #1a1a1a;\n  margin: 0;\n}\n\n.datebtn {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: #1a1a1a;\n  --border-color: #b8b8b8;\n  --border-width: 1px;\n  --border-style: solid;\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 94.5%;\n  height: 44px;\n}\n\n.datebtn ion-icon {\n  font-size: 22px;\n}\n\n.datebtn::part(native) {\n  padding: 0;\n}\n\nion-datetime {\n  padding: 0;\n}\n\n.camera {\n  zoom: 1;\n}\n\n.instruction {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  color: #1a1a1a;\n  height: 19px;\n  margin-top: 24px;\n  margin-bottom: 7px;\n}\n\n.datetimeicon {\n  zoom: 0;\n}\n\n.datetimeheader {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9hZGRvdGhlcnRhc2tzL2FkZG90aGVydGFza3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25maWdjYXJlL2FkZG90aGVydGFza3MvYWRkb3RoZXJ0YXNrcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEsaUJBQUE7RUFFQSxjQUFBO0FDREo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREVFO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtBQ0NKOztBRENFO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtBQ0VKOztBREFFO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtBQ0dKOztBRERFO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNJSjs7QURERTtFQW9CRSxpQkFBQTtBQ2ZKOztBREpJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDTU47O0FESkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ01OOztBREpJO0VBQ0UsY0FBQTtBQ01OOztBREZFO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0FDT0o7O0FETkk7RUFDRSxjQUFBO0FDUU47O0FETkk7RUFDRSxjQUFBO0FDUU47O0FETEU7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNRSjs7QUROSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBRUEsWUFBQTtBQ09OOztBRExNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ09SOztBREhFO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtBQ01KOztBREpFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDT0o7O0FETEU7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNRSjs7QURORTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEseUJBQUE7RUFFQSxpQkFBQTtFQUVBLGNBQUE7QUNNSjs7QURMSTtFQUNFLGNBQUE7QUNPTjs7QURIRTtFQUNFLGtCQUFBO0FDTUo7O0FESkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ09KOztBREpJO0VBQ0UsZ0RBQUE7QUNPTjs7QURKRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUNPSjs7QURERTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0lKOztBREZFO0VBQ0UsYUFBQTtBQ0tKOztBREhFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKRTtFQUNFLGNBQUE7QUNPSjs7QURMRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ1FKOztBRFBJO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNTTjs7QURORTtFQUNFLHlCQUFBO0FDU0o7O0FEUEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUlBLGNBQUE7RUFDQSxtQkFBQTtBQ09KOztBRE5JO0VBQ0UsbUJBQUE7QUNRTjs7QURMRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxTQUFBO0FDT0o7O0FETEU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ09KOztBRE5JO0VBQ0UsZUFBQTtBQ1FOOztBRExFO0VBQ0UsVUFBQTtBQ1FKOztBRE5FO0VBQ0UsVUFBQTtBQ1NKOztBRFBFO0VBQ0UsT0FBQTtBQ1VKOztBRFBFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNVSjs7QURQRTtFQUVFLE9BQUE7QUNTSjs7QURORTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNTSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ2NhcmUvYWRkb3RoZXJ0YXNrcy9hZGRvdGhlcnRhc2tzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC10ZXh0IHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBjb2xvcjogIzFhMWExYTtcbiAgICBoZWlnaHQ6IDE5cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIC8vIG1hcmdpbjogMDtcbiAgfVxuICBpbnB1dCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIFxuICAgIC8qIERpcmVjdCBCbGFjayAqL1xuICBcbiAgICBjb2xvcjogIzFhMWExYTtcbiAgfVxuICAubGlzdHRpdGxlIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgY29sb3I6ICMxYTFhMWE7XG4gIH1cbiAgLmxpc3R0aXRsZTIge1xuICAgIHBhZGRpbmctdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xuICB9XG4gIC5saXN0dGl0bGUzIHtcbiAgICBwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcbiAgfVxuICAubGlzdHRpdGxlNCB7XG4gICAgcGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xuICB9XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDI0cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICAgIC0tcGFkZGluZy10b3A6IDI0cHg7XG4gIH1cbiAgXG4gIC50aW1lLXNlYyB7XG4gICAgaW9uLWlucHV0IHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBjb2xvcjogIzdlN2U3ZTtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgIGNvbG9yOiAjNDEzN2ZmO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIGlvbi1pbnB1dDpmaXJzdC1jaGlsZCB7XG4gICAgICBjb2xvcjogIzQxMzdmZjtcbiAgICB9XG4gICAgZGlzcGxheTogY29udGVudHM7XG4gIH1cbiAgLmJ0bjEge1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAjNDEzN2ZmO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gIH1cbiAgLnRpbWVidG4ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB9XG4gIC50aW1lY29sIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgICAgIGNvbG9yOiAjNDEzN2ZmO1xuICAgIH1cbiAgICBidXR0b24ge1xuICAgICAgY29sb3I6ICM3ZTdlN2U7XG4gICAgfVxuICB9XG4gIC5jaGlwZGl2IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgXG4gICAgaW9uLWNoaXAge1xuICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgICBjb2xvcjogIzdlN2U3ZTtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgXG4gICAgICBpb24tbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnNlbGVjdGVkY2hpcCB7XG4gICAgYmFja2dyb3VuZDogIzQxMzdmZiAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG4gIGhyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxuICBpb24tdGV4dGFyZWEge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiOGI4Yjg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbiAgLmJ0bjIge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBcbiAgICAvKiBEaXJlY3QgQmxhY2sgKi9cbiAgXG4gICAgY29sb3I6ICMxYTFhMWE7XG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6ICM0MTM3ZmY7XG4gICAgfVxuICB9XG4gIFxuICBpb24tdGl0bGUge1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgfVxuICAuc3VibWl0YnRuIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDg3LjUlO1xuICAgIG1hcmdpbjogMTZweCAyNHB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgfVxuICBpb24tZm9vdGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICBib3gtc2hhZG93OiAwcHggLTJweCA4cHggcmdiYSg2NSwgNTUsIDI1NSwgMC4wOCk7XG4gICAgfVxuICB9XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMjRweDtcbiAgfVxuICAvL2lvbi1ncmlkIHtcbiAgLy8gIHBhZGRpbmc6IDA7XG4gIC8vfVxuICBcbiAgLmNvbmZpZ3VyZWNhcmVncmlke1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBwYWRkaW5nLXRvcDowcHg7XG4gIH1cbiAgLnRpbWV0ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIC50aW1lc2VjIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ5cHg7XG4gIH1cbiAgLnRpbWVtaW4ge1xuICAgIGNvbG9yOiAjN2U3ZTdlO1xuICB9XG4gIC5tZXJpZGllbXNlYyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgc3BhbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGNvbG9yOiAjN2U3ZTdlO1xuICAgIH1cbiAgfVxuICAuYWN0aXZlbWVyaWRpYW4ge1xuICAgIGNvbG9yOiAjNDEzN2ZmICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmltYWdlbGlzdCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIFxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgXG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBzcGFuIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgfVxuICB9XG4gIC5kYXRlbGFiZWwge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBcbiAgICBjb2xvcjogIzFhMWExYTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmRhdGVidG4ge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgXG4gICAgY29sb3I6ICMxYTFhMWE7XG4gICAgLS1ib3JkZXItY29sb3I6ICNiOGI4Yjg7XG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDk0LjUlO1xuICAgIGhlaWdodDogNDRweDtcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgfVxuICB9XG4gIC5kYXRlYnRuOjpwYXJ0KG5hdGl2ZSkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgaW9uLWRhdGV0aW1lIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC5jYW1lcmF7XG4gICAgem9vbTogMTtcbiAgfVxuICBcbiAgLmluc3RydWN0aW9ue1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGNvbG9yOiAjMWExYTFhO1xuICAgIGhlaWdodDogMTlweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuXG4gIC5kYXRldGltZWljb257XG5cbiAgICB6b29tOjA7XG4gIH1cblxuICAuZGF0ZXRpbWVoZWFkZXJ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9IiwiLmxhYmVsLXRleHQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgLyogRGlyZWN0IEJsYWNrICovXG4gIGNvbG9yOiAjMWExYTFhO1xufVxuXG4ubGlzdHRpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIGNvbG9yOiAjMWExYTFhO1xufVxuXG4ubGlzdHRpdGxlMiB7XG4gIHBhZGRpbmctdG9wOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3R0aXRsZTMge1xuICBwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5saXN0dGl0bGU0IHtcbiAgcGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAtLXBhZGRpbmctZW5kOiAyNHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gIC0tcGFkZGluZy10b3A6IDI0cHg7XG59XG5cbi50aW1lLXNlYyB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuLnRpbWUtc2VjIGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICM3ZTdlN2U7XG59XG4udGltZS1zZWMgcCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjNDEzN2ZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDA7XG59XG4udGltZS1zZWMgaW9uLWlucHV0OmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICM0MTM3ZmY7XG59XG5cbi5idG4xIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICAtLWJvcmRlcjogMXB4IHNvbGlkICM0MTM3ZmY7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG4udGltZWJ0biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLnRpbWVjb2wge1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAwO1xufVxuLnRpbWVjb2wgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICM0MTM3ZmY7XG59XG4udGltZWNvbCBidXR0b24ge1xuICBjb2xvcjogIzdlN2U3ZTtcbn1cblxuLmNoaXBkaXYge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi5jaGlwZGl2IGlvbi1jaGlwIHtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgY29sb3I6ICM3ZTdlN2U7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG59XG4uY2hpcGRpdiBpb24tY2hpcCBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnNlbGVjdGVkY2hpcCB7XG4gIGJhY2tncm91bmQ6ICM0MTM3ZmYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4YjhiODtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uYnRuMiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC8qIERpcmVjdCBCbGFjayAqL1xuICBjb2xvcjogIzFhMWExYTtcbn1cbi5idG4yIGlvbi1pY29uIHtcbiAgY29sb3I6ICM0MTM3ZmY7XG59XG5cbmlvbi10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn1cblxuLnN1Ym1pdGJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogODcuNSU7XG4gIG1hcmdpbjogMTZweCAyNHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIge1xuICBib3gtc2hhZG93OiAwcHggLTJweCA4cHggcmdiYSg2NSwgNTUsIDI1NSwgMC4wOCk7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICAtLXBhZGRpbmctZW5kOiAyNHB4O1xufVxuXG4uY29uZmlndXJlY2FyZWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi50aW1ldGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50aW1lc2VjIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQ5cHg7XG59XG5cbi50aW1lbWluIHtcbiAgY29sb3I6ICM3ZTdlN2U7XG59XG5cbi5tZXJpZGllbXNlYyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5tZXJpZGllbXNlYyBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjN2U3ZTdlO1xufVxuXG4uYWN0aXZlbWVyaWRpYW4ge1xuICBjb2xvcjogIzQxMzdmZiAhaW1wb3J0YW50O1xufVxuXG4uaW1hZ2VsaXN0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uaW1hZ2VsaXN0IHNwYW4ge1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4uZGF0ZWxhYmVsIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGF0ZWJ0biB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIC0tYm9yZGVyLWNvbG9yOiAjYjhiOGI4O1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDk0LjUlO1xuICBoZWlnaHQ6IDQ0cHg7XG59XG4uZGF0ZWJ0biBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmRhdGVidG46OnBhcnQobmF0aXZlKSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jYW1lcmEge1xuICB6b29tOiAxO1xufVxuXG4uaW5zdHJ1Y3Rpb24ge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG5cbi5kYXRldGltZWljb24ge1xuICB6b29tOiAwO1xufVxuXG4uZGF0ZXRpbWVoZWFkZXIge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/configcare/addothertasks/addothertasks.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/configcare/addothertasks/addothertasks.page.ts ***!
    \**********************************************************************/

  /*! exports provided: AddothertasksPage */

  /***/
  function srcAppPagesConfigcareAddothertasksAddothertasksPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddothertasksPage", function () {
      return AddothertasksPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");

    var AddothertasksPage = /*#__PURE__*/function () {
      function AddothertasksPage(imagePicker) {
        _classCallCheck(this, AddothertasksPage);

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
        this.daysList = [{
          name: "s",
          value: "Sunday"
        }, {
          name: "m",
          value: "Monday"
        }, {
          name: "t",
          value: "Tuesday"
        }, {
          name: "w",
          value: "Wednesday"
        }, {
          name: "t",
          value: "Thursday"
        }, {
          name: "f",
          value: "Friday"
        }, {
          name: "s",
          value: "Saturday"
        }];
        this.selectedDays = []; //           console.log(this.timeList[this.timeindex]);
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

      _createClass(AddothertasksPage, [{
        key: "refresh",
        value: function refresh(ev) {
          setTimeout(function () {
            ev.detail.complete();
          }, 3000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addDate();
        }
      }, {
        key: "addDate",
        value: function addDate() {
          this.timeList.push(new Date());
        } // changeTime(i) {
        //   this.datepicker.open().then((x) => {
        //     console.log(x);
        //     this.timeindex = i;
        //   });
        // }

      }, {
        key: "addImage",
        value: function addImage() {
          var _this = this;

          var options = {
            maximumImagesCount: 4
          };
          this.imagePicker.getPictures(options).then(function (results) {
            console.log(results);

            for (var i = 0; i < results.length; i++) {
              _this.imageList.push(results[i]);
            }
          }, function (err) {});
        }
      }, {
        key: "removeImg",
        value: function removeImg(i) {
          console.log("*", i);
          this.imageList.splice(i, 1);
        }
      }, {
        key: "addremoveDay",
        value: function addremoveDay(item) {
          if (this.selectedDays.includes(item.value)) {
            var index = this.selectedDays.indexOf(item.value);
            this.selectedDays.splice(index, 1);
          } else {
            this.selectedDays.push(item.value);
          }
        }
      }]);

      return AddothertasksPage;
    }();

    AddothertasksPage.ctorParameters = function () {
      return [{
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"]
      }];
    };

    AddothertasksPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addothertasks',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./addothertasks.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/addothertasks/addothertasks.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./addothertasks.page.scss */
      "./src/app/pages/configcare/addothertasks/addothertasks.page.scss"))["default"]]
    })], AddothertasksPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-configcare-addothertasks-addothertasks-module-es5.js.map