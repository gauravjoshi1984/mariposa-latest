(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-creatingcare-addmembers-addmembers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/addmembers/addmembers.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/addmembers/addmembers.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n\n    <ion-toolbar class=\"headtoolbar\">\n        <ion-grid>\n            <ion-row style=\"align-items: center;\">\n                <ion-col>\n                    <div style=\"margin-top: 24px;\">\n                        <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Add Members</ion-text>\n                        <ion-text class= \"cap\" style=\"font-size:14px;\" color=\"mdgrey\"><br>({{careCircleName}}'s Care Circle)</ion-text>\n                    </div>\n                </ion-col>\n                <ion-col>\n                    <ion-icon style=\"zoom:1.2;color: black;float:right;margin-top: 18px;\" name=\"close-outline\" (click) = \"back()\"></ion-icon>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content fullscreen>\n\n    <ion-grid style=\"padding-top:32px;padding-left:24px;margin-bottom: 100px;\">\n        <form [formGroup]=\"memberForm\" (ngSubmit)=\"saveMember()\">\n\n           \n            <ion-text style=\"font-weight:300;font-size:16px;line-height:19px;\">Select Role</ion-text>\n\n            <ion-row style=\"margin-top: 2px;\">\n\n                <ion-col class=\"gencol\" size=\"3\">\n                    <div style=\"padding-top:3px;\">\n                        <ion-card class=\"genCard\" [class.selectedGen]=\"selectedType=='CAREGIVER'\" (click)=\"selectedType='CAREGIVER'\">\n                            <img src=\"assets/MariposaIcons/Caregiveroutline.svg\" alt=\"\">\n                        </ion-card>\n                    </div>\n                </ion-col>\n\n                <ion-col class=\"gencol\">\n                    <div style=\"padding-top:3px;\">\n                        <ion-card class=\"genCard\" [class.selectedGen]=\"selectedType=='FAMILY'\" (click)=\"selectedType='FAMILY'\">\n                            <img src=\"assets/MariposaIcons/FamilyfriendsOutline.svg\" alt=\"\">\n                        </ion-card>\n                    </div>\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n                <ion-col class=\"gencol\" size=\"3\">\n\n                    <!-- <ion-text [class.selectedGentext]=\"gen=='M'\"><h6 style=\"margin-top: 4px;font-size: 14px;line-height:17px;color:#7E7E7E;\">Caregiver</h6></ion-text> -->\n                    <span style=\"margin-top: 0px;font-size: 14px;line-height:17px;color:#7E7E7E;padding-left: 0px;\" [class.selectedGentext]=\"selectedType=='CAREGIVER'\">Caregiver</span>\n                </ion-col>\n                <ion-col class=\"gencol\">\n                    <span style=\"margin-top: 0px;font-size: 14px;line-height:17px;color:#7E7E7E;padding-left: 0px;\" [class.selectedGentext]=\"selectedType=='FAMILY'\">Family & Friends</span>\n                    <!-- <ion-text><h6 style=\"margin-top: 4px;font-size: 14px;line-height:17px;color:#7E7E7E;\">Family & Friends</h6></ion-text> -->\n                </ion-col>\n            </ion-row>\n\n\n\n            <div class=\"nametag\" style=\"margin-top: 5px;\">\n                <ion-text position=\"floating\" id=\"tag\">Name</ion-text>\n            </div>\n            <div>\n                <ion-input mode=\"md\" class=\"input\" placeholder=\"Enter full Name\" formControlName=\"memberName\"></ion-input>\n                <ion-item [hidden]=\"checkValidity(memberForm.controls.memberName)\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n                    <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n                    <ion-text class=“warning”>Invalid Name.</ion-text>\n                </ion-item>\n            </div>\n\n            <div class=\"nametag\">\n                <ion-text position=\"floating\" id=\"tag\">Relation</ion-text>\n            </div>\n            <div>\n                <ion-select interface=\"action-sheet\" mode=\"md\" class=\"input\" placeholder=\"Select Relation\" formControlName=\"memberRelation\">\n                    <ion-select-option *ngFor=\"let relation of relationList\" value=\"relation\" for=\"memberRelation\">{{relation}}</ion-select-option>\n                    <!-- <ion-select-option value=\"blonde\">Blonde</ion-select-option>\n        <ion-select-option value=\"black\">Black</ion-select-option>\n        <ion-select-option value=\"red\">Red</ion-select-option> -->\n                </ion-select>\n                <ion-item [hidden]=\"checkValidity(memberForm.controls.memberRelation)\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n                    <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n                    <ion-text class=“warning”>Select a relation.</ion-text>\n                </ion-item>\n            </div>\n\n            <div class=\"nametag\">\n                <ion-text position=\"floating\" id=\"tag\">Email ID</ion-text>\n            </div>\n            <div>\n                <ion-input mode=\"md\" class=\"input\" type=\"email\" placeholder=\"Enter email\" formControlName=\"memberEmail\"></ion-input>\n                <ion-item [hidden]=\"checkValidity(memberForm.controls.memberEmail)\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n                    <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n                    <ion-text class=“warning”>Invalid Email.</ion-text>\n                </ion-item>\n            </div>\n\n            <div class=\"nametag\">\n                <ion-text position=\"floating\" id=\"tag\">Mobile Number</ion-text>\n            </div>\n            <div>\n                <ion-input mode=\"md\" class=\"input\" type=\"number\" placeholder=\"Enter mobile number\" formControlName=\"memberMobileNumber\"></ion-input>\n                <ion-item [hidden]=\"checkValidity(memberForm.controls.memberMobileNumber)\" lines=\"none\" style=\"margin-top:-10px;margin-left:-10px;\">\n                    <ion-icon style=\"margin-right: 5px;\" name=\"alert-circle\"></ion-icon>\n                    <ion-text class=“warning”>Invalid Phone Number.</ion-text>\n                </ion-item>\n            </div>\n\n            <div id=\"button\">\n                <ion-button [disabled]=\"(memberForm.invalid || memberForm.pristene)\" class=\"btnblue\" type=\"submit\" id=\"signup\">ADD</ion-button>\n            </div>\n\n\n        </form>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/creatingcare/addmembers/addmembers-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/creatingcare/addmembers/addmembers-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AddmembersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmembersPageRoutingModule", function() { return AddmembersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _addmembers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addmembers.page */ "./src/app/pages/creatingcare/addmembers/addmembers.page.ts");




const routes = [
    {
        path: '',
        component: _addmembers_page__WEBPACK_IMPORTED_MODULE_3__["AddmembersPage"]
    }
];
let AddmembersPageRoutingModule = class AddmembersPageRoutingModule {
};
AddmembersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddmembersPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/creatingcare/addmembers/addmembers.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/creatingcare/addmembers/addmembers.module.ts ***!
  \********************************************************************/
/*! exports provided: AddmembersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmembersPageModule", function() { return AddmembersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _addmembers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addmembers-routing.module */ "./src/app/pages/creatingcare/addmembers/addmembers-routing.module.ts");
/* harmony import */ var _addmembers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addmembers.page */ "./src/app/pages/creatingcare/addmembers/addmembers.page.ts");







