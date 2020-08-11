function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configcare-bathing-bathing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/bathing/bathing.page.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/bathing/bathing.page.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfigcareBathingBathingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons\n      mode=\"md\"\n      style=\"margin-left: 12px; margin-right: 4px;\"\n      slot=\"start\"\n    >\n      <ion-button>\n        <ion-icon\n          mode=\"md\"\n          slot=\"icon-only\"\n          name=\"chevron-back-outline\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title mode=\"md\" class=\"title-text\">\n      Schedule Bathing\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <form [formGroup]=\"bathingForm\">\n    <ion-item style=\"display: none;\">\n      <ion-label>Date</ion-label>\n      <ion-datetime\n        [pickerOptions]=\"customPickerOptions\"\n        #datepicker\n        displayFormat=\"h:mm A\"\n      ></ion-datetime>\n    </ion-item>\n    <ion-grid fixed style=\"height: auto;\" class=\"configurecaregrid\">\n      <m-selectdate (result)=\"addtime($event,'timeList')\"></m-selectdate>\n\n      <!-- <ion-row *ngFor=\"let item of timeList;let i = index\">\n      <p class=\"label-text\">Select Time</p>\n\n      <ion-col size=\"12\" (click)=\"changeTime(i)\">\n        <ion-text color=\"primary\" class=\"timetext\">\n          <div class=\"timesec\">\n            <span>{{item.getHours()}}</span>&nbsp;&nbsp;:&nbsp;&nbsp;<span\n              class=\"timemin\"\n              >{{item.getMinutes()}}</span\n            >\n          </div>\n          <div class=\"meridiemsec\">\n            <span [class.activemeridian]=\"(item.getHours() < 12) \">AM</span>\n            <span [class.activemeridian]=\"(item.getHours() >= 12) \">PM</span>\n          </div>\n        </ion-text>\n      </ion-col>\n    </ion-row> -->\n      <!-- <ion-row>\n      <ion-col size=\"4\" class=\"time-sec\">\n        <ion-input\n          type=\"tel\"\n          value=\"06\"\n          max=\"12\"\n          min=\"01\"\n          maxlength=\"2\"\n        ></ion-input\n        >&nbsp;\n        <p>:</p>\n        &nbsp;\n        <ion-input\n          type=\"tel\"\n          value=\"00\"\n          maxlength=\"2\"\n          max=\"60\"\n          min=\"00\"\n        ></ion-input>\n      </ion-col>\n      <ion-col size=\"2\" class=\"timecol\">\n        <button class=\"timebtn\">AM</button>\n        <button class=\"timebtn\">PM</button>\n      </ion-col>\n      <ion-col size=\"6\"> </ion-col>\n    </ion-row> -->\n    </ion-grid>\n    <!-- <ion-button class=\"btn1\" fill=\"outline\" shape=\"round\" (click)=\"addDate()\">\n      <ion-icon class=\"plusbutton\" slot=\"start\" name=\"add-circle\"></ion-icon>Add\n    </ion-button> -->\n    <p class=\"label-text\">Repeat</p>\n    <div class=\"chipdiv\">\n      <ion-chip\n        color=\"primary\"\n        mode=\"ios\"\n        outline=\"true\"\n        [class.selectedchip]=\"selectedDays.includes(day.value)\"\n        *ngFor=\"let day of daysList\"\n        (click)=\"addremoveDay(day)\"\n      >\n        <ion-label>{{day.name}}</ion-label>\n      </ion-chip>\n      <!-- <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n      <ion-label>M</ion-label> </ion-chip\n    ><ion-chip color=\"primary\" mode=\"ios\" outline=\"true\" class=\"selectedchip\">\n      <ion-label>T</ion-label> </ion-chip\n    ><ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n      <ion-label>W</ion-label> </ion-chip\n    ><ion-chip color=\"primary\" mode=\"ios\" outline=\"true\" class=\"selectedchip\">\n      <ion-label>T</ion-label>\n    </ion-chip>\n    <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\">\n      <ion-label>F</ion-label>\n    </ion-chip>\n    <ion-chip color=\"primary\" mode=\"ios\" outline=\"true\" class=\"selectedchip\">\n      <ion-label>S</ion-label>\n    </ion-chip> -->\n    </div>\n    <hr />\n    <p class=\"label-text\">Instructions (optional)</p>\n    <ion-textarea\n      rows=\"5\"\n      placeholder=\"Write if any bathing information\"\n      [(ngModel)]=\"instructions\"\n      formControlName=\"instructions\"\n    ></ion-textarea>\n    <ion-button fill=\"clear\" class=\"btn2\" (click)=\"addImage()\">\n      <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n      ADD IMAGES\n    </ion-button>\n    <ion-text>\n      <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n        <span>{{img.substring(img.lastIndexOf(\"/\") + 1)}}</span>\n        <ion-icon slot=\"end\" name=\"trash\" (click)=\"removeImg(j)\"></ion-icon>\n      </div>\n    </ion-text>\n\n    <!-- <ion-text color=\"primary\"> -->\n\n    <!-- </ion-text> -->\n  </form>\n</ion-content>\n\n<ion-footer>\n  <!-- <ion-toolbar>\n    <ion-button\n      color=\"primary\"\n      expand=\"block\"\n      fill=\"solid\"\n      class=\"submitbtn\"\n      shape=\"round\"\n      (click)=\"submit()\"\n    >\n      Submit\n    </ion-button>\n  </ion-toolbar> -->\n  <div id=\"button\">\n    <ion-button\n      [disabled]=\"false\"\n      class=\"btnblue\"\n      type=\"submit\"\n      id=\"signup\"\n      (click)=\"submit()\"\n      >SUBMIT</ion-button\n    >\n  </div>\n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/configcare/bathing/bathing-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/configcare/bathing/bathing-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: BathingPageRoutingModule */

  /***/
  function srcAppPagesConfigcareBathingBathingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BathingPageRoutingModule", function () {
      return BathingPageRoutingModule;
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


    var _bathing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bathing.page */
    "./src/app/pages/configcare/bathing/bathing.page.ts");

    var routes = [{
      path: '',
      component: _bathing_page__WEBPACK_IMPORTED_MODULE_3__["BathingPage"]
    }];

    var BathingPageRoutingModule = function BathingPageRoutingModule() {
      _classCallCheck(this, BathingPageRoutingModule);
    };

    BathingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BathingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/bathing/bathing.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/configcare/bathing/bathing.module.ts ***!
    \************************************************************/

  /*! exports provided: BathingPageModule */

  /***/
  function srcAppPagesConfigcareBathingBathingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BathingPageModule", function () {
      return BathingPageModule;
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


    var _bathing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bathing-routing.module */
    "./src/app/pages/configcare/bathing/bathing-routing.module.ts");
    /* harmony import */


    var _bathing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bathing.page */
    "./src/app/pages/configcare/bathing/bathing.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var BathingPageModule = function BathingPageModule() {
      _classCallCheck(this, BathingPageModule);
    };

    BathingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bathing_routing_module__WEBPACK_IMPORTED_MODULE_5__["BathingPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_bathing_page__WEBPACK_IMPORTED_MODULE_6__["BathingPage"]]
    })], BathingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/bathing/bathing.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/configcare/bathing/bathing.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfigcareBathingBathingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".label-text {\n  font-weight: 300;\n  font-size: 16px;\n  line-height: 19px;\n  color: #1a1a1a;\n  height: 19px;\n  margin-top: 24px;\n  margin-bottom: 8px;\n}\n\n.time-sec {\n  display: contents;\n}\n\n.time-sec ion-input {\n  --padding-start: 0;\n  font-size: 40px;\n  line-height: 40px;\n  font-weight: bold;\n  height: 40px;\n  color: #7e7e7e;\n}\n\n.time-sec p {\n  font-size: 40px;\n  line-height: 40px;\n  color: #4137ff;\n  font-weight: bold;\n  height: 40px;\n  margin: 0;\n}\n\n.time-sec ion-input:first-child {\n  color: #4137ff;\n}\n\n.btn1 {\n  --border-radius: 8px;\n  margin-top: 16px;\n  padding-top: 0;\n  --border: 1px solid #4137ff;\n  width: 120px;\n  height: 44px;\n  --border-width:thin;\n}\n\n.timebtn {\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: 500;\n  background: white;\n  line-height: 20px;\n}\n\n.timecol {\n  display: grid;\n  padding: 0;\n}\n\n.timecol button:first-child {\n  color: #4137ff;\n}\n\n.timecol button {\n  color: #7e7e7e;\n}\n\n.chipdiv {\n  justify-content: space-around;\n  display: flex;\n  list-style: none;\n  padding: 0;\n}\n\n.chipdiv ion-chip {\n  width: 26px;\n  height: 26px;\n  text-align: center;\n  display: inline-flex;\n  background: #e0e0e0;\n  color: #7e7e7e;\n  justify-content: center;\n  border: none;\n}\n\n.chipdiv ion-chip ion-label {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  text-transform: capitalize;\n}\n\n.selectedchip {\n  background: #4137ff !important;\n  color: white !important;\n}\n\nhr {\n  background: #e0e0e0;\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n\nion-textarea {\n  border: 1px solid #b8b8b8;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.btn2 {\n  margin-top: 12px;\n  margin-bottom: 30px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  text-transform: uppercase;\n  /* Direct Black */\n  color: #1a1a1a;\n}\n\n.btn2 ion-icon {\n  color: #4137ff;\n}\n\nion-header ion-toolbar {\n  box-shadow: 0px 2px 8px rgba(65, 55, 255, 0.14);\n}\n\n.submitbtn {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 16px;\n  /* identical to box height, or 114% */\n  text-align: center;\n  /* White */\n  color: #ffffff;\n  --border-radius: 8px;\n  margin: 16px 24px;\n}\n\nion-footer ion-toolbar {\n  box-shadow: 0px -2px 8px rgba(65, 55, 255, 0.08);\n}\n\nion-content {\n  --padding-start: 24px;\n  --padding-end: 24px;\n}\n\nion-grid {\n  padding: 0;\n}\n\n.timetext {\n  display: flex;\n}\n\n.timesec {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 49px;\n}\n\n.timemin {\n  color: #7e7e7e;\n}\n\n.meridiemsec {\n  display: grid;\n  padding-left: 16px;\n}\n\n.meridiemsec span {\n  display: inline-flex;\n  align-items: center;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  text-transform: capitalize;\n  color: #7e7e7e;\n}\n\n.activemeridian {\n  color: #4137ff !important;\n}\n\n.imagelist {\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  color: #000000;\n  margin-bottom: 10px;\n}\n\n.imagelist span {\n  padding-right: 30px;\n}\n\n.plusbutton {\n  height: 24px;\n  width: 24px;\n}\n\nion-icon {\n  zoom: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9iYXRoaW5nL2JhdGhpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25maWdjYXJlL2JhdGhpbmcvYmF0aGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdFO0VBb0JFLGlCQUFBO0FDbkJKOztBREFJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDRU47O0FEQUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0VOOztBREFJO0VBQ0UsY0FBQTtBQ0VOOztBREVFO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFFO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUNHSjs7QURGSTtFQUNFLGNBQUE7QUNJTjs7QURGSTtFQUNFLGNBQUE7QUNJTjs7QURERTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0lKOztBREZJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFFQSxZQUFBO0FDR047O0FERE07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDR1I7O0FEQ0U7RUFDRSw4QkFBQTtFQUNBLHVCQUFBO0FDRUo7O0FEQUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURERTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSx5QkFBQTtFQUVBLGlCQUFBO0VBRUEsY0FBQTtBQ0VKOztBRERJO0VBQ0UsY0FBQTtBQ0dOOztBRENJO0VBQ0UsK0NBQUE7QUNFTjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFFQSxrQkFBQTtFQUVBLFVBQUE7RUFFQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElJO0VBQ0UsZ0RBQUE7QUNETjs7QURJRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURHRTtFQUNFLFVBQUE7QUNBSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUU7RUFDRSxjQUFBO0FDR0o7O0FEREU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURISTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDS047O0FERkU7RUFDRSx5QkFBQTtBQ0tKOztBREhFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFJQSxjQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURGSTtFQUNFLG1CQUFBO0FDSU47O0FEQUU7RUFFRSxZQUFBO0VBQ0EsV0FBQTtBQ0VKOztBRENFO0VBQ0UsT0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9iYXRoaW5nL2JhdGhpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsLXRleHQge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIGNvbG9yOiAjMWExYTFhO1xuICAgIGhlaWdodDogMTlweDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAvLyBtYXJnaW46IDA7XG4gIH1cbiAgXG4gIC50aW1lLXNlYyB7XG4gICAgaW9uLWlucHV0IHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBjb2xvcjogIzdlN2U3ZTtcbiAgICB9XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgIGNvbG9yOiAjNDEzN2ZmO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIGlvbi1pbnB1dDpmaXJzdC1jaGlsZCB7XG4gICAgICBjb2xvcjogIzQxMzdmZjtcbiAgICB9XG4gICAgZGlzcGxheTogY29udGVudHM7XG4gIH1cbiAgLmJ0bjEge1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgLS1ib3JkZXI6IDFweCBzb2xpZCAjNDEzN2ZmO1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6NDRweDtcbiAgICAtLWJvcmRlci13aWR0aDp0aGluO1xuICB9XG4gIC50aW1lYnRuIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgfVxuICAudGltZWNvbCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gICAgICBjb2xvcjogIzQxMzdmZjtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgIGNvbG9yOiAjN2U3ZTdlO1xuICAgIH1cbiAgfVxuICAuY2hpcGRpdiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gIFxuICAgIGlvbi1jaGlwIHtcbiAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgICAgY29sb3I6ICM3ZTdlN2U7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgXG4gICAgICBib3JkZXI6IG5vbmU7XG4gIFxuICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zZWxlY3RlZGNoaXAge1xuICAgIGJhY2tncm91bmQ6ICM0MTM3ZmYgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgfVxuICBociB7XG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAgaW9uLXRleHRhcmVhIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYjhiOGI4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG4gIC5idG4yIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgXG4gICAgLyogRGlyZWN0IEJsYWNrICovXG4gIFxuICAgIGNvbG9yOiAjMWExYTFhO1xuICAgIGlvbi1pY29uIHtcbiAgICAgIGNvbG9yOiAjNDEzN2ZmO1xuICAgIH1cbiAgfVxuICBpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDY1LCA1NSwgMjU1LCAwLjE0KTtcbiAgICB9XG4gIH1cbiAgLnN1Ym1pdGJ0biB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDExNCUgKi9cbiAgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICAvKiBXaGl0ZSAqL1xuICBcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXJnaW46IDE2cHggMjRweDtcbiAgfVxuICBpb24tZm9vdGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICBib3gtc2hhZG93OiAwcHggLTJweCA4cHggcmdiYSg2NSwgNTUsIDI1NSwgMC4wOCk7XG4gICAgfVxuICB9XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMjRweDtcbiAgfVxuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAudGltZXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLnRpbWVzZWMge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBsaW5lLWhlaWdodDogNDlweDtcbiAgfVxuICAudGltZW1pbiB7XG4gICAgY29sb3I6ICM3ZTdlN2U7XG4gIH1cbiAgLm1lcmlkaWVtc2VjIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBzcGFuIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgY29sb3I6ICM3ZTdlN2U7XG4gICAgfVxuICB9XG4gIC5hY3RpdmVtZXJpZGlhbiB7XG4gICAgY29sb3I6ICM0MTM3ZmYgIWltcG9ydGFudDtcbiAgfVxuICAuaW1hZ2VsaXN0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHNwYW4ge1xuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5wbHVzYnV0dG9ue1xuXG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICB9XG5cbiAgaW9uLWljb257XG4gICAgem9vbToxO1xuICB9IiwiLmxhYmVsLXRleHQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgaGVpZ2h0OiAxOXB4O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi50aW1lLXNlYyB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuLnRpbWUtc2VjIGlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogNDBweDtcbiAgY29sb3I6ICM3ZTdlN2U7XG59XG4udGltZS1zZWMgcCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGNvbG9yOiAjNDEzN2ZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDA7XG59XG4udGltZS1zZWMgaW9uLWlucHV0OmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICM0MTM3ZmY7XG59XG5cbi5idG4xIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xuICAtLWJvcmRlcjogMXB4IHNvbGlkICM0MTM3ZmY7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICAtLWJvcmRlci13aWR0aDp0aGluO1xufVxuXG4udGltZWJ0biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLnRpbWVjb2wge1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAwO1xufVxuLnRpbWVjb2wgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgY29sb3I6ICM0MTM3ZmY7XG59XG4udGltZWNvbCBidXR0b24ge1xuICBjb2xvcjogIzdlN2U3ZTtcbn1cblxuLmNoaXBkaXYge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbi5jaGlwZGl2IGlvbi1jaGlwIHtcbiAgd2lkdGg6IDI2cHg7XG4gIGhlaWdodDogMjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgY29sb3I6ICM3ZTdlN2U7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG59XG4uY2hpcGRpdiBpb24tY2hpcCBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnNlbGVjdGVkY2hpcCB7XG4gIGJhY2tncm91bmQ6ICM0MTM3ZmYgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I4YjhiODtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uYnRuMiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC8qIERpcmVjdCBCbGFjayAqL1xuICBjb2xvcjogIzFhMWExYTtcbn1cbi5idG4yIGlvbi1pY29uIHtcbiAgY29sb3I6ICM0MTM3ZmY7XG59XG5cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDY1LCA1NSwgMjU1LCAwLjE0KTtcbn1cblxuLnN1Ym1pdGJ0biB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxMTQlICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogV2hpdGUgKi9cbiAgY29sb3I6ICNmZmZmZmY7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDE2cHggMjRweDtcbn1cblxuaW9uLWZvb3RlciBpb24tdG9vbGJhciB7XG4gIGJveC1zaGFkb3c6IDBweCAtMnB4IDhweCByZ2JhKDY1LCA1NSwgMjU1LCAwLjA4KTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDI0cHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnRpbWV0ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRpbWVzZWMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDlweDtcbn1cblxuLnRpbWVtaW4ge1xuICBjb2xvcjogIzdlN2U3ZTtcbn1cblxuLm1lcmlkaWVtc2VjIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLm1lcmlkaWVtc2VjIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICM3ZTdlN2U7XG59XG5cbi5hY3RpdmVtZXJpZGlhbiB7XG4gIGNvbG9yOiAjNDEzN2ZmICFpbXBvcnRhbnQ7XG59XG5cbi5pbWFnZWxpc3Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pbWFnZWxpc3Qgc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG5cbi5wbHVzYnV0dG9uIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbn1cblxuaW9uLWljb24ge1xuICB6b29tOiAxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/configcare/bathing/bathing.page.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/configcare/bathing/bathing.page.ts ***!
    \**********************************************************/

  /*! exports provided: BathingPage */

  /***/
  function srcAppPagesConfigcareBathingBathingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BathingPage", function () {
      return BathingPage;
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var BathingPage = /*#__PURE__*/function () {
      function BathingPage(imagePicker) {
        var _this = this;

        _classCallCheck(this, BathingPage);

        this.imagePicker = imagePicker;
        this.bathingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          timeList: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]),
          repeatDays: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]),
          instructions: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
          images: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([])
        });
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
        this.selectedDays = [];
        this.customPickerOptions = {
          buttons: [{
            text: "Submit",
            handler: function handler(x) {
              console.log("Clicked Save!", x);

              if (_this.timeList[_this.timeindex]) {
                var dateVar = new Date();
                dateVar.setHours(x.ampm.value == "pm" ? x.hour.value + 12 : x.hour.value);
                dateVar.setMinutes(x.minute.value);
                _this.timeList[_this.timeindex] = dateVar;
                console.log(_this.timeList[_this.timeindex]);
              }
            }
          }, {
            text: "Delete",
            handler: function handler() {
              console.log("Clicked Log. Do not Dismiss."); // return false;

              _this.timeList.splice(_this.timeindex, 1);
            }
          }]
        };
      }

      _createClass(BathingPage, [{
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
        }
      }, {
        key: "changeTime",
        value: function changeTime(i) {
          var _this2 = this;

          this.datepicker.open().then(function (x) {
            console.log(x);
            _this2.timeindex = i;
          });
        }
      }, {
        key: "addImage",
        value: function addImage() {
          var _this3 = this;

          var options = {
            maximumImagesCount: 4
          };
          this.imagePicker.getPictures(options).then(function (results) {
            console.log(results);

            for (var i = 0; i < results.length; i++) {
              _this3.imageList.push(results[i]);
            }
          }, function (err) {});
        }
      }, {
        key: "removeImg",
        value: function removeImg(i) {
          console.log("*", i);
          this.imageList.splice(i, 1);
        } // submit() {
        // let imgList = [];
        // for (let img of this.imageList) {
        //   this.base64.encodeFile(img).then((x) => {
        //     imgList.push(x);
        //   });
        // }
        // let data = {
        //   times: this.timeList,
        //   repeatdays: this.selectedDays,
        //   instructions: this.instructions,
        //   images: imgList,
        // };
        // console.log(data);
        // this.http.post('url',data).subscribe(x=>{
        // },err=>{
        // })
        // }

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
      }, {
        key: "submit",
        value: function submit() {
          this.bathingForm.patchValue({
            timeList: this.timeList
          });
          this.bathingForm.patchValue({
            repeatDays: this.selectedDays
          });
          this.bathingForm.patchValue({
            images: this.imageList
          });
          console.log(this.bathingForm.value);
        }
      }, {
        key: "setData",
        value: function setData(ev, formname) {
          console.log(ev, "|||||");
          this.bathingForm.patchValue(_defineProperty({}, formname, ev));
        }
      }, {
        key: "addtime",
        value: function addtime(ev) {
          this.timeList = ev;
        }
      }]);

      return BathingPage;
    }();

    BathingPage.ctorParameters = function () {
      return [{
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["ImagePicker"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("datepicker")], BathingPage.prototype, "datepicker", void 0);
    BathingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-bathing",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./bathing.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/bathing/bathing.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./bathing.page.scss */
      "./src/app/pages/configcare/bathing/bathing.page.scss"))["default"]]
    })], BathingPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-configcare-bathing-bathing-module-es5.js.map