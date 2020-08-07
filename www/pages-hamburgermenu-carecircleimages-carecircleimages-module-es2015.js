(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-hamburgermenu-carecircleimages-carecircleimages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/carecircleimages/carecircleimages.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/carecircleimages/carecircleimages.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar class=\"headtoolbar\">\n      <ion-row>\n          <ion-col size=\"2\">\n              <ion-toolbar>\n                  <ion-buttons slot=\"start\">\n                      <m-backbutton></m-backbutton>\n                  </ion-buttons>\n              </ion-toolbar>\n          </ion-col>\n          <ion-col size=\"8\">\n              <div>\n                  <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Care Circles</ion-text>\n              </div>\n          </ion-col>\n      </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid style=\"padding-top:14px;padding-left: 6px;padding-right: 6px;\">\n      <ion-card class=\"cardinfo\" *ngFor=\"let careCircle of careCircleList\">\n          <ion-row style=\"align-items: center;\">\n              <ion-col size=\"2.5\">\n                <ion-img class=\"image\" src=\"../assets/MariposaIcons/carecircle/adultimage60.png\"></ion-img>\n              </ion-col>\n\n              <ion-col>\n                <ion-row>\n                    <ion-col id=\"infolabel\">\n                        <ion-text><b>{{careCircle['careCircleName']}}'s Care Circle</b></ion-text>\n                        <ion-text><br>{{careCircle['members'].length}} Members</ion-text>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col style=\"margin-top:2px;padding-top:0px;\" id=\"infolabel\">\n                        <ion-text style=\"font-size: 16px;line-height:19px ;font-weight:300 ;color:#7E7E7E\">\n                            {{ getMemberNames(careCircle.members) }}\n                        </ion-text>\n                    </ion-col>\n                </ion-row>\n\n              </ion-col>\n\n              <ion-col size=\"1.5\">\n                <ion-img style=\"float: left;\" src=\"../assets/MariposaIcons/forwardarrow.svg\" (click)=\"careCircleDetails(careCircle['careCircleId'],careCircle['careCircleName'])\"></ion-img>\n              </ion-col>\n          </ion-row>\n      </ion-card>\n\n  </ion-grid>\n\n  <ion-grid>\n      <div id=\"button\">\n          <ion-button type=\"submit\" class=\"btnwhite\" expand=\"block\" (click)=\"createCareCircle()\">CREATE NEW CARE CIRCLE</ion-button>\n      </div>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/hamburgermenu/carecircleimages/carecircleimages-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/hamburgermenu/carecircleimages/carecircleimages-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: CarecircleimagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarecircleimagesPageRoutingModule", function() { return CarecircleimagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _carecircleimages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carecircleimages.page */ "./src/app/pages/hamburgermenu/carecircleimages/carecircleimages.page.ts");




const routes = [
    {
        path: '',
        component: _carecircleimages_page__WEBPACK_IMPORTED_MODULE_3__["CarecircleimagesPage"]
    }
];
let CarecircleimagesPageRoutingModule = class CarecircleimagesPageRoutingModule {
};
CarecircleimagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CarecircleimagesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/hamburgermenu/carecircleimages/carecircleimages.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/hamburgermenu/carecircleimages/carecircleimages.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CarecircleimagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarecircleimagesPageModule", function() { return CarecircleimagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _carecircleimages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carecircleimages-routing.module */ "./src/app/pages/hamburgermenu/carecircleimages/carecircleimages-routing.module.ts");
/* harmony import */ var _carecircleimages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carecircleimages.page */ "./src/app/pages/hamburgermenu/carecircleimages/carecircleimages.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");








let CarecircleimagesPageModule = class CarecircleimagesPageModule {
};
CarecircleimagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _carecircleimages_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarecircleimagesPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        declarations: [_carecircleimages_page__WEBPACK_IMPORTED_MODULE_6__["CarecircleimagesPage"]]
    })
], CarecircleimagesPageModule);



/***/ }),

