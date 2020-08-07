(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-creatingcare-carecircleaddsenior-carecircleaddsenior-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/carecircleaddsenior/carecircleaddsenior.page.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/carecircleaddsenior/carecircleaddsenior.page.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\" >\n\n    <ion-toolbar class=\"headtoolbar\">\n        <ion-grid>\n            <ion-row style=\"align-items: center;\">\n                <ion-col>\n                    <div>\n                        <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Add Senior</ion-text>\n                        <ion-text class = \"cap\" style=\"font-size:14px;\" color=\"mdgrey\"><br>{{careCircleName}}'s Care Circle</ion-text>\n                    </div>\n                </ion-col>\n                <ion-col>\n                    <ion-icon class = \"closeicon\" style=\"zoom:1.2;color: black;float:right\" name=\"close-outline\" (click) = \"back()\"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <ion-grid style=\"margin-bottom: 100px;\">\n        <form [formGroup]=\"addEditSeniorForm\" (ngSubmit)=\"saveSenior()\">\n\n            <ion-row>\n                <ion-col>\n                    <div style=\"width: 52px;\">\n                        <ion-img src=\"../assets/manlogo.png\"></ion-img>\n                    </div>\n                    <ion-text>\n                        <h6 style=\"margin-top: 5px;\">Senior</h6>\n                    </ion-text>\n                </ion-col>\n            </ion-row>\n\n            <ion-row style=\"align-items: center;\">\n                <ion-col size=\"1\">\n                    <div style=\"padding-left: 3px;\">\n                        <ion-checkbox color=\"mwhite\" mode=\"md\" checked=\"false\" formControlName=\"vitals\"></ion-checkbox>\n                    </div>\n                </ion-col>\n                <ion-col size=\"11\" style=\"padding-top: 0px;\">\n                    <div>\n                        <ion-text style=\"font-size:16px;margin-left: 6px;\" color=\"mdblack\">Ability to Enter Vitals</ion-text>\n                    </div>\n                </ion-col>\n            </ion-row>\n\n            <ion-row style=\"align-items: center;\">\n                <ion-col size=\"1\">\n                    <div style=\"padding-left: 3px;\">\n                        <ion-checkbox color=\"mwhite\" mode=\"md\" checked=\"false\" formControlName=\"appointments\"></ion-checkbox>\n                    </div>\n                </ion-col>\n                <ion-col size=\"11\" style=\"padding-top: 0px;\">\n                    <div>\n                        <ion-text style=\"font-size:16px;margin-left: 6px;\" color=\"mdblack\">Ability Schedule an Appointment</ion-text>\n                    </div>\n                </ion-col>\n            </ion-row>\n\n            <div class=\"nametag\" style=\"margin-top: 17px;\">\n                <ion-text position=\"floating\" id=\"tag\">Name of Senior</ion-text>\n            </div>\n            <div>\n                <ion-input mode=\"md\" class=\"input\" placeholder=\"Enter full Name\" formControlName=\"name\"></ion-input>\n                <ion-item [hidden]=\"checkValidity(addEditSeniorForm.controls.name)\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n                    <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n                    <ion-text class=“warning”>Invalid Name.</ion-text>\n                </ion-item>\n            </div>\n\n            <div class=\"nametag\">\n                <ion-text position=\"floating\" id=\"tag\">Relation</ion-text>\n            </div>\n            <div>\n                <ion-select mode=\"md\" class=\"input\" placeholder=\"Select Relation\" formControlName=\"relation\">\n                    <ion-select-option *ngFor=\"let relation of relationList\" value=\"relation\" for=\"relation\">{{relation}}</ion-select-option>\n                    <!-- <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n          <ion-select-option value=\"black\">Black</ion-select-option>\n          <ion-select-option value=\"red\">Red</ion-select-option> -->\n                </ion-select>\n                <ion-item [hidden]=\"checkValidity(addEditSeniorForm.controls.relation)\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n                    <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n                    <ion-text class=“warning”>Select Relation.</ion-text>\n                </ion-item>\n            </div>\n\n            <div class=\"nametag\">\n                <ion-text position=\"floating\" id=\"tag\">Email id</ion-text>\n            </div>\n            <div>\n                <ion-input mode=\"md\" class=\"input\" type=\"email\" placeholder=\"Enter email\" formControlName=\"email\"></ion-input>\n                <ion-item [hidden]=\"checkValidity(addEditSeniorForm.controls.email)\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n                    <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n                    <ion-text class=“warning”>Incorrect Email.</ion-text>\n                </ion-item>\n            </div>\n\n            <div class=\"nametag\">\n                <ion-text position=\"floating\" id=\"tag\">Mobile Number</ion-text>\n            </div>\n            <div>\n                <ion-input mode=\"md\" class=\"input\" type=\"number\" placeholder=\"Enter mobile number\" formControlName=\"mobileNumber\"></ion-input>\n                <ion-item [hidden]=\"checkValidity(addEditSeniorForm.controls.mobileNumber)\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n                    <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n                    <ion-text class=“warning”>Incorrect Number.</ion-text>\n                </ion-item>\n            </div>\n\n            <div id=\"button\">\n                <ion-button [disabled]=\"addEditSeniorForm.invalid || addEditSeniorForm.pristine\" class=\"btnblue\" type=\"submit\" id=\"signup\">ADD</ion-button>\n            </div>\n        </form>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/creatingcare/carecircleaddsenior/carecircleaddsenior-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/creatingcare/carecircleaddsenior/carecircleaddsenior-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: CarecircleaddseniorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarecircleaddseniorPageRoutingModule", function() { return CarecircleaddseniorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _carecircleaddsenior_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carecircleaddsenior.page */ "./src/app/pages/creatingcare/carecircleaddsenior/carecircleaddsenior.page.ts");




const routes = [
    {
        path: '',
        component: _carecircleaddsenior_page__WEBPACK_IMPORTED_MODULE_3__["CarecircleaddseniorPage"]
    }
];
let CarecircleaddseniorPageRoutingModule = class CarecircleaddseniorPageRoutingModule {
};
CarecircleaddseniorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarecircleaddseniorPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/creatingcare/carecircleaddsenior/carecircleaddsenior.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/creatingcare/carecircleaddsenior/carecircleaddsenior.module.ts ***!
  \**************************************************************************************/
/*! exports provided: CarecircleaddseniorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarecircleaddseniorPageModule", function() { return CarecircleaddseniorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _carecircleaddsenior_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carecircleaddsenior-routing.module */ "./src/app/pages/creatingcare/carecircleaddsenior/carecircleaddsenior-routing.module.ts");
/* harmony import */ var _carecircleaddsenior_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carecircleaddsenior.page */ "./src/app/pages/creatingcare/carecircleaddsenior/carecircleaddsenior.page.ts");