let AddmembersPageModule = class AddmembersPageModule {
};
AddmembersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _addmembers_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddmembersPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_addmembers_page__WEBPACK_IMPORTED_MODULE_6__["AddmembersPage"]]
    })
], AddmembersPageModule);



/***/ }),

/***/ "./src/app/pages/creatingcare/addmembers/addmembers.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/creatingcare/addmembers/addmembers.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-img {\n  height: 52px;\n}\n\nion-select {\n  padding-bottom: 8px;\n  padding-top: 8px;\n  padding-left: 8px;\n}\n\n.gencol {\n  display: flex;\n}\n\n.gencol span {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 17px;\n  margin: 0;\n  /* identical to box height */\n  align-self: center;\n  padding-left: 11px;\n}\n\n.genCard {\n  background: #ffffff;\n  /* Medium Grey */\n  box-sizing: border-box;\n  border-radius: 8px;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  justify-content: center;\n  margin: 0;\n}\n\n.genCard img {\n  width: 60px;\n  height: 60px;\n}\n\n.selectedGen {\n  background-image: linear-gradient(#4137FF, #2AE4F0);\n}\n\n.selectedGentext {\n  color: #1A1A1A !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvY3JlYXRpbmdjYXJlL2FkZG1lbWJlcnMvYWRkbWVtYmVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0aW5nY2FyZS9hZGRtZW1iZXJzL2FkZG1lbWJlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBRUksWUFBQTtBQ0pKOztBRFdFO0VBRUUsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDVEo7O0FEWUU7RUFDRSxhQUFBO0FDVEo7O0FEVUk7RUFDRSxrQkFBQTtFQUNKLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUVBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1RGOztBRGNFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUdBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0YsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFFQSxTQUFBO0FDZEY7O0FEZ0JJO0VBQ0UsV0FBQTtFQUNKLFlBQUE7QUNkRjs7QUR1QkU7RUFFRSxtREFBQTtBQ3JCSjs7QUR3QkU7RUFDRSx5QkFBQTtBQ3JCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0aW5nY2FyZS9hZGRtZW1iZXJzL2FkZG1lbWJlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5pb24taW1ne1xuXG4gICAgaGVpZ2h0OiA1MnB4Oztcbn1cblxuXG4gICAgXG4gIFxuXG4gIGlvbi1zZWxlY3R7XG5cbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIH1cblxuICAuZ2VuY29se1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgc3BhbntcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgbWFyZ2luOiAwO1xuICAgIC8vIHBhZGRpbmctdG9wOiAyMnB4O1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTFweDtcbiAgXG4gICAgfVxuICB9XG5cbiAgLmdlbkNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLyogTWVkaXVtIEdyZXkgKi9cbiAgXG4gICAvL2JvcmRlcjogMXB4IHNvbGlkICNiOGI4Yjg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLy9wYWRkaW5nLXRvcDogOHB4O1xuICBtYXJnaW46IDA7XG4gIFxuICAgIGltZ3tcbiAgICAgIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIFxuICBcbiAgICAgIFxuICAgIH1cbiAgXG4gICAgXG4gIH1cblxuICAuc2VsZWN0ZWRHZW4ge1xuICAgIC8vYmFja2dyb3VuZDogIzQxMzdGRjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzQxMzdGRiwgIzJBRTRGMCk7XG4gIH1cblxuICAuc2VsZWN0ZWRHZW50ZXh0e1xuICAgIGNvbG9yOiAjMUExQTFBICFpbXBvcnRhbnQgO1xuICB9IiwiaW9uLWltZyB7XG4gIGhlaWdodDogNTJweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4uZ2VuY29sIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5nZW5jb2wgc3BhbiB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgbWFyZ2luOiAwO1xuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTFweDtcbn1cblxuLmdlbkNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAvKiBNZWRpdW0gR3JleSAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cbi5nZW5DYXJkIGltZyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5zZWxlY3RlZEdlbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNDEzN0ZGLCAjMkFFNEYwKTtcbn1cblxuLnNlbGVjdGVkR2VudGV4dCB7XG4gIGNvbG9yOiAjMUExQTFBICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/creatingcare/addmembers/addmembers.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/creatingcare/addmembers/addmembers.page.ts ***!
  \******************************************************************/
