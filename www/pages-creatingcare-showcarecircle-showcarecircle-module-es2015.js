(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-creatingcare-showcarecircle-showcarecircle-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/showcarecircle/showcarecircle.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/showcarecircle/showcarecircle.page.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\n    <ion-toolbar class=\"headtoolbar\" style=\"padding-left:12px\">\n\n        <ion-row>\n            <ion-col size=\"1.6\">\n                <ion-toolbar>\n                    <ion-buttons slot=\"start\">\n                        <m-backbutton></m-backbutton>\n                    </ion-buttons>\n                </ion-toolbar>\n\n            </ion-col>\n            <ion-col size=\"8\">\n                <div>\n                    <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Care Circles</ion-text>\n\n                </div>\n            </ion-col>\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-grid style=\"padding-top:14px;padding-left: 6px;padding-right: 6px;\">\n\n        <ion-card (click)=\"careCircleDetails(careCircle['careCircleId'],careCircle['careCircleName'])\" class=\"cardinfo\" *ngFor=\"let careCircle of careCircleList\">\n\n            <ion-row>\n                <ion-col id=\"infolabel\">\n                    <ion-text style=\"text-transform: capitalize;\"><b>{{careCircle['careCircleName']}}'s Care Circle</b></ion-text>\n                    <ion-text><br>{{careCircle['members'].length}} Members</ion-text>\n                </ion-col>\n                <ion-col style=\"padding-top:24px;padding-right:16px ;\">\n                    <ion-img style=\"float: right;\" src=\"../assets/MariposaIcons/forwardarrow.svg\" ></ion-img>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col style=\"margin-top:2px;padding-top:0px;\" id=\"infolabel\">\n                    <ion-text style=\"font-size: 16px;line-height:19px ;font-weight:300 ;color:#7E7E7E\">\n                        {{ getMemberNames(careCircle.members) }}\n                    </ion-text>\n                </ion-col>\n            </ion-row>\n\n\n        </ion-card>\n\n    \n    </ion-grid>\n\n    <ion-grid>\n        <div id=\"button\">\n            <ion-button type=\"submit\" class=\"btnwhite\" expand=\"block\" (click)=\"createCareCircle()\">CREATE NEW CARE CIRCLE</ion-button>\n        </div>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/creatingcare/showcarecircle/showcarecircle-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/creatingcare/showcarecircle/showcarecircle-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ShowcarecirclePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcarecirclePageRoutingModule", function() { return ShowcarecirclePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _showcarecircle_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showcarecircle.page */ "./src/app/pages/creatingcare/showcarecircle/showcarecircle.page.ts");




const routes = [
    {
        path: '',
        component: _showcarecircle_page__WEBPACK_IMPORTED_MODULE_3__["ShowcarecirclePage"]
    }
];
let ShowcarecirclePageRoutingModule = class ShowcarecirclePageRoutingModule {
};
ShowcarecirclePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShowcarecirclePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/creatingcare/showcarecircle/showcarecircle.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/creatingcare/showcarecircle/showcarecircle.module.ts ***!
  \****************************************************************************/
/*! exports provided: ShowcarecirclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcarecirclePageModule", function() { return ShowcarecirclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _showcarecircle_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showcarecircle-routing.module */ "./src/app/pages/creatingcare/showcarecircle/showcarecircle-routing.module.ts");
/* harmony import */ var _showcarecircle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showcarecircle.page */ "./src/app/pages/creatingcare/showcarecircle/showcarecircle.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let ShowcarecirclePageModule = class ShowcarecirclePageModule {
};
ShowcarecirclePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _showcarecircle_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowcarecirclePageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_showcarecircle_page__WEBPACK_IMPORTED_MODULE_6__["ShowcarecirclePage"]]
    })
], ShowcarecirclePageModule);



/***/ }),

