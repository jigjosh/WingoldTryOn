webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/analog-clock/analog-clock.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/analog-clock/analog-clock.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"analog-clock-canvas\">\n\n</div>\n\n<!-- <button (click) = \"createCanvas()\" > Create canvas </button> -->"

/***/ }),

/***/ "../../../../../src/app/analog-clock/analog-clock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalogClockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p5__ = __webpack_require__("../../../../p5/lib/p5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_p5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// declare var p5: any;
var AnalogClockComponent = (function () {
    function AnalogClockComponent() {
        var _this = this;
        this.toggle = true;
        this.onWindowResize = function (e) {
            _this.p5.resizeCanvas(_this.p5.windowWidth, _this.p5.windowHeight);
        };
        this.createCanvas = function () {
            console.log('creating canvas');
            _this.p5 = new __WEBPACK_IMPORTED_MODULE_1_p5__(_this.drawing);
        };
        this.destroyCanvas = function () {
            console.log('destroying canvas');
            _this.p5.noCanvas();
        };
        this.drawing = function (p) {
            p.setup = function () {
                p.createCanvas(p.windowWidth, p.windowHeight).parent('analog-clock-canvas');
                p.angleMode(p.DEGREES);
                p.rectMode(p.CENTER);
                p.background(0);
            };
            p.center = { x: 0, y: 0 };
            p.draw = function () {
                p.background(0);
                p.center.x = p.width / 2;
                p.center.y = p.height / 2;
                var hr = p.hour();
                var mn = p.minute();
                var sc = p.second();
                var ms = p.millis();
                p.push();
                p.translate(p.center.x, p.center.y);
                p.rotate(-90);
                p.strokeWeight(8);
                p.noFill();
                // dail
                p.stroke(175);
                p.arc(0, 0, 210, 210, 0, 360);
                // second
                var sc_end = p.map(sc % 60, 0, 60, 0, 360);
                p.push();
                p.rotate(sc_end);
                p.stroke(255, 0, 0);
                p.line(0, 0, 90, 0);
                p.pop();
                // minute
                var mn_end = p.map(mn % 60, 0, 60, 0, 360);
                p.push();
                p.rotate(mn_end);
                p.stroke(0, 230, 0);
                p.line(0, 0, 70, 0);
                p.pop();
                // hour
                var hr_end = p.map(hr % 12, 0, 12, 0, 360);
                p.push();
                p.rotate(hr_end);
                p.stroke(0, 0, 230);
                p.line(0, 0, 50, 0);
                p.pop();
                // center
                p.fill(255);
                p.noStroke();
                p.ellipse(0, 0, 8, 8);
                p.pop();
                var clock = hr + ':' + mn + ':' + sc;
                p.fill(255);
                p.noStroke();
                p.textSize(14);
                p.text(clock, 100, 50);
            };
        };
        console.log('Analog-constructed');
        window.onresize = this.onWindowResize;
    }
    AnalogClockComponent.prototype.ngOnInit = function () {
        console.log('analog-init');
        this.createCanvas();
    };
    AnalogClockComponent.prototype.ngOnDestroy = function () {
        this.destroyCanvas();
        console.log('analog-destroy');
    };
    return AnalogClockComponent;
}());
AnalogClockComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-analog-clock',
        template: __webpack_require__("../../../../../src/app/analog-clock/analog-clock.component.html"),
        styles: [__webpack_require__("../../../../../src/app/analog-clock/analog-clock.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AnalogClockComponent);

//# sourceMappingURL=analog-clock.component.js.map

/***/ }),

