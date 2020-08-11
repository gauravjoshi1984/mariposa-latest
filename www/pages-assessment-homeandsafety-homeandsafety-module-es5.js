function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-homeandsafety-homeandsafety-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/homeandsafety/homeandsafety.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/homeandsafety/homeandsafety.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAssessmentHomeandsafetyHomeandsafetyPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  \n  <ion-toolbar class=\"headtoolbar\">\n    \n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n             <m-backbutton></m-backbutton>\n            </ion-buttons>\n        </ion-toolbar> \n        \n        </ion-col>\n        <ion-col size=\"8\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Home & Safety</ion-text>\n           \n          </div> \n        </ion-col>\n       \n      </ion-row>\n   \n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n  <ion-grid style=\"padding:24px;height:fit-content;margin-bottom:48px\">\n\n    <!-- AIDS -->\n\n    <div style=\"padding-top:0px;margin-bottom:15px;\">\n      <ion-label style=\"font-size: 16px;line-height: 19px;\">Aids</ion-label>\n    </div>  \n    \n  <!-- CHECKBOX 1 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Cane color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Cane)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Cane</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 2 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Walker color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Walker)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Walker</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 3 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Wheelchair color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Wheelchair)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Wheelchair</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 4 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #GeriChair color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(GeriChair)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Geri-Chair</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n     <!-- CHECKBOX 5 -->\n\n     <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Scooter color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Scooter)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Scooter</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <hr class=\"solid\">\n\n     <!-- Fall RISK -->\n\n     <ion-row style=\"align-items: center;\">\n      <ion-col size=8>\n        <ion-text (click)=\"generateClick(FallRisk)\" style=\"font-size:16px;line-height:19px;\">Fall Risk</ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-text style=\"font-size:16px;line-height:19px;font-weight:normal;float: right;margin-right:12px ;\"><span *ngIf=\"FallRisk.checked\">YES</span\n          ><span *ngIf=\"!FallRisk.checked\">NO</span></ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-toggle #FallRisk mode=\"ios\" checked color=\"primary\" style=\"float: right;\"></ion-toggle>\n      </ion-col>\n    </ion-row>\n\n    <hr class=\"solid\">\n\n     <!-- SAFETY ASSESSMENT -->\n\n     <ion-row style=\"align-items: center;\">\n      <ion-col size=8>\n        <ion-text (click)=\"generateClick(Hassafetyassessmentdone)\" style=\"font-size:16px;line-height:19px;\">Has safety assessment done</ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-text style=\"font-size:16px;line-height:19px;font-weight:normal;float: right;margin-right:12px ;\"><span *ngIf=\"Hassafetyassessmentdone.checked\">YES</span\n          ><span *ngIf=\"!Hassafetyassessmentdone.checked\">NO</span></ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-toggle #Hassafetyassessmentdone mode=\"ios\" checked color=\"primary\" style=\"float: right;\"></ion-toggle>\n      </ion-col>\n    </ion-row>\n\n    <hr class=\"solid\">\n\n    <!-- TRANSFER TYPE -->\n\n    <div style=\"padding-top:0px;margin-bottom:10px;\">\n      <ion-label style=\"font-size: 16px;line-height: 19px;\">Hearing</ion-label>\n    </div>  \n\n    <ion-radio-group #Hearing>\n      <ion-row style=\"align-items: center;\">\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"0\" style=\"float:left;\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-text (click)=\"generateClick2(Hearing,'0')\" style=\"font-size:16px;line-height:19px;font-weight:300;float:left\">None</ion-text>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"1\" style=\"float:right\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n         <ion-text (click)=\"generateClick2(Hearing,'1')\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:8px;\">Full</ion-text>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-radio mode=\"md\" value=\"2\" style=\"float:right\"></ion-radio>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-text (click)=\"generateClick2(Hearing,'2')\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:8px;\">Partial</ion-text>\n        </ion-col>\n      </ion-row>\n     \n    </ion-radio-group>\n\n    <hr class=\"solid\">\n\n        <!-- TRANSFER INSTRUCTIONS -->\n\n        <div class=\"nametag\">\n          <ion-text position=\"floating\" id=\"tag\">Transfer instructions and risks</ion-text>\n        </div>\n        <div >\n          <ion-textarea style=\"height: 100px;margin-top: 2px;\" class=\"input\" placeholder=\"Write if any specific instruction or risk\"></ion-textarea>\n        </div>\n\n       \n        <!-- OTHER -->\n\n    <div style=\"padding-top:0px;margin-bottom:15px;margin-top: 24px;\">\n      <ion-label style=\"font-size: 16px;line-height: 19px;\">Other</ion-label>\n    </div>  \n    \n   <!-- CHECKBOX 1 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Bedrails color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Bedrails)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Bedrails</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 2 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Hospitalbed color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Hospitalbed)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Hospital bed</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 3 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #BedCommode color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(BedCommode)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Bed Commode</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 4 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Grabbars color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Grabbars)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Grab bars</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n     <!-- CHECKBOX 5 -->\n\n     <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Lifechair color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text  (click)=\"generateClick(Lifechair)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Life chair</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 6 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #RaisedToiletSeat color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(RaisedToiletSeat)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Raised Toilet Seat</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 7 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Showerbench color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Showerbench)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Shower bench</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 8 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Handheldshowerhead color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Handheldshowerhead)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Handheld showerhead </ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <!-- CHECKBOX 9 -->\n\n    <ion-row style=\"align-items: center;margin-top:5px;\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\"><ion-checkbox mode=\"md\" #Other color=\"mwhite\" checked=\"false\"></ion-checkbox></div>\n      </ion-col>\n      <ion-col size=\"11\" style=\"padding-top: 0px;\">\n        <div><ion-text (click)=\"generateClick(Other)\" style=\"font-size:16px;line-height:19px;font-weight:300;margin-left:12px\" color=\"mdblack\">Other</ion-text></div>\n      </ion-col>  \n    </ion-row>\n\n    <hr class=\"solid\">\n\n    <!-- NOTES -->\n\n    <div class=\"nametag\">\n      <ion-text position=\"floating\" id=\"tag\">Notes (optional)</ion-text>\n    </div>\n    <div >\n      <ion-textarea style=\"height: 120px;margin-top: 2px;\" class=\"input\" placeholder=\"Write notes here\"></ion-textarea>\n    </div>\n\n \n        \n\n\n  </ion-grid>\n</ion-content>\n\n\n<ion-footer>\n  <ion-grid style=\"padding-left: 24px;padding-right: 24px;padding-top: 16px;padding-bottom: 16px;\">\n  <!-- BUTTON -->\n  <div id=\"button\">\n    <ion-row style=\"align-items: center;\">\n      <ion-col size=\"4\">\n        \n          <ion-button class=\"btn1\" [disabled]=\"false\"  type=\"submit\"  id=\"signup\">PREVIEW</ion-button>\n          \n      </ion-col>\n       \n      <ion-col size=\"8\">\n        \n          <ion-button class=\"btn2\" [disabled]=\"false\"  type=\"submit\" (click)= \"save()\"  id=\"signup\">SAVE AND PROCEED</ion-button>\n        \n      </ion-col>\n    </ion-row>\n  </div>  \n</ion-grid>\n  \n</ion-footer>\n";
    /***/
  },

  /***/
  "./src/app/pages/assessment/homeandsafety/homeandsafety-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/assessment/homeandsafety/homeandsafety-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: HomeandsafetyPageRoutingModule */

  /***/
  function srcAppPagesAssessmentHomeandsafetyHomeandsafetyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeandsafetyPageRoutingModule", function () {
      return HomeandsafetyPageRoutingModule;
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


    var _homeandsafety_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./homeandsafety.page */
    "./src/app/pages/assessment/homeandsafety/homeandsafety.page.ts");

    var routes = [{
      path: '',
      component: _homeandsafety_page__WEBPACK_IMPORTED_MODULE_3__["HomeandsafetyPage"]
    }];

    var HomeandsafetyPageRoutingModule = function HomeandsafetyPageRoutingModule() {
      _classCallCheck(this, HomeandsafetyPageRoutingModule);
    };

    HomeandsafetyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomeandsafetyPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/homeandsafety/homeandsafety.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/assessment/homeandsafety/homeandsafety.module.ts ***!
    \************************************************************************/

  /*! exports provided: HomeandsafetyPageModule */

  /***/
  function srcAppPagesAssessmentHomeandsafetyHomeandsafetyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeandsafetyPageModule", function () {
      return HomeandsafetyPageModule;
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


    var _homeandsafety_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./homeandsafety-routing.module */
    "./src/app/pages/assessment/homeandsafety/homeandsafety-routing.module.ts");
    /* harmony import */


    var _homeandsafety_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./homeandsafety.page */
    "./src/app/pages/assessment/homeandsafety/homeandsafety.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var HomeandsafetyPageModule = function HomeandsafetyPageModule() {
      _classCallCheck(this, HomeandsafetyPageModule);
    };

    HomeandsafetyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _homeandsafety_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeandsafetyPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_homeandsafety_page__WEBPACK_IMPORTED_MODULE_6__["HomeandsafetyPage"]]
    })], HomeandsafetyPageModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/homeandsafety/homeandsafety.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/assessment/homeandsafety/homeandsafety.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAssessmentHomeandsafetyHomeandsafetyPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "hr.solid {\n  border-top: 1px solid #E5E5E5;\n  margin-top: 16px;\n  margin-bottom: 16px;\n}\n\nion-radio {\n  --color:black;\n  --border-width:1px;\n}\n\n#button {\n  height: 76px;\n  background-color: white;\n  left: 0px;\n  bottom: 0px;\n  position: fixed;\n  box-shadow: 0px -2px 8px rgba(65, 55, 255, 0.08);\n  z-index: 2;\n  padding: 0px;\n}\n\n.btn1 {\n  --color:#4137FF;\n  --background:#ffffff;\n  --border-radius: 8px;\n  --border-color:#4137FF;\n  border-radius: 8px;\n  border-style: solid;\n  border-width: thin;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 17px;\n  font-weight: 600;\n  --box-shadow: none;\n  height: 44px;\n  width: 77%;\n  margin-top: 11px;\n  margin-left: 24px;\n}\n\n.btn2 {\n  outline: none;\n  border-radius: 8px;\n  color: white;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 17px;\n  font-weight: 600;\n  --box-shadow: none;\n  height: 44px;\n  width: 86%;\n  margin-top: 11px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9ob21lYW5kc2FmZXR5L2hvbWVhbmRzYWZldHkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hc3Nlc3NtZW50L2hvbWVhbmRzYWZldHkvaG9tZWFuZHNhZmV0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUVJLGFBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElFO0VBRUUsWUFBQTtFQUVBLHVCQUFBO0VBQ0MsU0FBQTtFQUNELFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0RBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1BO0VBRUksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUdBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFNBO0VBRUksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUdBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUdBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9ob21lYW5kc2FmZXR5L2hvbWVhbmRzYWZldHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIuc29saWQge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTVFNUU1O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbToxNnB4O1xufVxuXG5pb24tcmFkaW97XG5cbiAgICAtLWNvbG9yOmJsYWNrO1xuICAgIC0tYm9yZGVyLXdpZHRoOjFweDtcbiAgICBcbiAgfVxuXG4gICNidXR0b257XG4gICAgXG4gICAgaGVpZ2h0OiA3NnB4O1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAgIGxlZnQgOiAwcHg7XG4gICAgYm90dG9tOjBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm94LXNoYWRvdzogMHB4IC0ycHggOHB4IHJnYmEoNjUsIDU1LCAyNTUsIDAuMDgpO1xuICAgIHotaW5kZXg6IDI7XG4gICAgcGFkZGluZzowcHg7XG59XG5cbi5idG4xe1xuXG4gICAgLS1jb2xvcjojNDEzN0ZGO1xuICAgIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICAgIC0tYm9yZGVyLXJhZGl1czogOHB4OyBcbiAgICAtLWJvcmRlci1jb2xvcjojNDEzN0ZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIFxuXG4gICAgaGVpZ2h0OjQ0cHg7XG4gICAgd2lkdGg6NzclO1xuICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG5cbi5idG4ye1xuXG4gICAgb3V0bGluZTpub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgXG4gICAgXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgIFxuXG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIHdpZHRoOiA4NiU7XG4gICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn0iLCJoci5zb2xpZCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTVFNUU1O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG5pb24tcmFkaW8ge1xuICAtLWNvbG9yOmJsYWNrO1xuICAtLWJvcmRlci13aWR0aDoxcHg7XG59XG5cbiNidXR0b24ge1xuICBoZWlnaHQ6IDc2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBsZWZ0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJveC1zaGFkb3c6IDBweCAtMnB4IDhweCByZ2JhKDY1LCA1NSwgMjU1LCAwLjA4KTtcbiAgei1pbmRleDogMjtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uYnRuMSB7XG4gIC0tY29sb3I6IzQxMzdGRjtcbiAgLS1iYWNrZ3JvdW5kOiNmZmZmZmY7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLWJvcmRlci1jb2xvcjojNDEzN0ZGO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIGhlaWdodDogNDRweDtcbiAgd2lkdGg6IDc3JTtcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG5cbi5idG4yIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHdpZHRoOiA4NiU7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/assessment/homeandsafety/homeandsafety.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/assessment/homeandsafety/homeandsafety.page.ts ***!
    \**********************************************************************/

  /*! exports provided: HomeandsafetyPage */

  /***/
  function srcAppPagesAssessmentHomeandsafetyHomeandsafetyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeandsafetyPage", function () {
      return HomeandsafetyPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var HomeandsafetyPage = /*#__PURE__*/function () {
      function HomeandsafetyPage(navCtrl) {
        _classCallCheck(this, HomeandsafetyPage);

        this.navCtrl = navCtrl;
      }

      _createClass(HomeandsafetyPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "save",
        value: function save() {
          this.navCtrl.navigateForward(['/assessment/assessmentbar']);
        }
      }, {
        key: "generateClick",
        value: function generateClick(ev) {
          // ev.click();
          if (ev.checked == true) {
            ev.checked = false;
          } else {
            ev.checked = true;
          }

          console.log(ev.checked);
        }
      }, {
        key: "generateClick2",
        value: function generateClick2(ev, value) {
          ev.value = value;
          console.log(ev);
        }
      }]);

      return HomeandsafetyPage;
    }();

    HomeandsafetyPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    HomeandsafetyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homeandsafety',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./homeandsafety.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/homeandsafety/homeandsafety.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./homeandsafety.page.scss */
      "./src/app/pages/assessment/homeandsafety/homeandsafety.page.scss"))["default"]]
    })], HomeandsafetyPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-assessment-homeandsafety-homeandsafety-module-es5.js.map