(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-companionship-companionship-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/companionship/companionship.page.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/companionship/companionship.page.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\n    <ion-toolbar class=\"headtoolbar\">\n\n        <ion-row>\n            <ion-col size=\"2\">\n                <ion-toolbar>\n                    <ion-buttons slot=\"start\">\n                        <!-- <ion-back-button style=\"float:left\" mode=\"md\" color=\"mdblack\" icon=\"chevron-back-outline\" defaultHref=\"admin-sign-in\"></ion-back-button> -->\n                        <m-backbutton></m-backbutton>\n                    </ion-buttons>\n                </ion-toolbar>\n            </ion-col>\n            <ion-col size=\"8\">\n                <div>\n                    <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Companionship</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content [formGroup]=\"companionshipForm\">\n\n    <ion-grid style=\"padding:24px;height:fit-content\">\n        <!-- FAVORITE ACTIVITIES -->\n\n        <div style=\"padding-top: 0px; margin-bottom: 15px;\">\n            <ion-label style=\"font-size: 16px; line-height: 19px;\">Favorite Activities</ion-label>\n        </div>\n\n        <!-- CHECKBOX 1 -->\n\n        <ion-row style=\"align-items: center; margin-top: 5px;\" *ngFor=\"let favItem of favItemList\">\n            <ion-col size=\"1\">\n                <div style=\"padding-left: 3px;\">\n                    <ion-checkbox #favItem color=\"mwhite\" checked=\"false\" [formControlName]=\"favItem\"></ion-checkbox>\n                </div>\n            </ion-col>\n            <ion-col (click)=\"generateClick(favItem)\" size=\"11\" style=\"padding-top: 0px;\">\n                <div>\n                    <ion-text style=\"\n              font-size: 16px;\n              line-height: 19px;\n              font-weight: 300;\n              margin-left: 12px;\n            \" color=\"mdblack\">{{favItem}}</ion-text>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <!-- INSTRUCTIONS -->\n\n        <div class=\"nametag\" style=\"margin-top: 15px;\">\n            <ion-text position=\"floating\" id=\"tag\">Instructions(optional)</ion-text>\n        </div>\n        <div>\n            <ion-textarea style=\"height: 120px;\" class=\"input\" placeholder=\"Write here\" *ngIf=\"favItemList\" formControlName=\"instructions\"></ion-textarea>\n        </div>\n\n        <!-- ADD IMAGE -->\n    <app-addimage (click)=\"addImage()\"></app-addimage>\n    <ion-text>\n      <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n        <ion-grid fixed class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col style=\"padding-top: 11px;\" size=\"8\"><span>{{img.substring(img.lastIndexOf(\"/\") + 1) | slice:0:12}}</span></ion-col>\n            <ion-col size=\"4\">\n              <ion-button\n              fill=\"clear\"\n              shape=\"round\"\n              class=\"dltbtn\"\n              (click)=\"removeImg(j)\"        >\n              <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n              Delete\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </div>\n    </ion-text>\n\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <div id=\"button\">\n        <ion-button [disabled]=\"false\" class=\"btnblue\" type=\"submit\" id=\"signup\" (click)=\"save()\">SAVE & PROCEED</ion-button>\n    </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/assessment/companionship/companionship-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/assessment/companionship/companionship-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: CompanionshipPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanionshipPageRoutingModule", function() { return CompanionshipPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _companionship_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./companionship.page */ "./src/app/pages/assessment/companionship/companionship.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





const routes = [
    {
        path: '',
        component: _companionship_page__WEBPACK_IMPORTED_MODULE_3__["CompanionshipPage"]
    }
];
let CompanionshipPageRoutingModule = class CompanionshipPageRoutingModule {
};
CompanionshipPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CompanionshipPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/assessment/companionship/companionship.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/assessment/companionship/companionship.module.ts ***!
  \************************************************************************/
/*! exports provided: CompanionshipPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanionshipPageModule", function() { return CompanionshipPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _companionship_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./companionship-routing.module */ "./src/app/pages/assessment/companionship/companionship-routing.module.ts");
/* harmony import */ var _companionship_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./companionship.page */ "./src/app/pages/assessment/companionship/companionship.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let CompanionshipPageModule = class CompanionshipPageModule {
};
CompanionshipPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _companionship_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompanionshipPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_companionship_page__WEBPACK_IMPORTED_MODULE_6__["CompanionshipPage"]]
    })
], CompanionshipPageModule);



/***/ }),

/***/ "./src/app/pages/assessment/companionship/companionship.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/assessment/companionship/companionship.page.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvY29tcGFuaW9uc2hpcC9jb21wYW5pb25zaGlwLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/assessment/companionship/companionship.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/assessment/companionship/companionship.page.ts ***!
  \**********************************************************************/
/*! exports provided: CompanionshipPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanionshipPage", function() { return CompanionshipPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _assessment_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assessment-service.service */ "./src/app/pages/assessment/assessment-service.service.ts");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/pages/dataservice.service.ts");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let CompanionshipPage = class CompanionshipPage {
    constructor(dataService, assessmentService, navCtrl, imagePicker, formBuilder) {
        this.dataService = dataService;
        this.assessmentService = assessmentService;
        this.navCtrl = navCtrl;
        this.imagePicker = imagePicker;
        this.formBuilder = formBuilder;
        this.imageList = [];
        this.companionshipForm = this.formBuilder.group({});
    }
    ngOnInit() {
    }
    addImage() {
        let options = {
            maximumImagesCount: 4,
        };
        this.imagePicker.getPictures(options).then((results) => {
            console.log(results);
            for (var i = 0; i < results.length; i++) {
                this.imageList.push(results[i]);
            }
        }, (err) => { });
    }
    removeImg(i) {
        console.log("*", i);
        this.imageList.splice(i, 1);
    }
    generateClick(item) {
        this.companionshipForm.controls[item].setValue(!this.companionshipForm.controls[item].value);
    }
    save() {
        if (this.stateObject == null) {
            this.stateObject = {};
        }
        this.stateObject.COMPANIONSHIP = this.companionshipForm.value;
        this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
            console.log(response);
            this.navCtrl.navigateForward(['/assessment/assessmentbar']);
        });
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.careCircleId = yield this.assessmentService.getCareCircleId();
            this.userId = yield this.dataService.getUserInfo();
            this.userId = this.userId.userId;
            const key = 'COMPANIONSHIP';
            this.companionshipForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
            this.assessmentService.getAssessmentStateObject().then((data) => {
                console.log(data);
                // first time load
                this.stateObject = data.assessmentValues.CARE_NEEDS;
                if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null) {
                    // data is present
                    Object.keys(this.stateObject[key]).forEach((element) => {
                        this.companionshipForm.addControl(element, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.stateObject[key][element]));
                    });
                }
                else {
                    // data is not present
                    this.companionshipForm.addControl('instructions', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
                    data.assessmentConfiguration.CARE_NEEDS[key].fav_activities.forEach(element => {
                        this.companionshipForm.addControl(element, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
                    });
                }
                this.favItemList = data.assessmentConfiguration.CARE_NEEDS[key].fav_activities;
            });
        });
    }
};
CompanionshipPage.ctorParameters = () => [
    { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_4__["DataserviceService"] },
    { type: _assessment_service_service__WEBPACK_IMPORTED_MODULE_3__["AssessmentServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
CompanionshipPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companionship',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./companionship.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/companionship/companionship.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./companionship.page.scss */ "./src/app/pages/assessment/companionship/companionship.page.scss")).default]
    })
], CompanionshipPage);



/***/ })

}]);
//# sourceMappingURL=pages-assessment-companionship-companionship-module-es2015.js.map