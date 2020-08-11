function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configcare-addmeals-addmeals-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/addmeals/addmeals.page.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/addmeals/addmeals.page.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfigcareAddmealsAddmealsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class=\"title-text\">\n      Add Medicine\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    <ion-grid>\n      <ion-row style=\"align-items: center; margin-top: 32px;\">\n        <ion-col size=\"10\">\n          <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\"\n            >Add Meals</ion-text\n          >\n        </ion-col>\n        <ion-col>\n          <ion-icon\n            style=\"zoom: 1.2; color: black; float: right;\"\n            name=\"close-outline\"\n          ></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <p class=\"listtitle\">Meal Type</p>\n  <app-m-select [value]=\"'Capsule'\"></app-m-select>\n  \n  <ion-grid fixed class=\"configurecaregrid\">\n    \n    <m-selectdate></m-selectdate>\n    \n  </ion-grid>\n\n  <p class=\"listtitle\" style=\"margin-top: 16px;\">Frequency</p>\n  <app-m-select [value]=\"'Capsule'\"></app-m-select>\n\n  <p class=\"listtitle\" style=\"margin-top: 16px;\">Favorite Breakfast</p>\n  <app-m-select [value]=\"'Capsule'\"></app-m-select>\n  \n\n  <p class=\"label-text\">Repeat</p>\n  <div class=\"chipdiv\">\n    <ion-chip\n      color=\"primary\"\n      mode=\"ios\"\n      outline=\"true\"\n      [class.selectedchip]=\"selectedDays.includes(day.value)\"\n      *ngFor=\"let day of daysList\"\n      (click)=\"addremoveDay(day)\"\n    >\n      <ion-label>{{day.name}}</ion-label>\n    </ion-chip>\n    \n  </div>\n  \n  <!-- <p class=\"listtitle listtitle4\">Medication Duration</p>\n  <ion-grid class=\"configurecaregrid\">\n    <ion-row>\n      <ion-col size=\"6\">\n        <p class=\"datelabel\">Start Date</p>\n        <ion-button fill=\"outline\" class=\"datebtn\">\n          <ion-datetime\n            value=\"2020-05-12T13:47:20.789\"\n            displayFormat=\"DD-MMM-YYYY\"\n          ></ion-datetime>\n          <ion-icon\n            slot=\"end\"\n            src=\"assets/MariposaIcons/Calendar icon.svg\"\n          ></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <p class=\"datelabel\">End Date</p>\n        <ion-button fill=\"outline\" class=\"datebtn\">\n          <ion-datetime\n            value=\"2020-05-12T13:47:20.789\"\n            displayFormat=\"DD-MMM-YYYY\"\n          ></ion-datetime>\n          <ion-icon\n            slot=\"end\"\n            src=\"assets/MariposaIcons/Calendar icon.svg\"\n          ></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n\n  <p class=\"label-text\">Instructions (optional)</p>\n  <ion-textarea\n    rows=\"5\"\n    placeholder=\"Write here\"\n    [(ngModel)]=\"instructions\"\n  ></ion-textarea>\n  <ion-button fill=\"clear\" class=\"btn2\" (click)=\"addImage()\">\n    <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n    ADD IMAGES\n  </ion-button>\n  <ion-text>\n    <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n      <span>{{img.substring(img.lastIndexOf(\"/\") + 1)}}</span>\n      <ion-icon slot=\"end\" name=\"trash\" (click)=\"removeImg(j)\"></ion-icon>\n    </div>\n  </ion-text>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button\n      color=\"primary\"\n      expand=\"block\"\n      fill=\"solid\"\n      class=\"submitbtn\"\n      shape=\"round\"\n    >\n      Submit\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/configcare/addmeals/addmeals-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/configcare/addmeals/addmeals-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: AddmealsPageRoutingModule */

  /***/
  function srcAppPagesConfigcareAddmealsAddmealsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddmealsPageRoutingModule", function () {
      return AddmealsPageRoutingModule;
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


    var _addmeals_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addmeals.page */
    "./src/app/pages/configcare/addmeals/addmeals.page.ts");

    var routes = [{
      path: '',
      component: _addmeals_page__WEBPACK_IMPORTED_MODULE_3__["AddmealsPage"]
    }];

    var AddmealsPageRoutingModule = function AddmealsPageRoutingModule() {
      _classCallCheck(this, AddmealsPageRoutingModule);
    };

    AddmealsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddmealsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/addmeals/addmeals.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/configcare/addmeals/addmeals.module.ts ***!
    \**************************************************************/

  /*! exports provided: AddmealsPageModule */

  /***/
  function srcAppPagesConfigcareAddmealsAddmealsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddmealsPageModule", function () {
      return AddmealsPageModule;
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


    var _addmeals_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addmeals-routing.module */
    "./src/app/pages/configcare/addmeals/addmeals-routing.module.ts");
    /* harmony import */


    var _addmeals_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addmeals.page */
    "./src/app/pages/configcare/addmeals/addmeals.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var AddmealsPageModule = function AddmealsPageModule() {
      _classCallCheck(this, AddmealsPageModule);
    };

    AddmealsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addmeals_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddmealsPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_addmeals_page__WEBPACK_IMPORTED_MODULE_6__["AddmealsPage"]]
    })], AddmealsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/addmeals/addmeals.page.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/configcare/addmeals/addmeals.page.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfigcareAddmealsAddmealsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".label-text {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  color: #1a1a1a;\n  height: 19px;\n  margin-top: 24px;\n  margin-bottom: 8px;\n}\n\ninput {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  /* identical to box height */\n  /* Direct Black */\n  color: #1a1a1a;\n}\n\n.listtitle {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  margin: 0;\n  padding-bottom: 8px;\n  color: #1a1a1a;\n}\n\n.listtitle2 {\n  padding-top: 16px !important;\n  padding-bottom: 7px !important;\n}\n\n.listtitle3 {\n  padding-top: 24px !important;\n  padding-bottom: 8px !important;\n}\n\n.listtitle4 {\n  padding-top: 24px !important;\n  padding-bottom: 16px !important;\n}\n\nion-content {\n  --padding-bottom: 24px;\n  --padding-end: 24px;\n  --padding-start: 24px;\n  --padding-top: 24px;\n}\n\n.time-sec {\n  display: contents;\n}\n\n.time-sec ion-input {\n  --padding-start: 0;\n  font-size: 40px;\n  line-height: 40px;\n  font-weight: bold;\n  height: 40px;\n  color: #7e7e7e;\n}\n\n.time-sec p {\n  font-size: 40px;\n  line-height: 40px;\n  color: #4137ff;\n  font-weight: bold;\n  height: 40px;\n  margin: 0;\n}\n\n.time-sec ion-input:first-child {\n  color: #4137ff;\n}\n\n.btn1 {\n  --border-radius: 8px;\n  margin-top: 16px;\n  padding-top: 0;\n  --border: 1px solid #4137ff;\n  width: 120px;\n  height: 44px;\n}\n\n.timebtn {\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: 500;\n  background: white;\n  line-height: 20px;\n}\n\n.timecol {\n  display: grid;\n  padding: 0;\n}\n\n.timecol button:first-child {\n  color: #4137ff;\n}\n\n.timecol button {\n  color: #7e7e7e;\n}\n\n.chipdiv {\n  justify-content: space-around;\n  display: flex;\n  list-style: none;\n  padding: 0;\n}\n\n.chipdiv ion-chip {\n  width: 26px;\n  height: 26px;\n  text-align: center;\n  display: inline-flex;\n  background: #e0e0e0;\n  color: #7e7e7e;\n  justify-content: center;\n  border: none;\n}\n\n.chipdiv ion-chip ion-label {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  text-transform: capitalize;\n}\n\n.selectedchip {\n  background: #4137ff !important;\n  color: white !important;\n}\n\nhr {\n  background: #e0e0e0;\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n\nion-textarea {\n  border: 1px solid #b8b8b8;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.btn2 {\n  margin-top: 12px;\n  margin-bottom: 30px;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  text-transform: uppercase;\n  /* Direct Black */\n  color: #1a1a1a;\n}\n\n.btn2 ion-icon {\n  color: #4137ff;\n}\n\nion-header ion-toolbar {\n  box-shadow: 0px 2px 8px rgba(65, 55, 255, 0.14);\n}\n\nion-title {\n  padding-left: 24px;\n}\n\n.submitbtn {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  text-align: center;\n  color: #ffffff;\n  --border-radius: 8px;\n  width: 87.5%;\n  margin: 16px 24px;\n  height: 44px;\n}\n\nion-footer ion-toolbar {\n  box-shadow: 0px -2px 8px rgba(65, 55, 255, 0.08);\n}\n\nion-content {\n  --padding-start: 24px;\n  --padding-end: 24px;\n}\n\n.configurecaregrid {\n  padding: 0px;\n  padding-top: 8px;\n}\n\n.timetext {\n  display: flex;\n}\n\n.timesec {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 49px;\n}\n\n.timemin {\n  color: #7e7e7e;\n}\n\n.meridiemsec {\n  display: grid;\n  padding-left: 16px;\n}\n\n.meridiemsec span {\n  display: inline-flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  text-transform: capitalize;\n  color: #7e7e7e;\n}\n\n.activemeridian {\n  color: #4137ff !important;\n}\n\n.imagelist {\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  color: #000000;\n  margin-bottom: 10px;\n}\n\n.imagelist span {\n  padding-right: 30px;\n}\n\n.datelabel {\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  padding-bottom: 6px;\n  color: #1a1a1a;\n  margin: 0;\n}\n\n.datebtn {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  color: #1a1a1a;\n  --border-color: #b8b8b8;\n  --border-width: 1px;\n  --border-style: solid;\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 94.5%;\n  height: 44px;\n}\n\n.datebtn ion-icon {\n  font-size: 22px;\n}\n\n.datebtn::part(native) {\n  padding: 0;\n}\n\nion-datetime {\n  padding: 0;\n}\n\nion-icon {\n  zoom: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9hZGRtZWFscy9hZGRtZWFscy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbmZpZ2NhcmUvYWRkbWVhbHMvYWRkbWVhbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUVBLGlCQUFBO0VBRUEsY0FBQTtBQ0RKOztBREdFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURFRTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURDRTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7QUNFSjs7QURBRTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7QUNHSjs7QURERTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSUo7O0FEREU7RUFvQkUsaUJBQUE7QUNmSjs7QURKSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ01OOztBREpJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNNTjs7QURKSTtFQUNFLGNBQUE7QUNNTjs7QURGRTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0tKOztBREhFO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDTUo7O0FESkU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtBQ09KOztBRE5JO0VBQ0UsY0FBQTtBQ1FOOztBRE5JO0VBQ0UsY0FBQTtBQ1FOOztBRExFO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDUUo7O0FETkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUVBLFlBQUE7QUNPTjs7QURMTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNPUjs7QURIRTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7QUNNSjs7QURKRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ09KOztBRExFO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDUUo7O0FETkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUVBLHlCQUFBO0VBRUEsaUJBQUE7RUFFQSxjQUFBO0FDTUo7O0FETEk7RUFDRSxjQUFBO0FDT047O0FESEk7RUFDRSwrQ0FBQTtBQ01OOztBREhFO0VBQ0Usa0JBQUE7QUNNSjs7QURKRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDT0o7O0FESkk7RUFDRSxnREFBQTtBQ09OOztBREpFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQ09KOztBRERFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDSUo7O0FERkU7RUFDRSxhQUFBO0FDS0o7O0FESEU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ01KOztBREpFO0VBQ0UsY0FBQTtBQ09KOztBRExFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FDUUo7O0FEUEk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ1NOOztBRE5FO0VBQ0UseUJBQUE7QUNTSjs7QURQRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBSUEsY0FBQTtFQUNBLG1CQUFBO0FDT0o7O0FETkk7RUFDRSxtQkFBQTtBQ1FOOztBRExFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBRUEsY0FBQTtFQUNBLFNBQUE7QUNPSjs7QURMRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDT0o7O0FETkk7RUFDRSxlQUFBO0FDUU47O0FETEU7RUFDRSxVQUFBO0FDUUo7O0FETkU7RUFDRSxVQUFBO0FDU0o7O0FEUEU7RUFDRSxPQUFBO0FDVUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb25maWdjYXJlL2FkZG1lYWxzL2FkZG1lYWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC10ZXh0IHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBjb2xvcjogIzFhMWExYTtcbiAgICBoZWlnaHQ6IDE5cHg7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgLy8gbWFyZ2luOiAwO1xuICB9XG4gIGlucHV0IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgXG4gICAgLyogRGlyZWN0IEJsYWNrICovXG4gIFxuICAgIGNvbG9yOiAjMWExYTFhO1xuICB9XG4gIC5saXN0dGl0bGUge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICBjb2xvcjogIzFhMWExYTtcbiAgfVxuICAubGlzdHRpdGxlMiB7XG4gICAgcGFkZGluZy10b3A6IDE2cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmxpc3R0aXRsZTMge1xuICAgIHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDhweCAhaW1wb3J0YW50O1xuICB9XG4gIC5saXN0dGl0bGU0IHtcbiAgICBwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMjRweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMjRweDtcbiAgfVxuICBcbiAgLnRpbWUtc2VjIHtcbiAgICBpb24taW5wdXQge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGNvbG9yOiAjN2U3ZTdlO1xuICAgIH1cbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgY29sb3I6ICM0MTM3ZmY7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgaW9uLWlucHV0OmZpcnN0LWNoaWxkIHtcbiAgICAgIGNvbG9yOiAjNDEzN2ZmO1xuICAgIH1cbiAgICBkaXNwbGF5OiBjb250ZW50cztcbiAgfVxuICAuYnRuMSB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAtLWJvcmRlcjogMXB4IHNvbGlkICM0MTM3ZmY7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogNDRweDtcbiAgfVxuICAudGltZWJ0biB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLnRpbWVjb2wge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogMDtcbiAgICBidXR0b246Zmlyc3QtY2hpbGQge1xuICAgICAgY29sb3I6ICM0MTM3ZmY7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICBjb2xvcjogIzdlN2U3ZTtcbiAgICB9XG4gIH1cbiAgLmNoaXBkaXYge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICBcbiAgICBpb24tY2hpcCB7XG4gICAgICB3aWR0aDogMjZweDtcbiAgICAgIGhlaWdodDogMjZweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICAgIGNvbG9yOiAjN2U3ZTdlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIFxuICAgICAgYm9yZGVyOiBub25lO1xuICBcbiAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuc2VsZWN0ZWRjaGlwIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDEzN2ZmICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbiAgaHIge1xuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG4gIGlvbi10ZXh0YXJlYSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2I4YjhiODtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgfVxuICAuYnRuMiB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIFxuICAgIC8qIERpcmVjdCBCbGFjayAqL1xuICBcbiAgICBjb2xvcjogIzFhMWExYTtcbiAgICBpb24taWNvbiB7XG4gICAgICBjb2xvcjogIzQxMzdmZjtcbiAgICB9XG4gIH1cbiAgaW9uLWhlYWRlciB7XG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSg2NSwgNTUsIDI1NSwgMC4xNCk7XG4gICAgfVxuICB9XG4gIGlvbi10aXRsZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICB9XG4gIC5zdWJtaXRidG4ge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogODcuNSU7XG4gICAgbWFyZ2luOiAxNnB4IDI0cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICB9XG4gIGlvbi1mb290ZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAtMnB4IDhweCByZ2JhKDY1LCA1NSwgMjU1LCAwLjA4KTtcbiAgICB9XG4gIH1cbiAgaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgICAtLXBhZGRpbmctZW5kOiAyNHB4O1xuICB9XG4gIC8vaW9uLWdyaWQge1xuICAvLyAgcGFkZGluZzogMDtcbiAgLy99XG4gIFxuICAuY29uZmlndXJlY2FyZWdyaWR7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHBhZGRpbmctdG9wOjhweDtcbiAgfVxuICAudGltZXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLnRpbWVzZWMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNDlweDtcbiAgfVxuICAudGltZW1pbiB7XG4gICAgY29sb3I6ICM3ZTdlN2U7XG4gIH1cbiAgLm1lcmlkaWVtc2VjIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgY29sb3I6ICM3ZTdlN2U7XG4gICAgfVxuICB9XG4gIC5hY3RpdmVtZXJpZGlhbiB7XG4gICAgY29sb3I6ICM0MTM3ZmYgIWltcG9ydGFudDtcbiAgfVxuICAuaW1hZ2VsaXN0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHNwYW4ge1xuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgLmRhdGVsYWJlbCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIFxuICAgIGNvbG9yOiAjMWExYTFhO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuZGF0ZWJ0biB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBcbiAgICBjb2xvcjogIzFhMWExYTtcbiAgICAtLWJvcmRlci1jb2xvcjogI2I4YjhiODtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogOTQuNSU7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gIH1cbiAgLmRhdGVidG46OnBhcnQobmF0aXZlKSB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBpb24tZGF0ZXRpbWUge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgaW9uLWljb24ge1xuICAgIHpvb206IDE7XG4gIH1cbiAgIiwiLmxhYmVsLXRleHQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlucHV0IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICAvKiBEaXJlY3QgQmxhY2sgKi9cbiAgY29sb3I6ICMxYTFhMWE7XG59XG5cbi5saXN0dGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgY29sb3I6ICMxYTFhMWE7XG59XG5cbi5saXN0dGl0bGUyIHtcbiAgcGFkZGluZy10b3A6IDE2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdHRpdGxlMyB7XG4gIHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA4cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3R0aXRsZTQge1xuICBwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDI0cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgLS1wYWRkaW5nLXRvcDogMjRweDtcbn1cblxuLnRpbWUtc2VjIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG4udGltZS1zZWMgaW9uLWlucHV0IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzdlN2U3ZTtcbn1cbi50aW1lLXNlYyBwIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgY29sb3I6ICM0MTM3ZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi50aW1lLXNlYyBpb24taW5wdXQ6Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogIzQxMzdmZjtcbn1cblxuLmJ0bjEge1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIC0tYm9yZGVyOiAxcHggc29saWQgIzQxMzdmZjtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5cbi50aW1lYnRuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4udGltZWNvbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDA7XG59XG4udGltZWNvbCBidXR0b246Zmlyc3QtY2hpbGQge1xuICBjb2xvcjogIzQxMzdmZjtcbn1cbi50aW1lY29sIGJ1dHRvbiB7XG4gIGNvbG9yOiAjN2U3ZTdlO1xufVxuXG4uY2hpcGRpdiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuLmNoaXBkaXYgaW9uLWNoaXAge1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBjb2xvcjogIzdlN2U3ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5jaGlwZGl2IGlvbi1jaGlwIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uc2VsZWN0ZWRjaGlwIHtcbiAgYmFja2dyb3VuZDogIzQxMzdmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjhiOGI4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5idG4yIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLyogRGlyZWN0IEJsYWNrICovXG4gIGNvbG9yOiAjMWExYTFhO1xufVxuLmJ0bjIgaW9uLWljb24ge1xuICBjb2xvcjogIzQxMzdmZjtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoNjUsIDU1LCAyNTUsIDAuMTQpO1xufVxuXG5pb24tdGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG5cbi5zdWJtaXRidG4ge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDg3LjUlO1xuICBtYXJnaW46IDE2cHggMjRweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuXG5pb24tZm9vdGVyIGlvbi10b29sYmFyIHtcbiAgYm94LXNoYWRvdzogMHB4IC0ycHggOHB4IHJnYmEoNjUsIDU1LCAyNTUsIDAuMDgpO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgLS1wYWRkaW5nLWVuZDogMjRweDtcbn1cblxuLmNvbmZpZ3VyZWNhcmVncmlkIHtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuXG4udGltZXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGltZXNlYyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0OXB4O1xufVxuXG4udGltZW1pbiB7XG4gIGNvbG9yOiAjN2U3ZTdlO1xufVxuXG4ubWVyaWRpZW1zZWMge1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4ubWVyaWRpZW1zZWMgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogIzdlN2U3ZTtcbn1cblxuLmFjdGl2ZW1lcmlkaWFuIHtcbiAgY29sb3I6ICM0MTM3ZmYgIWltcG9ydGFudDtcbn1cblxuLmltYWdlbGlzdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmltYWdlbGlzdCBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLmRhdGVsYWJlbCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIG1hcmdpbjogMDtcbn1cblxuLmRhdGVidG4ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIGNvbG9yOiAjMWExYTFhO1xuICAtLWJvcmRlci1jb2xvcjogI2I4YjhiODtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA5NC41JTtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuLmRhdGVidG4gaW9uLWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5kYXRlYnRuOjpwYXJ0KG5hdGl2ZSkge1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nOiAwO1xufVxuXG5pb24taWNvbiB7XG4gIHpvb206IDE7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/configcare/addmeals/addmeals.page.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/configcare/addmeals/addmeals.page.ts ***!
    \************************************************************/

  /*! exports provided: AddmealsPage */

  /***/
  function srcAppPagesConfigcareAddmealsAddmealsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddmealsPage", function () {
      return AddmealsPage;
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

    var AddmealsPage = /*#__PURE__*/function () {
      function AddmealsPage(imagePicker) {
        _classCallCheck(this, AddmealsPage);

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

      _createClass(AddmealsPage, [{
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

      return AddmealsPage;
    }();

    AddmealsPage.ctorParameters = function () {
      return [{
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"]
      }];
    };

    AddmealsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addmeals',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./addmeals.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/addmeals/addmeals.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./addmeals.page.scss */
      "./src/app/pages/configcare/addmeals/addmeals.page.scss"))["default"]]
    })], AddmealsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-configcare-addmeals-addmeals-module-es5.js.map