/*! exports provided: AddmembersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmembersPage", function() { return AddmembersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _dataservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dataservice.service */ "./src/app/pages/dataservice.service.ts");
/* harmony import */ var _creatingcare_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../creatingcare.service */ "./src/app/pages/creatingcare/creatingcare.service.ts");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let AddmembersPage = class AddmembersPage {
    constructor(formBuilder, _dataService, _creatingCareService, _apiService, navCtrl) {
        this.formBuilder = formBuilder;
        this._dataService = _dataService;
        this._creatingCareService = _creatingCareService;
        this._apiService = _apiService;
        this.navCtrl = navCtrl;
        this.selectedType = 'CAREGIVER';
        this.relationList = ['Father', 'Mother', 'Sibling'];
        const mobileNumberPattern = '^[0-9]+$';
        this.memberForm = this.formBuilder.group({
            memberName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            memberRelation: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            memberEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            memberMobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(mobileNumberPattern))
        });
    }
    saveMember() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const userData = yield this._dataService.getUserInfo();
            const apiRequestBody = {
                careCircleId: yield this._creatingCareService.getCareCircleID(),
                careCircleName: yield this._creatingCareService.getCareCircleName(),
                createdBy: userData.userId,
                members: [
                    {
                        userName: this.memberForm.controls.memberName.value,
                        email: this.memberForm.controls.memberEmail.value,
                        mobile: this.memberForm.controls.memberMobileNumber.value,
                        userType: this.selectedType
                    }
                ]
            };
            this._apiService.post('careCircleAddUser', apiRequestBody).then((data) => {
                this.navCtrl.navigateForward(['carecircle/list']);
            });
        });
    }
    back() {
        this.navCtrl.back();
    }
    ngOnInit() {
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
AddmembersPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _dataservice_service__WEBPACK_IMPORTED_MODULE_3__["DataserviceService"] },
    { type: _creatingcare_service__WEBPACK_IMPORTED_MODULE_4__["CreatingcareService"] },
    { type: src_app_http_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
AddmembersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addmembers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmembers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/creatingcare/addmembers/addmembers.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmembers.page.scss */ "./src/app/pages/creatingcare/addmembers/addmembers.page.scss")).default]
    })
], AddmembersPage);



/***/ })

}]);
//# sourceMappingURL=pages-creatingcare-addmembers-addmembers-module-es2015.js.map