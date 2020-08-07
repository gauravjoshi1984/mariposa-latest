function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-addshoppinglist-addshoppinglist-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/addshoppinglist/addshoppinglist.page.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/addshoppinglist/addshoppinglist.page.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAssessmentAddshoppinglistAddshoppinglistPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n    <ion-toolbar class=\"headtoolbar\">\n        <ion-grid>\n            <ion-row style=\"align-items: center;margin-top: 32px;\">\n                <ion-col size=\"10\">\n                    <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Add items to shopping list</ion-text>\n                </ion-col>\n                <ion-col>\n                    <ion-icon style=\"zoom:1.2;color: black;float:right\" name=\"close-outline\" routerLink=\"/assessment/viewshoppinglist\"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-grid style=\"padding-top:32px;padding-left:24px;\">\n        <form [formGroup]=\"shoppingForm\">\n            <div class=\"nametag\" style=\"margin-top: 5px;\">\n                <ion-text position=\"floating\" id=\"tag\">Item Name</ion-text>\n            </div>\n            <div>\n                <ion-input mode=\"md\" formControlName=\"name\" class=\"input\" placeholder=\"Item Name\"></ion-input>\n                <ion-item [hidden]=\"checkValidity(shoppingFormControl.name)\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n                    <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n                    <ion-text class=“warning”>Item name is required.</ion-text>\n                </ion-item>\n            </div>\n            <div class=\"nametag\">\n                <ion-text position=\"floating\" id=\"tag\">Specification (brand,shop etc.,)</ion-text>\n            </div>\n            <div>\n                <ion-input mode=\"md\" formControlName=\"brand\" class=\"input\" placeholder=\"Add any specification\"></ion-input>\n                <ion-item [hidden]=\"checkValidity(shoppingFormControl.brand)\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n                    <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n                    <ion-text class=“warning”>Specification is required</ion-text>\n                </ion-item>\n            </div>\n            <div id=\"button\">\n                <ion-button [disabled]=\"false\" class=\"btnblue\" type=\"submit\" id=\"signup\" (click)=\"save()\">ADD</ion-button>\n            </div>\n        </form>\n    </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/assessment/addshoppinglist/addshoppinglist-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/assessment/addshoppinglist/addshoppinglist-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: AddshoppinglistPageRoutingModule */

  /***/
  function srcAppPagesAssessmentAddshoppinglistAddshoppinglistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddshoppinglistPageRoutingModule", function () {
      return AddshoppinglistPageRoutingModule;
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


    var _addshoppinglist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addshoppinglist.page */
    "./src/app/pages/assessment/addshoppinglist/addshoppinglist.page.ts");

    var routes = [{
      path: '',
      component: _addshoppinglist_page__WEBPACK_IMPORTED_MODULE_3__["AddshoppinglistPage"]
    }];

    var AddshoppinglistPageRoutingModule = function AddshoppinglistPageRoutingModule() {
      _classCallCheck(this, AddshoppinglistPageRoutingModule);
    };

    AddshoppinglistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddshoppinglistPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/addshoppinglist/addshoppinglist.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/assessment/addshoppinglist/addshoppinglist.module.ts ***!
    \****************************************************************************/

  /*! exports provided: AddshoppinglistPageModule */

  /***/
  function srcAppPagesAssessmentAddshoppinglistAddshoppinglistModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddshoppinglistPageModule", function () {
      return AddshoppinglistPageModule;
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


    var _addshoppinglist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addshoppinglist-routing.module */
    "./src/app/pages/assessment/addshoppinglist/addshoppinglist-routing.module.ts");
    /* harmony import */


    var _addshoppinglist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addshoppinglist.page */
    "./src/app/pages/assessment/addshoppinglist/addshoppinglist.page.ts");

    var AddshoppinglistPageModule = function AddshoppinglistPageModule() {
      _classCallCheck(this, AddshoppinglistPageModule);
    };

    AddshoppinglistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _addshoppinglist_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddshoppinglistPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_addshoppinglist_page__WEBPACK_IMPORTED_MODULE_6__["AddshoppinglistPage"]]
    })], AddshoppinglistPageModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/addshoppinglist/addshoppinglist.page.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/pages/assessment/addshoppinglist/addshoppinglist.page.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAssessmentAddshoppinglistAddshoppinglistPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvYWRkc2hvcHBpbmdsaXN0L2FkZHNob3BwaW5nbGlzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/assessment/addshoppinglist/addshoppinglist.page.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/assessment/addshoppinglist/addshoppinglist.page.ts ***!
    \**************************************************************************/

  /*! exports provided: AddshoppinglistPage */

  /***/
  function srcAppPagesAssessmentAddshoppinglistAddshoppinglistPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddshoppinglistPage", function () {
      return AddshoppinglistPage;
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


    var _dataservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../dataservice.service */
    "./src/app/pages/dataservice.service.ts");
    /* harmony import */


    var _assessment_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../assessment-service.service */
    "./src/app/pages/assessment/assessment-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AddshoppinglistPage = /*#__PURE__*/function () {
      function AddshoppinglistPage(_location, dataService, assessmentService, router) {
        _classCallCheck(this, AddshoppinglistPage);

        this._location = _location;
        this.dataService = dataService;
        this.assessmentService = assessmentService;
        this.router = router;
        this.shoppingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
          brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
      }

      _createClass(AddshoppinglistPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          this._location.back();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.key = 'SHOPPING';
                    _context.next = 3;
                    return this.assessmentService.getCareCircleId();

                  case 3:
                    this.careCircleId = _context.sent;
                    _context.next = 6;
                    return this.dataService.getUserInfo();

                  case 6:
                    this.userId = _context.sent;
                    this.userId = this.userId.userId;
                    this.assessmentService.getAssessmentStateObject().then(function (data) {
                      _this.stateObject = data.assessmentValues.CARE_NEEDS;
                    });

                  case 9:
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
          var _this2 = this;

          if (this.stateObject == null) {
            this.stateObject = {};
          }

          if (!(this.key in this.stateObject)) {
            this.stateObject[this.key] = [];
          }

          this.stateObject[this.key].push(this.shoppingForm.value);
          this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then(function (response) {
            _this2.router.navigate(['/assessment/viewshoppinglist']);
          });
        }
      }, {
        key: "checkValidity",
        value: function checkValidity(control) {
          if (control.touched) {
            if (control.invalid) {
              return false;
            } else {
              return true;
            }
          } else {
            return true;
          }
        }
      }, {
        key: "shoppingFormControl",
        get: function get() {
          return this.shoppingForm.controls;
        }
      }]);

      return AddshoppinglistPage;
    }();

    AddshoppinglistPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }, {
        type: _dataservice_service__WEBPACK_IMPORTED_MODULE_4__["DataserviceService"]
      }, {
        type: _assessment_service_service__WEBPACK_IMPORTED_MODULE_5__["AssessmentServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    AddshoppinglistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addshoppinglist',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./addshoppinglist.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/addshoppinglist/addshoppinglist.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./addshoppinglist.page.scss */
      "./src/app/pages/assessment/addshoppinglist/addshoppinglist.page.scss"))["default"]]
    })], AddshoppinglistPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-assessment-addshoppinglist-addshoppinglist-module-es5.js.map