/***/ "./src/app/pages/creatingcare/showcarecircle/showcarecircle.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/creatingcare/showcarecircle/showcarecircle.page.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardinfo {\n  box-shadow: none;\n  border-style: solid;\n  border-width: thin;\n  border-radius: 8px;\n  border-color: #B8B8B8;\n  height: auto;\n  width: auto;\n  padding-bottom: 10px;\n}\n.cardinfo ion-button {\n  height: 44px;\n  width: auto;\n  margin-left: 16px;\n  margin-bottom: 24px;\n  margin-top: 6px;\n}\n.cardinfo ion-chip {\n  height: 28px;\n  width: auto;\n  text-align: center;\n  margin-right: 12px;\n  margin-top: 7px;\n}\n.cardinfo ion-chip ion-label {\n  font-size: 12px;\n  list-style: 14px;\n  color: mdgrey;\n}\n.cardinfo ion-text {\n  color: black;\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: normal;\n  font-style: normal;\n}\n.cardinfo #email {\n  font-size: 14px;\n  line-height: 20px;\n  font-style: normal;\n  font-weight: normal;\n}\n.cardinfo #infolabel {\n  margin-left: 16px;\n  margin-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY3JlYXRpbmdjYXJlL3Nob3djYXJlY2lyY2xlL3Nob3djYXJlY2lyY2xlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3JlYXRpbmdjYXJlL3Nob3djYXJlY2lyY2xlL3Nob3djYXJlY2lyY2xlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FDQUo7QURFSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNBUjtBRElJO0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0hSO0FETVE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDTFo7QURVSTtFQUVJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDVFI7QURZSTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNYUjtBRGNJO0VBRUksaUJBQUE7RUFDQSxlQUFBO0FDYlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jcmVhdGluZ2NhcmUvc2hvd2NhcmVjaXJjbGUvc2hvd2NhcmVjaXJjbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRpbmZve1xuXG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjQjhCOEI4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDphdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6NnB4O1xuXG4gICAgfVxuXG4gICAgaW9uLWNoaXB7XG5cbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgICAgXG4gICAgICAgXG4gICAgICAgIGlvbi1sYWJlbHtcblxuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6IG1kZ3JleTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgaW9uLXRleHR7XG5cbiAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAjZW1haWx7XG5cbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgICNpbmZvbGFiZWx7XG5cbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDdweDtcbiAgICAgICAgXG4gICAgfVxufVxuXG5pb24taGVhZGVye31cblxuXG4iLCIuY2FyZGluZm8ge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWNvbG9yOiAjQjhCOEI4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jYXJkaW5mbyBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5jYXJkaW5mbyBpb24tY2hpcCB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG4uY2FyZGluZm8gaW9uLWNoaXAgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaXN0LXN0eWxlOiAxNHB4O1xuICBjb2xvcjogbWRncmV5O1xufVxuLmNhcmRpbmZvIGlvbi10ZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4uY2FyZGluZm8gI2VtYWlsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmNhcmRpbmZvICNpbmZvbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/creatingcare/showcarecircle/showcarecircle.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/creatingcare/showcarecircle/showcarecircle.page.ts ***!
  \**************************************************************************/
/*! exports provided: ShowcarecirclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcarecirclePage", function() { return ShowcarecirclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/pages/dataservice.service.ts");
/* harmony import */ var _creatingcare_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../creatingcare.service */ "./src/app/pages/creatingcare/creatingcare.service.ts");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let ShowcarecirclePage = class ShowcarecirclePage {
    constructor(_dataService, _creatingCareService, _apiService, navCtrl) {
        this._dataService = _dataService;
        this._creatingCareService = _creatingCareService;
        this._apiService = _apiService;
        this.navCtrl = navCtrl;
    }
    populateCareCircle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userData = yield this._dataService.getUserInfo();
            this._apiService.get('getCareCircles', { userId: userData.userId }).then((data) => {
                this.careCircleList = data;
                this._creatingCareService.setAvailableCareCircleDetails(data);
            });
        });
    }
    careCircleDetails(careCircleId, careCircleName) {
        this._creatingCareService.setCareCircleId(careCircleId);
        this._creatingCareService.setCareCircleName(careCircleName);
        this.navCtrl.navigateForward(['carecircle/list']);
    }
    back() {
        this.navCtrl.back();
    }
    ngOnInit() {
        this.populateCareCircle();
    }
    createCareCircle() {
        this._dataService.setLastVisitedPage('carecircle/showcarecircle');
        this.navCtrl.navigateForward(['/carecircle']);
    }
    getMemberNames(members) {
        return members.map((member) => member.userName).join(', ');
    }
};
ShowcarecirclePage.ctorParameters = () => [
    { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"] },
    { type: _creatingcare_service__WEBPACK_IMPORTED_MODULE_3__["CreatingcareService"] },
    { type: src_app_http_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
ShowcarecirclePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-showcarecircle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./showcarecircle.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/showcarecircle/showcarecircle.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./showcarecircle.page.scss */ "./src/app/pages/creatingcare/showcarecircle/showcarecircle.page.scss")).default]
    })
], ShowcarecirclePage);



/***/ })

}]);
//# sourceMappingURL=pages-creatingcare-showcarecircle-showcarecircle-module-es2015.js.map