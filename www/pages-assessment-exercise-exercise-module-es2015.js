(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-exercise-exercise-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/exercise/exercise.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/exercise/exercise.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  \n  <ion-toolbar class=\"headtoolbar\">\n    \n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <!-- <ion-back-button style=\"float:left\" mode=\"md\" color=\"mdblack\" icon=\"chevron-back-outline\" defaultHref=\"admin-sign-in\"></ion-back-button> -->\n            <m-backbutton></m-backbutton>\n            </ion-buttons>\n        </ion-toolbar> \n        </ion-col>\n        <ion-col size=\"8\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Exercise/PT</ion-text>\n          </div> \n        </ion-col>\n      </ion-row>\n\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content [formGroup] = \"exerciseForm\">\n  <ion-grid style=\"padding:24px;height:fit-content\">\n    <!-- Therapy-->\n\n    <div style=\"padding-top: 0px; margin-bottom: 15px;\">\n      <ion-label style=\"font-size: 16px; line-height: 19px;\"\n        >Type of Therapy</ion-label\n      >\n    </div>\n\n    <!-- CHECKBOX 1 -->\n\n    <ion-row style=\"align-items: center; margin-top: 5px;\" *ngFor=\"let therapyType of therapyTypeList\">\n      <ion-col  size=\"1\">\n        <div style=\"padding-left: 3px;\">\n          <ion-checkbox #therapyType color=\"mwhite\" checked=\"false\" [formControlName]=\"therapyType\"></ion-checkbox>\n        </div>\n      </ion-col>\n      <ion-col\n        (click)=\"generateClick(therapyType)\"\n        size=\"11\"\n        style=\"padding-top: 0px;\"\n      >\n        <div>\n          <ion-text\n            style=\"\n              font-size: 16px;\n              line-height: 19px;\n              font-weight: 300;\n              margin-left: 12px;\n            \"\n            color=\"mdblack\"\n            >{{therapyType}}</ion-text\n          >\n        </div>\n      </ion-col>\n    </ion-row>\n    \n    <!-- INSTRUCTIONS -->\n\n    <div class=\"nametag\" style=\"margin-top: 15px;\" *ngIf=\"readyFlag\">\n      <ion-text position=\"floating\" id=\"tag\">Instructions(optional)</ion-text>\n    </div>\n    <div>\n      <ion-textarea\n        *ngIf=\"readyFlag\"\n        style=\"height: 120px;\"\n        class=\"input\"\n        placeholder=\"Write here\"\n        formControlName = \"instructions\"\n      ></ion-textarea>\n    </div>\n\n    <!-- ADD IMAGE -->\n    <app-addimage (click)=\"addImage()\"></app-addimage>\n    <ion-text>\n      <div class=\"imagelist\" *ngFor=\"let img of imageList; let j=index\">\n        <ion-grid fixed class=\"ion-no-padding\">\n          <ion-row>\n            <ion-col style=\"padding-top: 11px;\" size=\"8\"><span>{{img.substring(img.lastIndexOf(\"/\") + 1) | slice:0:12}}</span></ion-col>\n            <ion-col size=\"4\">\n              <ion-button\n              fill=\"clear\"\n              shape=\"round\"\n              class=\"dltbtn\"\n              (click)=\"removeImg(j)\"        >\n              <ion-icon slot=\"icon-only\" src=\"assets/trash.svg\"></ion-icon>\n              Delete\n            </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid> \n      </div>\n    </ion-text>\n\n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <div id=\"button\">\n    <ion-button [disabled]=\"false\" class=\"btnblue\" type=\"submit\"  id=\"signup\" (click) = \"save()\">SAVE & PROCEED</ion-button>\n  </div>  \n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/assessment/exercise/exercise-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/assessment/exercise/exercise-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ExercisePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisePageRoutingModule", function() { return ExercisePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _exercise_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exercise.page */ "./src/app/pages/assessment/exercise/exercise.page.ts");




const routes = [
    {
        path: '',
        component: _exercise_page__WEBPACK_IMPORTED_MODULE_3__["ExercisePage"]
    }
];
let ExercisePageRoutingModule = class ExercisePageRoutingModule {
};
ExercisePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExercisePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/assessment/exercise/exercise.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/assessment/exercise/exercise.module.ts ***!
  \**************************************************************/
/*! exports provided: ExercisePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisePageModule", function() { return ExercisePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _exercise_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exercise-routing.module */ "./src/app/pages/assessment/exercise/exercise-routing.module.ts");
/* harmony import */ var _exercise_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exercise.page */ "./src/app/pages/assessment/exercise/exercise.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let ExercisePageModule = class ExercisePageModule {
};
ExercisePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _exercise_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExercisePageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_exercise_page__WEBPACK_IMPORTED_MODULE_6__["ExercisePage"]]
    })
], ExercisePageModule);



