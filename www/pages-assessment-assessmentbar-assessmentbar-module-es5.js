function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-assessmentbar-assessmentbar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/assessmentbar/assessmentbar.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/assessmentbar/assessmentbar.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAssessmentAssessmentbarAssessmentbarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n    <ion-toolbar class=\"headtoolbar\">\n        <ion-row>\n            <ion-col size=\"1.7\">\n                <ion-toolbar>\n                    <ion-buttons slot=\"start\">\n                        <!-- <ion-back-button style=\"float:left\" mode=\"md\" color=\"mdblack\" icon=\"chevron-back-outline\" defaultHref=\"admin-sign-in\"></ion-back-button> -->\n\n                        <ion-button (click)=\"back()\">\n                            <ion-icon class=\"backbutton\" slot=\"icon-only\" src=\"assets/back.svg\"></ion-icon>\n                        </ion-button>\n\n                    </ion-buttons>\n                </ion-toolbar>\n            </ion-col>\n            <ion-col size=\"8.3\">\n                <div>\n                    <ion-text class=\"cap\" color=\"mdblack\" position=\"floating\" id=\"titletag\">{{careCircleName}}'s Assessment</ion-text>\n                </div>\n            </ion-col>\n            <ion-col size=\"2\">\n                <div>\n                    <ion-img (click)=\"presentPopover($event)\" src=\"../assets/MariposaIcons/Kebab menu.svg\" style=\"color: black; float: right;\"></ion-img>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <!-- <div style=\"display:inline-block;text-align: center;box-sizing: border-box;margin-top:2px;margin-left:24px ;margin-right:16px;\">\n        <ion-img src=\"../assets/MariposaIcons/Back arrow.svg\" style=\"color: black;float:right;\" ></ion-img>\n      </div>\n      <div style=\"display:inline-block;text-align: center;box-sizing: border-box;margin-top:43px;\">\n        <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">David's Assessment</ion-text>\n      </div>\n      <div style=\"display:inline-block;text-align: center;box-sizing: border-box;\">\n        <ion-img src=\"../assets/MariposaIcons/Kebab menu.svg\" style=\"color: black;float:right;\" ></ion-img>\n\n      </div> -->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <!-- <ion-grid class=\"box\">\n\n  \n\n  <div class=\"wrapper\">\n    <ul class=\"StepProgress\">\n      \n      <li class=\"StepProgress-item is-done\">\n        <strong>Care needs</strong>\n        <ion-text style=\"font-size:11px;\" color=\"mdgrey\">Companionship,Exercise,shopping..</ion-text>\n        <ion-card [hidden]='true' style=\"border: 1px; ;height: 136px;width: 327px;border-radius: 8px;bottom:20px;right:71px;\">\n          <ion-button>Add</ion-button>\n          </ion-card> \n      </li>\n      \n      \n      \n      <li class=\"StepProgress-item is-done\">\n        <strong>Personal Information</strong>\n          \n          <ion-card [hidden]='true' style=\"border: 1px; ;height: 136px;width: 327px;border-radius: 8px;bottom:20px;right:71px;\">\n          <ion-button>Add</ion-button>\n          </ion-card> \n        \n      </li>\n      \n      <li class=\"StepProgress-item current\"><strong>Medical & Psychiatric Conditions</strong>\n        <ion-card  [hidden]=\"false\" style=\"border: 1px; ;height: 136px;width: 327px;border-radius: 8px;bottom:20px;right:71px;\">\n          <ion-button>Add</ion-button>\n          </ion-card> \n      </li>\n      \n      <li class=\"StepProgress-item\">\n        <strong>Meals</strong>\n        <ion-card [hidden]='true' style=\"border: 1px; ;height: 136px;width: 327px;border-radius: 8px;bottom:20px;right:71px;\">\n          <ion-button>Add</ion-button>\n          </ion-card> </li>\n      \n      <li class=\"StepProgress-item\">\n        <strong>Sleep Assistance</strong>\n        <ion-card [hidden]='true' style=\"border: 1px; ;height: 136px;width: 327px;border-radius: 8px;bottom:20px;right:71px;\">\n          <ion-button>Add</ion-button>\n          </ion-card> \n      </li>\n      \n      <li class=\"StepProgress-item\">\n        <strong>Home & Safety</strong>\n        <ion-card [hidden]='true' style=\"border: 1px; ;height: 136px;width: 327px;border-radius: 8px;bottom:20px;right:71px;\">\n          <ion-button>Add</ion-button>\n          </ion-card> \n      </li>\n      \n      <li class=\"StepProgress-item\">\n        <strong>Motivations</strong>\n        <ion-card [hidden]='true' style=\"border: 1px; ;height: 136px;width: 327px;border-radius: 8px;bottom:20px;right:71px;\">\n          <ion-button>Add</ion-button>\n          </ion-card> \n      </li>\n\n    </ul>\n    </div>\n  </ion-grid> -->\n\n    <div class=\"container\">\n        <!-- completed -->\n        <ng-container *ngFor=\"let stepItem of stepperData\">\n            <div class=\"step\" [class.completed]=\"stepItem.status== 'completed'\" [class.cardheight]=\"(stepItem.children.length==0 && stepItem.status=='active') \">\n                <div class=\"v-stepper\">\n                    <div [ngClass]=\"[stepItem.status== 'completed' ? 'circle' : 'circle-p']\">\n                        <ion-icon style=\"margin-top:2px;\" *ngIf=\"stepItem.status=='completed'\" src=\"assets/Group777.svg\"></ion-icon>\n                    </div>\n                    <div class=\"line\"></div>\n                </div>\n                <div class=\"content\" [class.activecard]=\"stepItem.status=='active'\">\n                    <div *ngIf=\"stepItem.status=='active'&&stepItem.children.length==0\" style=\"display: flex;\">\n                        <div class=\"circle-a\" style=\"margin: 0px; padding: 0;\"></div>\n                        <h3 style=\"padding-left: 16px;\">{{stepItem.name}}</h3>\n                    </div>\n\n                    <ion-button *ngIf=\"stepItem.open && stepItem.children.length==0\" class=\"bluebtn\" (click)=\"gotoUrl(stepItem.pathUrl)\">\n                        <span *ngIf=\"stepItem.status=='completed'\">EDIT</span><span *ngIf=\"stepItem.status=='active'\">ADD</span>\n                    </ion-button>\n                    <h3 *ngIf=\"stepItem.status!='active'\">\n                        {{stepItem.name}}\n                    </h3>\n                    <p *ngIf=\"stepItem.status!='active'\">{{stepItem.desc}}</p>\n                </div>\n            </div>\n            <ng-container *ngIf=\"stepItem.open\">\n                <ng-container *ngFor=\"let childItem of stepItem.children\">\n                    <div [ngClass]=\"[childItem.status =='completed'? 'step completed' : 'step empty']\">\n                        <div class=\"v-stepper\">\n                            <div class=\"circle\" style=\"visibility: hidden;\" [class.hidedot]=\"childItem.active\"></div>\n                            <div class=\"line\"></div>\n                        </div>\n\n                        <div class=\"content sub-content\" [ngClass]=\"[childItem.status=='pending' ? 'sub-content-p':'' ]\">\n                            <div [ngClass]=\"[childItem.status=='completed' ? 'sub-circle-c' : '' ,childItem.status=='pending'?'sub-circle-p':'',(childItem.status=='active')?'sub-circle-a':'']\">\n                                <ion-icon style=\"margin-top: 2px;\" src=\"assets/Group777.svg\"></ion-icon>\n                            </div>\n\n                            <h3 [ngClass]=\"childItem.status=='pending'?'p-sub':''\">\n                                {{childItem.name}}\n                            </h3>\n                        </div>\n                    </div>\n                    <ng-container *ngIf=\"childItem.open\">\n                        <div class=\"step empty\">\n                            <div class=\"v-stepper\">\n                                <div class=\"circle\"></div>\n                                <div class=\"line\"></div>\n                            </div>\n                            <div class=\"sub-content-d\">\n                                <ion-button class=\"btnblue2\" (click)=\"gotoUrl(childItem.pathUrl)\">\n                                    <span *ngIf=\"childItem.status=='completed'\">EDIT</span><span *ngIf=\"childItem.status=='active'\">ADD</span></ion-button>\n                            </div>\n                        </div>\n                    </ng-container>\n                </ng-container>\n            </ng-container>\n        </ng-container>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/assessmentbar/deleteassesmentmodal/deleteassesmentmodal.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/assessmentbar/deleteassesmentmodal/deleteassesmentmodal.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAssessmentAssessmentbarDeleteassesmentmodalDeleteassesmentmodalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-card>\n  <ion-grid fixed class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col size=\"10\">\n        <h3 class=\"mdheading\">Delete Assessment</h3>\n      </ion-col>\n      <ion-col class=\"closebtn\" size=\"2\">\n        <ion-icon (click)=\"closemodal()\" name=\"close-outline\"></ion-icon>\n        <!-- <img src=\"\" alt=\"\"> -->\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"infocol\">\n        <p class=\"confirmqn\">\n          Are you sure you want to delete “David’s assessment”?\n        </p>\n        <p class=\"deleteinfo\">\n          All progress made upto this point will be deleted immediately. You\n          can’t undo this action.\n        </p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"btnsrow\">\n      <ion-col size=\"6\">\n        <ion-button fill=\"clear\" class=\"dltbtn\">DELETE</ion-button>\n      </ion-col>\n\n      <ion-col size=\"6\">\n        <ion-button (click)=\"closemodal()\" class=\"cancelbtn\">CANCEL</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-card>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/assessmentbar/popover/popover.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/assessmentbar/popover/popover.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAssessmentAssessmentbarPopoverPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-list lines=\"none\"> -->\n \n  <ion-item (click)=\"delete()\" detail=\"false\" lines=\"none\" button>Delete Assessment</ion-item>\n  \n  <!-- <ion-item lines=\"none\" detail=\"false\" button onClick=\"dismissPopover()\">Close</ion-item> -->\n<!-- </ion-list> -->";
    /***/
  },

  /***/
  "./src/app/pages/assessment/assessmentbar/assessmentbar-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/assessment/assessmentbar/assessmentbar-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: AssessmentbarPageRoutingModule */

  /***/
  function srcAppPagesAssessmentAssessmentbarAssessmentbarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssessmentbarPageRoutingModule", function () {
      return AssessmentbarPageRoutingModule;
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


    var _assessmentbar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./assessmentbar.page */
    "./src/app/pages/assessment/assessmentbar/assessmentbar.page.ts");

    var routes = [{
      path: '',
      component: _assessmentbar_page__WEBPACK_IMPORTED_MODULE_3__["AssessmentbarPage"]
    }];

    var AssessmentbarPageRoutingModule = function AssessmentbarPageRoutingModule() {
      _classCallCheck(this, AssessmentbarPageRoutingModule);
    };

    AssessmentbarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AssessmentbarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/assessmentbar/assessmentbar.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/assessment/assessmentbar/assessmentbar.module.ts ***!
    \************************************************************************/

  /*! exports provided: AssessmentbarPageModule */

  /***/
  function srcAppPagesAssessmentAssessmentbarAssessmentbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssessmentbarPageModule", function () {
      return AssessmentbarPageModule;
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


    var _assessmentbar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./assessmentbar-routing.module */
    "./src/app/pages/assessment/assessmentbar/assessmentbar-routing.module.ts");
    /* harmony import */


    var _assessmentbar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./assessmentbar.page */
    "./src/app/pages/assessment/assessmentbar/assessmentbar.page.ts");
    /* harmony import */


    var _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./popover/popover.component */
    "./src/app/pages/assessment/assessmentbar/popover/popover.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var AssessmentbarPageModule = function AssessmentbarPageModule() {
      _classCallCheck(this, AssessmentbarPageModule);
    };

    AssessmentbarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _assessmentbar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssessmentbarPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
      declarations: [_assessmentbar_page__WEBPACK_IMPORTED_MODULE_6__["AssessmentbarPage"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_7__["PopoverComponent"]]
    })], AssessmentbarPageModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/assessmentbar/assessmentbar.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/assessment/assessmentbar/assessmentbar.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAssessmentAssessmentbarAssessmentbarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".step {\n  padding: 0px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  background-color: cream;\n}\n\n.v-stepper {\n  position: relative;\n  padding-top: 13px;\n  /*   visibility: visible; */\n}\n\n/* regular step */\n\n.step .circle {\n  background-color: white;\n  border: 3px solid gray;\n  border-radius: 100%;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  padding: 0;\n  text-align: center;\n}\n\n.step .circle ion-icon {\n  font-size: 12px;\n  color: white;\n  display: inline-flex;\n  padding-bottom: 5px;\n}\n\n.circle-p {\n  background-color: #e0e0e0;\n  border: 3px solid #e0e0e0;\n  border-radius: 100%;\n  width: 12px;\n  height: 12px;\n  margin-left: 4px;\n  display: inline-block;\n}\n\n.step .line {\n  top: 28px;\n  left: 10px;\n  /*   height: 120px; */\n  height: 100%;\n  position: absolute;\n  border-left: 1px solid #e0e0e0;\n}\n\n.step.completed .circle {\n  visibility: visible;\n  background-color: #b058f8;\n  border-color: #b058f8;\n}\n\n.step.completed .line {\n  border-left: 1px solid #b058f8;\n}\n\n.step.active .circle {\n  visibility: visible;\n  border-color: #b058f8;\n}\n\n.step.empty .circle {\n  visibility: hidden;\n}\n\n.step.empty .line {\n  /*     visibility: hidden; */\n  /*   height: 150%; */\n  height: 100%;\n}\n\n.step:last-child .line {\n  border-left: 3px solid white;\n  z-index: -1;\n  /* behind the circle to completely hide */\n}\n\n.content {\n  margin-left: 12px;\n  display: inline-block;\n  padding-bottom: 13px;\n  padding-top: 13px;\n}\n\n.content h3 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 19px;\n  /* identical to box height */\n  color: #000000;\n  margin: 0;\n}\n\n.content p {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  /* Dark Grey */\n  color: #7e7e7e;\n  margin: 0;\n  padding-top: 5px;\n}\n\nion-content {\n  --padding-start: 42px !important;\n  --padding-end: 42px !important;\n  --padding-top: 34px;\n}\n\n.sub-content {\n  display: flex;\n  padding-bottom: 14px;\n  padding-top: 14px;\n}\n\n.sub-content h3 {\n  padding-left: 12px;\n}\n\n.s-item {\n  padding-top: 29px;\n}\n\n.sub-circle-c {\n  background-color: #b268f8;\n  border: 3px solid #b268f8;\n  border-radius: 100%;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  padding: 0;\n  text-align: center;\n}\n\n.sub-circle-c ion-icon {\n  font-size: 12px;\n  color: white;\n  display: inline-flex;\n  padding-bottom: 5px;\n}\n\n.sub-circle-a {\n  margin: 4px;\n  background-color: #7e7e7e;\n  border: 3px solid #7e7e7e;\n  border-radius: 100%;\n  width: 12px;\n  height: 12px;\n  display: inline-block;\n  padding-top: 5px;\n}\n\n.btnblue2 {\n  width: 120px;\n  height: 44px;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 17px;\n  /* identical to box height */\n  text-transform: uppercase;\n  --border-radius: 8px;\n  /* White */\n  color: #ffffff;\n}\n\n.sub-content-d {\n  margin: 0;\n  display: block;\n  padding-left: 45px;\n  padding-top: 4px;\n  padding-bottom: 15px;\n}\n\n.sub-content-p h3 {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  /* identical to box height */\n  color: #000000;\n}\n\n.sub-circle-p {\n  margin: 4px;\n  background-color: #e0e0e0;\n  border: 3px solid #e0e0e0;\n  border-radius: 100%;\n  width: 12px;\n  height: 12px;\n  display: inline-block;\n  padding-top: 5px;\n}\n\n.hidedot {\n  visibility: hidden !important;\n}\n\n.activecard {\n  position: absolute;\n  background: white;\n  left: 24px;\n  padding: 24px;\n  z-index: 999;\n  box-shadow: 0px 2px 8px rgba(65, 55, 255, 0.08);\n  border-radius: 8px;\n  width: 327px;\n  height: 136px;\n  margin: 0;\n}\n\n.cardheight {\n  height: 168px;\n  padding-top: 12px;\n}\n\n.bluebtn {\n  width: 120px;\n  height: 44px;\n  margin-left: 28px;\n  margin-top: 23px;\n  --border-radius: 8px;\n}\n\nion-icon {\n  zoom: 1;\n}\n\n.backbutton {\n  zoom: 0.6;\n}\n\n.circle-a {\n  margin: 2px 0px 0px 0px;\n  background-color: #7e7e7e;\n  border: 3px solid #7e7e7e;\n  border-radius: 100%;\n  width: 12px;\n  height: 12px;\n  display: inline-block;\n}\n\n.headtoolbar {\n  padding-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9hc3Nlc3NtZW50YmFyL2Fzc2Vzc21lbnRiYXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hc3Nlc3NtZW50L2Fzc2Vzc21lbnRiYXIvYXNzZXNzbWVudGJhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEhBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUN6SEo7O0FENEhBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDekhKOztBRDZIQSxpQkFBQTs7QUFFQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUMzSEo7O0FENEhJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDMUhSOztBRDhIQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQzNISjs7QUQ4SEE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUMzSEo7O0FEOEhBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FDM0hKOztBRDhIQTtFQUNJLDhCQUFBO0FDM0hKOztBRDhIQTtFQUNJLG1CQUFBO0VBQ0EscUJBQUE7QUMzSEo7O0FEOEhBO0VBQ0ksa0JBQUE7QUMzSEo7O0FEOEhBO0VBQ0ksNEJBQUE7RUFDQSxvQkFBQTtFQUVBLFlBQUE7QUM1SEo7O0FEK0hBO0VBQ0ksNEJBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUM1SEo7O0FEK0hBO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUM1SEo7O0FENkhJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUMzSFI7O0FENkhJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUMzSFI7O0FEK0hBO0VBQ0ksZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDNUhKOztBRCtIQTtFQUVJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FDN0hKOztBRDhISTtFQUNJLGtCQUFBO0FDNUhSOztBRGlJQTtFQUNJLGlCQUFBO0FDOUhKOztBRGlJQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUM5SEo7O0FEK0hJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDN0hSOztBRGlJQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUM5SEo7O0FEaUlBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUM5SEo7O0FEaUlBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUM5SEo7O0FEa0lJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQy9IUjs7QURtSUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDaElKOztBRG1JQTtFQUNJLDZCQUFBO0FDaElKOztBRG1JQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FDaElKOztBRG1JQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQ2hJSjs7QURtSUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ2hJSjs7QURtSUE7RUFDSSxPQUFBO0FDaElKOztBRG1JQTtFQUNJLFNBQUE7QUNoSUo7O0FEbUlBO0VBQ0ksdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDaElKOztBRG1JQTtFQUNJLGtCQUFBO0FDaElKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9hc3Nlc3NtZW50YmFyL2Fzc2Vzc21lbnRiYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLndyYXBwZXIge1xuLy8gICB3aWR0aDogMzMwcHg7XG4vLyAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbi8vICAgZm9udC1zaXplOiAxNHB4O1xuLy8gfVxuLy8gLlN0ZXBQcm9ncmVzcyB7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuLy8gICBsaXN0LXN0eWxlOiBub25lO1xuLy8gICBoZWlnaHQ6IDUyMXB4O1xuLy8gICAmOjpiZWZvcmUgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vYm9yZGVyIGJhc2UgYmVmb3JlXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgIGNvbnRlbnQ6ICcnO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0b3A6IDA7XG4vLyAgICAgbGVmdDogMTVweDtcbi8vICAgICB3aWR0aDogMTBweDtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRTBFMEUwO1xuLy8gICB9XG4vLyAgICYtaXRlbSB7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIGNvdW50ZXItaW5jcmVtZW50OiBsaXN0O1xuLy8gICAgICY6bm90KDpsYXN0LWNoaWxkKSB7ICAgICAgICAgICAgICAgICAgLy9wYWRkaW5nIGJldHdlZW4gZWxlbWVudHNcbi8vICAgICAgIHBhZGRpbmctYm90dG9tOiA0N3B4O1xuLy8gICAgIH1cbi8vICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgICAgY29udGVudDogJyc7XG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICBsZWZ0OiAtMzBweDtcbi8vICAgICAgIGhlaWdodDogMTAwJTtcbi8vICAgICAgIHdpZHRoOiAxMHB4O1xuLy8gICAgIH1cbi8vICAgICAmOjphZnRlciB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9QZW5kaW5nXG4vLyAgICAgICBjb250ZW50OlwiXCI7XG4vLyAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICB0b3A6IDAycHg7XG4vLyAgICAgICBsZWZ0OiAtMzZweDtcbi8vICAgICAgIHdpZHRoOiA5cHg7XG4vLyAgICAgICBoZWlnaHQ6IDlweDtcbi8vICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNFMEUwRTA7XG4vLyAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTBFMEUwO1xuLy8gICAgIH1cbi8vICAgICAmLmlzLWRvbmUge1xuLy8gICAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjQjA1OEY4O1xuLy8gICAgICAgfVxuLy8gICAgICAgJjo6YWZ0ZXIge1xuLy8gICAgICAgICBjb250ZW50OlwiXCI7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgICAgICAgY29sb3I6ICNGRkY7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0IwNThGODtcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0IwNThGODtcbi8vICAgICAgICAgem9vbToxLjM7XG4vLyAgICAgICAgIGxlZnQ6LTI5cHg7XG4vLyAgICAgICAgIHRvcDotMXB4O1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgICAmLmN1cnJlbnQgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXIgYWZ0ZXIgY3VycmVudCBwcm9jZXNzXG4vLyAgICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNFMEUwRTA7XG4vLyAgICAgICB9XG4vLyAgICAgICAmOjphZnRlciB7ICAgICAgICAgICAgICAgIC8vb25nb2luZyBkb3Rcbi8vICAgICAgICAgY29udGVudDogJyc7XG4vLyAgICAgICAgIHBhZGRpbmctdG9wOiAxcHg7XG4vLyAgICAgICAgIHdpZHRoOiAxMHB4O1xuLy8gICAgICAgICBoZWlnaHQ6IDlweDtcbi8vICAgICAgICAgdG9wOiAycHg7XG4vLyAgICAgICAgIGxlZnQ6IC0zNnB4O1xuLy8gICAgICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgICAgY29sb3I6IGdyZWVuO1xuLy8gICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjN0U3RTdFOztcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdFN0U3RTs7XG4vLyAgICAgICAgIHotaW5kZXg6MjAgO1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfVxuLy8gICBzdHJvbmcge1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgICBsaW5lLWhlaWdodDogMTlweDtcbi8vICAgfVxuLy8gfVxuLy8gaW9uLWJ1dHRvbntcbi8vICAgaGVpZ2h0OiAyMXB4O1xuLy8gICB3aWR0aDogNjFweDtcbi8vICAgbWFyZ2luLXRvcDogNDBweDtcbi8vIH1cbi8vIC5jYXJke1xuLy8gICB6LWluZGV4OiA5OTk5O1xuLy8gfVxuLy8gaW9uLWNhcmR7XG4vLyB9XG4vLyBpb24tZ3JpZHtcbi8vICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuLy8gICBwYWRkaW5nLXRvcDogMjBweDtcbi8vIH1cbi8vIC5ib3h7XG4vLyAgIHotaW5kZXg6IC0xO1xuLy8gfVxuLy8gLlN0ZXBQcm9ncmVzcy1pdGVtLmN1cnJlbnR7XG4vLyAgIHN0cm9uZ3tcbi8vICAgICB6LWluZGV4OiA0MDtcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIH1cbi8vICAgaGVpZ2h0OjE1MHB4O1xuLy8gICBpb24tY2FyZHtcbi8vICAgfVxuLy8gfVxuLy8gLlN0ZXBQcm9ncmVzcy1pdGVtLmlzLWRvbmV7XG4vLyB9XG4vLyBpb24tYnV0dG9ue1xuLy8gICBtYXJnaW4tdG9wOiA2OHB4O1xuLy8gICBtYXJnaW4tbGVmdDo2MHB4O1xuLy8gICB3aWR0aDogMTIwcHg7XG4vLyAgIGhlaWdodDogNDRweDtcbi8vIH1cbi5zdGVwIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjcmVhbTtcbn1cblxuLnYtc3RlcHBlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctdG9wOiAxM3B4O1xuICAgIC8qICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgKi9cbn1cblxuXG4vKiByZWd1bGFyIHN0ZXAgKi9cblxuLnN0ZXAgLmNpcmNsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAzcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxufVxuXG4uY2lyY2xlLXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgYm9yZGVyOiAzcHggc29saWQgI2UwZTBlMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnN0ZXAgLmxpbmUge1xuICAgIHRvcDogMjhweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIC8qICAgaGVpZ2h0OiAxMjBweDsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2UwZTBlMDtcbn1cblxuLnN0ZXAuY29tcGxldGVkIC5jaXJjbGUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IwNThmODtcbiAgICBib3JkZXItY29sb3I6ICNiMDU4Zjg7XG59XG5cbi5zdGVwLmNvbXBsZXRlZCAubGluZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjYjA1OGY4O1xufVxuXG4uc3RlcC5hY3RpdmUgLmNpcmNsZSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBib3JkZXItY29sb3I6ICNiMDU4Zjg7XG59XG5cbi5zdGVwLmVtcHR5IC5jaXJjbGUge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLnN0ZXAuZW1wdHkgLmxpbmUge1xuICAgIC8qICAgICB2aXNpYmlsaXR5OiBoaWRkZW47ICovXG4gICAgLyogICBoZWlnaHQ6IDE1MCU7ICovXG4gICAgLy8gdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnN0ZXA6bGFzdC1jaGlsZCAubGluZSB7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICAvKiBiZWhpbmQgdGhlIGNpcmNsZSB0byBjb21wbGV0ZWx5IGhpZGUgKi9cbn1cblxuLmNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICBwYWRkaW5nLXRvcDogMTNweDtcbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgICAgIC8qIERhcmsgR3JleSAqL1xuICAgICAgICBjb2xvcjogIzdlN2U3ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1zdGFydDogNDJweCAhaW1wb3J0YW50O1xuICAgIC0tcGFkZGluZy1lbmQ6IDQycHggIWltcG9ydGFudDtcbiAgICAtLXBhZGRpbmctdG9wOiAzNHB4O1xufVxuXG4uc3ViLWNvbnRlbnQge1xuICAgIC8vIHBhZGRpbmctbGVmdDogMzRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNHB4O1xuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xuICAgIGgzIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogMjlweDtcbiAgICB9XG59XG5cbi5zLWl0ZW0ge1xuICAgIHBhZGRpbmctdG9wOiAyOXB4O1xufVxuXG4uc3ViLWNpcmNsZS1jIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjI2OGY4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICNiMjY4Zjg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cbn1cblxuLnN1Yi1jaXJjbGUtYSB7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdlN2U3ZTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjN2U3ZTdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uYnRuYmx1ZTIge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAvKiBXaGl0ZSAqL1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc3ViLWNvbnRlbnQtZCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogNDVweDtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4uc3ViLWNvbnRlbnQtcCB7XG4gICAgaDMge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gICAgICAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbn1cblxuLnN1Yi1jaXJjbGUtcCB7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjZTBlMGUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uaGlkZWRvdCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5hY3RpdmVjYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgbGVmdDogMjRweDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDhweCByZ2JhKDY1LCA1NSwgMjU1LCAwLjA4KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDMyN3B4O1xuICAgIGhlaWdodDogMTM2cHg7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY2FyZGhlaWdodCB7XG4gICAgaGVpZ2h0OiAxNjhweDtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLmJsdWVidG4ge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI4cHg7XG4gICAgbWFyZ2luLXRvcDogMjNweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuaW9uLWljb24ge1xuICAgIHpvb206IDE7XG59XG5cbi5iYWNrYnV0dG9uIHtcbiAgICB6b29tOiAwLjY7XG59XG5cbi5jaXJjbGUtYSB7XG4gICAgbWFyZ2luOiAycHggMHB4IDBweCAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdlN2U3ZTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjN2U3ZTdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmhlYWR0b29sYmFye1xuICAgIHBhZGRpbmctbGVmdCA6IDEycHggO1xufSIsIi5zdGVwIHtcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGNyZWFtO1xufVxuXG4udi1zdGVwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMTNweDtcbiAgLyogICB2aXNpYmlsaXR5OiB2aXNpYmxlOyAqL1xufVxuXG4vKiByZWd1bGFyIHN0ZXAgKi9cbi5zdGVwIC5jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3RlcCAuY2lyY2xlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY2lyY2xlLXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBib3JkZXI6IDNweCBzb2xpZCAjZTBlMGUwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zdGVwIC5saW5lIHtcbiAgdG9wOiAyOHB4O1xuICBsZWZ0OiAxMHB4O1xuICAvKiAgIGhlaWdodDogMTIwcHg7ICovXG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlMGUwZTA7XG59XG5cbi5zdGVwLmNvbXBsZXRlZCAuY2lyY2xlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwNThmODtcbiAgYm9yZGVyLWNvbG9yOiAjYjA1OGY4O1xufVxuXG4uc3RlcC5jb21wbGV0ZWQgLmxpbmUge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiMDU4Zjg7XG59XG5cbi5zdGVwLmFjdGl2ZSAuY2lyY2xlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYm9yZGVyLWNvbG9yOiAjYjA1OGY4O1xufVxuXG4uc3RlcC5lbXB0eSAuY2lyY2xlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uc3RlcC5lbXB0eSAubGluZSB7XG4gIC8qICAgICB2aXNpYmlsaXR5OiBoaWRkZW47ICovXG4gIC8qICAgaGVpZ2h0OiAxNTAlOyAqL1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zdGVwOmxhc3QtY2hpbGQgLmxpbmUge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHdoaXRlO1xuICB6LWluZGV4OiAtMTtcbiAgLyogYmVoaW5kIHRoZSBjaXJjbGUgdG8gY29tcGxldGVseSBoaWRlICovXG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xufVxuLmNvbnRlbnQgaDMge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOiAwO1xufVxuLmNvbnRlbnQgcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cbiAgLyogRGFyayBHcmV5ICovXG4gIGNvbG9yOiAjN2U3ZTdlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0MnB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1lbmQ6IDQycHggIWltcG9ydGFudDtcbiAgLS1wYWRkaW5nLXRvcDogMzRweDtcbn1cblxuLnN1Yi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1ib3R0b206IDE0cHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xufVxuLnN1Yi1jb250ZW50IGgzIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xufVxuXG4ucy1pdGVtIHtcbiAgcGFkZGluZy10b3A6IDI5cHg7XG59XG5cbi5zdWItY2lyY2xlLWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjI2OGY4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjYjI2OGY4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdWItY2lyY2xlLWMgaW9uLWljb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5zdWItY2lyY2xlLWEge1xuICBtYXJnaW46IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdlN2U3ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzdlN2U3ZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uYnRuYmx1ZTIge1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogNDRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgLyogV2hpdGUgKi9cbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5zdWItY29udGVudC1kIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1sZWZ0OiA0NXB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLnN1Yi1jb250ZW50LXAgaDMge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uc3ViLWNpcmNsZS1wIHtcbiAgbWFyZ2luOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmhpZGVkb3Qge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLmFjdGl2ZWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBsZWZ0OiAyNHB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICB6LWluZGV4OiA5OTk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4IHJnYmEoNjUsIDU1LCAyNTUsIDAuMDgpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAzMjdweDtcbiAgaGVpZ2h0OiAxMzZweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2FyZGhlaWdodCB7XG4gIGhlaWdodDogMTY4cHg7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG4uYmx1ZWJ0biB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tbGVmdDogMjhweDtcbiAgbWFyZ2luLXRvcDogMjNweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgem9vbTogMTtcbn1cblxuLmJhY2tidXR0b24ge1xuICB6b29tOiAwLjY7XG59XG5cbi5jaXJjbGUtYSB7XG4gIG1hcmdpbjogMnB4IDBweCAwcHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2U3ZTdlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjN2U3ZTdlO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5oZWFkdG9vbGJhciB7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/assessment/assessmentbar/assessmentbar.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/assessment/assessmentbar/assessmentbar.page.ts ***!
    \**********************************************************************/

  /*! exports provided: AssessmentbarPage */

  /***/
  function srcAppPagesAssessmentAssessmentbarAssessmentbarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssessmentbarPage", function () {
      return AssessmentbarPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _popover_popover_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./popover/popover.component */
    "./src/app/pages/assessment/assessmentbar/popover/popover.component.ts");
    /* harmony import */


    var _deleteassesmentmodal_deleteassesmentmodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./deleteassesmentmodal/deleteassesmentmodal.component */
    "./src/app/pages/assessment/assessmentbar/deleteassesmentmodal/deleteassesmentmodal.component.ts");
    /* harmony import */


    var _assessment_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../assessment-service.service */
    "./src/app/pages/assessment/assessment-service.service.ts");
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../dataservice.service */
    "./src/app/pages/dataservice.service.ts");
    /* harmony import */


    var src_app_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/http.service */
    "./src/app/http.service.ts");
    /* harmony import */


    var _creatingcare_creatingcare_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../creatingcare/creatingcare.service */
    "./src/app/pages/creatingcare/creatingcare.service.ts");

    var careNeeds = [{
      name: 'Companionship',
      open: false,
      status: 'completed',
      pathUrl: 'companionship'
    }, {
      name: 'Exercise/PT',
      open: true,
      status: 'active',
      pathUrl: 'exercise'
    }, {
      name: 'Shopping/Errands',
      open: false,
      status: 'pending',
      pathUrl: 'viewshoppinglist'
    }, {
      name: 'Use of Electronics/Devices',
      open: false,
      status: 'pending',
      pathUrl: 'useofelectronics'
    }, {
      name: 'Home Repair/Maintenance',
      open: false,
      status: 'pending',
      pathUrl: 'homerepair'
    }, {
      name: 'Gardening',
      open: false,
      status: 'pending',
      pathUrl: 'gardening'
    }, {
      name: 'House Work',
      open: false,
      status: 'pending',
      pathUrl: 'housework'
    }, {
      name: 'Laundry',
      open: false,
      status: 'pending',
      pathUrl: 'laundry'
    }, {
      name: 'Driving/Transportation',
      open: false,
      status: 'pending',
      pathUrl: 'driving'
    }, {
      name: 'Cooking/Meal Preperation',
      open: false,
      status: 'pending',
      pathUrl: 'meals'
    }, {
      name: 'Medication Management',
      open: false,
      status: 'pending',
      pathUrl: 'medication'
    }, {
      name: 'Mobility',
      open: false,
      status: 'pending',
      pathUrl: 'mobility'
    }, {
      name: 'Bathing',
      open: false,
      status: 'pending',
      pathUrl: 'bathing'
    }, {
      name: 'Sleep',
      open: false,
      status: 'pending',
      pathUrl: 'sleepassistance'
    }, {
      name: 'Dressing',
      open: false,
      status: 'pending',
      pathUrl: 'dressing'
    }, {
      name: 'Grooming',
      open: false,
      status: 'pending',
      pathUrl: 'grooming'
    }, {
      name: 'Oral Care',
      open: false,
      status: 'pending',
      pathUrl: 'oralcare'
    }, {
      name: 'Wound Care',
      open: false,
      status: 'pending',
      pathUrl: 'woundcare'
    }, {
      name: 'Eating',
      open: false,
      status: 'pending',
      pathUrl: 'eating'
    }, {
      name: 'Toileting',
      open: false,
      status: 'pending',
      pathUrl: 'toileting'
    }, {
      name: 'Management of Finances',
      open: false,
      status: 'pending',
      pathUrl: 'managingfinances'
    }, {
      name: 'Check Vitals',
      open: false,
      status: 'pending',
      pathUrl: 'checkvitals'
    }];

    var AssessmentbarPage = /*#__PURE__*/function () {
      function AssessmentbarPage(_formBuilder, popoverController, modalController, navCtrl, dataService, assessmentService, apiService, _creatingCareService) {
        _classCallCheck(this, AssessmentbarPage);

        this._formBuilder = _formBuilder;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.assessmentService = assessmentService;
        this.apiService = apiService;
        this._creatingCareService = _creatingCareService;
        this.isLinear = false;
        this.stepperData = [];
      }

      _createClass(AssessmentbarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var careCircleId, userData, userId, careNeedPrefs, careNeedPrefsValues, careNeedValues, openFlag;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.assessmentService.getCareCircleId();

                  case 2:
                    careCircleId = _context.sent;
                    _context.next = 5;
                    return this._creatingCareService.getCareCircleName();

                  case 5:
                    this.careCircleName = _context.sent;
                    _context.next = 8;
                    return this.dataService.getUserInfo();

                  case 8:
                    userData = _context.sent;
                    userId = userData.userId;
                    _context.next = 12;
                    return this.apiService.get('assessment', {
                      careCircleId: careCircleId,
                      userId: userId
                    });

                  case 12:
                    this.assessmentData = _context.sent;
                    console.log(this.assessmentData);
                    careNeedPrefs = this.assessmentData.assessmentConfiguration.CARE_NEED_PREFS.options;
                    careNeedPrefsValues = this.assessmentData.assessmentValues.CARE_NEED_PREFS;
                    careNeedValues = this.assessmentData.assessmentValues.CARE_NEEDS;
                    /* {
                      name: 'Companionship',
                      open: false,
                      status: 'completed',
                      pathUrl: 'companionship',
                    }, */

                    openFlag = false;
                    this.stepperData = [{
                      name: 'Care Needs',
                      desc: 'Companionship, Exercise, Shopping...',
                      open: true,
                      status: 'completed',
                      children: []
                    }, {
                      name: 'Personal Information',
                      open: false,
                      status: 'pending',
                      children: [],
                      pathUrl: 'personalinfo'
                    }, {
                      name: 'Medical & Psychiatric Conditions',
                      open: false,
                      status: 'pending',
                      children: [],
                      pathUrl: 'medicalconditions'
                    }, {
                      name: 'Home Safety',
                      open: false,
                      status: 'pending',
                      children: [],
                      pathUrl: 'homeandsafety'
                    }, {
                      name: 'Motivations',
                      open: false,
                      status: 'pending',
                      children: [],
                      pathUrl: 'motivation'
                    }];
                    careNeedPrefs.forEach(function (careNeed) {
                      if (careNeedPrefsValues !== null && careNeed.key in careNeedPrefsValues && careNeedPrefsValues[careNeed.key] !== null && careNeedPrefsValues[careNeed.key] !== '' && careNeedPrefsValues[careNeed.key] !== 'none') {
                        var temp = {
                          name: careNeed.label,
                          open: false,
                          status: 'pending',
                          pathUrl: careNeed.pathUrl
                        };

                        if (!openFlag) {
                          if (careNeedValues !== null && careNeed.key in careNeedValues && careNeedValues[careNeed.key] !== null) {
                            temp.status = 'completed';
                          } else {
                            temp.status = 'active';
                            temp.open = true;
                            openFlag = true;
                          }
                        }

                        _this.stepperData[0].children.push(temp);
                      }
                    });
                    this.stepperData[0].desc = this.stepperData[0].children.map(function (child) {
                      return child.name;
                    }).slice(0, 2).join(', ') + '...'; // this.changetoActive();

                  case 21:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "changetoActive",
        value: function changetoActive() {
          for (var index = 0; index < this.stepperData[0].children.length; index++) {
            var childrens = this.stepperData[0].children;
            var element = childrens[index];

            if (element.pathUrl === this.tempUrl) {
              element.status = 'completed';
              element.open = false;
              this.stepperData[0].children[index + 1].status = 'active';
              this.stepperData[0].children[index + 1].open = true;
            }
          }
        }
      }, {
        key: "changeStepper",
        value: function changeStepper(item) {
          if (!item.open) {
            this.stepperData.forEach(function (element) {
              element.open = false;
              element.status = 'pending';

              if (element.children.length !== 0) {
                element.open = true;
                element.status = 'completed';
                element.children.forEach(function (child) {
                  child.status = 'pending';
                  child.open = false;
                });
              }

              if (element.name === item.name && element.children.length === 0) {
                element.status = 'active';
                element.open = true;
              } else if (element.name === item.name && element.children.length > 0) {
                element.status = 'completed';
                element.open = true;
              }
            });
          }
        }
      }, {
        key: "changechildStepper",
        value: function changechildStepper(childNodes, item) {
          this.stepperData.forEach(function (element) {
            if (element.open && element.children.length === 0) {
              element.open = false;
              element.status = 'pending';
            }
          }); // let temp = false;

          childNodes.forEach(function (element) {
            element.open = false;

            if (element.status !== 'completed') {
              element.status = 'pending';
            } // element.status = temp ? "completed" : "pending";


            if (element.name === item.name) {
              // temp = false;
              if (element.status !== 'completed') {
                element.status = 'active';
              }

              element.open = true;
            }
          });
        }
      }, {
        key: "presentPopover",
        value: function presentPopover(ev) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.popoverController.create({
                      component: _popover_popover_component__WEBPACK_IMPORTED_MODULE_4__["PopoverComponent"],
                      cssClass: 'popoverstyle',
                      event: ev,
                      translucent: true,
                      mode: 'ios'
                    });

                  case 2:
                    popover = _context2.sent;
                    popover.onDidDismiss().then(function (x) {
                      if (x.data === 'delete') {
                        _this2.presentModal();
                      }
                    });
                    _context2.next = 6;
                    return popover.present();

                  case 6:
                    return _context2.abrupt("return", _context2.sent);

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _deleteassesmentmodal_deleteassesmentmodal_component__WEBPACK_IMPORTED_MODULE_5__["DeleteassesmentmodalComponent"],
                      cssClass: 'deletemodalclass',
                      backdropDismiss: true
                    });

                  case 2:
                    modal = _context3.sent;
                    _context3.next = 5;
                    return modal.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "gotoUrl",
        value: function gotoUrl(path) {
          this.navCtrl.navigateForward(['/assessment/' + path]);
        }
      }, {
        key: "back",
        value: function back() {
          this.navCtrl.navigateBack('/assessment');
        }
      }]);

      return AssessmentbarPage;
    }();

    AssessmentbarPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _dataservice_service__WEBPACK_IMPORTED_MODULE_7__["DataserviceService"]
      }, {
        type: _assessment_service_service__WEBPACK_IMPORTED_MODULE_6__["AssessmentServiceService"]
      }, {
        type: src_app_http_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
      }, {
        type: _creatingcare_creatingcare_service__WEBPACK_IMPORTED_MODULE_9__["CreatingcareService"]
      }];
    };

    AssessmentbarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-assessmentbar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./assessmentbar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/assessmentbar/assessmentbar.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./assessmentbar.page.scss */
      "./src/app/pages/assessment/assessmentbar/assessmentbar.page.scss"))["default"]]
    })], AssessmentbarPage);
    /***/
  },

  /***/
  "./src/app/pages/assessment/assessmentbar/deleteassesmentmodal/deleteassesmentmodal.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/pages/assessment/assessmentbar/deleteassesmentmodal/deleteassesmentmodal.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAssessmentAssessmentbarDeleteassesmentmodalDeleteassesmentmodalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  width: 343px;\n  height: 249px;\n  background: #ffffff;\n  border-radius: 8px;\n}\n\n.mdheading {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 24px;\n  color: #1a1a1a;\n  padding-top: 24px;\n  padding-left: 24px;\n  margin: 0;\n}\n\n.closebtn {\n  text-align: right;\n}\n\n.closebtn ion-icon {\n  padding-top: 30px;\n  padding-right: 30px;\n  margin: 0;\n  font-size: 24px;\n  color: #1a1a1a;\n}\n\n.infocol {\n  padding-left: 25px;\n  padding-top: 16px;\n  padding-bottom: 32px;\n}\n\n.confirmqn {\n  color: #1a1a1a !important;\n  font-weight: 800;\n  margin: 0;\n  padding-bottom: 16px;\n}\n\n.deleteinfo {\n  font-style: normal;\n  margin: 0;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 17px;\n}\n\n.dltbtn {\n  width: 142px;\n  height: 44px;\n  border: 1px solid #ff002b;\n  color: #ff002b;\n  border-radius: 8px;\n  margin: 0;\n}\n\n.cancelbtn {\n  width: 142px;\n  height: 44px;\n  --background: #4137ff;\n  --border-radius: 8px;\n  margin: 0;\n}\n\n.btnsrow ion-col:first-child {\n  padding-left: 24px;\n}\n\n.btnsrow ion-col:nth-child(2) {\n  text-align: end;\n  padding-right: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9hc3Nlc3NtZW50YmFyL2RlbGV0ZWFzc2VzbWVudG1vZGFsL2RlbGV0ZWFzc2VzbWVudG1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9hc3Nlc3NtZW50L2Fzc2Vzc21lbnRiYXIvZGVsZXRlYXNzZXNtZW50bW9kYWwvZGVsZXRlYXNzZXNtZW50bW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREFFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtFQUVBLGdCQUFBO0VBRUEsU0FBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VGOztBREdBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNBRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFRTtFQUNFLGtCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvYXNzZXNzbWVudGJhci9kZWxldGVhc3Nlc21lbnRtb2RhbC9kZWxldGVhc3Nlc21lbnRtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgd2lkdGg6IDM0M3B4O1xuICBoZWlnaHQ6IDI0OXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4ubWRoZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG5cbiAgY29sb3I6ICMxYTFhMWE7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNsb3NlYnRuIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGlvbi1pY29uIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICMxYTFhMWE7XG4gIH1cbn1cbi5pbmZvY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XG59XG4uY29uZmlybXFuIHtcbiAgY29sb3I6ICMxYTFhMWEgIWltcG9ydGFudDtcbiAgLy8gICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIC8vICAgcGFkZGluZy10b3A6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG4uZGVsZXRlaW5mbyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAvLyAgIHBhZGRpbmctbGVmdDogMjVweDtcbiAgLy8gICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn1cblxuLmRsdGJ0biB7XG4gIHdpZHRoOiAxNDJweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmYwMDJiO1xuICBjb2xvcjogI2ZmMDAyYjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDA7XG59XG4uY2FuY2VsYnRuIHtcbiAgd2lkdGg6IDE0MnB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIC0tYmFja2dyb3VuZDogIzQxMzdmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMDtcbn1cbi5idG5zcm93IHtcbiAgaW9uLWNvbDpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICB9XG4gIGlvbi1jb2w6bnRoLWNoaWxkKDIpIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgfVxufVxuIiwiaW9uLWNhcmQge1xuICB3aWR0aDogMzQzcHg7XG4gIGhlaWdodDogMjQ5cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLm1kaGVhZGluZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2xvc2VidG4ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jbG9zZWJ0biBpb24taWNvbiB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMxYTFhMWE7XG59XG5cbi5pbmZvY29sIHtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XG59XG5cbi5jb25maXJtcW4ge1xuICBjb2xvcjogIzFhMWExYSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4uZGVsZXRlaW5mbyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xufVxuXG4uZGx0YnRuIHtcbiAgd2lkdGg6IDE0MnB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjAwMmI7XG4gIGNvbG9yOiAjZmYwMDJiO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNhbmNlbGJ0biB7XG4gIHdpZHRoOiAxNDJweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICAtLWJhY2tncm91bmQ6ICM0MTM3ZmY7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5idG5zcm93IGlvbi1jb2w6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG4uYnRuc3JvdyBpb24tY29sOm50aC1jaGlsZCgyKSB7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/assessment/assessmentbar/deleteassesmentmodal/deleteassesmentmodal.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/pages/assessment/assessmentbar/deleteassesmentmodal/deleteassesmentmodal.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: DeleteassesmentmodalComponent */

  /***/
  function srcAppPagesAssessmentAssessmentbarDeleteassesmentmodalDeleteassesmentmodalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteassesmentmodalComponent", function () {
      return DeleteassesmentmodalComponent;
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

    var DeleteassesmentmodalComponent = /*#__PURE__*/function () {
      function DeleteassesmentmodalComponent(modalCtrl) {
        _classCallCheck(this, DeleteassesmentmodalComponent);

        this.modalCtrl = modalCtrl;
      }

      _createClass(DeleteassesmentmodalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closemodal",
        value: function closemodal() {
          this.modalCtrl.dismiss();
        }
      }]);

      return DeleteassesmentmodalComponent;
    }();

    DeleteassesmentmodalComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    DeleteassesmentmodalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deleteassesmentmodal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./deleteassesmentmodal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/assessmentbar/deleteassesmentmodal/deleteassesmentmodal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./deleteassesmentmodal.component.scss */
      "./src/app/pages/assessment/assessmentbar/deleteassesmentmodal/deleteassesmentmodal.component.scss"))["default"]]
    })], DeleteassesmentmodalComponent);
    /***/
  },

  /***/
  "./src/app/pages/assessment/assessmentbar/popover/popover.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/assessment/assessmentbar/popover/popover.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAssessmentAssessmentbarPopoverPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  color: #000000;\n  --min-height: 64px;\n  background: #FFFFFF;\n  --border-radius: 8px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9hc3Nlc3NtZW50YmFyL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9hc3Nlc3NtZW50YmFyL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0osZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUVBLG9CQUFBO0VBQ0EsV0FBQTtBQ0FBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9hc3Nlc3NtZW50YmFyL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiA1MDA7XG5mb250LXNpemU6IDE0cHg7XG5saW5lLWhlaWdodDogMTdweDtcbmNvbG9yOiAjMDAwMDAwO1xuLS1taW4taGVpZ2h0OiA2NHB4O1xuYmFja2dyb3VuZDogI0ZGRkZGRjtcbi8vIGJveC1zaGFkb3c6IDBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4tLWJvcmRlci1yYWRpdXM6IDhweDtcbndpZHRoOiAxMDAlO1xuXG59XG5cbiIsImlvbi1pdGVtIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgLS1taW4taGVpZ2h0OiA2NHB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/assessment/assessmentbar/popover/popover.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/assessment/assessmentbar/popover/popover.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: PopoverComponent */

  /***/
  function srcAppPagesAssessmentAssessmentbarPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
      return PopoverComponent;
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

    var PopoverComponent = /*#__PURE__*/function () {
      function PopoverComponent(popoverCntrl) {
        _classCallCheck(this, PopoverComponent);

        this.popoverCntrl = popoverCntrl;
      }

      _createClass(PopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "delete",
        value: function _delete() {
          this.popoverCntrl.dismiss("delete");
        }
      }]);

      return PopoverComponent;
    }();

    PopoverComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    PopoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popover',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/assessmentbar/popover/popover.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./popover.component.scss */
      "./src/app/pages/assessment/assessmentbar/popover/popover.component.scss"))["default"]]
    })], PopoverComponent);
    /***/
  }
}]);
//# sourceMappingURL=pages-assessment-assessmentbar-assessmentbar-module-es5.js.map