(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-viewshoppinglist-viewshoppinglist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/viewshoppinglist/viewshoppinglist.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/viewshoppinglist/viewshoppinglist.page.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n    \n      <ion-row>\n        <ion-col size=\"2\">\n          <ion-toolbar>\n            <ion-buttons slot=\"start\">\n              <m-backbutton></m-backbutton>\n            </ion-buttons>\n        </ion-toolbar> \n        </ion-col>\n        <ion-col size=\"5\">\n          <div>\n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Shopping List</ion-text>\n           \n          </div> \n        </ion-col>\n        <ion-col>\n          <div>\n          <ion-text \n          style=\"float: right;\n          font-weight: 600;\n          font-size: 12px;\n          line-height: 14px;\n          color: #4137FF;\n          margin-top: 3px;\">DELETE\n                    </ion-text>\n                </div>\n            </ion-col>\n\n        </ion-row>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content scrollable>\n    <ion-grid style=\"\n      padding-top: 24px;\n      padding-left: 16px;\n      padding-right: 16px;\n      padding-bottom: 13px;\n      height: auto;\n      margin-bottom: 73px;\n    \">\n\n        <ion-row>\n            <ion-col>\n                <ion-text style=\"font-size: 14px;line-height: 17px;color: #1A1A1A;\">Product Name</ion-text>\n            </ion-col>\n            <ion-col>\n                <ion-text style=\"float:right;font-size: 14px;line-height: 17px;color: #1A1A1A;\">Specification</ion-text>\n            </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\">\n\n        <div *ngFor=\"let item of shoppingitems\">\n            <ion-row>\n                <ion-col class=\"setpadding\">\n                    <ion-text style=\"font-size: 14px;line-height: 17px;color: #1A1A1A;font-weight: 500;\">{{item.name}}</ion-text>\n                </ion-col>\n                <ion-col class=\"setpadding\">\n                    <ion-text style=\"float:right;font-size: 14px;line-height: 17px;color: #7E7E7E;\">{{item.brand}}</ion-text>\n                </ion-col>\n            </ion-row>\n            <hr class=\"solid\" style=\"margin-top: 16px;margin-bottom:16px;\">\n        </div>\n    </ion-grid>\n</ion-content>\n\n<ion-footer>\n    <ion-grid style=\"padding-left: 24px;padding-right: 24px;padding-top: 16px;padding-bottom: 16px;\">\n        <!-- BUTTON -->\n        <div id=\"button\">\n            <ion-row style=\"align-items: center;\">\n                <ion-col size=\"6\">\n                    <ion-button class=\"btn50white\" [disabled]=\"false\" routerLink=\"/assessment/addshoppinglist\">ADD MORE</ion-button>\n                </ion-col>\n                <ion-col size=\"6\">\n                    <ion-button class=\"btn50blue\" [disabled]=\"false\" type=\"submit\" (click) = \"save()\">SAVE & PROCEED</ion-button>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-grid>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/assessment/viewshoppinglist/viewshoppinglist-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/assessment/viewshoppinglist/viewshoppinglist-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ViewshoppinglistPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewshoppinglistPageRoutingModule", function() { return ViewshoppinglistPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _viewshoppinglist_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewshoppinglist.page */ "./src/app/pages/assessment/viewshoppinglist/viewshoppinglist.page.ts");




const routes = [
    {
        path: '',
        component: _viewshoppinglist_page__WEBPACK_IMPORTED_MODULE_3__["ViewshoppinglistPage"]
    }
];
let ViewshoppinglistPageRoutingModule = class ViewshoppinglistPageRoutingModule {
};
ViewshoppinglistPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewshoppinglistPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/assessment/viewshoppinglist/viewshoppinglist.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/assessment/viewshoppinglist/viewshoppinglist.module.ts ***!
  \******************************************************************************/
/*! exports provided: ViewshoppinglistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewshoppinglistPageModule", function() { return ViewshoppinglistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _viewshoppinglist_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewshoppinglist-routing.module */ "./src/app/pages/assessment/viewshoppinglist/viewshoppinglist-routing.module.ts");
/* harmony import */ var _viewshoppinglist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewshoppinglist.page */ "./src/app/pages/assessment/viewshoppinglist/viewshoppinglist.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let ViewshoppinglistPageModule = class ViewshoppinglistPageModule {
};
ViewshoppinglistPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _viewshoppinglist_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewshoppinglistPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_viewshoppinglist_page__WEBPACK_IMPORTED_MODULE_6__["ViewshoppinglistPage"]]
    })
], ViewshoppinglistPageModule);



/***/ }),