/***/ "./src/app/pages/hamburgermenu/carecircleimages/carecircleimages.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/hamburgermenu/carecircleimages/carecircleimages.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cardinfo {\n  box-shadow: none;\n  border-style: solid;\n  border-width: thin;\n  border-radius: 8px;\n  border-color: #B8B8B8;\n  height: 98px;\n  width: auto;\n}\n.cardinfo .image {\n  width: 56px;\n  height: 56px;\n  float: right;\n}\n.cardinfo ion-button {\n  height: 44px;\n  width: auto;\n  margin-left: 16px;\n  margin-bottom: 24px;\n  margin-top: 6px;\n}\n.cardinfo ion-chip {\n  height: 28px;\n  width: auto;\n  text-align: center;\n  margin-right: 12px;\n  margin-top: 7px;\n}\n.cardinfo ion-chip ion-label {\n  font-size: 12px;\n  list-style: 14px;\n  color: mdgrey;\n}\n.cardinfo ion-text {\n  color: black;\n  font-size: 16px;\n  line-height: 20px;\n  font-weight: normal;\n  font-style: normal;\n}\n.cardinfo #email {\n  font-size: 14px;\n  line-height: 20px;\n  font-style: normal;\n  font-weight: normal;\n}\n.cardinfo #infolabel {\n  margin-left: 16px;\n  margin-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvaGFtYnVyZ2VybWVudS9jYXJlY2lyY2xlaW1hZ2VzL2NhcmVjaXJjbGVpbWFnZXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9oYW1idXJnZXJtZW51L2NhcmVjaXJjbGVpbWFnZXMvY2FyZWNpcmNsZWltYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjtBREVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQVI7QURHSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNEUjtBREtJO0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0pSO0FET1E7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDTlo7QURXSTtFQUVJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDVlI7QURhSTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNaUjtBRGVJO0VBRUksaUJBQUE7RUFDQSxlQUFBO0FDZFIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oYW1idXJnZXJtZW51L2NhcmVjaXJjbGVpbWFnZXMvY2FyZWNpcmNsZWltYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZGluZm97XG5cbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXItY29sb3I6ICNCOEI4Qjg7XG4gICAgaGVpZ2h0OiA5OHB4O1xuICAgIHdpZHRoOmF1dG87XG5cbiAgICAuaW1hZ2V7XG4gICAgICAgIHdpZHRoOiA1NnB4O1xuICAgICAgICBoZWlnaHQ6NTZweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cblxuICAgIGlvbi1idXR0b257XG4gICAgICAgIGhlaWdodDogNDRweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOjZweDtcblxuICAgIH1cblxuICAgIGlvbi1jaGlwe1xuXG4gICAgICAgIGhlaWdodDogMjhweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgIFxuICAgICAgIFxuICAgICAgICBpb24tbGFiZWx7XG5cbiAgICAgICAgICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiBtZGdyZXk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGlvbi10ZXh0e1xuXG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgfVxuXG4gICAgI2VtYWlse1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAjaW5mb2xhYmVse1xuXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG4iLCIuY2FyZGluZm8ge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyLWNvbG9yOiAjQjhCOEI4O1xuICBoZWlnaHQ6IDk4cHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuLmNhcmRpbmZvIC5pbWFnZSB7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5jYXJkaW5mbyBpb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5jYXJkaW5mbyBpb24tY2hpcCB7XG4gIGhlaWdodDogMjhweDtcbiAgd2lkdGg6IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBtYXJnaW4tdG9wOiA3cHg7XG59XG4uY2FyZGluZm8gaW9uLWNoaXAgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaXN0LXN0eWxlOiAxNHB4O1xuICBjb2xvcjogbWRncmV5O1xufVxuLmNhcmRpbmZvIGlvbi10ZXh0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4uY2FyZGluZm8gI2VtYWlsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmNhcmRpbmZvICNpbmZvbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogN3B4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/hamburgermenu/carecircleimages/carecircleimages.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/hamburgermenu/carecircleimages/carecircleimages.page.ts ***!
  \*******************************************************************************/
/*! exports provided: CarecircleimagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarecircleimagesPage", function() { return CarecircleimagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/pages/dataservice.service.ts");
/* harmony import */ var _creatingcare_creatingcare_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../creatingcare/creatingcare.service */ "./src/app/pages/creatingcare/creatingcare.service.ts");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let CarecircleimagesPage = class CarecircleimagesPage {
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
CarecircleimagesPage.ctorParameters = () => [
    { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_2__["DataserviceService"] },
    { type: _creatingcare_creatingcare_service__WEBPACK_IMPORTED_MODULE_3__["CreatingcareService"] },
    { type: src_app_http_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
CarecircleimagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carecircleimages',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carecircleimages.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/hamburgermenu/carecircleimages/carecircleimages.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carecircleimages.page.scss */ "./src/app/pages/hamburgermenu/carecircleimages/carecircleimages.page.scss")).default]
    })
], CarecircleimagesPage);



/***/ })

}]);
//# sourceMappingURL=pages-hamburgermenu-carecircleimages-carecircleimages-module-es2015.js.map