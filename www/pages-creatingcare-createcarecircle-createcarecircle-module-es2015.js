(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-creatingcare-createcarecircle-createcarecircle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/createcarecircle/createcarecircle.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/createcarecircle/createcarecircle.page.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-grid class=\"backbuttongrid\"> \n        <ion-toolbar style=\"height: 40px;\">\n            <ion-buttons slot=\"start\">\n                <m-backbutton></m-backbutton>\n            </ion-buttons>\n        </ion-toolbar>\n    </ion-grid> \n    <ion-grid>\n        <ion-text>\n            <h5 class = \"cap\" style=\"margin-top:54px;\">Hey {{userName}},<br>Create a Care Circle</h5>\n        </ion-text>\n        <div class=\"nametag\" style=\"line-height: 5px;padding-top:30px;\">\n            <ion-text style=\"line-height: 19px;font-size: 16px;font-weight: 300;\" color=\"mdblack\" position=\"floating\" id=\"tag\">Name of the Care circle</ion-text>\n            <ion-text style=\"line-height: 19px;font-size: 16px;font-weight: 300;\" color=\"mdgrey\" position=\"floating\"><br>(Senior name is Suggested)</ion-text>\n        </div>\n        <form [formGroup]=\"circleForm\" (ngSubmit)=\"createCircle()\">\n            <div style=\"padding-top: 10px;\">\n\n                <ion-input formControlName=\"circleName\" mode=\"md\" class=\"input\" placeholder=\"Enter Name\"></ion-input>\n                <ion-item [hidden]=\"checkValidity(circleForm.controls.circleName)['valid']\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n                    <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n                    <ion-text class=\"danger\">{{checkValidity(circleForm.controls.circleName)['message']}}</ion-text>\n                </ion-item>\n            </div>\n            <div id=\"button\">\n                <ion-button [disabled]=\"(circleForm.invalid || (circleForm.controls.circleName.value.length == 0))\" class=\"btnblue\" type=\"submit\" id=\"signup\">CREATE A CIRCLE</ion-button>\n            </div>\n        </form>\n\n    </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/creatingcare/createcarecircle/createcarecircle-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/creatingcare/createcarecircle/createcarecircle-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: CreatecarecirclePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecarecirclePageRoutingModule", function() { return CreatecarecirclePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _createcarecircle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createcarecircle.page */ "./src/app/pages/creatingcare/createcarecircle/createcarecircle.page.ts");




const routes = [
    {
        path: '',
        component: _createcarecircle_page__WEBPACK_IMPORTED_MODULE_3__["CreatecarecirclePage"]
    }
];
let CreatecarecirclePageRoutingModule = class CreatecarecirclePageRoutingModule {
};
CreatecarecirclePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreatecarecirclePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/creatingcare/createcarecircle/createcarecircle.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/creatingcare/createcarecircle/createcarecircle.module.ts ***!
  \********************************************************************************/
/*! exports provided: CreatecarecirclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecarecirclePageModule", function() { return CreatecarecirclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _createcarecircle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createcarecircle-routing.module */ "./src/app/pages/creatingcare/createcarecircle/createcarecircle-routing.module.ts");
/* harmony import */ var _createcarecircle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createcarecircle.page */ "./src/app/pages/creatingcare/createcarecircle/createcarecircle.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let CreatecarecirclePageModule = class CreatecarecirclePageModule {
};
CreatecarecirclePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _createcarecircle_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatecarecirclePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_createcarecircle_page__WEBPACK_IMPORTED_MODULE_6__["CreatecarecirclePage"]]
    })
], CreatecarecirclePageModule);



/***/ }),

/***/ "./src/app/pages/creatingcare/createcarecircle/createcarecircle.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/creatingcare/createcarecircle/createcarecircle.page.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h5 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 32px;\n}\n\n.backbuttongrid {\n  padding-left: 12px;\n  padding-top: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY3JlYXRpbmdjYXJlL2NyZWF0ZWNhcmVjaXJjbGUvY3JlYXRlY2FyZWNpcmNsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0aW5nY2FyZS9jcmVhdGVjYXJlY2lyY2xlL2NyZWF0ZWNhcmVjaXJjbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBR0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZBOztBREtBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRpbmdjYXJlL2NyZWF0ZWNhcmVjaXJjbGUvY3JlYXRlY2FyZWNpcmNsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmg1e1xuXG5cbmZvbnQtc3R5bGU6IG5vcm1hbDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xuZm9udC1zaXplOiAyMHB4O1xubGluZS1oZWlnaHQ6IDMycHg7XG59XG5cbi5iYWNrYnV0dG9uZ3JpZHtcbiAgICBwYWRkaW5nLWxlZnQ6MTJweDtcbiAgICBwYWRkaW5nLXRvcDoyOHB4O1xufSIsImg1IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cblxuLmJhY2tidXR0b25ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nLXRvcDogMjhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/creatingcare/createcarecircle/createcarecircle.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/creatingcare/createcarecircle/createcarecircle.page.ts ***!
  \******************************************************************************/
/*! exports provided: CreatecarecirclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatecarecirclePage", function() { return CreatecarecirclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/pages/dataservice.service.ts");
/* harmony import */ var _creatingcare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../creatingcare.service */ "./src/app/pages/creatingcare/creatingcare.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let CreatecarecirclePage = class CreatecarecirclePage {
    constructor(formBuilder, _dataService, _creatingCareService, navCtrl) {
        this.formBuilder = formBuilder;
        this._dataService = _dataService;
        this._creatingCareService = _creatingCareService;
        this.navCtrl = navCtrl;
        const circleNamePattern = '^[a-zA-Z0-9_-]{5,15}$';
        this.circleForm = this.formBuilder.group({
            circleName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(circleNamePattern)])
        });
    }
    createCircle() {
        const circleName = this.circleForm.controls.circleName.value;
        this._creatingCareService.setCareCircleName(circleName);
        this.navCtrl.navigateForward(['/carecircle/addSenior']);
        // logic to create a circle goes here
    }
    checkValidity(control) {
        let message = '';
        if (control.touched) {
            if (control.invalid) {
                if (control.value.length < 5) {
                    message = 'Name less than 5 characters';
                }
                else if (control.value.length > 15) {
                    message = 'Name more than 15 characters';
                }
                else {
                    message = 'Name contains special characters';
                }
                return {
                    valid: false,
                    message
                };
            }
            else {
                return {
                    valid: true,
                    message
                };
            }
        }
        else {
            return {
                valid: true,
                message
            };
        }
    }
    back() {
        this.navCtrl.back();
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*
            pattern confirms to alpha numeric characters with - and _
            min length 5 and max length 15
          */
            const userInfo = yield this._dataService.getUserInfo();
            this.userName = userInfo.userName;
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userInfo = yield this._dataService.getUserInfo();
            this.userName = userInfo.userName;
        });
    }
};
CreatecarecirclePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"] },
    { type: _creatingcare_service__WEBPACK_IMPORTED_MODULE_4__["CreatingcareService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
CreatecarecirclePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-createcarecircle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./createcarecircle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/createcarecircle/createcarecircle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./createcarecircle.page.scss */ "./src/app/pages/creatingcare/createcarecircle/createcarecircle.page.scss")).default]
    })
], CreatecarecirclePage);



/***/ })

}]);
//# sourceMappingURL=pages-creatingcare-createcarecircle-createcarecircle-module-es2015.js.map