/***/ "./src/app/pages/assessment/viewshoppinglist/viewshoppinglist.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/assessment/viewshoppinglist/viewshoppinglist.page.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#button {\n  height: 76px;\n  background-color: white;\n  left: 0px;\n  bottom: 0px;\n  position: fixed;\n  box-shadow: 0px -2px 8px rgba(65, 55, 255, 0.08);\n  z-index: 2;\n  padding: 0px;\n}\n\n.btn50blue {\n  outline: none;\n  border-radius: 8px;\n  --border-radius: 8px;\n  color: white;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 16px;\n  font-weight: 600;\n  --box-shadow: none;\n  width: 156px;\n  float: right;\n  height: 44px;\n  margin-top: 11px;\n  margin-right: 24px;\n}\n\n.btn50white {\n  --color:#4137FF;\n  --background:#ffffff;\n  --border-radius: 8px;\n  --border-color:#4137FF;\n  border-radius: 8px;\n  border-style: solid;\n  border-width: thin;\n  font-size: 14px;\n  font-style: normal;\n  line-height: 16px;\n  font-weight: 600;\n  --box-shadow: none;\n  width: 156px;\n  height: 44px;\n  margin-top: 11px;\n  margin-left: 24px;\n}\n\ndiv {\n  padding: 0px;\n}\n\n.setpadding {\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC92aWV3c2hvcHBpbmdsaXN0L3ZpZXdzaG9wcGluZ2xpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9hc3Nlc3NtZW50L3ZpZXdzaG9wcGluZ2xpc3Qvdmlld3Nob3BwaW5nbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFBO0VBRUEsdUJBQUE7RUFDQyxTQUFBO0VBQ0QsV0FBQTtFQUNBLGVBQUE7RUFDQSxnREFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDREo7O0FES0E7RUFFSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFHQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0E7RUFFSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDUko7O0FEV0E7RUFDSSxZQUFBO0FDUko7O0FEV0E7RUFDSSxZQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hc3Nlc3NtZW50L3ZpZXdzaG9wcGluZ2xpc3Qvdmlld3Nob3BwaW5nbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnV0dG9ue1xuICAgIFxuICAgIGhlaWdodDogNzZweDtcbiAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgICBsZWZ0IDogMHB4O1xuICAgIGJvdHRvbTowcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJveC1zaGFkb3c6ICAwcHggLTJweCA4cHggcmdiYSg2NSwgNTUsIDI1NSwgMC4wOCk7XG4gICAgei1pbmRleDogMjtcbiAgICBwYWRkaW5nOjBweDtcbn1cblxuXG4uYnRuNTBibHVle1xuXG4gICAgb3V0bGluZTpub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgXG4gICAgXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcblxuICAgIHdpZHRoOiAxNTZweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIG1hcmdpbi10b3A6IDExcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xufVxuXG4uYnRuNTB3aGl0ZXtcblxuICAgIC0tY29sb3I6IzQxMzdGRjtcbiAgICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDsgXG4gICAgLS1ib3JkZXItY29sb3I6IzQxMzdGRjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcblxuICAgIHdpZHRoOiAxNTZweDtcbiAgICBoZWlnaHQ6IDQ0cHg7XG4gICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbn1cblxuZGl2e1xuICAgIHBhZGRpbmc6MHB4O1xufVxuXG4uc2V0cGFkZGluZ3tcbiAgICBwYWRkaW5nOjBweDtcbn0iLCIjYnV0dG9uIHtcbiAgaGVpZ2h0OiA3NnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbGVmdDogMHB4O1xuICBib3R0b206IDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3gtc2hhZG93OiAwcHggLTJweCA4cHggcmdiYSg2NSwgNTUsIDI1NSwgMC4wOCk7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmJ0bjUwYmx1ZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIHdpZHRoOiAxNTZweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbn1cblxuLmJ0bjUwd2hpdGUge1xuICAtLWNvbG9yOiM0MTM3RkY7XG4gIC0tYmFja2dyb3VuZDojZmZmZmZmO1xuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcbiAgLS1ib3JkZXItY29sb3I6IzQxMzdGRjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICB3aWR0aDogMTU2cHg7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG5cbmRpdiB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnNldHBhZGRpbmcge1xuICBwYWRkaW5nOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/assessment/viewshoppinglist/viewshoppinglist.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/assessment/viewshoppinglist/viewshoppinglist.page.ts ***!
  \****************************************************************************/
/*! exports provided: ViewshoppinglistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewshoppinglistPage", function() { return ViewshoppinglistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/pages/dataservice.service.ts");
/* harmony import */ var _assessment_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assessment-service.service */ "./src/app/pages/assessment/assessment-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let ViewshoppinglistPage = class ViewshoppinglistPage {
    constructor(dataService, assessmentService, navCtrl, router) {
        this.dataService = dataService;
        this.assessmentService = assessmentService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.shoppingitems = [
            { name: 'Cotton', brand: 'Hightech' },
            { name: 'Tissue Roll', brand: 'Apple' },
            { name: 'Headphones', brand: 'Boltz' },
        ];
    }
    ngOnInit() {
    }
    save() {
        this.navCtrl.navigateForward(['/assessment/assessmentbar']);
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.key = 'SHOPPING';
            this.assessmentService.getAssessmentStateObject().then((data) => {
                console.log(data);
                this.shoppingitems = data.assessmentValues.CARE_NEEDS[this.key];
            });
        });
    }
};
ViewshoppinglistPage.ctorParameters = () => [
    { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"] },
    { type: _assessment_service_service__WEBPACK_IMPORTED_MODULE_3__["AssessmentServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ViewshoppinglistPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewshoppinglist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./viewshoppinglist.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/viewshoppinglist/viewshoppinglist.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./viewshoppinglist.page.scss */ "./src/app/pages/assessment/viewshoppinglist/viewshoppinglist.page.scss")).default]
    })
], ViewshoppinglistPage);



/***/ })

}]);
//# sourceMappingURL=pages-assessment-viewshoppinglist-viewshoppinglist-module-es2015.js.map