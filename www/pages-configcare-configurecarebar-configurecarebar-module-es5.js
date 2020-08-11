function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configcare-configurecarebar-configurecarebar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/configurecarebar/configurecarebar.page.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/configurecarebar/configurecarebar.page.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesConfigcareConfigurecarebarConfigurecarebarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar class=\"headtoolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-button [routerLink]=\"'/../'\" routerDirection=\"backward\">\n        <ion-icon slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Configure Care</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    \n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <ion-button [routerLink]=\"'/../'\" routerDirection=\"backward\">\n              <ion-icon class=\"backbutton\" slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n            </ion-button>\n            </ion-buttons>\n        </ion-toolbar> \n        </ion-col>\n        <ion-col size=\"8\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Configure Care</ion-text>\n          </div> \n        </ion-col>\n      </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <!-- completed -->\n    <ng-container *ngFor=\"let stepItem of stepperData\">\n      <div\n        class=\"step\"\n        [ngClass]=\"[stepItem.status=='completed' ? 'completed' : '']\"\n        [class.cardheight]=\"stepItem.status=='active'\"\n      >\n        <div class=\"v-stepper\">\n          <div\n            [ngClass]=\"[stepItem.status=='completed' ? 'circle' : 'circle-p']\"\n          >\n            <ion-icon\n              style=\"margin-top: 2px;\"\n              *ngIf=\"stepItem.status=='completed'\"\n              src=\"assets/Group777.svg\"\n            ></ion-icon>\n          </div>\n          <div class=\"line\"></div>\n        </div>\n        <div class=\"content\" [class.activecard]=\"stepItem.status=='active'\">\n          <div *ngIf=\"stepItem.status=='active'\" style=\"display: flex;align-items: baseline;\">\n            <div class=\"circle-a\" style=\"margin: 0px; padding: 0;\"></div>\n            <h3 style=\"padding-left: 16px;\">\n              {{stepItem.name}}\n            </h3>\n            <!-- <p *ngIf=\"stepItem.status!='active'\">{{stepItem.desc}}</p> -->\n\n          </div>\n          <ion-button\n            *ngIf=\"stepItem.open\"\n            class=\"bluebtn\"\n            (click)=\"gotoUrl(stepItem.pathUrl)\"\n          >\n            <span *ngIf=\"stepItem.status=='completed'\">EDIT</span\n            ><span *ngIf=\"stepItem.status=='active'\">ADD</span>\n          </ion-button>\n          <h3\n            *ngIf=\"stepItem.status!='active'\"\n            \n          >\n            {{stepItem.name}}\n          </h3>\n          <p *ngIf=\"stepItem.status!='active'\">{{stepItem.desc}}</p>\n          <p *ngIf=\"stepItem.status!='active'\">{{stepItem.desc2}}</p>\n        </div>\n      </div>\n      <!-- <ng-container *ngFor=\"let childItem of stepItem.children\">\n        <div class=\"step empty\">\n          <div class=\"v-stepper\">\n            <div class=\"circle\"></div>\n            <div class=\"line\"></div>\n          </div>\n\n          <div\n            class=\"content sub-content\"\n            [ngClass]=\"[childItem.status=='pending' ? 'sub-content-p':'' ]\"\n          >\n            <div\n              [ngClass]=\"[childItem.status=='completed' ? 'sub-circle-c' : '' ,childItem.status=='pending'?'sub-circle-p':'',childItem.status=='active'?'sub-circle-a':'']\"\n            >\n              <ion-icon src=\"assets/Group777.svg\"></ion-icon>\n            </div>\n\n            <h3 [ngClass]=\"childItem.status=='pending'?'p-sub':''\">\n              {{childItem.name}}\n            </h3>\n          </div>\n        </div>\n        <ng-container *ngIf=\"childItem.open\">\n          <div class=\"step empty\">\n            <div class=\"v-stepper\">\n              <div class=\"circle\"></div>\n              <div class=\"line\"></div>\n            </div>\n            <div class=\"sub-content-d\">\n              <ion-button class=\"btnblue2\">Add</ion-button>\n            </div>\n          </div>\n        </ng-container>\n      </ng-container> -->\n      <!-- <ng-container *ngIf=\"stepItem.open\">\n        <div class=\"step empty\">\n          <div class=\"v-stepper\">\n            <div class=\"circle\"></div>\n            <div class=\"line\"></div>\n          </div>\n          <div class=\"sub-content-d\">\n            <ion-button class=\"btnblue2\">Add</ion-button>\n          </div>\n        </div>\n      </ng-container> -->\n    </ng-container>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/configcare/configurecarebar/configurecarebar-routing.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/configcare/configurecarebar/configurecarebar-routing.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: ConfigurecarebarPageRoutingModule */

  /***/
  function srcAppPagesConfigcareConfigurecarebarConfigurecarebarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurecarebarPageRoutingModule", function () {
      return ConfigurecarebarPageRoutingModule;
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


    var _configurecarebar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./configurecarebar.page */
    "./src/app/pages/configcare/configurecarebar/configurecarebar.page.ts");

    var routes = [{
      path: "",
      component: _configurecarebar_page__WEBPACK_IMPORTED_MODULE_3__["ConfigurecarebarPage"]
    }];

    var ConfigurecarebarPageRoutingModule = function ConfigurecarebarPageRoutingModule() {
      _classCallCheck(this, ConfigurecarebarPageRoutingModule);
    };

    ConfigurecarebarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConfigurecarebarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/configurecarebar/configurecarebar.module.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/configcare/configurecarebar/configurecarebar.module.ts ***!
    \******************************************************************************/

  /*! exports provided: ConfigurecarebarPageModule */

  /***/
  function srcAppPagesConfigcareConfigurecarebarConfigurecarebarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurecarebarPageModule", function () {
      return ConfigurecarebarPageModule;
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


    var _configurecarebar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./configurecarebar-routing.module */
    "./src/app/pages/configcare/configurecarebar/configurecarebar-routing.module.ts");
    /* harmony import */


    var _configurecarebar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./configurecarebar.page */
    "./src/app/pages/configcare/configurecarebar/configurecarebar.page.ts");

    var ConfigurecarebarPageModule = function ConfigurecarebarPageModule() {
      _classCallCheck(this, ConfigurecarebarPageModule);
    };

    ConfigurecarebarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _configurecarebar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfigurecarebarPageRoutingModule"]],
      declarations: [_configurecarebar_page__WEBPACK_IMPORTED_MODULE_6__["ConfigurecarebarPage"]]
    })], ConfigurecarebarPageModule);
    /***/
  },

  /***/
  "./src/app/pages/configcare/configurecarebar/configurecarebar.page.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/configcare/configurecarebar/configurecarebar.page.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesConfigcareConfigurecarebarConfigurecarebarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".step {\n  padding: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  background-color: cream;\n}\n\n.v-stepper {\n  position: relative;\n  padding-top: 15px;\n  /*   visibility: visible; */\n}\n\n/* regular step */\n\n.step .circle {\n  background-color: white;\n  border: 1px solid gray;\n  border-radius: 100%;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  padding: 0;\n  text-align: center;\n}\n\n.step .circle ion-icon {\n  font-size: 12px;\n  color: white;\n  display: inline-flex;\n}\n\n.addbtnsec {\n  position: absolute;\n  height: 100px;\n  background: #ffffff;\n  box-shadow: 0px 2px 8px rgba(65, 55, 255, 0.08);\n  border-radius: 8px;\n  width: 327px;\n  height: 136px;\n  left: 24px;\n  z-index: 1;\n  top: 0;\n  padding: 0;\n}\n\n.circle-p {\n  background-color: #e0e0e0;\n  border: 3px solid #e0e0e0;\n  border-radius: 100%;\n  width: 12px;\n  height: 12px;\n  margin-left: 4px;\n  display: inline-block;\n}\n\n.step .line {\n  top: 30px !important;\n  left: 10px;\n  /*   height: 120px; */\n  height: 100%;\n  position: absolute;\n  border-left: 1px solid #e0e0e0;\n}\n\n.step.completed .circle {\n  visibility: visible;\n  background-color: #b058f8;\n  border-color: #b058f8;\n}\n\n.step.completed .line {\n  border-left: 1px solid #b058f8;\n}\n\n.step.active .circle {\n  visibility: visible;\n  border-color: #b058f8;\n}\n\n.step.empty .circle {\n  visibility: hidden;\n}\n\n.step.empty .line {\n  /*     visibility: hidden; */\n  /*   height: 150%; */\n  top: 0;\n  height: 100%;\n}\n\n.step:last-child .line {\n  border-left: 3px solid white;\n  z-index: -1;\n  /* behind the circle to completely hide */\n}\n\n.content {\n  margin-left: 12px;\n  display: inline-block;\n  padding-bottom: 20px;\n  padding-top: 15px;\n}\n\n.content h3 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 19px;\n  /* identical to box height */\n  color: #000000;\n  margin: 0;\n}\n\n.content p {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  /* Dark Grey */\n  color: #7e7e7e;\n  margin: 0;\n  padding-top: 2px;\n}\n\nion-content {\n  --padding-start: 42px !important;\n  --padding-end: 42px !important;\n  --padding-top: 14px;\n}\n\n.sub-content {\n  display: flex;\n  padding-bottom: 14px;\n  padding-top: 14px;\n}\n\n.sub-content h3 {\n  padding-left: 12px;\n}\n\n.s-item {\n  padding-top: 29px;\n}\n\n.sub-circle-c {\n  background-color: #b268f8;\n  border: 3px solid #b268f8;\n  border-radius: 100%;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  padding: 0;\n  text-align: center;\n}\n\n.sub-circle-c ion-icon {\n  font-size: 12px;\n  color: white;\n  display: inline-flex;\n  padding-bottom: 3px;\n}\n\n.sub-circle-a {\n  margin: 4px;\n  background-color: #7e7e7e;\n  border: 3px solid #7e7e7e;\n  border-radius: 100%;\n  width: 12px;\n  height: 12px;\n  display: inline-block;\n}\n\n.btnblue2 {\n  width: 120px;\n  height: 44px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  text-transform: uppercase;\n  --border-radius: 8px;\n  /* White */\n  color: #ffffff;\n}\n\n.sub-content-d {\n  margin: 0;\n  display: block;\n  padding-left: 45px;\n  padding-top: 4px;\n  padding-bottom: 15px;\n}\n\n.sub-content-p h3 {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  /* identical to box height */\n  color: #000000;\n}\n\n.sub-circle-p {\n  margin: 4px;\n  background-color: #e0e0e0;\n  border: 3px solid #e0e0e0;\n  border-radius: 100%;\n  width: 12px;\n  height: 12px;\n  display: inline-block;\n}\n\n.activecard {\n  position: absolute;\n  background: white;\n  left: 24px;\n  padding: 24px;\n  z-index: 999;\n  box-shadow: 0px 2px 8px rgba(65, 55, 255, 0.08);\n  border-radius: 8px;\n  width: 327px;\n  height: 136px;\n  margin: 0;\n}\n\n.cardheight {\n  height: 168px;\n  padding-top: 12px;\n}\n\n.bluebtn {\n  width: 120px;\n  height: 44px;\n  margin-left: 28px;\n  margin-top: 23px;\n  --border-radius: 8px;\n}\n\nion-icon {\n  zoom: 1;\n}\n\n.backbutton {\n  zoom: 0.6;\n}\n\n.circle-a {\n  margin: 2px 0px 0px 0px;\n  background-color: #7e7e7e;\n  border: 3px solid #7e7e7e;\n  border-radius: 100%;\n  width: 12px;\n  height: 12px;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9jb25maWd1cmVjYXJlYmFyL2NvbmZpZ3VyZWNhcmViYXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25maWdjYXJlL2NvbmZpZ3VyZWNhcmViYXIvY29uZmlndXJlY2FyZWJhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFFQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDREY7O0FESUEsaUJBQUE7O0FBQ0E7RUFDRSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDREY7O0FER0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDREo7O0FES0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNGRjs7QURJQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0RGOztBRElBO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFDQSw4QkFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDRkY7O0FES0E7RUFDRSw4QkFBQTtBQ0ZGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7QUNGRjs7QURLQTtFQUNFLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsNEJBQUE7RUFDQSxXQUFBO0VBQWEseUNBQUE7QUNEZjs7QURJQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFFRCxvQkFBQTtFQUNHLGlCQUFBO0FDRko7O0FESUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxjQUFBO0VBQ0EsU0FBQTtBQ0hKOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBRUEsY0FBQTtFQUVBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURRQTtFQUNFLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRE9BO0VBRUUsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNMRjs7QURNRTtFQUNFLGtCQUFBO0FDSko7O0FEU0E7RUFDRSxpQkFBQTtBQ05GOztBRFFBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRE1FO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDSko7O0FET0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0pGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSx5QkFBQTtFQUNBLG9CQUFBO0VBRUEsVUFBQTtFQUVBLGNBQUE7QUNSRjs7QURVQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDUEY7O0FEVUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFFQSxjQUFBO0FDUko7O0FEV0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ1JGOztBRFVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7QUNQRjs7QURVQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ1BGOztBRFNBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNORjs7QURRQTtFQUNFLE9BQUE7QUNMRjs7QURRQTtFQUNFLFNBQUE7QUNMRjs7QURRQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uZmlnY2FyZS9jb25maWd1cmVjYXJlYmFyL2NvbmZpZ3VyZWNhcmViYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXAge1xuICBwYWRkaW5nOiAwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXG4gIGJhY2tncm91bmQtY29sb3I6IGNyZWFtO1xufVxuXG4udi1zdGVwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgLyogICB2aXNpYmlsaXR5OiB2aXNpYmxlOyAqL1xufVxuXG4vKiByZWd1bGFyIHN0ZXAgKi9cbi5zdGVwIC5jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgLy8gcGFkZGluZy1ib3R0b206IDNweDtcbiAgfVxufVxuLmFkZGJ0bnNlYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSg2NSwgNTUsIDI1NSwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDMyN3B4O1xuICBoZWlnaHQ6IDEzNnB4O1xuICBsZWZ0OiAyNHB4O1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uY2lyY2xlLXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zdGVwIC5saW5lIHtcbiAgdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDEwcHg7XG4gIC8qICAgaGVpZ2h0OiAxMjBweDsgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuXG4uc3RlcC5jb21wbGV0ZWQgLmNpcmNsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDU4Zjg7XG4gIGJvcmRlci1jb2xvcjogI2IwNThmODtcbn1cblxuLnN0ZXAuY29tcGxldGVkIC5saW5lIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYjA1OGY4O1xufVxuXG4uc3RlcC5hY3RpdmUgLmNpcmNsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJvcmRlci1jb2xvcjogI2IwNThmODtcbn1cblxuLnN0ZXAuZW1wdHkgLmNpcmNsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnN0ZXAuZW1wdHkgLmxpbmUge1xuICAvKiAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xuICAvKiAgIGhlaWdodDogMTUwJTsgKi9cbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zdGVwOmxhc3QtY2hpbGQgLmxpbmUge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xuICB6LWluZGV4OiAtMTsgLyogYmVoaW5kIHRoZSBjaXJjbGUgdG8gY29tcGxldGVseSBoaWRlICovXG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuXG4gIGgzIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG5cbiAgICAvKiBEYXJrIEdyZXkgKi9cblxuICAgIGNvbG9yOiAjN2U3ZTdlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xuICB9XG59XG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogNDJweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctZW5kOiA0MnB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDE0cHg7XG59XG4uc3ViLWNvbnRlbnQge1xuICAvLyBwYWRkaW5nLWxlZnQ6IDM0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgaDMge1xuICAgIHBhZGRpbmctbGVmdDogMTJweDtcblxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAyOXB4O1xuICB9XG59XG4ucy1pdGVtIHtcbiAgcGFkZGluZy10b3A6IDI5cHg7XG59XG4uc3ViLWNpcmNsZS1jIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyNjhmODtcbiAgYm9yZGVyOiAzcHggc29saWQgI2IyNjhmODtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIH1cbn1cbi5zdWItY2lyY2xlLWEge1xuICBtYXJnaW46IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlN2U3ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzdlN2U3ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnN0ZXBjb250ZW50cyB7XG59XG4uYnRuYmx1ZTIge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogNDRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gIC8qIFdoaXRlICovXG5cbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uc3ViLWNvbnRlbnQtZCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctbGVmdDogNDVweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uc3ViLWNvbnRlbnQtcCB7XG4gIGgzIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cblxuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG59XG4uc3ViLWNpcmNsZS1wIHtcbiAgbWFyZ2luOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hY3RpdmVjYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbGVmdDogMjRweDtcbiAgcGFkZGluZzogMjRweDtcbiAgei1pbmRleDogOTk5O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDY1LCA1NSwgMjU1LCAwLjA4KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogMzI3cHg7XG4gIGhlaWdodDogMTM2cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNhcmRoZWlnaHQge1xuICBoZWlnaHQ6IDE2OHB4O1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cbi5ibHVlYnRuIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xuICBtYXJnaW4tdG9wOiAyM3B4O1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbn1cbmlvbi1pY29ue1xuICB6b29tOjE7XG59XG5cbi5iYWNrYnV0dG9ue1xuICB6b29tOiAwLjY7XG59XG5cbi5jaXJjbGUtYXtcbiAgbWFyZ2luOiAycHggMHB4IDBweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZTdlN2U7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM3ZTdlN2U7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iLCIuc3RlcCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmVhbTtcbn1cblxuLnYtc3RlcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIC8qICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgKi9cbn1cblxuLyogcmVndWxhciBzdGVwICovXG4uc3RlcCAuY2lyY2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnN0ZXAgLmNpcmNsZSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLmFkZGJ0bnNlYyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA4cHggcmdiYSg2NSwgNTUsIDI1NSwgMC4wOCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDMyN3B4O1xuICBoZWlnaHQ6IDEzNnB4O1xuICBsZWZ0OiAyNHB4O1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jaXJjbGUtcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnN0ZXAgLmxpbmUge1xuICB0b3A6IDMwcHggIWltcG9ydGFudDtcbiAgbGVmdDogMTBweDtcbiAgLyogICBoZWlnaHQ6IDEyMHB4OyAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuXG4uc3RlcC5jb21wbGV0ZWQgLmNpcmNsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDU4Zjg7XG4gIGJvcmRlci1jb2xvcjogI2IwNThmODtcbn1cblxuLnN0ZXAuY29tcGxldGVkIC5saW5lIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYjA1OGY4O1xufVxuXG4uc3RlcC5hY3RpdmUgLmNpcmNsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJvcmRlci1jb2xvcjogI2IwNThmODtcbn1cblxuLnN0ZXAuZW1wdHkgLmNpcmNsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnN0ZXAuZW1wdHkgLmxpbmUge1xuICAvKiAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyAqL1xuICAvKiAgIGhlaWdodDogMTUwJTsgKi9cbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zdGVwOmxhc3QtY2hpbGQgLmxpbmUge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xuICB6LWluZGV4OiAtMTtcbiAgLyogYmVoaW5kIHRoZSBjaXJjbGUgdG8gY29tcGxldGVseSBoaWRlICovXG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuLmNvbnRlbnQgaDMge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRlbnQgcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgLyogRGFyayBHcmV5ICovXG4gIGNvbG9yOiAjN2U3ZTdlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0MnB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1lbmQ6IDQycHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogMTRweDtcbn1cblxuLnN1Yi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xufVxuLnN1Yi1jb250ZW50IGgzIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xufVxuXG4ucy1pdGVtIHtcbiAgcGFkZGluZy10b3A6IDI5cHg7XG59XG5cbi5zdWItY2lyY2xlLWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjI2OGY4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjYjI2OGY4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdWItY2lyY2xlLWMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG59XG5cbi5zdWItY2lyY2xlLWEge1xuICBtYXJnaW46IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlN2U3ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzdlN2U3ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uYnRuYmx1ZTIge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogNDRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgLyogV2hpdGUgKi9cbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zdWItY29udGVudC1kIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLnN1Yi1jb250ZW50LXAgaDMge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uc3ViLWNpcmNsZS1wIHtcbiAgbWFyZ2luOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmFjdGl2ZWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBsZWZ0OiAyNHB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICB6LWluZGV4OiA5OTk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoNjUsIDU1LCAyNTUsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAzMjdweDtcbiAgaGVpZ2h0OiAxMzZweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2FyZGhlaWdodCB7XG4gIGhlaWdodDogMTY4cHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG4uYmx1ZWJ0biB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tbGVmdDogMjhweDtcbiAgbWFyZ2luLXRvcDogMjNweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgem9vbTogMTtcbn1cblxuLmJhY2tidXR0b24ge1xuICB6b29tOiAwLjY7XG59XG5cbi5jaXJjbGUtYSB7XG4gIG1hcmdpbjogMnB4IDBweCAwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U3ZTdlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjN2U3ZTdlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/configcare/configurecarebar/configurecarebar.page.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/configcare/configurecarebar/configurecarebar.page.ts ***!
    \****************************************************************************/

  /*! exports provided: ConfigurecarebarPage */

  /***/
  function srcAppPagesConfigcareConfigurecarebarConfigurecarebarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurecarebarPage", function () {
      return ConfigurecarebarPage;
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

    var ConfigurecarebarPage = /*#__PURE__*/function () {
      function ConfigurecarebarPage(navCtr) {
        _classCallCheck(this, ConfigurecarebarPage);

        this.navCtr = navCtr;
        this.stepperData = [{
          name: "Bathing",
          desc: "Scheduled Time: 6 am",
          desc2: "Repeat: Sun, Tue, Thu, Sat",
          open: false,
          status: "completed",
          pathUrl: "bathing"
        }, {
          name: "Medication",
          desc: "Scheduled Time: 6 am",
          desc2: "Repeat: Sun, Tue, Thu, Sat",
          open: false,
          status: "completed",
          pathUrl: "addmedicine"
        }, {
          name: "Meals",
          desc: "Scheduled Time: 6 am",
          desc2: "Repeat: Sun, Tue, Thu, Sat",
          open: false,
          status: "completed",
          pathUrl: "addmeals"
        }, {
          name: "Beauty & Grooming",
          open: true,
          status: "active",
          pathUrl: "addbeauty"
        }, {
          name: "Check Vitals",
          open: false,
          status: "pending",
          pathUrl: "addvitals"
        }, {
          name: "Excercise / Physical Therapy",
          open: false,
          status: "pending",
          pathUrl: "addexercise"
        }, {
          name: "Shopping List",
          open: false,
          status: "pending",
          pathUrl: "assignshoppinglist"
        }, {
          name: "Other Tasks",
          open: false,
          status: "pending",
          pathUrl: "addothertasks"
        }];
      }

      _createClass(ConfigurecarebarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeStepper",
        value: function changeStepper(item) {
          console.log("+");
          this.stepperData.forEach(function (element) {
            element.open = false;
            element.status = "pending";

            if (element.name == item.name) {
              element.status = "active";
              element.open = true;
            }
          });
        }
      }, {
        key: "gotoUrl",
        value: function gotoUrl(path) {
          this.navCtr.navigateForward(["/configcare/" + path]);
        }
      }]);

      return ConfigurecarebarPage;
    }();

    ConfigurecarebarPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    ConfigurecarebarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-configurecarebar",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./configurecarebar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configcare/configurecarebar/configurecarebar.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./configurecarebar.page.scss */
      "./src/app/pages/configcare/configurecarebar/configurecarebar.page.scss"))["default"]]
    })], ConfigurecarebarPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-configcare-configurecarebar-configurecarebar-module-es5.js.map