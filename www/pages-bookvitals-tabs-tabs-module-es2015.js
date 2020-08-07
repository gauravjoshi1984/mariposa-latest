(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bookvitals-tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/tabs/tabs.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/tabs/tabs.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs #iontabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button\n      *ngFor=\"let tab of TabsData\"\n      [tab]=\"tab.href\"\n      (click)=\"changeTab(tab)\"\n    >\n      <ion-icon\n        [src]=\"'assets/tabs/'+tab.href+'_'+tab.status+'.svg'\"\n      ></ion-icon>\n      <ion-label>{{tab.name}}</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ }),

/***/ "./src/app/pages/bookvitals/tabs/tabs-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/bookvitals/tabs/tabs-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/bookvitals/tabs/tabs.page.ts");




const routes = [{ path: "", component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"], children: [
            {
                path: "books", loadChildren: () => __webpack_require__.e(/*! import() | book-book-module */ "book-book-module").then(__webpack_require__.bind(null, /*! ../book/book.module */ "./src/app/pages/bookvitals/book/book.module.ts")).then(x => x.BookPageModule)
            }, {
                path: "vitals", loadChildren: () => __webpack_require__.e(/*! import() | vitals-vitals-module */ "vitals-vitals-module").then(__webpack_require__.bind(null, /*! ../vitals/vitals.module */ "./src/app/pages/bookvitals/vitals/vitals.module.ts")).then(x => x.VitalsPageModule)
            },
            {
                path: "calendar", loadChildren: () => __webpack_require__.e(/*! import() | calendar-calendar-module */ "calendar-calendar-module").then(__webpack_require__.bind(null, /*! ../calendar/calendar.module */ "./src/app/pages/bookvitals/calendar/calendar.module.ts")).then(x => x.CalendarPageModule)
            },
            {
                path: "menu", loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-hamburgermenu-menu-menu-module */ "pages-hamburgermenu-menu-menu-module").then(__webpack_require__.bind(null, /*! src/app/pages/hamburgermenu/menu/menu.module */ "./src/app/pages/hamburgermenu/menu/menu.module.ts")).then(x => x.MenuPageModule)
            },
            { path: "", redirectTo: "books", pathMatch: "full" }
        ] }];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/bookvitals/tabs/tabs.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/bookvitals/tabs/tabs.module.ts ***!
  \******************************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "./src/app/pages/bookvitals/tabs/tabs-routing.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/pages/bookvitals/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/pages/bookvitals/tabs/tabs.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/bookvitals/tabs/tabs.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  zoom: 1;\n  font-size: 20px;\n}\n\nion-tab-button {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 14px;\n  text-align: center;\n  /* Direct Black */\n  --color: #1a1a1a;\n  --color-focused: #4137ff;\n  --color-selected: #4137ff;\n}\n\nion-tab-button.tab-selected ion-icon {\n  --color: #4137ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYm9va3ZpdGFscy90YWJzL3RhYnMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ib29rdml0YWxzL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUNERjs7QURHQTtFQUNFLGdCQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib29rdml0YWxzL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XG4gIHpvb206IDE7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLXRhYi1idXR0b24ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAvKiBEaXJlY3QgQmxhY2sgKi9cblxuICAtLWNvbG9yOiAjMWExYTFhO1xuICAtLWNvbG9yLWZvY3VzZWQ6ICM0MTM3ZmY7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICM0MTM3ZmY7XG59XG5pb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgaW9uLWljb24ge1xuICAtLWNvbG9yOiAjNDEzN2ZmO1xufVxuIiwiaW9uLWljb24ge1xuICB6b29tOiAxO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC8qIERpcmVjdCBCbGFjayAqL1xuICAtLWNvbG9yOiAjMWExYTFhO1xuICAtLWNvbG9yLWZvY3VzZWQ6ICM0MTM3ZmY7XG4gIC0tY29sb3Itc2VsZWN0ZWQ6ICM0MTM3ZmY7XG59XG5cbmlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCBpb24taWNvbiB7XG4gIC0tY29sb3I6ICM0MTM3ZmY7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/bookvitals/tabs/tabs.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/bookvitals/tabs/tabs.page.ts ***!
  \****************************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() {
        this.bookimage = "assets/MariposaIcons/Book_active.svg";
        this.vitalsimage = "assets/MariposaIcons/vitals_inactive.svg";
        this.Calendarimage = "assets/MariposaIcons/calendar_inactive.svg";
        this.Menuimage = "assets/MariposaIcons/menu_inactive.svg";
        this.TabsData = [
            {
                name: "Books",
                href: "books",
                status: "active",
            },
            {
                name: "Vitals",
                href: "vitals",
                status: "inactive",
            },
            {
                name: "Calendar",
                href: "calendar",
                status: "inactive",
            },
            {
                name: "Menu",
                href: "menu",
                status: "inactive",
            },
        ];
    }
    ngOnInit() {
        console.log(this.iontab);
    }
    changeTab(i) {
        this.TabsData.forEach((element) => {
            element.status = "inactive";
            if (element.name == i.name) {
                element.status = "active";
            }
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("iontabs")
], TabsPage.prototype, "iontab", void 0);
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-tabs",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookvitals/tabs/tabs.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs.page.scss */ "./src/app/pages/bookvitals/tabs/tabs.page.scss")).default]
    })
], TabsPage);



/***/ })

}]);
//# sourceMappingURL=pages-bookvitals-tabs-tabs-module-es2015.js.map