/***/ "../../../../../src/app/angular-material/angular-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__ = __webpack_require__("../../../cdk/esm5/overlay.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_a11y__ = __webpack_require__("../../../cdk/esm5/a11y.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_cdk_bidi__ = __webpack_require__("../../../cdk/esm5/bidi.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_cdk_observers__ = __webpack_require__("../../../cdk/esm5/observers.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_cdk_portal__ = __webpack_require__("../../../cdk/esm5/portal.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_button_toggle__ = __webpack_require__("../../../material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_radio__ = __webpack_require__("../../../material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_slider__ = __webpack_require__("../../../material/esm5/slider.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_progress_spinner__ = __webpack_require__("../../../material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_material_tooltip__ = __webpack_require__("../../../material/esm5/tooltip.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material_autocomplete__ = __webpack_require__("../../../material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_sort__ = __webpack_require__("../../../material/esm5/sort.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_material_paginator__ = __webpack_require__("../../../material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_material_stepper__ = __webpack_require__("../../../material/esm5/stepper.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_29__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_8__angular_material_button__["a" /* MatButtonModule */],
    __WEBPACK_IMPORTED_MODULE_7__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_17__angular_material_card__["a" /* MatCardModule */],
    __WEBPACK_IMPORTED_MODULE_18__angular_material_chips__["a" /* MatChipsModule */],
    __WEBPACK_IMPORTED_MODULE_9__angular_material_checkbox__["a" /* MatCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_30__angular_material_datepicker__["a" /* MatDatepickerModule */],
    __WEBPACK_IMPORTED_MODULE_31__angular_material_table__["a" /* MatTableModule */],
    __WEBPACK_IMPORTED_MODULE_28__angular_material_dialog__["b" /* MatDialogModule */],
    __WEBPACK_IMPORTED_MODULE_34__angular_material_form_field__["c" /* MatFormFieldModule */],
    __WEBPACK_IMPORTED_MODULE_16__angular_material_grid_list__["a" /* MatGridListModule */],
    __WEBPACK_IMPORTED_MODULE_19__angular_material_icon__["a" /* MatIconModule */],
    __WEBPACK_IMPORTED_MODULE_22__angular_material_input__["a" /* MatInputModule */],
    __WEBPACK_IMPORTED_MODULE_15__angular_material_list__["a" /* MatListModule */],
    __WEBPACK_IMPORTED_MODULE_27__angular_material_menu__["a" /* MatMenuModule */],
    __WEBPACK_IMPORTED_MODULE_33__angular_material_paginator__["a" /* MatPaginatorModule */],
    __WEBPACK_IMPORTED_MODULE_21__angular_material_progress_bar__["a" /* MatProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_20__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["r" /* MatRippleModule */],
    __WEBPACK_IMPORTED_MODULE_11__angular_material_select__["a" /* MatSelectModule */],
    __WEBPACK_IMPORTED_MODULE_14__angular_material_sidenav__["a" /* MatSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_13__angular_material_slider__["a" /* MatSliderModule */],
    __WEBPACK_IMPORTED_MODULE_12__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_23__angular_material_snack_bar__["a" /* MatSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_32__angular_material_sort__["a" /* MatSortModule */],
    __WEBPACK_IMPORTED_MODULE_35__angular_material_stepper__["a" /* MatStepperModule */],
    __WEBPACK_IMPORTED_MODULE_24__angular_material__["b" /* MatTabsModule */],
    __WEBPACK_IMPORTED_MODULE_25__angular_material_toolbar__["a" /* MatToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_26__angular_material_tooltip__["a" /* MatTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_1__angular_cdk_overlay__["d" /* OverlayModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_cdk_portal__["f" /* PortalModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_cdk_bidi__["a" /* BidiModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_cdk_a11y__["a" /* A11yModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material_core__["i" /* MatCommonModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_cdk_observers__["a" /* ObserversModule */]
];
var AngularMaterialModule = (function () {
    function AngularMaterialModule() {
    }
    return AngularMaterialModule;
}());
AngularMaterialModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: MATERIAL_MODULES,
        declarations: [__WEBPACK_IMPORTED_MODULE_24__angular_material__["a" /* MatExpansionPanel */], __WEBPACK_IMPORTED_MODULE_10__angular_material_radio__["a" /* MatRadioButton */]],
        exports: MATERIAL_MODULES,
    })
], AngularMaterialModule);

/*
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
  MdStepperModule
} from '@angular/material';

import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CdkTableModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdStepperModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
    MdNativeDateModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
 */
//# sourceMappingURL=angular-material.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div mat-tab-group>\n  <nav mat-tab-nav-bar>\n\n    <a mat-tab-link\n    *ngFor = \"let nav of navLinks;\"\n    [routerLink]=\"nav.link\"\n    routerLinkActive #rla=\"routerLinkActive\"\n    [routerLinkActiveOptions]=\"{exact: true}\"\n    [active]=\"rla.isActive\">{{nav.label}}</a>\n  </nav>\n\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        console.log('app-constructed');
        this.navLinks = [
            { link: '', label: 'Home' },
            { link: 'analog', label: 'Analog' },
            { link: 'digital', label: 'Digital' },
            { link: 'gear-dial', label: 'Gear' },
            { link: 'try-on', label: 'TryOn' },
            { link: 'wingoldnext-tryon', label: 'Wingold' },
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('app-init');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wingoldnext_tryon_wingoldnext_tryon_module__ = __webpack_require__("../../../../../src/app/wingoldnext-tryon/wingoldnext-tryon.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__analog_clock_analog_clock_component__ = __webpack_require__("../../../../../src/app/analog-clock/analog-clock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__path_not_found_path_not_found_component__ = __webpack_require__("../../../../../src/app/path-not-found/path-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__digital_clock_digital_clock_component__ = __webpack_require__("../../../../../src/app/digital-clock/digital-clock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__audio_dials_audio_dials_component__ = __webpack_require__("../../../../../src/app/audio-dials/audio-dials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__gear_dial_gear_dial_component__ = __webpack_require__("../../../../../src/app/gear-dial/gear-dial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__try_on_try_on_component__ = __webpack_require__("../../../../../src/app/try-on/try-on.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__wingoldnext_tryon_wingoldnext_tryon_component__ = __webpack_require__("../../../../../src/app/wingoldnext-tryon/wingoldnext-tryon.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'analog',
        component: __WEBPACK_IMPORTED_MODULE_9__analog_clock_analog_clock_component__["a" /* AnalogClockComponent */]
    },
    {
        path: 'digital',
        component: __WEBPACK_IMPORTED_MODULE_11__digital_clock_digital_clock_component__["a" /* DigitalClockComponent */]
    },
    {
        path: 'mic-dial',
        component: __WEBPACK_IMPORTED_MODULE_13__audio_dials_audio_dials_component__["a" /* AudioDialsComponent */]
    },
    {
        path: 'gear-dial',
        component: __WEBPACK_IMPORTED_MODULE_14__gear_dial_gear_dial_component__["a" /* GearDialComponent */]
    },
    {
        path: 'try-on',
        component: __WEBPACK_IMPORTED_MODULE_15__try_on_try_on_component__["a" /* TryOnComponent */]
    },
    {
        path: 'wingoldnext-tryon',
        component: __WEBPACK_IMPORTED_MODULE_16__wingoldnext_tryon_wingoldnext_tryon_component__["a" /* WingoldnextTryonComponent */]
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_10__path_not_found_path_not_found_component__["a" /* PathNotFoundComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__analog_clock_analog_clock_component__["a" /* AnalogClockComponent */],
            __WEBPACK_IMPORTED_MODULE_10__path_not_found_path_not_found_component__["a" /* PathNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_11__digital_clock_digital_clock_component__["a" /* DigitalClockComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__audio_dials_audio_dials_component__["a" /* AudioDialsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__gear_dial_gear_dial_component__["a" /* GearDialComponent */],
            __WEBPACK_IMPORTED_MODULE_15__try_on_try_on_component__["a" /* TryOnComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__wingoldnext_tryon_wingoldnext_tryon_module__["a" /* WingoldnextTryonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_material_angular_material_module__["a" /* AngularMaterialModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/audio-dials/audio-dials.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/audio-dials/audio-dials.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"audio-dial-canvas\">\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/audio-dials/audio-dials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AudioDialsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p5__ = __webpack_require__("../../../../p5/lib/p5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_p5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AudioDialsComponent = (function () {
    function AudioDialsComponent() {
        var _this = this;
        //private p5sound;
        this.origin = { x: 0, y: 0 };
        this.toggle = true;
        this.onWindowResize = function (e) {
            _this.p5.resizeCanvas(_this.p5.windowWidth, _this.p5.windowHeight);
        };
        this.createCanvas = function () {
            console.log('creating canvas');
            if (_this.toggle) {
                _this.p5 = new __WEBPACK_IMPORTED_MODULE_1_p5__(_this.drawing);
                _this.toggle = !_this.toggle;
            }
            else {
                _this.p5.noCanvas();
                _this.toggle = !_this.toggle;
            }
        };
        this.drawing = function (p) {
            var mic;
            p.setup = function () {
                p.createCanvas(p.windowWidth, p.windowHeight).parent('audio-dial-canvas');
                p.angleMode(p.DEGREES);
                p.rectMode(p.CENTER);
                p.background(0);
                // mic = new p5sound.AudioIn();
                // mic.start();
                // console.info('p5sound: ', this.);
                // console.info('mic: ', mic);
            };
            p.draw = function () {
                var time = {
                    hr: p.hour(),
                    mn: p.minute(),
                    sc: p.second(),
                    ms: p.millis()
                };
                var center = {
                    x: p.width / 2,
                    y: p.height / 2
                };
                p.background(0);
                var clock = time.hr + ':' + time.mn + ':' + time.sc;
                p.fill(255);
                p.noStroke();
                p.textSize(50);
                p.text(clock, center.x, center.y);
            };
        };
        console.log('audio-constructed');
        window.onresize = this.onWindowResize;
    }
    AudioDialsComponent.prototype.ngOnInit = function () {
        console.log('audio-init');
        this.createCanvas();
    };
    AudioDialsComponent.prototype.ngOnDestroy = function () {
        this.createCanvas();
        console.log('audio-destroy');
    };
    return AudioDialsComponent;
}());
AudioDialsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-audio-dials',
        template: __webpack_require__("../../../../../src/app/audio-dials/audio-dials.component.html"),
        styles: [__webpack_require__("../../../../../src/app/audio-dials/audio-dials.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AudioDialsComponent);

//# sourceMappingURL=audio-dials.component.js.map

/***/ }),

/***/ "../../../../../src/app/digital-clock/digital-clock.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/digital-clock/digital-clock.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"digital-watch-canvas\">\n    \n</div>"

/***/ }),

/***/ "../../../../../src/app/digital-clock/digital-clock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DigitalClockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p5__ = __webpack_require__("../../../../p5/lib/p5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_p5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DigitalClockComponent = (function () {
    function DigitalClockComponent() {
        var _this = this;
        this.origin = { x: 0, y: 0 };
        this.toggle = true;
        this.onWindowResize = function (e) {
            _this.p5.resizeCanvas(_this.p5.windowWidth, _this.p5.windowHeight);
        };
        this.createCanvas = function () {
            console.log('creating canvas');
            if (_this.toggle) {
                _this.p5 = new __WEBPACK_IMPORTED_MODULE_1_p5__(_this.drawing);
                _this.toggle = !_this.toggle;
            }
            else {
                _this.p5.noCanvas();
                _this.toggle = !_this.toggle;
            }
        };
        this.drawing = function (p) {
            p.setup = function () {
                p.createCanvas(p.windowWidth, p.windowHeight).parent('digital-watch-canvas');
                p.background(0);
            };
            p.draw = function () {
                var time = {
                    hr: p.hour(),
                    mn: p.minute(),
                    sc: p.second(),
                    ms: p.millis()
                };
                var center = {
                    x: p.width / 2,
                    y: p.height / 2
                };
                p.background(0);
                var clock = time.hr + ':' + time.mn + ':' + time.sc;
                p.fill(255);
                p.noStroke();
                p.textSize(50);
                p.text(clock, center.x, center.y);
            };
        };
        console.log('digital-constructed');
        window.onresize = this.onWindowResize;
    }
    DigitalClockComponent.prototype.ngOnInit = function () {
        console.log('digital-init');
        this.createCanvas();
    };
    DigitalClockComponent.prototype.ngOnDestroy = function () {
        this.createCanvas();
        console.log('audio-destroy');
    };
    return DigitalClockComponent;
}());
DigitalClockComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-digital-clock',
        template: __webpack_require__("../../../../../src/app/digital-clock/digital-clock.component.html"),
        styles: [__webpack_require__("../../../../../src/app/digital-clock/digital-clock.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DigitalClockComponent);

//# sourceMappingURL=digital-clock.component.js.map

/***/ }),

/***/ "../../../../../src/app/gear-dial/gear-dial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gear-dial/gear-dial.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"gear-clock-canvas\">\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/gear-dial/gear-dial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GearDialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p5__ = __webpack_require__("../../../../p5/lib/p5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_p5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GearDialComponent = (function () {
    function GearDialComponent() {
        var _this = this;
        this.onWindowResize = function (e) {
            _this.p5.resizeCanvas(_this.p5.windowWidth, _this.p5.windowHeight);
        };
        this.createCanvas = function () {
            console.log('creating canvas');
            _this.p5 = new __WEBPACK_IMPORTED_MODULE_1_p5__(_this.drawing);
        };
        this.destroyCanvas = function () {
            console.log('destroying canvas');
            _this.p5.noCanvas();
        };
        this.drawing = function (p) {
            // f5 setup
            p.setup = function () {
                p.createCanvas(p.windowWidth, p.windowHeight).parent('gear-clock-canvas');
                p.angleMode(p.DEGREES);
                p.rectMode(p.CENTER);
                p.background(0);
            };
            p.center = { x: 0, y: 0 };
            // f5 draw
            p.draw = function () {
                p.background(0);
                p.center.x = p.width / 2;
                p.center.y = p.height / 2;
                var hr = p.hour();
                var mn = p.minute();
                var sc = p.second();
                var ms = p.millis();
                p.push();
                p.translate(p.center.x, p.center.y);
                p.rotate(-90);
                p.strokeWeight(8);
                p.noFill();
                // dail
                p.stroke(175);
                p.arc(0, 0, 210, 210, 0, 360);
                // second
                var sc_end = p.map(sc % 60, 0, 60, 0, 360);
                p.push();
                p.rotate(sc_end);
                p.stroke(255, 0, 0);
                p.line(0, 0, 90, 0);
                p.pop();
                // minute
                var mn_end = p.map(mn % 60, 0, 60, 0, 360);
                p.push();
                p.rotate(mn_end);
                p.stroke(0, 230, 0);
                p.line(0, 0, 70, 0);
                p.pop();
                // hour
                var hr_end = p.map(hr % 12, 0, 12, 0, 360);
                p.push();
                p.rotate(hr_end);
                p.stroke(0, 0, 230);
                p.line(0, 0, 50, 0);
                p.pop();
                // center
                p.fill(255);
                p.noStroke();
                p.ellipse(0, 0, 8, 8);
                p.pop();
                var clock = hr + ':' + mn + ':' + sc;
                p.fill(255);
                p.noStroke();
                p.textSize(14);
                p.text(clock, 100, 50);
            };
        };
        console.log('gear-constructor');
        window.onresize = this.onWindowResize;
    }
    GearDialComponent.prototype.ngOnInit = function () {
        console.log('gear-init');
        this.createCanvas();
    };
    GearDialComponent.prototype.ngOnDestroy = function () {
        this.destroyCanvas();
        console.log('gear-destroy');
    };
    return GearDialComponent;
}());
GearDialComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gear-dial',
        template: __webpack_require__("../../../../../src/app/gear-dial/gear-dial.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gear-dial/gear-dial.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GearDialComponent);

//# sourceMappingURL=gear-dial.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <img width=\"150\" height=\"150\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n  \n  <img src=\"assets/p5js.png\" alt=\"\" width=\"150\" height=\"150\" >\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.title = 'Angular 2 with p5 js.';
        console.log('home-constructed');
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.log('home-init');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/path-not-found/path-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/path-not-found/path-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  path-not-found\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/path-not-found/path-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PathNotFoundComponent = (function () {
    function PathNotFoundComponent() {
    }
    PathNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PathNotFoundComponent;
}());
PathNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-path-not-found',
        template: __webpack_require__("../../../../../src/app/path-not-found/path-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/path-not-found/path-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PathNotFoundComponent);

//# sourceMappingURL=path-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/try-on/try-on.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/try-on/try-on.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\n \n  <div id=\"try-on-canvas\">\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/try-on/try-on.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TryOnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p5__ = __webpack_require__("../../../../p5/lib/p5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_p5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ml5__ = __webpack_require__("../../../../ml5/dist/ml5.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ml5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ml5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_p5_lib_addons_p5_dom__ = __webpack_require__("../../../../p5/lib/addons/p5.dom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_p5_lib_addons_p5_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_p5_lib_addons_p5_dom__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TryOnComponent = (function () {
    function TryOnComponent() {
        var _this = this;
        this.origin = { x: 0, y: 0 };
        this.poses = [];
        this.oldkeypoint = new Array(17);
        this.jewelrys = [
            { value: 'jewelry-1', viewValue: 'jewelry1' },
            { value: 'jewelry-2', viewValue: 'jewelry2' },
            { value: 'jewelry-3', viewValue: 'jewelry3' }
        ];
        this.selectedjewelry = 'jewelry1';
        this.onWindowResize = function (e) {
            _this.p5.resizeCanvas(_this.p5.windowWidth, _this.p5.windowHeight);
        };
        this.createCanvas = function () {
            console.log("creating canvas");
            _this.loadimg('assets/jewelry1.png').then(function (res) {
                _this.jewelry1 = res;
                _this.p5 = new __WEBPACK_IMPORTED_MODULE_1_p5__(_this.drawing1(_this.p5, 'test'));
                console.log(_this.p5);
            });
            //this.p5 = new p5(this.setupCanvas);
            //this.p5.setup = this.setupCanvas();
            //this.p5.draw = () => {
            //this.p5.image(this.video, 0, 0, 640, 480);
            //}
        };
        this.setupCanvas = function (p, video, poseNet, jewelry) {
            p.createCanvas(640, 480).parent("try-on-canvas");
            video = p.createCapture(p.VIDEO);
            video.size(640, 480);
            poseNet = __WEBPACK_IMPORTED_MODULE_2_ml5__["poseNet"](video, function () {
                console.log("Model ready");
            });
            poseNet.on("pose", function (results) {
                this.poses = results;
                //console.log(this.poses);
            });
            video.hide();
            jewelry = p.createImg('http://webmasterstechnologies.com/WingoldNext/App/images/EarRing/jewelry1.png', 'test');
            //p.draw = drawMe
            // p.draw = () => {
            //   p.image(video, 0, 0, 640, 480);
            //   console.log(this);
            //   this.drawKeypoints(p);
            // };
        };
        this.loadimg = function (url) {
            return new Promise(function (resolve, reject) {
                var im = new Image();
                im.crossOrigin = 'anonymous';
                im.src = url;
                im.onload = function () {
                    resolve(im);
                };
            });
        };
        this.modelReady = function () {
            console.log("Model ready");
        };
        this.drawKeypoints = function (p) {
            // Loop through all the poses detected
            for (var i = 0; i < this.poses.length; i++) {
                // For each pose detected, loop through all the keypoints
                var pose = this.poses[i].pose;
                for (var j = 0; j < pose.keypoints.length; j++) {
                    switch (pose.keypoints[j].part) {
                        case "leftEar":
                            this.drawLeftRightEar(p, pose.keypoints[j], j);
                            break;
                        case "rightEar":
                            this.drawLeftRightEar(p, pose.keypoints[j], j);
                            break;
                        default:
                    }
                }
                //}
            }
        };
        this.drawLeftRightEar = function (p, keypoint, j) {
            if (keypoint.score > 0.55) {
                if (!this.oldkeypoint[j]) {
                    this.oldkeypoint[j] = keypoint;
                }
                else {
                    if ((Math.abs(Math.trunc(this.oldkeypoint[j].position.x) - Math.trunc(keypoint.position.x)) > 3) ||
                        (Math.abs(Math.trunc(this.oldkeypoint[j].position.y) - Math.trunc(keypoint.position.y)) > 10)) {
                        this.oldkeypoint[j] = keypoint;
                    }
                }
                console.log(1);
                p.fill(255, 0, 0);
                p.noStroke();
                p.push();
                p.imageMode(this.p5.CENTER);
                p.image(this.jewelry, Math.trunc(keypoint.position.x), Math.trunc(keypoint.position.y) + 50, 30, 60);
                p.pop();
            }
        };
        this.drawing1 = function (p, strpath) {
            var video1;
            var poseNet1;
            var poses1 = [];
            var jewelry1;
            var oldkeypoint1 = new Array(17);
            console.log(strpath);
            console.log('drawing');
            p.setup = function () {
                p.createCanvas(640, 480).parent("try-on-canvas");
                var video1 = p.createCapture(p.VIDEO);
                video1.size(640, 480);
                poseNet1 = __WEBPACK_IMPORTED_MODULE_2_ml5__["poseNet"](video1, modelReady);
                poseNet1.on("pose", function (results) {
                    poses1 = results;
                    //console.log(poses);
                });
                video1.hide();
                //jewelry1 = p.createImg('http://webmasterstechnologies.com/WingoldNext/App/images/EarRing/jewelry1.png', 'test')
                p.draw = function () {
                    p.image(video1, 0, 0, 640, 480);
                    drawKeypoints1();
                };
            };
            function drawKeypoints1() {
                // Loop through all the poses detected
                for (var i = 0; i < poses1.length; i++) {
                    // For each pose detected, loop through all the keypoints
                    var pose1 = poses1[i].pose;
                    for (var j = 0; j < pose1.keypoints.length; j++) {
                        switch (pose1.keypoints[j].part) {
                            case "leftEar":
                                drawLeftRightEar1(pose1.keypoints[j], j);
                                break;
                            case "rightEar":
                                drawLeftRightEar1(pose1.keypoints[j], j);
                                break;
                            default:
                        }
                    }
                    //}
                }
            }
            function drawLeftRightEar1(keypoint, j) {
                if (keypoint.score > 0.55) {
                    if (!oldkeypoint1[j]) {
                        oldkeypoint1[j] = keypoint;
                    }
                    else {
                        if ((Math.abs(Math.trunc(oldkeypoint1[j].position.x) - Math.trunc(keypoint.position.x)) > 3) ||
                            (Math.abs(Math.trunc(oldkeypoint1[j].position.y) - Math.trunc(keypoint.position.y)) > 10)) {
                            oldkeypoint1[j] = keypoint;
                        }
                    }
                    p.fill(255, 0, 0);
                    p.noStroke();
                    p.push();
                    p.imageMode(p.CENTER);
                    p.image(jewelry1, 100, 150, 30, 60);
                    //p.image(this.jewelry1,Math.trunc(keypoint.position.x), Math.trunc(keypoint.position.y) + 50, 30, 60)
                    p.pop();
                }
            }
            function modelReady() {
                console.log("Model ready");
            }
        };
        console.log("tryon-constructed");
        window.onresize = this.onWindowResize;
    }
    TryOnComponent.prototype.ngOnInit = function () {
        console.log("tryon-init");
        this.selectedjewelry = 'jewelry-1';
        this.createCanvas();
        console.log(this.p5);
    };
    TryOnComponent.prototype.ngOnDestroy = function () {
        this.createCanvas();
        console.log("try on-destroy");
    };
    return TryOnComponent;
}());
TryOnComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: "app-try-on",
        template: __webpack_require__("../../../../../src/app/try-on/try-on.component.html"),
        styles: [__webpack_require__("../../../../../src/app/try-on/try-on.component.css")],
    }),
    __metadata("design:paramtypes", [])
], TryOnComponent);