/***/ }),

/***/ "./src/app/pages/assessment/exercise/exercise.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/assessment/exercise/exercise.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvZXhlcmNpc2UvZXhlcmNpc2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/assessment/exercise/exercise.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/assessment/exercise/exercise.page.ts ***!
  \************************************************************/
/*! exports provided: ExercisePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisePage", function() { return ExercisePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _assessment_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assessment-service.service */ "./src/app/pages/assessment/assessment-service.service.ts");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/pages/dataservice.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/__ivy_ngcc__/ngx/index.js");










let ExercisePage = class ExercisePage {
    constructor(dataService, router, apiService, location, navCtrl, imagePicker, assessmentService, formBuilder) {
        this.dataService = dataService;
        this.router = router;
        this.apiService = apiService;
        this.location = location;
        this.navCtrl = navCtrl;
        this.imagePicker = imagePicker;
        this.assessmentService = assessmentService;
        this.formBuilder = formBuilder;
        this.imageList = [];
        this.exerciseForm = this.formBuilder.group({});
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
    save() {
        if (this.stateObject == null) {
            this.stateObject = {};
        }
        this.stateObject.EXERCISE = this.exerciseForm.value;
        this.assessmentService.saveAssessmentState(this.careCircleId, 'CARE_NEEDS', this.userId, this.stateObject).then((response) => {
            console.log(response);
            //this.router.navigate(['/assessment/assessmentbar']);
            this.navCtrl.navigateForward(['/assessment/assessmentbar']);
        });
    }
    generateClick(item) {
        this.exerciseForm.controls[item].setValue(!this.exerciseForm.controls[item].value);
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.readyFlag = false;
            this.careCircleId = yield this.assessmentService.getCareCircleId();
            this.userId = yield this.dataService.getUserInfo();
            this.userId = this.userId.userId;
            const key = 'EXERCISE';
            this.exerciseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
            this.assessmentService.getAssessmentStateObject().then((data) => {
                console.log("came here 33", data);
                // first time load
                this.stateObject = data.assessmentValues.CARE_NEEDS;
                if (data.assessmentValues.CARE_NEEDS != null && data.assessmentValues.CARE_NEEDS[key] != null) {
                    Object.keys(data.assessmentValues.CARE_NEEDS[key]).forEach((element) => {
                        this.exerciseForm.addControl(element, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](data.assessmentValues.CARE_NEEDS[key][element]));
                    });
                }
                else {
                    // data is not present
                    this.exerciseForm.addControl('instructions', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
                    data.assessmentConfiguration.CARE_NEEDS[key].therapy_types.forEach(element => {
                        this.exerciseForm.addControl(element, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]());
                    });
                }
                this.therapyTypeList = data.assessmentConfiguration.CARE_NEEDS[key].therapy_types;
                this.readyFlag = true;
            });
        });
    }
};
ExercisePage.ctorParameters = () => [
    { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_7__["DataserviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_http_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"] },
    { type: _assessment_service_service__WEBPACK_IMPORTED_MODULE_4__["AssessmentServiceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ExercisePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exercise',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./exercise.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/exercise/exercise.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./exercise.page.scss */ "./src/app/pages/assessment/exercise/exercise.page.scss")).default]
    })
], ExercisePage);



/***/ })

}]);
//# sourceMappingURL=pages-assessment-exercise-exercise-module-es2015.js.map