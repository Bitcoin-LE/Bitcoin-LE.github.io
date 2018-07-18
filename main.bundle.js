webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hello_world_hello_world_component__ = __webpack_require__("./src/app/hello-world/hello-world.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hero_banner_hero_banner_component__ = __webpack_require__("./src/app/hero-banner/hero-banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__why_ble_why_ble_component__ = __webpack_require__("./src/app/why-ble/why-ble.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ble_downloads_ble_downloads_component__ = __webpack_require__("./src/app/ble-downloads/ble-downloads.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ble_community_ble_community_component__ = __webpack_require__("./src/app/ble-community/ble-community.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page_landing_page_landing_component__ = __webpack_require__("./src/app/page-landing/page-landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_legal_page_legal_component__ = __webpack_require__("./src/app/page-legal/page-legal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__page_landing_page_landing_component__["a" /* PageLandingComponent */] },
    { path: 'legal', component: __WEBPACK_IMPORTED_MODULE_12__page_legal_page_legal_component__["a" /* PageLegalComponent */] } /*,
    { path: '**', component: PageNotFoundComponent } */
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__hello_world_hello_world_component__["a" /* HelloWorldComponent */],
                __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__hero_banner_hero_banner_component__["a" /* HeroBannerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__why_ble_why_ble_component__["a" /* WhyBleComponent */],
                __WEBPACK_IMPORTED_MODULE_9__ble_downloads_ble_downloads_component__["a" /* BleDownloadsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ble_community_ble_community_component__["a" /* BleCommunityComponent */],
                __WEBPACK_IMPORTED_MODULE_11__page_landing_page_landing_component__["a" /* PageLandingComponent */],
                __WEBPACK_IMPORTED_MODULE_12__page_legal_page_legal_component__["a" /* PageLegalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true, useHash: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ble-community/ble-community.component.css":
/***/ (function(module, exports) {

module.exports = "\r\na {\r\n  width: 250px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/ble-community/ble-community.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Development -->\n<section class=\"dev-activ text-center padding-top-150 padding-bottom-150\" id=\"community\">\n  <div class=\"container\" style=\"padding-bottom: 50px;\">\n    <div class=\"sm-intro\" style=\"margin-bottom: 40px;\">\n      <h2 style=\"margin-bottom: 20px;\">Community</h2>\n      <p style=\"margin-bottom: 15px;\">\n        Bitcoin LE is built and maintained by a strong network of software development experts and cryptographers.\n      </p>\n      <p style=\"margin-bottom: 15px;\">\n        If you believe in our initiative, you are very welcome to join our development efforts by reporting bugs or provide code fixes for known issues on GitHub.\n      </p>\n      <p style=\"margin-bottom: 15px;\">\n        <strong>Check our documentation</strong> for more details and help us improve it.\n      </p>\n    </div>\n    <a href=\"https://github.com/Bitcoin-LE/bitcoinle-core\" class=\"btn\" target=\"_blank\">Start on GitHub</a>\n    <a href=\"https://github.com/Bitcoin-LE/bitcoinle-core/tree/master/doc\" class=\"btn btn-inverse\" target=\"_blank\">Read Documentation</a>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/ble-community/ble-community.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BleCommunityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BleCommunityComponent = /** @class */ (function () {
    function BleCommunityComponent() {
    }
    BleCommunityComponent.prototype.ngOnInit = function () {
    };
    BleCommunityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ble-community',
            template: __webpack_require__("./src/app/ble-community/ble-community.component.html"),
            styles: [__webpack_require__("./src/app/ble-community/ble-community.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BleCommunityComponent);
    return BleCommunityComponent;
}());



/***/ }),

/***/ "./src/app/ble-downloads/ble-downloads.component.css":
/***/ (function(module, exports) {

module.exports = "a {\r\n  width: 200px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/ble-downloads/ble-downloads.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Token Distribution -->\n<section class=\"distri drk padding-top-150 padding-bottom-150 \" id=\"downloads\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"\" style=\"width: 100%\">\n        <div class=\"container text-center\">\n          <h1>Download the Future Now </h1>\n          <p>By installing our wallet you will be able to receive and send Bitcoin LE to anyone in the world.</p>\n          <p>Help support Bitcoin LE network and earn extra coins by downloading our miner.</p>\n          <p style=\"height: 1px;\">&nbsp;</p>\n          <a href=\"https://github.com/Bitcoin-LE/bitcoinle-core/releases/tag/0.15.1\" class=\"btn\" target=\"_blank\">Download Miner</a>\n          <a href=\"https://github.com/Bitcoin-LE/bitcoinle-core/releases/tag/0.15.1\" class=\"btn btn-inverse\" target=\"_blank\">Download Wallet</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/ble-downloads/ble-downloads.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BleDownloadsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BleDownloadsComponent = /** @class */ (function () {
    function BleDownloadsComponent() {
    }
    BleDownloadsComponent.prototype.ngOnInit = function () {
    };
    BleDownloadsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ble-downloads',
            template: __webpack_require__("./src/app/ble-downloads/ble-downloads.component.html"),
            styles: [__webpack_require__("./src/app/ble-downloads/ble-downloads.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BleDownloadsComponent);
    return BleDownloadsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "footer {\r\n  background: #0b0c22;\r\n  padding: 0px 0;\r\n  padding-bottom: 0px;\r\n  z-index: 1;\r\n  position: relative;\r\n}\r\n\r\nfooter .rights {\r\n  border-top: 1px solid rgba(255,255,255,0.1);\r\n  padding-top: 15px;\r\n  background: rgba(0,0,0,0.1);\r\n}\r\n\r\n.row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n\r\n.text-right {\r\n  text-align: right !important;\r\n}\r\n\r\nfooter .rights a {\r\n  color: #999;\r\n  font-size: 13px;\r\n  line-height: 26px;\r\n  font-weight: 500;\r\n  margin-left: 15px;\r\n  -webkit-transition: all 0.4s ease-in-out;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\nfooter .rights a:hover {\r\n  color: white;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  p, a {\r\n    text-align: center;\r\n    width: 100%;\r\n    display: block;\r\n  }\r\n  a {\r\n    position: relative;\r\n    bottom: 10px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .col-md-6 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 50%;\r\n    flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .container {\r\n    max-width: 540px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container {\r\n    max-width: 720px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .container {\r\n    max-width: 960px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer id=\"contact\">\n  <!-- Rights -->\n  <div class=\"rights\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <p>&copy; 2018 Bitcoin LE. All Rights Reserved.</p>\n        </div>\n        <div class=\"col-md-6 text-right\">\n          <a routerLink=\"/legal\" target=\"_blank\">Terms &amp; Conditions </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "#wrap {\r\n    position: relative;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.sticky-wrapper {\r\n    height: auto !important;\r\n}\r\n\r\n#navbarNav a {\r\n  cursor: pointer;\r\n}\r\n\r\nheader {\r\n    width: 100%;\r\n    z-index: 999;\r\n    background: rgba(0,0,0,0.9);\r\n    padding: 15px 0;\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    -webkit-box-shadow: 0 0 30px rgba(0,0,0,0.07);\r\n            box-shadow: 0 0 30px rgba(0,0,0,0.07);\r\n    -webkit-transition: 0.4s ease-in-out;\r\n    transition: 0.4s ease-in-out;\r\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.65)), to(rgba(0,0,0,0)));\r\n    background: linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%);\r\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000', GradientType=0 );\r\n\t\tdisplay: block;\r\n}\r\n\r\nheader .logo {\r\n    float: left;\r\n    position: relative;\r\n    max-width: 300px;\r\n}\r\n\r\nheader .logo img {\r\n    z-index: 3;\r\n    position: relative;\r\n\t\theight: 50px;\r\n}\r\n\r\nheader .navbar {\r\n    display: inline-block;\r\n    -webkit-transition: 0.4s ease-in-out;\r\n    transition: 0.4s ease-in-out;\r\n}\r\n\r\nheader .navbar {\r\n    border: none;\r\n    margin: 0px;\r\n    position: static;\r\n    padding: 0px;\r\n    border-radius: 0px;\r\n    text-align: center;\r\n    float: right;\r\n}\r\n\r\n.ownmenu {\r\n    float: left;\r\n}\r\n\r\n.ownmenu {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n}\r\n\r\n.navbar {\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    padding: .5rem 1rem;\r\n}\r\n\r\n.navbar-toggler:not(:disabled):not(.disabled) {\r\n    cursor: pointer;\r\n}\r\n\r\n.navbar-toggler {\r\n    padding: .25rem .75rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1;\r\n    background-color: transparent;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n}\r\n\r\nbutton {\r\n    -webkit-transition: all 0.4s ease-in-out;\r\n    transition: all 0.4s ease-in-out;\r\n}\r\n\r\n.collapse.show {\r\n    display: block;\r\n}\r\n\r\nheader .navbar-collapse {\r\n    float: left;\r\n    padding: 0px;\r\n    margin-right: 20px;\r\n}\r\n\r\n.navbar-collapse {\r\n    -ms-flex-preferred-size: 100%;\r\n    flex-basis: 100%;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n}\r\n\r\n.collapse {\r\n    display: none;\r\n}\r\n\r\nheader .navbar .nav {\r\n    margin-top: 3px;\r\n}\r\n\r\n.nav {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    padding-left: 0;\r\n    margin-bottom: 0;\r\n    list-style: none;\r\n}\r\n\r\nul {\r\n    margin-bottom: 0px;\r\n}\r\n\r\nheader .navbar li {\r\n    display: inline-block;\r\n    float: left;\r\n    margin: 0 5px;\r\n    position: relative;\r\n}\r\n\r\n.ownmenu li {\r\n    display: inline-block;\r\n    float: left;\r\n}\r\n\r\nli {\r\n    list-style: none;\r\n}\r\n\r\nheader .navbar li a {\r\n    font-size: 14px;\r\n    color: #fff;\r\n    font-weight: 600;\r\n    padding: 10px 0px;\r\n    margin: 0 10px;\r\n    position: relative;\r\n    letter-spacing: -0.5px;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n}\r\n\r\n.ownmenu a {\r\n    -webkit-transition: all .3s linear;\r\n    transition: all .3s linear;\r\n    outline: none;\r\n    z-index: 10;\r\n}\r\n\r\nheader .navbar li.active a:before, header .navbar li:hover a:before {\r\n  width: 100%;\r\n  margin: 0px auto;\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 2px;\r\n  bottom: 0px;\r\n  left: 0px;\r\n  z-index: -1;\r\n  background: #ffe115;\r\n  -webkit-transition: 0.2s ease-in-out;\r\n  transition: 0.2s ease-in-out;\r\n}\r\n\r\nheader .navbar li a:before {\r\n  width: 0px;\r\n  margin: 0px auto;\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 2px;\r\n  left: 0px;\r\n  bottom: 0px;\r\n  z-index: -1;\r\n  background: #ffe115;\r\n  -webkit-transition: 0.2s ease-in-out;\r\n  transition: 0.2s ease-in-out;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n\t.container {\r\n\t    max-width: 540px;\r\n\t}\r\n}\r\n\r\n@media (min-width: 768px) {\r\n\t.container {\r\n\t    max-width: 720px;\r\n\t}\r\n}\r\n\r\n@media (min-width: 992px) {\r\n\t.container {\r\n\t    max-width: 960px;\r\n\t}\r\n\r\n\t.navbar-expand-lg {\r\n\t    -webkit-box-orient: horizontal;\r\n\t    -webkit-box-direction: normal;\r\n\t    -ms-flex-flow: row nowrap;\r\n\t    flex-flow: row nowrap;\r\n\t    -webkit-box-pack: start;\r\n\t    -ms-flex-pack: start;\r\n\t    justify-content: flex-start;\r\n\t}\r\n\r\n\t.navbar-expand-lg .navbar-toggler {\r\n\t    display: none;\r\n\t}\r\n\r\n\t.navbar-expand-lg .navbar-collapse {\r\n\t    display: -webkit-box!important;\r\n\t    display: -ms-flexbox!important;\r\n\t    display: flex!important;\r\n\t    -ms-flex-preferred-size: auto;\r\n\t    flex-basis: auto;\r\n\t}\r\n\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n\t.container {\r\n\t    max-width: 1140px;\r\n\t}\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- header -->\r\n<div id=\"undefined-sticky-wrapper\" class=\"sticky-wrapper\" style=\"height: 81px;\">\r\n  <header class=\"sticky\" style=\"\">\r\n    <div class=\"container\">\r\n      <!-- Logo -->\r\n      <div class=\"logo\">\r\n        <a href=\"http://demos.webicode.com/html/ico-chain/html/index.html\"><img class=\"img-responsive\" src=\"assets/logo.png\" alt=\"\"></a>\r\n        <span style=\"float: right; color: white; font-size: 36px; margin-left: 10px; margin-top: 2px;\">Bitcoin LE</span>\r\n      </div>\r\n      <nav class=\"navbar ownmenu navbar-expand-lg\">\r\n        <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n          <ul class=\"nav\">\r\n            <li class=\"scroll\">\r\n              <a onclick=\"document.getElementById('hme').scrollIntoView({behavior: 'smooth'})\">Home</a>\r\n            </li>\r\n            <li class=\"scroll\">\r\n              <a onclick=\"document.getElementById('about').scrollIntoView({behavior: 'smooth'})\">Overview</a>\r\n            </li>\r\n            <li class=\"scroll\">\r\n              <a  onclick=\"document.getElementById('downloads').scrollIntoView({behavior: 'smooth'})\">Downloads</a>\r\n            </li>\r\n            <li class=\"scroll\">\r\n              <a onclick=\"document.getElementById('community').scrollIntoView({behavior: 'smooth'})\">Community</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </header>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/hello-world/hello-world.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hello-world/hello-world.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hello-world/hello-world.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloWorldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloWorldComponent = /** @class */ (function () {
    function HelloWorldComponent() {
    }
    HelloWorldComponent.prototype.ngOnInit = function () {
    };
    HelloWorldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hello-world',
            template: __webpack_require__("./src/app/hello-world/hello-world.component.html"),
            styles: [__webpack_require__("./src/app/hello-world/hello-world.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());



/***/ }),

/***/ "./src/app/hero-banner/hero-banner.component.css":
/***/ (function(module, exports) {

module.exports = "#particles-js {\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #0b0c22;\r\n  background-size: cover;\r\n}\r\n\r\n\r\n@media (max-width: 768px) {\r\n  .simple-head {\r\n    height: 600px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/hero-banner/hero-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- HOME MAIN  -->\n<section class=\"simple-head\" data-stellar-background-ratio=\"0.5\" id=\"hme\" style=\"background: #0b0c22;\">\n  <!-- Particles -->\n  <div id=\"particles-js\">\n    <!--<particles [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles>-->\n    <canvas class=\"particles-js-canvas-el\" width=\"1903\" height=\"952\" style=\"width: 100%; height: 100%;\"></canvas>\n  </div>\n  <div class=\"position-center-center\">\n    <div class=\"container text-center\">\n      <h1>The first low energy Bitcoin </h1>\n      <p>Bitcoin LE is the world's first Proof-of-Work and low energy cryptocurrency.</p>\n      <p>Bitcoin LE inherits from Bitcoin and adds a revolutionary layer aimed at reducing its energy footprint.</p>\n      <a href=\"https://github.com/Bitcoin-LE/bitcoinle-core/blob/master/whitepaper/README.md\" class=\"btn\" target=\"_blank\">White Paper</a>\n      <a href=\"https://github.com/Bitcoin-LE/bitcoinle-core/releases/tag/0.15.1\" class=\"btn btn-inverse\" target=\"_blank\">Download</a>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/hero-banner/hero-banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroBannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroBannerComponent = /** @class */ (function () {
    function HeroBannerComponent() {
        this.myStyle = {};
        this.myParams = {};
        this.width = 1903;
        this.height = 952;
    }
    HeroBannerComponent.prototype.ngOnInit = function () {
        var options = {
            "particles": {
                "number": {
                    "value": 50,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 80,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 170,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 800,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 800,
                        "size": 80,
                        "duration": 2,
                        "opacity": 0.8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        };
        particlesJS('particles-js', options);
    };
    HeroBannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero-banner',
            template: __webpack_require__("./src/app/hero-banner/hero-banner.component.html"),
            styles: [__webpack_require__("./src/app/hero-banner/hero-banner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroBannerComponent);
    return HeroBannerComponent;
}());



/***/ }),

/***/ "./src/app/page-landing/page-landing.component.css":
/***/ (function(module, exports) {

module.exports = "@media (max-width: 768px) {\r\n  #wrap {\r\n    /* padding-right: 15px; */\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/page-landing/page-landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrap\">\n  <app-header></app-header>\n  <app-hero-banner></app-hero-banner>\n  <!-- Content -->\n  <div id=\"content\" #anchorhome>\n    <app-why-ble></app-why-ble>\n    <app-ble-downloads></app-ble-downloads>\n    <app-ble-community></app-ble-community>\n  </div>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/page-landing/page-landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageLandingComponent = /** @class */ (function () {
    function PageLandingComponent() {
    }
    PageLandingComponent.prototype.ngOnInit = function () {
    };
    PageLandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-landing',
            template: __webpack_require__("./src/app/page-landing/page-landing.component.html"),
            styles: [__webpack_require__("./src/app/page-landing/page-landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageLandingComponent);
    return PageLandingComponent;
}());



/***/ }),

/***/ "./src/app/page-legal/page-legal.component.css":
/***/ (function(module, exports) {

module.exports = ".legal-content {\r\n  padding: 150px;\r\n  padding-top: 25px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/page-legal/page-legal.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"legal-content\" class=\"legal-content\" name=\"legal\">\n  <h2>BitcoinLE</h2>\n  <h1>Legal disclaimer</h1>\n\n  <h3 id=\"information\" class=\" anchorAf\"><a href=\"#information\"></a>1. Information published on bitcoinle.org</h3>\n  <p>The website https://bitcoinle.org/ (hereinafter, referred to as the \"Website\") provides information and material of a general nature. You are not authorized and nor should you rely on the Website for legal advice, business advice, or advice of any kind. You act at your own risk in reliance on the contents of the Website. Should you make a decision to act or not act you should contact a licensed attorney in the relevant jurisdiction in which you want or need help. In no way are the owners of, or contributors to, the Website responsible for the actions, decisions, or other behavior taken or not taken by you in reliance upon the Website.</p>\n\n  <h3 id=\"translations\" class=\" anchorAf\"><a href=\"#translations\"></a>2. Translations</h3>\n  <p>The Website may contain translations of the English version of the content available on the Website. These translations are provided only as a convenience. In the event of any conflict between the English language version and the translated version, the English language version shall take precedence. If you notice any inconsistency, please report them on <a href=\"https://github.com/bitcoinle-dot-org/bitcoin.org\">GitHub</a>.</p>\n\n  <h3 id=\"userisks\" class=\" anchorAf\"><a href=\"#userisks\"></a>3. Risks related to the use of BitcoinLE</h3>\n  <p>The Website will not be responsible for any losses, damages or claims arising from events falling within the scope of the following five categories:</p>\n  <p>(1) Mistakes made by the user of any BitcoinLE-related software or service, e.g., forgotten passwords, payments sent to wrong Bitcoin addresses, and accidental deletion of wallets.</p>\n  <p>(2) Software problems of the Website and/or any BitcoinLE-related software or service, e.g., corrupted wallet file, incorrectly constructed transactions, unsafe cryptographic libraries, malware affecting the Website and/or any Bitcoin-related software or service.</p>\n  <p>(3) Technical failures in the hardware of the user of any BitcoinLE-related software or service, e.g., data loss due to a faulty or damaged storage device.</p>\n  <p>(4) Security problems experienced by the user of any BitcoinLE-related software or service, e.g., unauthorized access to users' wallets and/or accounts.</p>\n  <p>(5) Actions or inactions of third parties and/or events experienced by third parties, e.g., bankruptcy of service providers, information security attacks on service providers, and fraud conducted by third parties.</p>\n\n  <h3 id=\"investmentrisks\" class=\" anchorAf\"><a href=\"#investmentrisks\"></a>4. Investment risks</h3>\n  <p>The investment in BitcoinLE can lead to loss of money over short or even long periods. The investors in BitcoinLE should expect prices to have large range fluctuations. The information published on the Website cannot guarantee that the investors in BitcoinLE would not lose money.</p>\n\n  <h3 id=\"taxcompliance\" class=\" anchorAf\"><a href=\"#taxcompliance\"></a>5. Compliance with tax obligations</h3>\n  <p>The users of the Website are solely responsible to determinate what, if any, taxes apply to their Bitcoin transactions. The owners of, or contributors to, the Website are NOT responsible for determining the taxes that apply to BitcoinLE transactions.</p>\n\n  <h3 id=\"noissuer\" class=\" anchorAf\"><a href=\"#noissuer\"></a>6. The Website does not store, send, or receive BitcoinLE (BLE)</h3>\n  <p>The Website does not store, send or receive BLE. This is because bitcoins exist only by virtue of the ownership record maintained in the BitcoinLE network. Any transfer of title in bitcoins occurs within a decentralized BitcoinLE network, and not on the Website.</p>\n\n  <h3 id=\"nowarranties\" class=\" anchorAf\"><a href=\"#nowarranties\"></a>7. No warranties</h3>\n  <p>The Website is provided on an \"as is\" basis without any warranties of any kind regarding the Website and/or any content, data, materials and/or services provided on the Website.</p>\n\n  <h3 id=\"noliability\" class=\" anchorAf\"><a href=\"#noliability\"></a>8. Limitation of liability </h3>\n  <p>Unless otherwise required by law, in no event shall the owners of, or contributors to, the Website be liable for any damages of any kind, including, but not limited to, loss of use, loss of profits, or loss of data arising out of or in any way connected with the use of the Website.</p>\n\n  <h3 id=\"arbitration\" class=\" anchorAf\"><a href=\"#arbitration\"></a>9. Arbitration</h3>\n  <p>The user of the Website agrees to arbitrate any dispute arising from or in connection with the Website or this disclaimer, except for disputes related to copyrights, logos, trademarks, trade names, trade secrets or patents.</p>\n\n  <h3 id=\"lastchange\" class=\" anchorAf\"><a href=\"#lastchange\"></a>10. Last amendment</h3>\n  <p>This disclaimer was amended for the last time on May 19th, 2018.</p>\n</div>\n"

/***/ }),

/***/ "./src/app/page-legal/page-legal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageLegalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageLegalComponent = /** @class */ (function () {
    function PageLegalComponent() {
    }
    PageLegalComponent.prototype.ngOnInit = function () {
    };
    PageLegalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-legal',
            template: __webpack_require__("./src/app/page-legal/page-legal.component.html"),
            styles: [__webpack_require__("./src/app/page-legal/page-legal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageLegalComponent);
    return PageLegalComponent;
}());



/***/ }),

/***/ "./src/app/why-ble/why-ble.component.css":
/***/ (function(module, exports) {

module.exports = ".row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n  flex-wrap: wrap;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n\r\n.heading h6 {\r\n  margin: 0px;\r\n  font-size: 14px;\r\n  color: #000;\r\n  font-weight: 500;\r\n  text-transform: none;\r\n  position: relative;\r\n}\r\n\r\n.heading h4 {\r\n  font-weight: 500;\r\n  color: #2d3a4b;\r\n  margin: 0px;\r\n  font-size: 26px;\r\n  letter-spacing: -1px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\np {\r\n  text-align: justify;\r\n}\r\n\r\n@media (max-width: 1199px) and (min-width: 992px) {\r\n  .why-choose .col-md-4 {\r\n      width: 50%;\r\n      -webkit-box-flex: 0;\r\n      -ms-flex: 0 0 50%;\r\n      flex: 0 0 50%;\r\n      max-width: 50%;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .container {\r\n    max-width: 540px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container {\r\n    max-width: 720px;\r\n  }\r\n\r\n  .col-md-4 {\r\n      -webkit-box-flex: 0;\r\n      -ms-flex: 0 0 33.333333%;\r\n      flex: 0 0 33.333333%;\r\n      max-width: 33.333333%;\r\n  }\r\n\r\n  .col-md-7 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 58.333333%;\r\n    flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n\r\n  .col-md-5 {\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: 0 0 41.666667%;\r\n    flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .container {\r\n    max-width: 960px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .container {\r\n    max-width: 1140px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/why-ble/why-ble.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"why-choose padding-top-150 padding-bottom-150\" id=\"about\">\n  <div class=\"container\">\n    <!-- Why Choose Us  ROW-->\n    <div class=\"row\">\n      <div class=\"col-md-7 margin-top-60\">\n\n        <!-- Tittle -->\n        <div class=\"heading margin-bottom-20\">\n          <h6 class=\"margin-bottom-10\">The world deserves an ecological Bitcoin</h6>\n          <h4>A Coinchain on top of a Blockchain</h4>\n        </div>\n        <p>By connecting several cryptocurrencies into one coinchain it will be possible to create temporal dependencies between coins and, consequently, enforce a mining-FREE time window for every mined block.</p>\n        <p>A coinchain is all about several coins relying on each other in order to reduce energy waste during mining.</p>\n        <p>Bitcoin LE is designed to use <strong>5x less mining energy</strong> than Bitcoin.</p>\n        <p>For more information about the inner workings of our revolutionary coinchain system, have a look at our white paper.</p>\n        <div class=\"ultra-ser\">\n          <span>\n            <span class=\"name\"></span>\n          </span>\n        </div>\n      </div>\n\n      <!-- Image -->\n      <div class=\"col-md-5\" style=\"text-align: center;\">\n        <img src=\"assets/coinchain.png\" style=\"max-width: 100%;\">\n      </div>\n    </div>\n\n    <!-- Services ROW -->\n    <div class=\"row\" style=\"margin-top: 50px\">\n      <!-- Services -->\n      <div class=\"col-md-4\">\n        <div class=\"ib-icon\"> <i class=\"flaticon-flat-world-map\"></i> </div>\n        <div class=\"ib-info\">\n          <h4 class=\"h6\">Green Coin</h4>\n          <p>A PoW consensus strategy that minimizes energy demand by enforcing a rest time window that amounts 85% of block time.</p>\n        </div>\n      </div>\n\n      <!-- Services -->\n      <div class=\"col-md-4\">\n        <div class=\"ib-icon\"> <i class=\"flaticon-flat-world-map\"></i> </div>\n        <div class=\"ib-info\">\n          <h4 class=\"h6\">Open Source</h4>\n          <p>Code is public which means it can be inspected and validated by everyone. Publicly available code also gives the coin more trust and robustness.</p>\n        </div>\n      </div>\n\n      <!-- Services -->\n      <div class=\"col-md-4\">\n        <div class=\"ib-icon\"> <i class=\"flaticon-credit-card\"></i> </div>\n        <div class=\"ib-info\">\n          <h4 class=\"h6\">Fast Transactions</h4>\n          <p>We introduced a lower block time of 6 minutes that increases transaction speed by 40% when we compare with Bitcoin.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/why-ble/why-ble.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhyBleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhyBleComponent = /** @class */ (function () {
    function WhyBleComponent() {
    }
    WhyBleComponent.prototype.ngOnInit = function () {
    };
    WhyBleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-why-ble',
            template: __webpack_require__("./src/app/why-ble/why-ble.component.html"),
            styles: [__webpack_require__("./src/app/why-ble/why-ble.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WhyBleComponent);
    return WhyBleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map