//# sourceMappingURL=try-on.component.js.map

/***/ }),

/***/ "../../../../../src/app/wingoldnext-tryon/tryon-list/tryon-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wingoldnext-tryon/tryon-list/tryon-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <mat-form-field appearance=\"fill\">\n    <mat-select  [(value)]=\"selectedjewelry\"\n    (change)=\"jewelrySelected($event)\"\n    >\n      <mat-option *ngFor=\"let jewelry of jewelrys\" [value]=\"jewelry.value\">\n        {{jewelry.viewValue}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wingoldnext-tryon/tryon-list/tryon-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TryonListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TryonListComponent = (function () {
    function TryonListComponent() {
        this.jewelrySelectedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.jewelrys = [
            { value: 'jewelry1.png', viewValue: 'jewelry1' },
            { value: 'jewelry2.png', viewValue: 'jewelry2' },
            { value: 'jewelry3.png', viewValue: 'jewelry3' }
        ];
        this.selectedjewelry = 'jewelry1.png';
    }
    TryonListComponent.prototype.ngOnInit = function () {
    };
    TryonListComponent.prototype.jewelrySelected = function ($event) {
        this.jewelrySelectedEvent.emit($event.value);
    };
    return TryonListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], TryonListComponent.prototype, "jewelrySelectedEvent", void 0);
TryonListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tryon-list',
        template: __webpack_require__("../../../../../src/app/wingoldnext-tryon/tryon-list/tryon-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wingoldnext-tryon/tryon-list/tryon-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TryonListComponent);

//# sourceMappingURL=tryon-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/wingoldnext-tryon/tryon-video/tryon-video.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wingoldnext-tryon/tryon-video/tryon-video.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"try-on-canvas\">\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wingoldnext-tryon/tryon-video/tryon-video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TryonVideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p5__ = __webpack_require__("../../../../p5/lib/p5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_p5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ml5__ = __webpack_require__("../../../../ml5/dist/ml5.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ml5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ml5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_p5_lib_addons_p5_dom__ = __webpack_require__("../../../../p5/lib/addons/p5.dom.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_p5_lib_addons_p5_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_p5_lib_addons_p5_dom__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TryonVideoComponent = (function () {
    function TryonVideoComponent() {
        var _this = this;
        this.createCanvas = function () {
            console.log("creating canvas" + _this.selectedjewelry);
            var mySketch = _this.defiendDrawing(_this.selectedjewelry);
            _this.p5 = new __WEBPACK_IMPORTED_MODULE_1_p5__(mySketch);
        };
        console.log("WingoldNext-tryon-constructed");
    }
    TryonVideoComponent.prototype.ngOnInit = function () {
        console.log("WingoldNext-tryon-init");
        //this.createCanvas()
    };
    TryonVideoComponent.prototype.ngOnDestroy = function () {
        this.createCanvas();
        console.log("WingoldNext-tryon-destroy");
    };
    TryonVideoComponent.prototype.ngOnChanges = function () {
        console.log("WingoldNext-tryon-Change");
        this.p5 = this.createCanvas();
    };
    TryonVideoComponent.prototype.defiendDrawing = function (strpath) {
        return function (p) {
            var video;
            var poseNet;
            var poses = [];
            var jewelry;
            var oldkeypoint = new Array(17);
            console.log('drawing');
            console.log(strpath);
            p.setup = function () {
                var myDiv = document.getElementById("try-on-canvas");
                myDiv.innerHTML = ""; //remove
                p.createCanvas(640, 480).parent("try-on-canvas");
                var video = p.createCapture(p.VIDEO);
                video.size(640, 480);
                poseNet = __WEBPACK_IMPORTED_MODULE_2_ml5__["poseNet"](video, modelReady);
                poseNet.on("pose", function (results) {
                    poses = results;
                    //console.log(poses);
                });
                video.hide();
                //jewelry = p.createImg('http://webmasterstechnologies.com/WingoldNext/App/images/EarRing/' + strpath)
                jewelry = p.createImg('https://jigjosh.github.io/WingoldTryOn/' + strpath);
                jewelry.hide();
                p.draw = function () {
                    p.image(video, 0, 0, 640, 480);
                    drawKeypoints();
                };
            };
            function drawKeypoints() {
                // Loop through all the poses detected
                for (var i = 0; i < poses.length; i++) {
                    // For each pose detected, loop through all the keypoints
                    var pose = poses[i].pose;
                    var dist = getDistance(pose);
                    for (var j = 0; j < pose.keypoints.length; j++) {
                        switch (pose.keypoints[j].part) {
                            case "leftEar":
                                drawLeftRightEar(pose.keypoints[j], j);
                                break;
                            case "rightEar":
                                drawLeftRightEar(pose.keypoints[j], j);
                                break;
                            default:
                        }
                    }
                    //}
                }
            }
            function getDistance(pose) {
                var lx = pose.keypoints[0].position.x;
                var ly = pose.keypoints[0].position.y;
                var rx = pose.keypoints[1].position.x;
                var ry = pose.keypoints[1].position.y;
                var retval = p.dist(lx, ly, rx, ry);
                return retval;
            }
            function drawLeftRightEar(keypoint, j) {
                if (keypoint.score > 0.55) {
                    if (!oldkeypoint[j]) {
                        oldkeypoint[j] = keypoint;
                    }
                    else {
                        if ((Math.abs(Math.trunc(oldkeypoint[j].position.x) - Math.trunc(keypoint.position.x)) > 3) ||
                            (Math.abs(Math.trunc(oldkeypoint[j].position.y) - Math.trunc(keypoint.position.y)) > 10)) {
                            oldkeypoint[j] = keypoint;
                        }
                    }
                    p.fill(255, 0, 0);
                    p.noStroke();
                    p.push();
                    p.imageMode(p.CENTER);
                    p.image(jewelry, Math.trunc(keypoint.position.x), Math.trunc(keypoint.position.y) + 60, 30, 60);
                    p.pop();
                }
            }
            function modelReady() {
                console.log("Model ready");
            }
        };
    };
    return TryonVideoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TryonVideoComponent.prototype, "selectedjewelry", void 0);
TryonVideoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-tryon-video',
        template: __webpack_require__("../../../../../src/app/wingoldnext-tryon/tryon-video/tryon-video.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wingoldnext-tryon/tryon-video/tryon-video.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TryonVideoComponent);

//# sourceMappingURL=tryon-video.component.js.map

/***/ }),

/***/ "../../../../../src/app/wingoldnext-tryon/wingoldnext-tryon.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/wingoldnext-tryon/wingoldnext-tryon.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-tryon-list (jewelrySelectedEvent)=\"selectjewelry($event)\" ></app-tryon-list>\n</div>\n<div>\n  <app-tryon-video [selectedjewelry]=\"selectedjewelry\"></app-tryon-video>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/wingoldnext-tryon/wingoldnext-tryon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WingoldnextTryonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WingoldnextTryonComponent = (function () {
    function WingoldnextTryonComponent() {
        this.selectedjewelry = 'jewelry1.png';
    }
    WingoldnextTryonComponent.prototype.ngOnInit = function () {
    };
    WingoldnextTryonComponent.prototype.selectjewelry = function ($event) {
        console.log("come here 1 " + $event);
        this.selectedjewelry = $event;
    };
    return WingoldnextTryonComponent;
}());
WingoldnextTryonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-wingoldnext-tryon',
        template: __webpack_require__("../../../../../src/app/wingoldnext-tryon/wingoldnext-tryon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/wingoldnext-tryon/wingoldnext-tryon.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WingoldnextTryonComponent);

//# sourceMappingURL=wingoldnext-tryon.component.js.map

/***/ }),

/***/ "../../../../../src/app/wingoldnext-tryon/wingoldnext-tryon.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WingoldnextTryonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wingoldnext_tryon_component__ = __webpack_require__("../../../../../src/app/wingoldnext-tryon/wingoldnext-tryon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tryon_list_tryon_list_component__ = __webpack_require__("../../../../../src/app/wingoldnext-tryon/tryon-list/tryon-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tryon_video_tryon_video_component__ = __webpack_require__("../../../../../src/app/wingoldnext-tryon/tryon-video/tryon-video.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WingoldnextTryonModule = (function () {
    function WingoldnextTryonModule() {
    }
    return WingoldnextTryonModule;
}());
WingoldnextTryonModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material_angular_material_module__["a" /* AngularMaterialModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__wingoldnext_tryon_component__["a" /* WingoldnextTryonComponent */], __WEBPACK_IMPORTED_MODULE_4__tryon_list_tryon_list_component__["a" /* TryonListComponent */], __WEBPACK_IMPORTED_MODULE_5__tryon_video_tryon_video_component__["a" /* TryonVideoComponent */]]
    })
], WingoldnextTryonModule);

//# sourceMappingURL=wingoldnext-tryon.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map