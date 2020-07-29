(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hamburgermenu-medication-medication-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/medication/medication.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/medication/medication.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <m-backbutton></m-backbutton>\n            </ion-buttons>\n        </ion-toolbar> \n        </ion-col>\n        <ion-col size=\"5\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Medication</ion-text>\n          </div> \n        </ion-col> \n      </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content> \n  <ion-grid fixed class=\"content\">\n    <!-- <ion-item lines=\"none\" >\n      <ion-button id=\"btn1\">Today's</ion-button>\n      <ion-button id=\"btn2\">All</ion-button>\n    </ion-item>\n\n    <ion-toggle></ion-toggle> -->\n\n  \n     \n  </ion-grid>\n  <ion-grid>\n      <div id=\"button\">\n          <ion-button type=\"submit\" class=\"btnblue\" expand=\"block\">ADD MEDICINE </ion-button>\n      </div>\n  </ion-grid>\n</ion-content>\n\n\n\n");

/***/ }),

/***/ "./src/app/pages/hamburgermenu/medication/medication-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/hamburgermenu/medication/medication-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MedicationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationPageRoutingModule", function() { return MedicationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _medication_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medication.page */ "./src/app/pages/hamburgermenu/medication/medication.page.ts");




const routes = [
    {
        path: '',
        component: _medication_page__WEBPACK_IMPORTED_MODULE_3__["MedicationPage"]
    }
];
let MedicationPageRoutingModule = class MedicationPageRoutingModule {
};
MedicationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MedicationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/hamburgermenu/medication/medication.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/hamburgermenu/medication/medication.module.ts ***!
  \*********************************************************************/
/*! exports provided: MedicationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationPageModule", function() { return MedicationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _medication_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./medication-routing.module */ "./src/app/pages/hamburgermenu/medication/medication-routing.module.ts");
/* harmony import */ var _medication_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./medication.page */ "./src/app/pages/hamburgermenu/medication/medication.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let MedicationPageModule = class MedicationPageModule {
};
MedicationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _medication_routing_module__WEBPACK_IMPORTED_MODULE_5__["MedicationPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_medication_page__WEBPACK_IMPORTED_MODULE_6__["MedicationPage"]]
    })
], MedicationPageModule);



/***/ }),

/***/ "./src/app/pages/hamburgermenu/medication/medication.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/hamburgermenu/medication/medication.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  padding: 0px !important;\n  --ion-safe-area-right: 0;\n  --ion-safe-area-left: 0;\n  border-radius: 8px;\n  border-color: red;\n  border-style: solid;\n  border-width: 1px;\n}\nion-item ion-button {\n  height: 44px;\n  width: 163.5px;\n  margin: 0px;\n}\n.content {\n  padding-top: 24px;\n  padding-right: 24px;\n  padding-left: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvaGFtYnVyZ2VybWVudS9tZWRpY2F0aW9uL21lZGljYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oYW1idXJnZXJtZW51L21lZGljYXRpb24vbWVkaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBSUQsbUJBQUE7RUFDQSxpQkFBQTtBQ0ZEO0FER0M7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNESDtBREtBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oYW1idXJnZXJtZW51L21lZGljYXRpb24vbWVkaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIC0taW9uLXNhZmUtYXJlYS1yaWdodDogMDtcbiAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIFxuIC8vIG1hcmdpbi10b3A6IDhweDtcbiAvLyBtYXJnaW4tYm90dG9tOiA0MHB4O1xuIGJvcmRlci1zdHlsZTogc29saWQ7XG4gYm9yZGVyLXdpZHRoOiAxcHg7XG4gaW9uLWJ1dHRvbntcbiAgIGhlaWdodDogNDRweDtcbiAgIHdpZHRoOiAxNjMuNXB4O1xuICAgbWFyZ2luOiAwcHg7XG4gfVxufVxuXG4uY29udGVudHtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbn0iLCJpb24taXRlbSB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IDA7XG4gIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cbmlvbi1pdGVtIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHdpZHRoOiAxNjMuNXB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgcGFkZGluZy1yaWdodDogMjRweDtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/hamburgermenu/medication/medication.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/hamburgermenu/medication/medication.page.ts ***!
  \*******************************************************************/
/*! exports provided: MedicationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationPage", function() { return MedicationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MedicationPage = class MedicationPage {
    constructor() {
        this.selectedDay = "Mon";
        this.timeLine = [{}];
        this.daysList = [
            {
                name: "Mon",
            },
            {
                name: "Tue",
            },
        ];
    }
    segmentChanged(ev) {
        console.log('Segment changed', ev);
    }
    ngOnInit() {
    }
    selectChip(item) {
        this.selectedDay = item.name;
        this.timeLine.forEach(element => {
            //if(element.name){
            //  element.card=!element.card
            //}
        });
    }
};
MedicationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medication',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./medication.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/medication/medication.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./medication.page.scss */ "./src/app/pages/hamburgermenu/medication/medication.page.scss")).default]
    })
], MedicationPage);



/***/ })

}]);
//# sourceMappingURL=pages-hamburgermenu-medication-medication-module-es2015.js.map