let CarecircleaddseniorPageModule = class CarecircleaddseniorPageModule {
};
CarecircleaddseniorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _carecircleaddsenior_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarecircleaddseniorPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_carecircleaddsenior_page__WEBPACK_IMPORTED_MODULE_6__["CarecircleaddseniorPage"]]
    })
], CarecircleaddseniorPageModule);



/***/ }),

/***/ "./src/app/pages/creatingcare/carecircleaddsenior/carecircleaddsenior.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/creatingcare/carecircleaddsenior/carecircleaddsenior.page.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-img {\n  height: 52px;\n}\n\nion-checkbox {\n  background: #ffffff;\n  border-width: 2px !important;\n  border-style: solid !important;\n  border-radius: 4px;\n  border-color: black !important;\n  --height: 24px;\n  --width: 24px;\n  --checkmark-color: #000000;\n  --background-checked: #ffffff;\n  --border-color: #ffffff;\n  --border-color-checked: #ffffff;\n}\n\nion-select {\n  padding-bottom: 8px;\n  padding-top: 8px;\n  padding-left: 8px;\n}\n\n.headtoolbar div {\n  margin-top: 24px;\n}\n\n.closeicon {\n  margin-top: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY3JlYXRpbmdjYXJlL2NhcmVjaXJjbGVhZGRzZW5pb3IvY2FyZWNpcmNsZWFkZHNlbmlvci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0aW5nY2FyZS9jYXJlY2lyY2xlYWRkc2VuaW9yL2NhcmVjaXJjbGVhZGRzZW5pb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUksWUFBQTtBQ0pKOztBRE9BO0VBQ0ksbUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7QUNKSjs7QURRRTtFQUVFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFNFO0VBQ0UsZ0JBQUE7QUNOSjs7QURTRTtFQUNFLGdCQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGluZ2NhcmUvY2FyZWNpcmNsZWFkZHNlbmlvci9jYXJlY2lyY2xlYWRkc2VuaW9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuaW9uLWltZ3tcblxuICAgIGhlaWdodDogNTJweDs7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItd2lkdGg6IDJweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgIC0taGVpZ2h0OiAyNHB4O1xuICAgIC0td2lkdGg6IDI0cHg7XG4gICAgLS1jaGVja21hcmstY29sb3I6ICMwMDAwMDA7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XG4gICAgLS1ib3JkZXItY29sb3I6ICNmZmZmZmY7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2ZmZmZmZjtcbiAgICBcbiAgfVxuXG4gIGlvbi1zZWxlY3R7XG5cbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIH1cblxuICAuaGVhZHRvb2xiYXIgZGl2e1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gIH1cblxuICAuY2xvc2VpY29ue1xuICAgIG1hcmdpbi10b3A6MThweDtcbiAgfSIsImlvbi1pbWcge1xuICBoZWlnaHQ6IDUycHg7XG59XG5cbmlvbi1jaGVja2JveCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci13aWR0aDogMnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiAyNHB4O1xuICAtLXdpZHRoOiAyNHB4O1xuICAtLWNoZWNrbWFyay1jb2xvcjogIzAwMDAwMDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiAjZmZmZmZmO1xufVxuXG5pb24tc2VsZWN0IHtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5oZWFkdG9vbGJhciBkaXYge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4uY2xvc2VpY29uIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/creatingcare/carecircleaddsenior/carecircleaddsenior.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/creatingcare/carecircleaddsenior/carecircleaddsenior.page.ts ***!
  \************************************************************************************/
