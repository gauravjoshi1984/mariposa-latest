function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-woundcare-woundcare-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/woundcare/woundcare.page.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/woundcare/woundcare.page.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAssessmentWoundcareWoundcarePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  \n  <ion-toolbar class=\"headtoolbar\">\n    \n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <m-backbutton></m-backbutton>\n            </ion-buttons>\n        </ion-toolbar> \n        </ion-col>\n        <ion-col size=\"8\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Wound Care</ion-text>\n          </div> \n        </ion-col>\n      </ion-row>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content *ngIf=\"createdForm\" [formGroup]=\"woundForm\">\n    <ion-grid style=\"padding:24px;height:fit-content\">\n\n\n        <!-- INSTRUCTIONS -->\n\n        <div class=\"nametag\" style=\"margin-top: 0px;\">\n            <ion-text position=\"floating\" id=\"tag\">Instructions(optional)</ion-text>\n        </div>\n        <div>\n            <ion-textarea formControlName=\"instructions\" style=\"height: 120px;\" class=\"input\" placeholder=\"Write here\"></ion-textarea>\n        </div>\n\n        <!-- ADD IMAGE -->\n        <app-addimage (click)=\"addImage()\"></app-addimage>\n    <ion-text>\n      <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n        <ion-grid fixed class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col style=\"padding-top: 11px;\" size=\"8\"><span>{{img.substring(img.lastIndexOf(\"/\") + 1) | slice:0:12}}</span></ion-col>\n            <ion-col size=\"4\">\n              <ion-button\n              fill=\"clear\"\n              shape=\"round\"\n              class=\"dltbtn\"\n              (click)=\"removeImg(j)\"        >\n              <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n              Delete\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </div>\n    </ion-text>\n\n\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <div id=\"button\">\n        <ion-button [disabled]=\"false\" class=\"btnblue\" type=\"submit\" id=\"signup\" (click)= \"save()\" >SAVE & PROCEED</ion-button>\n    </div>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/assessment/woundcare/woundcare-routing.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/assessment/woundcare/woundcare-routing.module.ts ***!
    \************************************************************************/

  /*! exports provided: WoundcarePageRoutingModule */

  /***/
  function srcAppPagesAssessmentWoundcareWoundcareRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WoundcarePageRoutingModule", function () {
      return WoundcarePageRoutingModule;
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


    var _woundcare_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./woundcare.page */
    "./src/app/pages/assessment/woundcare/woundcare.page.ts");

    var routes = [{
      path: '',
      component: _woundcare_page__WEBPACK_IMPORTED_MODULE_3__["WoundcarePage"]
    }];

    var WoundcarePageRoutingModule = function WoundcarePageRoutingModule() {
      _classCallCheck(this, WoundcarePageRoutingModule);
    };

    WoundcarePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WoundcarePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/woundcare/woundcare.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/assessment/woundcare/woundcare.module.ts ***!
    \****************************************************************/

  /*! exports provided: WoundcarePageModule */

  /***/
  function srcAppPagesAssessmentWoundcareWoundcareModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WoundcarePageModule", function () {
      return WoundcarePageModule;
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


    var _woundcare_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./woundcare-routing.module */
    "./src/app/pages/assessment/woundcare/woundcare-routing.module.ts");
    /* harmony import */


    var _woundcare_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./woundcare.page */
    "./src/app/pages/assessment/woundcare/woundcare.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var WoundcarePageModule = function WoundcarePageModule() {
      _classCallCheck(this, WoundcarePageModule);
    };

    WoundcarePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _woundcare_routing_module__WEBPACK_IMPORTED_MODULE_5__["WoundcarePageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_woundcare_page__WEBPACK_IMPORTED_MODULE_6__["WoundcarePage"]]
    })], WoundcarePageModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/woundcare/woundcare.page.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/assessment/woundcare/woundcare.page.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAssessmentWoundcareWoundcarePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvd291bmRjYXJlL3dvdW5kY2FyZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/assessment/woundcare/woundcare.page.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/assessment/woundcare/woundcare.page.ts ***!
    \**************************************************************/

  /*! exports provided: WoundcarePage */

  /***/
  function srcAppPagesAssessmentWoundcareWoundcarePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WoundcarePage", function () {
      return WoundcarePage;
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


    var _assessment_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../assessment-service.service */
    "./src/app/pages/assessment/assessment-service.service.ts");
    /* harmony import */


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../dataservice.service */
    "./src/app/pages/dataservice.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");

    var WoundcarePage = /*#__PURE__*/function () {
      function WoundcarePage(dataService, imagePicker, navCtrl, assessmentService, router) {
        _classCallCheck(this, WoundcarePage);

        this.dataService = dataService;
        this.imagePicker = imagePicker;
        this.navCtrl = navCtrl;
        this.assessmentService = assessmentService;
        this.router = router;
        this.createdForm = false;
        this.imageList = [];
      }

      _createClass(WoundcarePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
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
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.key = 'WOUND_CARE';
                    _context.next = 3;
                    return this.assessmentService.getCareCircleId();

                  case 3:
                    this.careCircleId = _context.sent;
                    _context.next = 6;
                    return this.dataService.getUserInfo();

                  case 6:
                    this.userId = _context.sent;
                    this.userId = this.userId.userId;
                    this.woundForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
                    this.assessmentService.getAssessmentStateObject().then(function (data) {
                      _this2.stateObject = data.assessmentValues.CARE_NEEDS;

                      if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[_this2.key] != null) {
                        // data is present
                        Object.keys(data.assessmentValues.CARE_NEEDS[_this2.key]).forEach(function (element) {
                          _this2.woundForm.addControl(element, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.assessmentValues.CARE_NEEDS[_this2.key][element]));
                        });
                      } else {
                        _this2.woundForm.addControl('instructions', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
                      }

                      _this2.createdForm = true;
                    });

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          if (this.stateObject == null) {
            this.stateObject = {};
          }

          this.stateObject[this.key] = this.woundForm.value;
          this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then(function (response) {
            console.log(response);

            _this3.navCtrl.navigateForward(['/assessment/assessmentbar']);
          });
        }
      }]);

      return WoundcarePage;
    }();

    WoundcarePage.ctorParameters = function () {
      return [{
        type: _dataservice_service__WEBPACK_IMPORTED_MODULE_4__["DataserviceService"]
      }, {
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["ImagePicker"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
      }, {
        type: _assessment_service_service__WEBPACK_IMPORTED_MODULE_3__["AssessmentServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    WoundcarePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-woundcare',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./woundcare.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/woundcare/woundcare.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./woundcare.page.scss */
      "./src/app/pages/assessment/woundcare/woundcare.page.scss"))["default"]]
    })], WoundcarePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-assessment-woundcare-woundcare-module-es5.js.map