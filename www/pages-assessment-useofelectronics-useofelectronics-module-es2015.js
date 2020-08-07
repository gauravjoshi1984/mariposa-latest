(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-useofelectronics-useofelectronics-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/useofelectronics/useofelectronics.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/useofelectronics/useofelectronics.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\n    <ion-toolbar class=\"headtoolbar\">\n\n        <ion-row>\n            <ion-col size=\"2\">\n                <ion-toolbar>\n                    <ion-buttons slot=\"start\">\n                        <m-backbutton></m-backbutton>\n                    </ion-buttons>\n                </ion-toolbar>\n            </ion-col>\n            <ion-col size=\"8\">\n                <div>\n                    <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Use of Electronics / Devices</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content *ngIf=\"readyFlag==true\">\n    <ion-grid style=\"padding:24px;height:fit-content\">\n        <div *ngFor=\"let item of equipmentList\">\n            <app-toggle [name]=\"item\" [value]=\"formData[item]\" (result)=\"changeToggle(item,$event)\"></app-toggle>\n            <hr class=\"solid\" />\n        </div>\n\n        <!-- INSTRUCTIONS -->\n        <div class=\"nametag\" style=\"margin-top: 0px;\">\n            <ion-text position=\"floating\" id=\"tag\">Instructions(optional)</ion-text>\n        </div>\n        <div>\n            <ion-textarea [(ngModel)]=\"formData.instructions\" style=\"height: 120px;\" class=\"input\" placeholder=\"Write here\"></ion-textarea>\n        </div>\n        <div>\n            <!-- ADD IMAGE -->\n            <app-addimage (click)=\"addImage()\"></app-addimage>\n        </div>\n\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <div id=\"button\">\n        <ion-button [disabled]=\"false\" class=\"btnblue\" type=\"submit\" id=\"signup\" (click)=\"save()\">SAVE & PROCEED</ion-button>\n    </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/assessment/useofelectronics/useofelectronics-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/assessment/useofelectronics/useofelectronics-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: UseofelectronicsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseofelectronicsPageRoutingModule", function() { return UseofelectronicsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _useofelectronics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useofelectronics.page */ "./src/app/pages/assessment/useofelectronics/useofelectronics.page.ts");




const routes = [
    {
        path: '',
        component: _useofelectronics_page__WEBPACK_IMPORTED_MODULE_3__["UseofelectronicsPage"]
    }
];
let UseofelectronicsPageRoutingModule = class UseofelectronicsPageRoutingModule {
};
UseofelectronicsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UseofelectronicsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/assessment/useofelectronics/useofelectronics.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/assessment/useofelectronics/useofelectronics.module.ts ***!
  \******************************************************************************/
/*! exports provided: UseofelectronicsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseofelectronicsPageModule", function() { return UseofelectronicsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _useofelectronics_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useofelectronics-routing.module */ "./src/app/pages/assessment/useofelectronics/useofelectronics-routing.module.ts");
/* harmony import */ var _useofelectronics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useofelectronics.page */ "./src/app/pages/assessment/useofelectronics/useofelectronics.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let UseofelectronicsPageModule = class UseofelectronicsPageModule {
};
UseofelectronicsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _useofelectronics_routing_module__WEBPACK_IMPORTED_MODULE_5__["UseofelectronicsPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_useofelectronics_page__WEBPACK_IMPORTED_MODULE_6__["UseofelectronicsPage"]]
    })
], UseofelectronicsPageModule);



/***/ }),

/***/ "./src/app/pages/assessment/useofelectronics/useofelectronics.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/assessment/useofelectronics/useofelectronics.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvdXNlb2ZlbGVjdHJvbmljcy91c2VvZmVsZWN0cm9uaWNzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/assessment/useofelectronics/useofelectronics.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/assessment/useofelectronics/useofelectronics.page.ts ***!
  \****************************************************************************/
/*! exports provided: UseofelectronicsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseofelectronicsPage", function() { return UseofelectronicsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _assessment_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assessment-service.service */ "./src/app/pages/assessment/assessment-service.service.ts");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/pages/dataservice.service.ts");








let UseofelectronicsPage = class UseofelectronicsPage {
    constructor(router, apiService, location, navCtrl, assessmentService, dataService) {
        this.router = router;
        this.apiService = apiService;
        this.location = location;
        this.navCtrl = navCtrl;
        this.assessmentService = assessmentService;
        this.dataService = dataService;
        this.stateObject = {};
        this.equipmentList = [];
        this.readyFlag = false;
        this.formData = {};
    }
    ngOnInit() {
    }
    addImage() {
        console.log('X');
    }
    changeToggle(formItem, ev) {
        this.formData[formItem] = ev;
    }
    save() {
        if (this.stateObject == null) {
            this.stateObject = {};
        }
        this.stateObject.ELECTRONICS = this.formData;
        this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
            console.log(response);
            this.router.navigate(['/assessment/assessmentbar']);
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.readyFlag = false;
            this.careCircleId = yield this.assessmentService.getCareCircleId();
            this.userId = yield this.dataService.getUserInfo();
            this.userId = this.userId.userId;
            const key = 'ELECTRONICS';
            this.assessmentService.getAssessmentStateObject().then((data) => {
                // first time load
                this.stateObject = data.assessmentValues.CARE_NEEDS;
                if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null) {
                    this.formData = data.assessmentValues.CARE_NEEDS[key];
                }
                else {
                    // do nothing
                    this.formData.instructions = null;
                    data.assessmentConfiguration.CARE_NEEDS[key].yn_questions.forEach(element => {
                        this.formData[element.label] = element.answer;
                    });
                }
                data.assessmentConfiguration.CARE_NEEDS[key].yn_questions.forEach(element => {
                    this.equipmentList.push(element.label);
                });
                console.log(this.equipmentList);
                this.readyFlag = true;
            });
        });
    }
};
UseofelectronicsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_http_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _assessment_service_service__WEBPACK_IMPORTED_MODULE_6__["AssessmentServiceService"] },
    { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_7__["DataserviceService"] }
];
UseofelectronicsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-useofelectronics',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./useofelectronics.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/useofelectronics/useofelectronics.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./useofelectronics.page.scss */ "./src/app/pages/assessment/useofelectronics/useofelectronics.page.scss")).default]
    })
], UseofelectronicsPage);



/***/ })

}]);
//# sourceMappingURL=pages-assessment-useofelectronics-useofelectronics-module-es2015.js.map