/*! exports provided: CarecircleaddseniorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarecircleaddseniorPage", function() { return CarecircleaddseniorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/pages/dataservice.service.ts");
/* harmony import */ var _creatingcare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../creatingcare.service */ "./src/app/pages/creatingcare/creatingcare.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








let CarecircleaddseniorPage = class CarecircleaddseniorPage {
    constructor(formBuilder, _dataService, _creatingCareService, _router, _apiService, _location) {
        this.formBuilder = formBuilder;
        this._dataService = _dataService;
        this._creatingCareService = _creatingCareService;
        this._router = _router;
        this._apiService = _apiService;
        this._location = _location;
        this.relationList = ['Father', 'Mother', 'Sibling'];
        const mobileNumberPattern = '^[0-9]+$';
        this.addEditSeniorForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            relation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(mobileNumberPattern)),
            vitals: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            appointments: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    saveSenior() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userData = yield this._dataService.getUserInfo();
            // relation is not sent ----- this.addEditSeniorForm.controls['relation'].value
            const apiRequestBody = {
                careCircleName: yield this._creatingCareService.getCareCircleName(),
                createdBy: userData.userId,
                members: [
                    {
                        userName: this.addEditSeniorForm.controls.name.value,
                        email: this.addEditSeniorForm.controls.email.value,
                        mobile: this.addEditSeniorForm.controls.mobileNumber.value,
                        userType: 'SENIOR',
                        configuration: {
                            vitals: this.addEditSeniorForm.controls.vitals.value,
                            appointments: this.addEditSeniorForm.controls.appointments.value
                        }
                    }
                ]
            };
            this._apiService.post('createCareCircle', apiRequestBody).then((data) => {
                this._creatingCareService.setCareCircleId(data.careCircleId);
                this._router.navigate(['carecircle/list']);
            });
        });
    }
    ngOnInit() {
    }
    back() {
        this._location.back();
    }
    checkValidity(control) {
        if (control.touched) {
            if (control.invalid) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return true;
        }
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.careCircleName = yield this._creatingCareService.getCareCircleName();
        });
    }
};
CarecircleaddseniorPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"] },
    { type: _creatingcare_service__WEBPACK_IMPORTED_MODULE_4__["CreatingcareService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_http_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }
];
CarecircleaddseniorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carecircleaddsenior',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carecircleaddsenior.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/carecircleaddsenior/carecircleaddsenior.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carecircleaddsenior.page.scss */ "./src/app/pages/creatingcare/carecircleaddsenior/carecircleaddsenior.page.scss")).default]
    })
], CarecircleaddseniorPage);



/***/ })

}]);
//# sourceMappingURL=pages-creatingcare-carecircleaddsenior-carecircleaddsenior-module-es2015.js.map