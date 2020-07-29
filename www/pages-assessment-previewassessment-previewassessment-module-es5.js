function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-assessment-previewassessment-previewassessment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/previewassessment/previewassessment.page.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/previewassessment/previewassessment.page.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAssessmentPreviewassessmentPreviewassessmentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  \n  <ion-toolbar class=\"headtoolbar\">\n    <ion-grid>\n      <ion-row style=\"align-items: center;margin-top: 32px;\">\n        <ion-col size=\"10\">\n          \n            <ion-text color=\"mdblack\" position=\"floating\" id=\"titletag\">Preview David's Assessment</ion-text>\n           \n        </ion-col>\n        <ion-col>\n          <ion-icon style=\"zoom:1.2;color: black;float:right\" name=\"close-outline\"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- CARE NEEDS -->\n\n<ion-grid style=\"padding-top:24px;padding-left:24px;padding-right:24px;padding-bottom:24px;\">\n    <ion-text class=\"headertext\">Care Needs</ion-text>\n\n    <div class=\"togglediv\">\n    <app-toggle\n      [name]=\"'Companionship'\"\n      [value]=\"true\"\n      (result)=\"changeToggle($event)\"\n    ></app-toggle>\n    </div>\n    \n\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-text class=\"tags\">Favorite Activities</ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-text class=\"details\">: Game,Share Stories</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <hr class=\"solid\" />\n\n    <!-- EXERCISE PT -->\n\n    <div class=\"togglediv1\">\n      <app-toggle\n        [name]=\"'Exercise/PT'\"\n        [value]=\"true\"\n        (result)=\"changeToggle($event)\"\n      ></app-toggle>\n      </div>\n      \n  \n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-text class=\"tags\">Type of Therapy</ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text class=\"details\">: Physical,Speech</ion-text>\n        </ion-col>\n      </ion-row>\n  \n      <hr class=\"solid\" />\n\n      <!-- SHOPPING -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Shopping/Errands'\"\n          [value]=\"true\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n      <hr class=\"solid\" />\n\n      <!-- USE OF ELECTRONICS -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Use of Electronics/Devices'\"\n          [value]=\"true\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Smart TV</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: Yes</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Mobile</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: No</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Alexa</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: Yes</ion-text>\n          </ion-col>\n        </ion-row>\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Telehealth Apps</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: Yes</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\"  style=\"margin-top:16px;\"/>\n\n      <!-- HOME REPAIR   -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Home Repair/Maintainence'\"\n          [value]=\"true\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <ion-row >\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\" style=\"line-height:24px;\">Appliances / Equipments in use</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\" style=\"line-height:24px;\">: Washer, Refrigerator, Air conditioner</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\"  style=\"margin-top:16px;\"/>\n\n        <!-- GARDENING -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Gardening'\"\n          [value]=\"true\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <ion-row >\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\" style=\"line-height:24px;\">Frequency</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\" style=\"line-height:24px;\">: Small (10 to 20 plants)</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\"  style=\"margin-top:16px;\"/>\n\n         <!-- HOUSE WORK -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'House Work'\"\n          [value]=\"true\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\" style=\"line-height:24px;\">Frequency</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\" style=\"line-height:24px;\">: Medium</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\"  style=\"margin-top:16px;\"/>\n\n        <!-- LAUNDRY -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Laundry'\"\n          [value]=\"true\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\" style=\"line-height:24px;\">Laundry</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\" style=\"line-height:24px;\">: High</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\"  style=\"margin-top:16px;\"/>\n\n        <!-- DRIVING -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Driving/Transportation'\"\n          [value]=\"true\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <ion-row >\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\" style=\"line-height:24px;\">Senior able to drive a car</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\" style=\"line-height:24px;\">: Yes</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\"  style=\"margin-top:11px;\"/>\n\n        <!-- COOKING/MEAL -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Cooking/Meal Preparation'\"\n          [value]=\"true\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Assistance</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: Feeding</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Apetite</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: Strong</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Special Diet</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: No</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Favorite Breakfast</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: Bread Toast</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Breakfast Frequency</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: 4</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Favorite Lunch</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: Veg food item</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Lunch Frequency</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: Medium</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Favorite Dinner</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: Food item name</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Dinner Frequency</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: Low</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Favorite Snack</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: Veg Sandwich</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Snack Frequency</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: 1</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Shopping by</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: Caregiver</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\"  style=\"margin-top:16px;\"/>\n\n        <!-- MEDICATION -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Medication Management'\"\n          [value]=\"true\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <ion-row >\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\" style=\"line-height:24px;\">Allergic to these medications</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\" style=\"line-height:24px;\">: Drug H1, Sample Drug 2</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\"  style=\"margin-top:11px;\"/>\n\n        <!-- MOBILITY -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Mobility'\"\n          [value]=\"true\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <ion-row style=\"line-height: 30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\" style=\"line-height:24px;\">Uses</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\" style=\"line-height:24px;\">: Walker,Walk-in Tub</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\"  style=\"margin-top:11px;\"/>\n\n        <!-- BATHING -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Bathing'\"\n          [value]=\"true\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <hr class=\"solid\"  style=\"margin-top:16px;\"/>\n\n        <!-- Sleep -->\n\n        <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Sleep'\"\n          [value]=\"true\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Goes to bed </ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: 10 PM</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Wake up time</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: 7 AM</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Sleeping type</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: Sleep through night</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;margin-bottom: 7px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Favorite Breakfast</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: Bread Toast</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row >\n          <ion-col size=\"6\">\n            <ion-text style = \"line-height:16px ;\" class=\"tags\">Need assistance Night From Caregiver</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text style = \"line-height:16px ;\" class=\"details\">: No</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Nap during the day</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: NA</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <ion-row style=\"height:30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\">Notes</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\">: NA</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\"  style=\"margin-top:16px;\"/>\n\n        <!-- DRESSING -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Dressing'\"\n          [value]=\"true\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <ion-row style=\"line-height: 30px;\">\n          <ion-col size=\"6\">\n            <ion-text class=\"tags\" style=\"line-height:24px;\">Favorite Outfits</ion-text>\n          </ion-col>\n          <ion-col>\n            <ion-text class=\"details\" style=\"line-height:24px;\">: Cotton Polka Pyjamas</ion-text>\n          </ion-col>\n        </ion-row>\n\n        <hr class=\"solid\"  style=\"margin-top:11px;\"/>\n\n         <!-- Grooming -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Grooming'\"\n          [value]=\"true\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <hr class=\"solid\"  style=\"margin-top:16px;\"/>\n\n        <!-- ORAL CARE -->\n\n        <div class=\"togglediv2\">\n          <app-toggle\n            [name]=\"'Oral Care'\"\n            [value]=\"true\"\n            (result)=\"changeToggle($event)\"\n          ></app-toggle>\n          </div>\n\n          <ion-row style=\"height:30px;margin-bottom: 7px;\">\n            <ion-col size=\"6\">\n              <ion-text class=\"tags\">Prefer Tooth Paste</ion-text>\n            </ion-col>\n            <ion-col>\n              <ion-text class=\"details\">: Pepsodent White</ion-text>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row >\n            <ion-col size=\"6\">\n              <ion-text style = \"line-height:16px ;\" class=\"tags\">Senior has tooth Senaitivity</ion-text>\n            </ion-col>\n            <ion-col>\n              <ion-text style = \"line-height:16px ;\" class=\"details\">: Yes</ion-text>\n            </ion-col>\n          </ion-row>\n\n          <hr class=\"solid\"  style=\"margin-top:16px;\"/>\n\n          <!-- WOUND -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Wound Care'\"\n          [value]=\"true\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <hr class=\"solid\"  style=\"margin-top:16px;\"/>\n  \n        <!-- EATING -->\n\n        <div class=\"togglediv2\">\n          <app-toggle\n            [name]=\"'Eating'\"\n            [value]=\"true\"\n            (result)=\"changeToggle($event)\"\n          ></app-toggle>\n          </div>\n\n          <ion-row style=\"height:30px;margin-bottom: 7px;\">\n            <ion-col size=\"6\">\n              <ion-text class=\"tags\">Able to chew</ion-text>\n            </ion-col>\n            <ion-col>\n              <ion-text class=\"details\">: Yes</ion-text>\n            </ion-col>\n          </ion-row>\n  \n          <ion-row >\n            <ion-col size=\"6\">\n              <ion-text style = \"line-height:16px ;\" class=\"tags\">Requires food to be served</ion-text>\n            </ion-col>\n            <ion-col>\n              <ion-text style = \"line-height:16px ;\" class=\"details\">: Yes</ion-text>\n            </ion-col>\n          </ion-row>\n\n          <hr class=\"solid\"  style=\"margin-top:16px;\"/>\n\n          <!-- Toileting -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Toileting'\"\n          [value]=\"false\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <hr class=\"solid\"  style=\"margin-top:16px;\"/>\n\n        <!-- Finances -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Management of finances'\"\n          [value]=\"false\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n        </div>\n\n        <hr class=\"solid\"  style=\"margin-top:16px;\"/>\n\n        <!-- Check Vitals -->\n\n      <div class=\"togglediv2\">\n        <app-toggle\n          [name]=\"'Grooming'\"\n          [value]=\"false\"\n          (result)=\"changeToggle($event)\"\n        ></app-toggle>\n      </div>\n\n        <hr class=\"solid\"  style=\"margin-top:16px;margin-bottom: 16px;\"/>\n\n        <!-- PERSONAL INFO -->\n\n      <ion-text class=\"headertext\">Personal Info</ion-text>\n    \n\n      <ion-row style=\"height:30px;margin-top: 12px;\">\n        <ion-col size=\"6\">\n          <ion-text class=\"tags\">First Name </ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text class=\"details\">: David</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"height:30px;\">\n        <ion-col size=\"6\">\n          <ion-text class=\"tags\">Last Name</ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text class=\"details\">: Joe</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"height:30px;\">\n        <ion-col size=\"6\">\n          <ion-text class=\"tags\">Gender</ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text class=\"details\">: Male</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"height:30px;\">\n        <ion-col size=\"6\">\n          <ion-text class=\"tags\">Date of birth</ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text class=\"details\">: 19/05/1984</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"height:30px;\">\n        <ion-col size=\"6\">\n          <ion-text class=\"tags\">Lives with</ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text class=\"details\">: Spouse</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"height:30px;\">\n        <ion-col size=\"6\">\n          <ion-text class=\"tags\">Past profession</ion-text>\n        </ion-col>\n        <ion-col>\n          <ion-text class=\"details\">: Rtd Employee</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"height:30px;\">\n        <ion-col size=\"6\">\n          <ion-text class=\"tags\">Address</ion-text>\n        </ion-col>\n        <ion-col >\n          <ion-text class=\"details\">: Mason,South Ave,NY</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"height:30px;\">\n        <ion-col size=\"6\">\n          <ion-text class=\"tags\">Emergency contact</ion-text>\n        </ion-col>\n        <ion-col >\n          <ion-text class=\"details\">: 212 - 123 4567</ion-text>\n        </ion-col>\n      </ion-row>\n\n      <hr class=\"solid\"  style=\"margin-top:24px;margin-bottom: 24px;\"/>\n\n      <!-- MEDICAL CONDITIONS -->\n\n    <ion-text class=\"headertext\">Medical & Psychiatric Conditions</ion-text>\n  \n\n    <ion-row style=\"margin-top:18px ;\">\n      <ion-col size=\"6\">\n        <ion-text style = \"line-height:16px ;\" class=\"tags\">Current Medical Conditions</ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-text style = \"line-height:16px ;\" class=\"details\">: Condition 1, Condition 2</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row >\n      <ion-col size=\"6\">\n        <ion-text style = \"line-height:16px ;\" class=\"tags\">Current Psychiatric Conditions</ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-text style = \"line-height:16px ;\" class=\"details\">: Depression, Anxiety</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row >\n      <ion-col size=\"6\">\n        <ion-text style = \"line-height:16px ;\" class=\"tags\">Past or Current Substance Abuse</ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-text style = \"line-height:16px ;\" class=\"details\">: No</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row >\n      <ion-col size=\"6\">\n        <ion-text style = \"line-height:16px ;\"class=\"tags\">Medical & Home health providers</ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-text style = \"line-height:16px ;\" class=\"details\">: PCP</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"height:30px;\">\n      <ion-col size=\"6\">\n        <ion-text class=\"tags\">DNR</ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-text class=\"details\">: Yes</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"height:30px;\">\n      <ion-col size=\"6\">\n        <ion-text class=\"tags\">Wears Briefs</ion-text>\n      </ion-col>\n      <ion-col>\n        <ion-text class=\"details\">: Yes</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"height:30px;\">\n      <ion-col size=\"6\">\n        <ion-text class=\"tags\">Can client left alone</ion-text>\n      </ion-col>\n      <ion-col >\n        <ion-text class=\"details\">: Yes</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"height:30px;\">\n      <ion-col size=\"6\">\n        <ion-text class=\"tags\">Lethargy</ion-text>\n      </ion-col>\n      <ion-col >\n        <ion-text class=\"details\">: Yes</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"height:30px;\">\n      <ion-col size=\"6\">\n        <ion-text class=\"tags\">Incontinence</ion-text>\n      </ion-col>\n      <ion-col >\n        <ion-text class=\"details\">: Urination</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"height:30px;\">\n      <ion-col size=\"6\">\n        <ion-text class=\"tags\">Hearing</ion-text>\n      </ion-col>\n      <ion-col >\n        <ion-text class=\"details\">: Good</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"height:30px;\">\n      <ion-col size=\"6\">\n        <ion-text class=\"tags\">Speech</ion-text>\n      </ion-col>\n      <ion-col >\n        <ion-text class=\"details\">: Fair</ion-text>\n      </ion-col>\n    </ion-row>\n          \n    <ion-row style=\"height:30px;\">\n      <ion-col size=\"6\">\n        <ion-text class=\"tags\">Vision</ion-text>\n      </ion-col>\n      <ion-col >\n        <ion-text class=\"details\">: Fair</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"height:30px;\">\n      <ion-col size=\"6\">\n        <ion-text class=\"tags\">Smell</ion-text>\n      </ion-col>\n      <ion-col >\n        <ion-text class=\"details\">: Fair</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"height:30px;\">\n      <ion-col size=\"6\">\n        <ion-text class=\"tags\">Swallowing</ion-text>\n      </ion-col>\n      <ion-col >\n        <ion-text class=\"details\">: Fair</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"height:30px;\">\n      <ion-col size=\"6\">\n        <ion-text class=\"tags\">Other factors</ion-text>\n      </ion-col>\n      <ion-col >\n        <ion-text class=\"details\">: Withdrawal Wandering</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <hr class=\"solid\"  style=\"margin-top:24px;margin-bottom: 24px;\"/>\n\n    <!-- Home and safety -->\n\n  <ion-text class=\"headertext\">Home & Safety</ion-text>\n\n  <ion-row style=\"height:30px;margin-top: 12px;\">\n    <ion-col size=\"6\">\n      <ion-text class=\"tags\">Home Safety</ion-text>\n    </ion-col>\n    <ion-col >\n      <ion-text style=\"font-size:13px ;\" class=\"details\">: Some assistance needed</ion-text>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"height:30px;\">\n    <ion-col size=\"6\">\n      <ion-text class=\"tags\">Assessment Done</ion-text>\n    </ion-col>\n    <ion-col >\n      <ion-text class=\"details\">: No</ion-text>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"height:30px;\">\n    <ion-col size=\"6\">\n      <ion-text class=\"tags\">Interested in lifeline</ion-text>\n    </ion-col>\n    <ion-col >\n      <ion-text class=\"details\">: Bedrails</ion-text>\n    </ion-col>\n  </ion-row>\n\n  <ion-row style=\"height:30px;\">\n    <ion-col size=\"6\">\n      <ion-text class=\"tags\">Others</ion-text>\n    </ion-col>\n    <ion-col >\n      <ion-text class=\"details\">: Grab Bars</ion-text>\n    </ion-col>\n  </ion-row>\n\n  <hr class=\"solid\"  style=\"margin-top:24px;margin-bottom: 24px;\"/>\n\n  <!-- MOTIVATION -->\n\n  <ion-text class=\"headertext\">Motivations</ion-text>\n\n    <ion-row style=\"margin-top: 18px;\">\n      <ion-col >\n        <ion-text >Health & Fitness</ion-text>\n      </ion-col>\n    </ion-row>\n\n    <ion-row style=\"margin-top: 4px;\">\n      <ion-col >\n        <ion-text >Family & Community</ion-text>\n      </ion-col>\n    </ion-row>  \n\n    <ion-row style=\"margin-top: 4px;\">\n      <ion-col >\n        <ion-text >Creativity</ion-text>\n      </ion-col>\n    </ion-row> \n\n    <ion-row style=\"margin-top: 4px;\">\n      <ion-col >\n        <ion-text >Fun</ion-text>\n      </ion-col>\n    </ion-row> \n\n   \n\n\n        \n\n        \n  \n\n\n\n\n</ion-grid>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/pages/assessment/previewassessment/previewassessment-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/assessment/previewassessment/previewassessment-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: PreviewassessmentPageRoutingModule */

  /***/
  function srcAppPagesAssessmentPreviewassessmentPreviewassessmentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewassessmentPageRoutingModule", function () {
      return PreviewassessmentPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _previewassessment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./previewassessment.page */
    "./src/app/pages/assessment/previewassessment/previewassessment.page.ts");

    var routes = [{
      path: '',
      component: _previewassessment_page__WEBPACK_IMPORTED_MODULE_3__["PreviewassessmentPage"]
    }];

    var PreviewassessmentPageRoutingModule = function PreviewassessmentPageRoutingModule() {
      _classCallCheck(this, PreviewassessmentPageRoutingModule);
    };

    PreviewassessmentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PreviewassessmentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/previewassessment/previewassessment.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/assessment/previewassessment/previewassessment.module.ts ***!
    \********************************************************************************/

  /*! exports provided: PreviewassessmentPageModule */

  /***/
  function srcAppPagesAssessmentPreviewassessmentPreviewassessmentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewassessmentPageModule", function () {
      return PreviewassessmentPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _previewassessment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./previewassessment-routing.module */
    "./src/app/pages/assessment/previewassessment/previewassessment-routing.module.ts");
    /* harmony import */


    var _previewassessment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./previewassessment.page */
    "./src/app/pages/assessment/previewassessment/previewassessment.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/pages/shared/shared.module.ts");

    var PreviewassessmentPageModule = function PreviewassessmentPageModule() {
      _classCallCheck(this, PreviewassessmentPageModule);
    };

    PreviewassessmentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _previewassessment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreviewassessmentPageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_previewassessment_page__WEBPACK_IMPORTED_MODULE_6__["PreviewassessmentPage"]]
    })], PreviewassessmentPageModule);
    /***/
  },

  /***/
  "./src/app/pages/assessment/previewassessment/previewassessment.page.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/assessment/previewassessment/previewassessment.page.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAssessmentPreviewassessmentPreviewassessmentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".headertext {\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 19px;\n  color: #1A1A1A;\n}\n\n.tags {\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 32px;\n  color: #7E7E7E;\n}\n\n.details {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 32px;\n}\n\n.togglediv {\n  margin-top: 19px;\n  margin-bottom: 11px;\n}\n\n.togglediv1 {\n  margin-top: 11px;\n  margin-bottom: 11px;\n}\n\n.togglediv2 {\n  margin-top: 11px;\n  margin-bottom: 11px;\n  padding-top: 0px;\n}\n\nhr.solid {\n  border-top: 1px solid #e5e5e5;\n  margin-top: 11px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HYXVyYXZqby9Eb2N1bWVudHMvR2l0SHViL21hcmlwb3NhLXVpL3NyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9wcmV2aWV3YXNzZXNzbWVudC9wcmV2aWV3YXNzZXNzbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fzc2Vzc21lbnQvcHJldmlld2Fzc2Vzc21lbnQvcHJldmlld2Fzc2Vzc21lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXNzZXNzbWVudC9wcmV2aWV3YXNzZXNzbWVudC9wcmV2aWV3YXNzZXNzbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVydGV4dHtcblxuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMTlweDtcbiAgICBjb2xvcjogIzFBMUExQTtcbn1cblxuLnRhZ3N7XG5cbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICBjb2xvcjojN0U3RTdFXG59XG5cbi5kZXRhaWxze1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG4udG9nZ2xlZGl2e1xuICAgIG1hcmdpbi10b3A6MTlweDtcbiAgICBtYXJnaW4tYm90dG9tOjExcHg7XG59XG5cbi50b2dnbGVkaXYxe1xuICAgIG1hcmdpbi10b3A6MTFweDtcbiAgICBtYXJnaW4tYm90dG9tOjExcHg7XG59XG5cbi50b2dnbGVkaXYye1xuICAgIG1hcmdpbi10b3A6MTFweDtcbiAgICBtYXJnaW4tYm90dG9tOjExcHg7XG4gICAgcGFkZGluZy10b3A6MHB4O1xufVxuXG5oci5zb2xpZCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgbWFyZ2luLXRvcDogMTFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH0iLCIuaGVhZGVydGV4dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICBjb2xvcjogIzFBMUExQTtcbn1cblxuLnRhZ3Mge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBjb2xvcjogIzdFN0U3RTtcbn1cblxuLmRldGFpbHMge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuXG4udG9nZ2xlZGl2IHtcbiAgbWFyZ2luLXRvcDogMTlweDtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcbn1cblxuLnRvZ2dsZWRpdjEge1xuICBtYXJnaW4tdG9wOiAxMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xufVxuXG4udG9nZ2xlZGl2MiB7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIG1hcmdpbi1ib3R0b206IDExcHg7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbmhyLnNvbGlkIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNWU1ZTU7XG4gIG1hcmdpbi10b3A6IDExcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/assessment/previewassessment/previewassessment.page.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/assessment/previewassessment/previewassessment.page.ts ***!
    \******************************************************************************/

  /*! exports provided: PreviewassessmentPage */

  /***/
  function srcAppPagesAssessmentPreviewassessmentPreviewassessmentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewassessmentPage", function () {
      return PreviewassessmentPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PreviewassessmentPage = /*#__PURE__*/function () {
      function PreviewassessmentPage() {
        _classCallCheck(this, PreviewassessmentPage);
      }

      _createClass(PreviewassessmentPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeToggle",
        value: function changeToggle(ev) {
          console.log(ev);
        }
      }]);

      return PreviewassessmentPage;
    }();

    PreviewassessmentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-previewassessment',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./previewassessment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/assessment/previewassessment/previewassessment.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./previewassessment.page.scss */
      "./src/app/pages/assessment/previewassessment/previewassessment.page.scss"))["default"]]
    })], PreviewassessmentPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-assessment-previewassessment-previewassessment-module-es5.js.map