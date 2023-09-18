(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/album/album.component.ts":
/*!******************************************!*\
  !*** ./src/app/album/album.component.ts ***!
  \******************************************/
/*! exports provided: AlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumComponent", function() { return AlbumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_text_length_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/text-length.pipe */ "./src/app/pipes/text-length.pipe.ts");






function AlbumComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "textLength");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const album_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.item.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, album_r1.name, 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", album_r1.artists[0].name, " ");
} }
class AlbumComponent {
    constructor(route, searchService) {
        this.route = route;
        this.route.params.subscribe((params) => {
            searchService.getAlbum(params['id']).subscribe((data) => {
                this.item = data;
                this.albumList = data.tracks.items;
                console.log(this.albumList);
            });
        });
    }
    ngOnInit() { }
}
AlbumComponent.ɵfac = function AlbumComponent_Factory(t) { return new (t || AlbumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"])); };
AlbumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlbumComponent, selectors: [["app-album"]], decls: 14, vars: 4, consts: [[1, "artist", "w-50", "mx-auto"], [1, "artist__header"], [1, "artist__header-img", 3, "src"], [1, "artist__header-title"], ["target", "_blank", 1, "btn", "btn-success", 3, "href"], [1, "artist__body"], [1, "artist__body-albums"], [1, "top-track"], ["class", "top__track-item", 4, "ngFor", "ngForOf"], [1, "top__track-item"], [1, "top__track-item-number"], [1, "m-0"], [1, "top_track-item-img", "mx-3", 3, "src"], [1, "top_track-item-title", "text-capitalize"]], template: function AlbumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Open in Spotify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Albums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AlbumComponent_div_13_Template, 11, 7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.item.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.item.external_urls.spotify, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.albumList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_pipes_text_length_pipe__WEBPACK_IMPORTED_MODULE_4__["TextLengthPipe"]], styles: [".artist[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 1rem 0;\n}\n.artist[_ngcontent-%COMP%]   .artist__header[_ngcontent-%COMP%] {\n  position: relative;\n  height: 25rem;\n}\n.artist[_ngcontent-%COMP%]   .artist__header[_ngcontent-%COMP%]   .artist__header-title[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5%;\n  left: 5%;\n}\n.artist[_ngcontent-%COMP%]   .artist__header[_ngcontent-%COMP%]   .artist__header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  font-weight: 700;\n}\n.artist[_ngcontent-%COMP%]   .artist__header[_ngcontent-%COMP%]   .artist__header-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  filter: brightness(0.5);\n  border-radius: 10px;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary);\n  border-radius: 0.5rem;\n  padding: 1rem;\n  margin: 1rem 0;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .artist__body-albums[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .artist__body-albums[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--light-success);\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .artist__body-albums[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%] {\n  background-color: var(--bg-primary);\n  border-radius: 10px;\n  padding: 0.5rem;\n  margin: 0.5rem 0;\n  display: flex;\n  align-items: center;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .artist__body-albums[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]   .top__track-item-number[_ngcontent-%COMP%] {\n  width: 5rem;\n  font-size: 3rem;\n  color: var(--light-success);\n  font-weight: 700;\n  padding: 0 1rem;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .artist__body-albums[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]   .top_track-item-img[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .artist__body-albums[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  cursor: pointer;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxidW0vQzpcXFVzZXJzXFxRdWFjaCBDb25nIFR1YW5cXERlc2t0b3BcXHNwb3RpZnkvc3JjXFxhcHBcXGFsYnVtXFxhbGJ1bS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWxidW0vYWxidW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QUNFSjtBRERJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ0dOO0FERk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNJUjtBRERJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0dOO0FEQUU7RUFDRSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNFSjtBRERJO0VBQ0UsY0FBQTtBQ0dOO0FERk07RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0FDSVI7QURGTTtFQUNFLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNJUjtBREhRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0tWO0FESFE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxtQkFBQTtBQ0tWO0FESFE7RUFDRSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtBQ0tWIiwiZmlsZSI6InNyYy9hcHAvYWxidW0vYWxidW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJ0aXN0IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IDFyZW0gMDtcclxuICAuYXJ0aXN0X19oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyNXJlbTtcclxuICAgIC5hcnRpc3RfX2hlYWRlci10aXRsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiA1JTtcclxuICAgICAgbGVmdDogNSU7XHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFydGlzdF9faGVhZGVyLWltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmFydGlzdF9fYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gICAgLmFydGlzdF9fYm9keS1hbGJ1bXMge1xyXG4gICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgaDMge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXN1Y2Nlc3MpO1xyXG4gICAgICB9XHJcbiAgICAgIC50b3BfX3RyYWNrLWl0ZW0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC50b3BfX3RyYWNrLWl0ZW0tbnVtYmVyIHtcclxuICAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXN1Y2Nlc3MpO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvcF90cmFjay1pdGVtLWltZyB7XHJcbiAgICAgICAgICB3aWR0aDogNHJlbTtcclxuICAgICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuYXJ0aXN0IHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuLmFydGlzdCAuYXJ0aXN0X19oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjVyZW07XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2hlYWRlciAuYXJ0aXN0X19oZWFkZXItdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNSU7XG4gIGxlZnQ6IDUlO1xufVxuLmFydGlzdCAuYXJ0aXN0X19oZWFkZXIgLmFydGlzdF9faGVhZGVyLXRpdGxlIGgxIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmFydGlzdCAuYXJ0aXN0X19oZWFkZXIgLmFydGlzdF9faGVhZGVyLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5hcnRpc3QgLmFydGlzdF9fYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2JvZHkgLmFydGlzdF9fYm9keS1hbGJ1bXMge1xuICBtYXJnaW46IDFyZW0gMDtcbn1cbi5hcnRpc3QgLmFydGlzdF9fYm9keSAuYXJ0aXN0X19ib2R5LWFsYnVtcyBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcbn1cbi5hcnRpc3QgLmFydGlzdF9fYm9keSAuYXJ0aXN0X19ib2R5LWFsYnVtcyAudG9wX190cmFjay1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hcnRpc3QgLmFydGlzdF9fYm9keSAuYXJ0aXN0X19ib2R5LWFsYnVtcyAudG9wX190cmFjay1pdGVtIC50b3BfX3RyYWNrLWl0ZW0tbnVtYmVyIHtcbiAgd2lkdGg6IDVyZW07XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXN1Y2Nlc3MpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2JvZHkgLmFydGlzdF9fYm9keS1hbGJ1bXMgLnRvcF9fdHJhY2staXRlbSAudG9wX3RyYWNrLWl0ZW0taW1nIHtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2JvZHkgLmFydGlzdF9fYm9keS1hbGJ1bXMgLnRvcF9fdHJhY2staXRlbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-album',
                templateUrl: './album.component.html',
                styleUrls: ['./album.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _artist_artist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./artist/artist.component */ "./src/app/artist/artist.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guard/auth.guard */ "./src/app/guard/auth.guard.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _album_album_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./album/album.component */ "./src/app/album/album.component.ts");












const routes = [
    {
        path: '',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"],
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    {
        path: 'explore',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    {
        path: 'artist/:id',
        component: _artist_artist_component__WEBPACK_IMPORTED_MODULE_4__["ArtistComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    {
        path: 'album/:id',
        component: _album_album_component__WEBPACK_IMPORTED_MODULE_9__["AlbumComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    {
        path: 'playlist/:id',
        component: _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            {
                path: 'playlists',
                component: _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistComponent"],
            },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _commons_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commons/navbar/navbar.component */ "./src/app/commons/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor(auth) {
        this.auth = auth;
        // document.addEventListener('contextmenu', (event) => event.preventDefault());
        // document.addEventListener('keydown', (event) => {
        //   if (event.key === 'F12') {
        //     event.preventDefault();
        //   }
        // });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [[1, "main-frame"], [1, "container-fluid", "flex-grow-1"], [1, "row", "h-100"], [1, "col-lg-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_commons_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["app-navbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\n.main-frame[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n  position: relative;\n}\n\n.main-frame[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  background: var(--bg-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxRdWFjaCBDb25nIFR1YW5cXERlc2t0b3BcXHNwb3RpZnkvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQUU7RUFDRSw2QkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLW5hdmJhciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4ubWFpbi1mcmFtZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5yb3cge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XHJcbiAgfVxyXG59XHJcbiIsImFwcC1uYXZiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLm1haW4tZnJhbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbi1mcmFtZSAucm93IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcHJpbWFyeSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _commons_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commons/navbar/navbar.component */ "./src/app/commons/navbar/navbar.component.ts");
/* harmony import */ var _commons_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commons/footer/footer.component */ "./src/app/commons/footer/footer.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _artist_artist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./artist/artist.component */ "./src/app/artist/artist.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");
/* harmony import */ var _pipes_text_length_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/text-length.pipe */ "./src/app/pipes/text-length.pipe.ts");
/* harmony import */ var _pipes_to_minutes_second_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/to-minutes-second.pipe */ "./src/app/pipes/to-minutes-second.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ "./src/app/interceptors/auth.interceptor.ts");
/* harmony import */ var _home_category_category_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/category/category.component */ "./src/app/home/category/category.component.ts");
/* harmony import */ var _home_preview_list_preview_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/preview-list/preview-list.component */ "./src/app/home/preview-list/preview-list.component.ts");
/* harmony import */ var _album_album_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./album/album.component */ "./src/app/album/album.component.ts");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
            useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _commons_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _commons_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
        _artist_artist_component__WEBPACK_IMPORTED_MODULE_10__["ArtistComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
        _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_12__["PlaylistComponent"],
        _pipes_text_length_pipe__WEBPACK_IMPORTED_MODULE_13__["TextLengthPipe"],
        _pipes_to_minutes_second_pipe__WEBPACK_IMPORTED_MODULE_14__["ToMinutesSecondPipe"],
        _home_category_category_component__WEBPACK_IMPORTED_MODULE_18__["CategoryComponent"],
        _home_preview_list_preview_list_component__WEBPACK_IMPORTED_MODULE_19__["PreviewListComponent"],
        _album_album_component__WEBPACK_IMPORTED_MODULE_20__["AlbumComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _commons_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _commons_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                    _artist_artist_component__WEBPACK_IMPORTED_MODULE_10__["ArtistComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
                    _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_12__["PlaylistComponent"],
                    _pipes_text_length_pipe__WEBPACK_IMPORTED_MODULE_13__["TextLengthPipe"],
                    _pipes_to_minutes_second_pipe__WEBPACK_IMPORTED_MODULE_14__["ToMinutesSecondPipe"],
                    _home_category_category_component__WEBPACK_IMPORTED_MODULE_18__["CategoryComponent"],
                    _home_preview_list_preview_list_component__WEBPACK_IMPORTED_MODULE_19__["PreviewListComponent"],
                    _album_album_component__WEBPACK_IMPORTED_MODULE_20__["AlbumComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
                        useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/artist/artist.component.ts":
/*!********************************************!*\
  !*** ./src/app/artist/artist.component.ts ***!
  \********************************************/
/*! exports provided: ArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistComponent", function() { return ArtistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_text_length_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/text-length.pipe */ "./src/app/pipes/text-length.pipe.ts");






function ArtistComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.item.followers.total), " followers ");
} }
function ArtistComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", track_r4.album.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](track_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](track_r4.artists[0].name);
} }
const _c0 = function (a1) { return ["/album", a1]; };
function ArtistComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "textLength");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const album_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, album_r6.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", album_r6.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, album_r6.name, 15));
} }
function ArtistComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "textLength");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", track_r7.album.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, track_r7.name, 20));
} }
class ArtistComponent {
    constructor(route, searchService) {
        this.route = route;
        this.route.params.subscribe((params) => {
            this.id = params['id'];
            searchService.getArtist(this.id).subscribe((data) => {
                this.item = data;
                searchService.getAlbums(this.id).subscribe((data) => {
                    this.item.albums = data.items;
                });
                searchService.getTopTracks(this.id).subscribe((data) => {
                    this.item.tracks = data.tracks;
                });
            });
        });
    }
    ngOnInit() { }
}
ArtistComponent.ɵfac = function ArtistComponent_Factory(t) { return new (t || ArtistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"])); };
ArtistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtistComponent, selectors: [["app-artist"]], decls: 24, vars: 7, consts: [[1, "artist", "w-50", "mx-auto"], [1, "artist__header"], [1, "artist__header-img", 3, "src"], [1, "artist__header-title"], [4, "ngIf"], ["target", "_blank", 1, "btn", "btn-success", 3, "href"], [1, "artist__body"], [1, "top-track"], ["class", "top__track-item", 4, "ngFor", "ngForOf"], [1, "artist__body-albums"], [1, "artist__body-albums-list"], ["class", "artist__body-albums-list-item", 3, "routerLink", 4, "ngFor", "ngForOf"], ["class", "artist__body-albums-list-item", 4, "ngFor", "ngForOf"], [1, "top__track-item"], [1, "top__track-item-number"], [1, "m-0"], [1, "top_track-item-img", "mx-3", 3, "src"], [1, "top_track-item-title", "text-capitalize"], [1, "artist__body-albums-list-item", 3, "routerLink"], [3, "src"], [1, "artist__body-albums-list-item"]], template: function ArtistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ArtistComponent_p_6_Template, 3, 3, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Open in Spotify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "TOP TRACKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ArtistComponent_div_13_Template, 10, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Albums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ArtistComponent_div_18_Template, 5, 8, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Track");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ArtistComponent_div_23_Template, 5, 5, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.item.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.followers.total > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.item.external_urls.spotify, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.item.tracks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.item.albums);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.item.tracks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"], _pipes_text_length_pipe__WEBPACK_IMPORTED_MODULE_4__["TextLengthPipe"]], styles: [".artist[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 1rem 0;\n}\n.artist[_ngcontent-%COMP%]   .artist__header[_ngcontent-%COMP%] {\n  position: relative;\n  height: 25rem;\n}\n.artist[_ngcontent-%COMP%]   .artist__header[_ngcontent-%COMP%]   .artist__header-title[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5%;\n  left: 5%;\n}\n.artist[_ngcontent-%COMP%]   .artist__header[_ngcontent-%COMP%]   .artist__header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  font-weight: 700;\n}\n.artist[_ngcontent-%COMP%]   .artist__header[_ngcontent-%COMP%]   .artist__header-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  filter: brightness(0.5);\n  border-radius: 10px;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary);\n  border-radius: 0.5rem;\n  padding: 1rem;\n  margin: 1rem 0;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--light-success);\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .artist__body-albums[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .artist__body-albums[_ngcontent-%COMP%]   .artist__body-albums-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1rem;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .artist__body-albums[_ngcontent-%COMP%]   .artist__body-albums-list[_ngcontent-%COMP%]   .artist__body-albums-list-item[_ngcontent-%COMP%] {\n  background-color: var(--bg-primary);\n  border-radius: 0.5rem;\n  padding: 0.5rem;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .artist__body-albums[_ngcontent-%COMP%]   .artist__body-albums-list[_ngcontent-%COMP%]   .artist__body-albums-list-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 0.5rem;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .artist__body-albums[_ngcontent-%COMP%]   .artist__body-albums-list[_ngcontent-%COMP%]   .artist__body-albums-list-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin: 0.5rem 0;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .artist__body-albums[_ngcontent-%COMP%]   .artist__body-albums-list[_ngcontent-%COMP%]   .artist__body-albums-list-item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n  transform: scale(1.05);\n  color: var(--light-success);\n  filter: brightness(0.8);\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .top-track[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n  border-bottom: 1px solid var(--bg-primary);\n  margin: 0.5rem 0;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .top-track[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%] {\n  background-color: var(--bg-primary);\n  border-radius: 10px;\n  padding: 0.5rem;\n  margin: 0.5rem 0;\n  display: flex;\n  align-items: center;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .top-track[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]   .top__track-item-number[_ngcontent-%COMP%] {\n  width: 5rem;\n  font-size: 3rem;\n  color: var(--light-success);\n  font-weight: 700;\n  padding: 0 1rem;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .top-track[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]   .top_track-item-img[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .top-track[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  cursor: pointer;\n  color: var(--light-success);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aXN0L0M6XFxVc2Vyc1xcUXVhY2ggQ29uZyBUdWFuXFxEZXNrdG9wXFxzcG90aWZ5L3NyY1xcYXBwXFxhcnRpc3RcXGFydGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXJ0aXN0L2FydGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ0VKO0FEREk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FDR047QURGTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0lSO0FEREk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDR047QURBRTtFQUNFLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEREk7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0FDR047QURESTtFQUNFLGNBQUE7QUNHTjtBREZNO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtBQ0lSO0FESFE7RUFDRSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0tWO0FESlU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxxQkFBQTtBQ01aO0FESlU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDTVo7QURKVTtFQUNFLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQ01aO0FEREk7RUFDRSxlQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0dOO0FERk07RUFDRSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDSVI7QURIUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNLVjtBREhRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsbUJBQUE7QUNLVjtBREhRO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtBQ0tWIiwiZmlsZSI6InNyYy9hcHAvYXJ0aXN0L2FydGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpc3Qge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG4gIC5hcnRpc3RfX2hlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDI1cmVtO1xyXG4gICAgLmFydGlzdF9faGVhZGVyLXRpdGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDUlO1xyXG4gICAgICBsZWZ0OiA1JTtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYXJ0aXN0X19oZWFkZXItaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYXJ0aXN0X19ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXNlY29uZGFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcclxuICAgIH1cclxuICAgIC5hcnRpc3RfX2JvZHktYWxidW1zIHtcclxuICAgICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAgIC5hcnRpc3RfX2JvZHktYWxidW1zLWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgICAgICBncmlkLWdhcDogMXJlbTtcclxuICAgICAgICAuYXJ0aXN0X19ib2R5LWFsYnVtcy1saXN0LWl0ZW0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudG9wLXRyYWNrIHtcclxuICAgICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmctcHJpbWFyeSk7XHJcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgIC50b3BfX3RyYWNrLWl0ZW0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC50b3BfX3RyYWNrLWl0ZW0tbnVtYmVyIHtcclxuICAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXN1Y2Nlc3MpO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvcF90cmFjay1pdGVtLWltZyB7XHJcbiAgICAgICAgICB3aWR0aDogNHJlbTtcclxuICAgICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXN1Y2Nlc3MpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuYXJ0aXN0IHtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuLmFydGlzdCAuYXJ0aXN0X19oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjVyZW07XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2hlYWRlciAuYXJ0aXN0X19oZWFkZXItdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNSU7XG4gIGxlZnQ6IDUlO1xufVxuLmFydGlzdCAuYXJ0aXN0X19oZWFkZXIgLmFydGlzdF9faGVhZGVyLXRpdGxlIGgxIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmFydGlzdCAuYXJ0aXN0X19oZWFkZXIgLmFydGlzdF9faGVhZGVyLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5hcnRpc3QgLmFydGlzdF9fYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2JvZHkgaDMge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tbGlnaHQtc3VjY2Vzcyk7XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2JvZHkgLmFydGlzdF9fYm9keS1hbGJ1bXMge1xuICBtYXJnaW46IDFyZW0gMDtcbn1cbi5hcnRpc3QgLmFydGlzdF9fYm9keSAuYXJ0aXN0X19ib2R5LWFsYnVtcyAuYXJ0aXN0X19ib2R5LWFsYnVtcy1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ3JpZC1nYXA6IDFyZW07XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2JvZHkgLmFydGlzdF9fYm9keS1hbGJ1bXMgLmFydGlzdF9fYm9keS1hbGJ1bXMtbGlzdCAuYXJ0aXN0X19ib2R5LWFsYnVtcy1saXN0LWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2JvZHkgLmFydGlzdF9fYm9keS1hbGJ1bXMgLmFydGlzdF9fYm9keS1hbGJ1bXMtbGlzdCAuYXJ0aXN0X19ib2R5LWFsYnVtcy1saXN0LWl0ZW0gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTByZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2JvZHkgLmFydGlzdF9fYm9keS1hbGJ1bXMgLmFydGlzdF9fYm9keS1hbGJ1bXMtbGlzdCAuYXJ0aXN0X19ib2R5LWFsYnVtcy1saXN0LWl0ZW0gcCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2JvZHkgLmFydGlzdF9fYm9keS1hbGJ1bXMgLmFydGlzdF9fYm9keS1hbGJ1bXMtbGlzdCAuYXJ0aXN0X19ib2R5LWFsYnVtcy1saXN0LWl0ZW06aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBjb2xvcjogdmFyKC0tbGlnaHQtc3VjY2Vzcyk7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xufVxuLmFydGlzdCAuYXJ0aXN0X19ib2R5IC50b3AtdHJhY2sge1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cbi5hcnRpc3QgLmFydGlzdF9fYm9keSAudG9wLXRyYWNrIC50b3BfX3RyYWNrLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFydGlzdCAuYXJ0aXN0X19ib2R5IC50b3AtdHJhY2sgLnRvcF9fdHJhY2staXRlbSAudG9wX190cmFjay1pdGVtLW51bWJlciB7XG4gIHdpZHRoOiA1cmVtO1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuLmFydGlzdCAuYXJ0aXN0X19ib2R5IC50b3AtdHJhY2sgLnRvcF9fdHJhY2staXRlbSAudG9wX3RyYWNrLWl0ZW0taW1nIHtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2JvZHkgLnRvcC10cmFjayAudG9wX190cmFjay1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tbGlnaHQtc3VjY2Vzcyk7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-artist',
                templateUrl: './artist.component.html',
                styleUrls: ['./artist.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/commons/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/commons/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function FooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Spotify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "DOCUMENTATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Legal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Privacy Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Privacy Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cookies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About Ads");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "GUIDLELINES");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Accessibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "COMMUNITY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "News");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "LEGAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Developer Terms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Developer Policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Legal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Privacy Center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A9 2023 Spotify AB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FooterComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() { }
    checkUrl() {
        if (this.route.snapshot.url[0].path === '') {
            return true;
        }
        return false;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 2, consts: [["class", "footer", 4, "ngIf"], [1, "footer"], [1, "footer-links"], [1, "m-0", "font-weight-bold", "h1"], [1, "fa-brands", "fa-spotify", "mr-1"], [1, "footer-links", "d-flex", "flex-column"], ["href", "#"], ["href", ""], ["href", "", 1, "mx-5"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_div_0_Template, 39, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_1_Template, 7, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkUrl());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkUrl());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".footer[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #000;\n  padding: 5rem 5rem 2rem 5rem;\n  display: flex;\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  margin-right: 2rem;\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #ccc;\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.footer[_ngcontent-%COMP%]:nth-child(2) {\n  padding-bottom: 3rem;\n  display: flex;\n  justify-content: flex-end;\n}\n.footer[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9ucy9mb290ZXIvQzpcXFVzZXJzXFxRdWFjaCBDb25nIFR1YW5cXERlc2t0b3BcXHNwb3RpZnkvc3JjXFxhcHBcXGNvbW1vbnNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb25zL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FDRUo7QURESTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0dOO0FEREk7RUFDRSxXQUFBO0FDR047QURBRTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDRUo7QURESTtFQUNFLFdBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbnMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgcGFkZGluZzogNXJlbSA1cmVtIDJyZW0gNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC5mb290ZXItbGlua3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgfVxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAjY2NjO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZm9vdGVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIHBhZGRpbmc6IDVyZW0gNXJlbSAycmVtIDVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZm9vdGVyIC5mb290ZXItbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG59XG4uZm9vdGVyIC5mb290ZXItbGlua3MgcCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjY2NjO1xufVxuLmZvb3RlciAuZm9vdGVyLWxpbmtzIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5mb290ZXI6bnRoLWNoaWxkKDIpIHtcbiAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZm9vdGVyOm50aC1jaGlsZCgyKSBhIHtcbiAgY29sb3I6ICNjY2M7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/commons/navbar/navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/commons/navbar/navbar.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const _c0 = function () { return ["home"]; };
const _c1 = function () { return ["explore"]; };
function NavbarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Homepage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Explore");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
} }
function NavbarComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.login(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return ["profile"]; };
function NavbarComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_7_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.User == null ? null : ctx_r2.User.images[0] == null ? null : ctx_r2.User.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.User == null ? null : ctx_r2.User.display_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
} }
class NavbarComponent {
    constructor(authServices, profileService) {
        this.authServices = authServices;
        this.profileService = profileService;
        this.profileService.getProfile().subscribe((data) => {
            this.User = data;
            console.log(this.User);
        });
    }
    ngOnInit() { }
    isLoggedIn() {
        return this.authServices.isLoggedIn();
    }
    logout() {
        this.authServices.logout();
    }
    login() {
        console.log('login');
        this.authServices.login();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 8, vars: 3, consts: [[1, "navbar", "px-lg-5", "px-3"], [1, "navbar-logo"], [1, "m-0", "font-weight-bold"], [1, "fa-brands", "fa-spotify", "mr-1"], ["class", "navbar-menu", 4, "ngIf"], ["class", "btn btn-primary navbar-profile px-lg-5 py-lg-2 px-4 py-1", 3, "click", 4, "ngIf"], ["ngbDropdown", "", "class", "text-start", 4, "ngIf"], [1, "navbar-menu"], ["routerLinkActive", "active", 3, "routerLink"], [1, "btn", "btn-primary", "navbar-profile", "px-lg-5", "py-lg-2", "px-4", "py-1", 3, "click"], ["ngbDropdown", "", 1, "text-start"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "navbar-profile"], [1, "navbar-profile-image", 3, "src"], [1, "navbar-profile-name"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", 3, "routerLink"], ["ngbDropdownItem", "", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Spotify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_div_5_Template, 5, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_button_6_Template, 2, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_div_7_Template, 10, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn());
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownItem"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".navbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--bg-secondary);\n  color: #fff;\n  top: 0;\n  left: 0;\n  position: sticky !important;\n  width: 100%;\n  z-index: 2;\n  padding: 1rem 0;\n  font-size: 1rem;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-logo[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  text-decoration: none;\n  color: #fff;\n  font-weight: 500;\n  font-size: 1.2rem;\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-menu[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  border-bottom: 5px solid var(--light-success);\n  color: var(--light-success);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-profile[_ngcontent-%COMP%] {\n  display: flex;\n  border-radius: 2rem;\n  align-items: center;\n  padding: 0.1rem 0.5rem;\n  background: var(--bg-light);\n  color: var(--primary);\n  border: none;\n  font-weight: 700;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-profile[_ngcontent-%COMP%]   .navbar-profile-image[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  padding: 0.1rem;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-profile[_ngcontent-%COMP%]   .navbar-profile-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0 1.5rem;\n}\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 0.5rem 0;\n  }\n\n  .navbar-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .navbar-profile[_ngcontent-%COMP%]   .navbar-profile-name[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9ucy9uYXZiYXIvQzpcXFVzZXJzXFxRdWFjaCBDb25nIFR1YW5cXERlc2t0b3BcXHNwb3RpZnkvc3JjXFxhcHBcXGNvbW1vbnNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21tb25zL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7QUNDRjtBREFFO0VBQ0UsaUJBQUE7QUNFSjtBRENJO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NOO0FEQ0k7RUFDRSw2Q0FBQTtFQUNBLDJCQUFBO0FDQ047QURFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUo7QURDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NOO0FEQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDTjtBRElBO0VBQ0U7SUFDRSxpQkFBQTtFQ0RGOztFRElBO0lBQ0UsYUFBQTtFQ0RGOztFREtFO0lBQ0UsZUFBQTtFQ0ZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21tb25zL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgLm5hdmJhci1sb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICAubmF2YmFyLW1lbnUge1xyXG4gICAgYSB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tbGlnaHQtc3VjY2Vzcyk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcclxuICAgIH1cclxuICB9XHJcbiAgLm5hdmJhci1wcm9maWxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuMXJlbSAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1saWdodCk7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgLm5hdmJhci1wcm9maWxlLWltYWdlIHtcclxuICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgcGFkZGluZzogMC4xcmVtO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1wcm9maWxlLW5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIG1hcmdpbjogMCAxLjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubmF2YmFyIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1tZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLXByb2ZpbGUge1xyXG4gICAgLm5hdmJhci1wcm9maWxlLW5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGNvbG9yOiAjZmZmO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDI7XG4gIHBhZGRpbmc6IDFyZW0gMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ubmF2YmFyIC5uYXZiYXItbG9nbyB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLm5hdmJhciAubmF2YmFyLW1lbnUgYSB7XG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXZiYXIgLm5hdmJhci1tZW51IC5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tbGlnaHQtc3VjY2Vzcyk7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcbn1cbi5uYXZiYXIgLm5hdmJhci1wcm9maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC4xcmVtIDAuNXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctbGlnaHQpO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5uYXZiYXIgLm5hdmJhci1wcm9maWxlIC5uYXZiYXItcHJvZmlsZS1pbWFnZSB7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHBhZGRpbmc6IDAuMXJlbTtcbn1cbi5uYXZiYXIgLm5hdmJhci1wcm9maWxlIC5uYXZiYXItcHJvZmlsZS1uYW1lIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW46IDAgMS41cmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhciB7XG4gICAgcGFkZGluZzogMC41cmVtIDA7XG4gIH1cblxuICAubmF2YmFyLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubmF2YmFyLXByb2ZpbGUgLm5hdmJhci1wcm9maWxlLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: src_app_services_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/guard/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/category/category.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/category/category.component.ts ***!
  \*****************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_artist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/artist.service */ "./src/app/services/artist.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CategoryComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
} }
class CategoryComponent {
    constructor(ArtistServices) {
        this.ArtistServices = ArtistServices;
        this.ArtistServices.getShow().subscribe((data) => {
            this.show = data['albums'].items;
            console.log(this.show);
        });
    }
    ngOnInit() { }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_artist_service__WEBPACK_IMPORTED_MODULE_1__["ArtistService"])); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-category"]], decls: 4, vars: 1, consts: [[1, "categories"], ["class", "show__item", 4, "ngFor", "ngForOf"], [1, "show__item"], [1, "show__item__image"], ["alt", "", 3, "src"], [1, "show__item__name"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoryComponent_div_3_Template, 6, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".categories[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 0.5rem;\n}\n.categories[_ngcontent-%COMP%]   .show__item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.categories[_ngcontent-%COMP%]   .show__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 0.5rem;\n}\n.categories[_ngcontent-%COMP%]   .show__item[_ngcontent-%COMP%]   .show__item__name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  font-weight: 700;\n  font-size: 1.3rem;\n  display: none;\n  color: var(--light-success);\n}\n.categories[_ngcontent-%COMP%]   .show__item[_ngcontent-%COMP%]:hover   .show__item__name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n}\n.categories[_ngcontent-%COMP%]   .show__item[_ngcontent-%COMP%]:hover   .show__item__image[_ngcontent-%COMP%] {\n  filter: brightness(0.1);\n}\n@media screen and (max-width: 768px) {\n  .categories[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXRlZ29yeS9DOlxcVXNlcnNcXFF1YWNoIENvbmcgVHVhblxcRGVza3RvcFxcc3BvdGlmeS9zcmNcXGFwcFxcaG9tZVxcY2F0ZWdvcnlcXGNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7QUNDSjtBREFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EscUJBQUE7QUNFTjtBREFJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FDRU47QURFTTtFQUNFLGNBQUE7QUNBUjtBREVNO0VBQ0UsdUJBQUE7QUNBUjtBRE1BO0VBQ0U7SUFDRSxxQ0FBQTtFQ0hGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3JpZXMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBncmlkLWdhcDogMC41cmVtO1xyXG5cclxuICAuc2hvd19faXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgfVxyXG4gICAgLnNob3dfX2l0ZW1fX25hbWUgcCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLnNob3dfX2l0ZW1fX25hbWUgcCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgLnNob3dfX2l0ZW1fX2ltYWdlIHtcclxuICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC4xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY2F0ZWdvcmllcyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIH1cclxufVxyXG4iLCIuY2F0ZWdvcmllcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdyaWQtZ2FwOiAwLjVyZW07XG59XG4uY2F0ZWdvcmllcyAuc2hvd19faXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXRlZ29yaWVzIC5zaG93X19pdGVtIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG59XG4uY2F0ZWdvcmllcyAuc2hvd19faXRlbSAuc2hvd19faXRlbV9fbmFtZSBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXN1Y2Nlc3MpO1xufVxuLmNhdGVnb3JpZXMgLnNob3dfX2l0ZW06aG92ZXIgLnNob3dfX2l0ZW1fX25hbWUgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmNhdGVnb3JpZXMgLnNob3dfX2l0ZW06aG92ZXIgLnNob3dfX2l0ZW1fX2ltYWdlIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuMSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jYXRlZ29yaWVzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category',
                templateUrl: './category.component.html',
                styleUrls: ['./category.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_artist_service__WEBPACK_IMPORTED_MODULE_1__["ArtistService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _preview_list_preview_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview-list/preview-list.component */ "./src/app/home/preview-list/preview-list.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category/category.component */ "./src/app/home/category/category.component.ts");




class HomeComponent {
    constructor() { }
    ngOnInit() { }
    getDate() {
        if (new Date().getHours() >= 0 && new Date().getHours() < 12) {
            return 'Good Morning';
        }
        if (new Date().getHours() >= 12 && new Date().getHours() < 18) {
            return 'Good Afternoon';
        }
        if (new Date().getHours() >= 18 && new Date().getHours() < 24) {
            return 'Good Evening';
        }
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 1, consts: [[1, "homepage", "mx-auto", "py-3"], [1, "font-weight-bolder"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-preview-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getDate());
    } }, directives: [_preview_list_preview_list_component__WEBPACK_IMPORTED_MODULE_1__["PreviewListComponent"], _category_category_component__WEBPACK_IMPORTED_MODULE_2__["CategoryComponent"]], styles: [".homepage[_ngcontent-%COMP%] {\n  color: var(--light);\n  background-color: var(--bg-primary);\n  width: 50%;\n}\n\n@media screen and (max-width: 768px) {\n  .homepage[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFF1YWNoIENvbmcgVHVhblxcRGVza3RvcFxcc3BvdGlmeS9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsV0FBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZXBhZ2Uge1xyXG4gIGNvbG9yOiB2YXIoLS1saWdodCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaG9tZXBhZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsIi5ob21lcGFnZSB7XG4gIGNvbG9yOiB2YXIoLS1saWdodCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xuICB3aWR0aDogNTAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaG9tZXBhZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/preview-list/preview-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/preview-list/preview-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PreviewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewListComponent", function() { return PreviewListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_artist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/artist.service */ "./src/app/services/artist.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/playlist", a1]; };
function PreviewListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, item_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
} }
class PreviewListComponent {
    constructor(ArtistServices) {
        this.ArtistServices = ArtistServices;
        this.ArtistServices.getMyPlaylist().subscribe((data) => {
            this.playlist = data['items'];
            this.playlist = this.playlist.slice(0, 6);
        });
    }
    ngOnInit() { }
}
PreviewListComponent.ɵfac = function PreviewListComponent_Factory(t) { return new (t || PreviewListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_artist_service__WEBPACK_IMPORTED_MODULE_1__["ArtistService"])); };
PreviewListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviewListComponent, selectors: [["app-preview-list"]], decls: 2, vars: 1, consts: [[1, "playlist"], ["class", "playlist__item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "playlist__item", 3, "routerLink"], [1, "playlist__item__image"], [3, "src"], [1, "playlist__item__info"], [1, "playlist__item__info__title"]], template: function PreviewListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviewListComponent_div_1_Template, 7, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.playlist);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".playlist[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1rem;\n  margin: 1rem 0;\n  padding: 2rem 0;\n  border-bottom: 1px solid var(--bg-secondary);\n}\n.playlist[_ngcontent-%COMP%]   .playlist__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  background-color: var(--bg-secondary);\n}\n.playlist[_ngcontent-%COMP%]   .playlist__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n.playlist[_ngcontent-%COMP%]   .playlist__item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-right: 1rem;\n  border-radius: 0.5rem;\n}\n.playlist[_ngcontent-%COMP%]   .playlist__item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 5px 1px var(--secondary);\n  transform: scale(1.03);\n  color: var(--light-success);\n}\n@media screen and (max-width: 768px) {\n  .playlist[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcmV2aWV3LWxpc3QvQzpcXFVzZXJzXFxRdWFjaCBDb25nIFR1YW5cXERlc2t0b3BcXHNwb3RpZnkvc3JjXFxhcHBcXGhvbWVcXHByZXZpZXctbGlzdFxccHJldmlldy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3ByZXZpZXctbGlzdC9wcmV2aWV3LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQ0FBQTtBQ0NKO0FEQUk7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VOO0FEQUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDRU47QURBSTtFQUNFLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0VOO0FER0E7RUFDRTtJQUNFLHFDQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcHJldmlldy1saXN0L3ByZXZpZXctbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5bGlzdCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiAxcmVtO1xyXG4gIG1hcmdpbjogMXJlbSAwO1xyXG4gIHBhZGRpbmc6IDJyZW0gMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmctc2Vjb25kYXJ5KTtcclxuXHJcbiAgLnBsYXlsaXN0X19pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctc2Vjb25kYXJ5KTtcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgNXB4IDFweCB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tbGlnaHQtc3VjY2Vzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5wbGF5bGlzdCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gIH1cclxufVxyXG4iLCIucGxheWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICBncmlkLWdhcDogMXJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJnLXNlY29uZGFyeSk7XG59XG4ucGxheWxpc3QgLnBsYXlsaXN0X19pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXNlY29uZGFyeSk7XG59XG4ucGxheWxpc3QgLnBsYXlsaXN0X19pdGVtIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wbGF5bGlzdCAucGxheWxpc3RfX2l0ZW0gaW1nIHtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuLnBsYXlsaXN0IC5wbGF5bGlzdF9faXRlbTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4IHZhcigtLXNlY29uZGFyeSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnBsYXlsaXN0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-preview-list',
                templateUrl: './preview-list.component.html',
                styleUrls: ['./preview-list.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_artist_service__WEBPACK_IMPORTED_MODULE_1__["ArtistService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/interceptors/auth.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        if (this.authService.isLoggedIn()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authService.getToken()}`,
                },
            });
        }
        return next.handle(request);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/text-length.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/text-length.pipe.ts ***!
  \*******************************************/
/*! exports provided: TextLengthPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextLengthPipe", function() { return TextLengthPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TextLengthPipe {
    transform(value, limit) {
        if (value.length > limit) {
            return value.substring(0, limit) + '...';
        }
        return value;
    }
}
TextLengthPipe.ɵfac = function TextLengthPipe_Factory(t) { return new (t || TextLengthPipe)(); };
TextLengthPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "textLength", type: TextLengthPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextLengthPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'textLength',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/to-minutes-second.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/pipes/to-minutes-second.pipe.ts ***!
  \*************************************************/
/*! exports provided: ToMinutesSecondPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToMinutesSecondPipe", function() { return ToMinutesSecondPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ToMinutesSecondPipe {
    transform(value, ...args) {
        return null;
    }
}
ToMinutesSecondPipe.ɵfac = function ToMinutesSecondPipe_Factory(t) { return new (t || ToMinutesSecondPipe)(); };
ToMinutesSecondPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "toMinutesSecond", type: ToMinutesSecondPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToMinutesSecondPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'toMinutesSecond'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/playlist/playlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/playlist/playlist.component.ts ***!
  \************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_text_length_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/text-length.pipe */ "./src/app/pipes/text-length.pipe.ts");






function PlaylistComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.item.followers.total), " followers ");
} }
function PlaylistComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "textLength");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playlist_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", playlist_r2.track.album == null ? null : playlist_r2.track.album.images[0] == null ? null : playlist_r2.track.album.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, playlist_r2.track.name, 35));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", playlist_r2.track.artists[0].name, " ");
} }
class PlaylistComponent {
    constructor(route, searchServices) {
        this.route = route;
        this.searchServices = searchServices;
        this.route.params.subscribe((params) => {
            this.searchServices.getPlaylist(params['id']).subscribe((data) => {
                this.item = data;
                this.trackList = data.tracks.items;
                console.log(this.item);
            });
        });
    }
    ngOnInit() { }
}
PlaylistComponent.ɵfac = function PlaylistComponent_Factory(t) { return new (t || PlaylistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"])); };
PlaylistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaylistComponent, selectors: [["app-playlist"]], decls: 14, vars: 5, consts: [[1, "artist", "mx-auto"], [1, "artist__header"], [1, "artist__header-img", 3, "src"], [1, "artist__header-title"], [4, "ngIf"], ["target", "_blank", 1, "btn", "btn-success", 3, "href"], [1, "artist__body"], [1, "top-track"], ["class", "top__track-item", 4, "ngFor", "ngForOf"], [1, "top__track-item"], [1, "top__track-item-number"], [1, "m-0"], [1, "top_track-item-img", "mx-lg-3", 3, "src"], [1, "top_track-item-title", "text-capitalize"]], template: function PlaylistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlaylistComponent_p_6_Template, 3, 3, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Open in Spotify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Playlists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PlaylistComponent_div_13_Template, 11, 7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.item == null ? null : ctx.item.images[0] == null ? null : ctx.item.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.followers.total > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.item.external_urls.spotify, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.trackList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"], _pipes_text_length_pipe__WEBPACK_IMPORTED_MODULE_4__["TextLengthPipe"]], styles: ["@charset \"UTF-8\";\n.artist[_ngcontent-%COMP%] {\n  width: 50%;\n  color: #fff;\n  margin: 1rem 0;\n}\n.artist[_ngcontent-%COMP%]   .artist__header[_ngcontent-%COMP%] {\n  position: relative;\n  height: 25rem;\n}\n.artist[_ngcontent-%COMP%]   .artist__header[_ngcontent-%COMP%]   .artist__header-title[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5%;\n  left: 5%;\n}\n.artist[_ngcontent-%COMP%]   .artist__header[_ngcontent-%COMP%]   .artist__header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  font-weight: 700;\n}\n.artist[_ngcontent-%COMP%]   .artist__header[_ngcontent-%COMP%]   .artist__header-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  filter: brightness(0.5);\n  border-radius: 10px;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary);\n  border-radius: 0.5rem;\n  padding: 1rem;\n  margin: 1rem 0;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--light-success);\n  font-weight: 600;\n  margin-bottom: 1rem;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%] {\n  background-color: var(--bg-primary);\n  border-radius: 10px;\n  padding: 0.5rem;\n  margin: 0.5rem 0;\n  display: flex;\n  align-items: center;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]   .top__track-item-number[_ngcontent-%COMP%] {\n  width: 5rem;\n  font-size: 3rem;\n  color: var(--light-success);\n  font-weight: 700;\n  padding: 0 1rem;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]   .top_track-item-img[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n}\n.artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]:hover {\n  color: var(--light-success);\n  transform: scale(1.02);\n  cursor: pointer;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n@media screen and (max-width: 768px) {\n  .artist[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .artist[_ngcontent-%COMP%]   .artist__header[_ngcontent-%COMP%] {\n    position: relative;\n    height: 25rem;\n  }\n  .artist[_ngcontent-%COMP%]   .artist__header[_ngcontent-%COMP%]   .artist__header-title[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 5%;\n    left: 5%;\n  }\n  .artist[_ngcontent-%COMP%]   .artist__header[_ngcontent-%COMP%]   .artist__header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    font-weight: 700;\n  }\n  .artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%] {\n    background-color: var(--bg-primary);\n    border-radius: 10px;\n    padding: 0.5rem;\n    margin: 0.5rem 0;\n    display: flex;\n    align-items: center;\n  }\n  .artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]   .top__track-item-number[_ngcontent-%COMP%] {\n    width: 5rem;\n    font-size: 3rem;\n    color: var(--light-success);\n    font-weight: 700;\n    padding: 0 1rem;\n  }\n  .artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]   .top_track-item-img[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 3rem;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 10px;\n    margin-right: 1rem;\n  }\n  .artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]:hover {\n    color: var(--light-success);\n    transform: scale(1.02);\n    cursor: pointer;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  }\n  .artist[_ngcontent-%COMP%]   .artist__body[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    width: 8rem;\n    \n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3QvcGxheWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BsYXlsaXN0L0M6XFxVc2Vyc1xcUXVhY2ggQ29uZyBUdWFuXFxEZXNrdG9wXFxzcG90aWZ5L3NyY1xcYXBwXFxwbGF5bGlzdFxccGxheWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FERUY7QUNERTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBREdKO0FDRkk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FESU47QUNITTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBREtSO0FDRkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FESU47QUNERTtFQUNFLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBREdKO0FDRkk7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURJTjtBQ0ZJO0VBQ0UsbUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRElOO0FDSE07RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FES1I7QUNITTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLG1CQUFBO0FES1I7QUNITTtFQUNFLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7QURLUjtBQ0NBO0VBQ0U7SUFDRSxXQUFBO0VERUY7RUNERTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtFREdKO0VDRkk7SUFDRSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0VESU47RUNITTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFREtSO0VDQUk7SUFDRSxtQ0FBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0VERU47RUNETTtJQUNFLFdBQUE7SUFDQSxlQUFBO0lBQ0EsMkJBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RURHUjtFQ0RNO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxvQkFBQTtPQUFBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFREdSO0VDRE07SUFDRSwyQkFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtJQUNBLHVDQUFBO0VER1I7RUNBTTtJQUNFLGVBQUE7SUFDQSxXQUFBO0lBQWEsdUNBQUE7SUFDYixnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RURHUjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGxheWxpc3QvcGxheWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uYXJ0aXN0IHtcbiAgd2lkdGg6IDUwJTtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuLmFydGlzdCAuYXJ0aXN0X19oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjVyZW07XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2hlYWRlciAuYXJ0aXN0X19oZWFkZXItdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNSU7XG4gIGxlZnQ6IDUlO1xufVxuLmFydGlzdCAuYXJ0aXN0X19oZWFkZXIgLmFydGlzdF9faGVhZGVyLXRpdGxlIGgxIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmFydGlzdCAuYXJ0aXN0X19oZWFkZXIgLmFydGlzdF9faGVhZGVyLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5hcnRpc3QgLmFydGlzdF9fYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXNlY29uZGFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2JvZHkgaDMge1xuICBjb2xvcjogdmFyKC0tbGlnaHQtc3VjY2Vzcyk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2JvZHkgLnRvcF9fdHJhY2staXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIG1hcmdpbjogMC41cmVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXJ0aXN0IC5hcnRpc3RfX2JvZHkgLnRvcF9fdHJhY2staXRlbSAudG9wX190cmFjay1pdGVtLW51bWJlciB7XG4gIHdpZHRoOiA1cmVtO1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuLmFydGlzdCAuYXJ0aXN0X19ib2R5IC50b3BfX3RyYWNrLWl0ZW0gLnRvcF90cmFjay1pdGVtLWltZyB7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDRyZW07XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmFydGlzdCAuYXJ0aXN0X19ib2R5IC50b3BfX3RyYWNrLWl0ZW06aG92ZXIge1xuICBjb2xvcjogdmFyKC0tbGlnaHQtc3VjY2Vzcyk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXJ0aXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuYXJ0aXN0IC5hcnRpc3RfX2hlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjVyZW07XG4gIH1cbiAgLmFydGlzdCAuYXJ0aXN0X19oZWFkZXIgLmFydGlzdF9faGVhZGVyLXRpdGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiA1JTtcbiAgICBsZWZ0OiA1JTtcbiAgfVxuICAuYXJ0aXN0IC5hcnRpc3RfX2hlYWRlciAuYXJ0aXN0X19oZWFkZXItdGl0bGUgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIC5hcnRpc3QgLmFydGlzdF9fYm9keSAudG9wX190cmFjay1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAuYXJ0aXN0IC5hcnRpc3RfX2JvZHkgLnRvcF9fdHJhY2staXRlbSAudG9wX190cmFjay1pdGVtLW51bWJlciB7XG4gICAgd2lkdGg6IDVyZW07XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgfVxuICAuYXJ0aXN0IC5hcnRpc3RfX2JvZHkgLnRvcF9fdHJhY2staXRlbSAudG9wX3RyYWNrLWl0ZW0taW1nIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cbiAgLmFydGlzdCAuYXJ0aXN0X19ib2R5IC50b3BfX3RyYWNrLWl0ZW06aG92ZXIge1xuICAgIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIH1cbiAgLmFydGlzdCAuYXJ0aXN0X19ib2R5IC50b3BfX3RyYWNrLWl0ZW0gaDQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB3aWR0aDogOHJlbTtcbiAgICAvKiDEkOG6t3QgY2hp4buBdSBy4buZbmcgY+G7kSDEkeG7i25oIGNobyBwaOG6p24gdOG7rSAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxufSIsIi5hcnRpc3Qge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgLmFydGlzdF9faGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjVyZW07XHJcbiAgICAuYXJ0aXN0X19oZWFkZXItdGl0bGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogNSU7XHJcbiAgICAgIGxlZnQ6IDUlO1xyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5hcnRpc3RfX2hlYWRlci1pbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hcnRpc3RfX2JvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctc2Vjb25kYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIGgzIHtcclxuICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXN1Y2Nlc3MpO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLnRvcF9fdHJhY2staXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC50b3BfX3RyYWNrLWl0ZW0tbnVtYmVyIHtcclxuICAgICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXN1Y2Nlc3MpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC50b3BfdHJhY2staXRlbS1pbWcge1xyXG4gICAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICAgIGhlaWdodDogNHJlbTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmFydGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5hcnRpc3RfX2hlYWRlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OiAyNXJlbTtcclxuICAgICAgLmFydGlzdF9faGVhZGVyLXRpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA1JTtcclxuICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFydGlzdF9fYm9keSB7XHJcbiAgICAgIC50b3BfX3RyYWNrLWl0ZW0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIC50b3BfX3RyYWNrLWl0ZW0tbnVtYmVyIHtcclxuICAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWxpZ2h0LXN1Y2Nlc3MpO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvcF90cmFjay1pdGVtLWltZyB7XHJcbiAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbGlnaHQtc3VjY2Vzcyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgd2lkdGg6IDhyZW07IC8qIMSQ4bq3dCBjaGnhu4F1IHLhu5luZyBj4buRIMSR4buLbmggY2hvIHBo4bqnbiB04butICovXHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playlist',
                templateUrl: './playlist.component.html',
                styleUrls: ['./playlist.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ProfileComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.user.followers.total), " followers ");
} }
function ProfileComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", track_r2.album.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](track_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](track_r2.artists[0].name);
} }
class ProfileComponent {
    constructor(userServices) {
        this.userServices = userServices;
        this.userServices.getProfile().subscribe((user) => {
            console.log(user);
            this.user = user;
            this.userServices.getTopTracks().subscribe((topTracks) => {
                console.log(topTracks);
                this.topTracks = topTracks['items'];
            });
        });
    }
    ngOnInit() { }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 12, vars: 5, consts: [[1, "profile", "mx-auto"], [1, "profile__header"], [1, "profile__header-img", 3, "src"], [1, "profile__header-title"], [4, "ngIf"], ["target", "_blank", 1, "btn", "btn-success", 3, "href"], [1, "profle__body"], [1, "top-track"], ["class", "top__track-item", 4, "ngFor", "ngForOf"], [1, "top__track-item"], [1, "top__track-item-number"], [1, "m-0"], [1, "top_track-item-img", "mx-3", 3, "src"], [1, "top_track-item-title", "text-capitalize"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_p_6_Template, 3, 3, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Open in Spotify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProfileComponent_div_11_Template, 10, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.user.images[1] == null ? null : ctx.user.images[1].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.display_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.followers.total > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.user.external_urls.spotify, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topTracks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: ["@charset \"UTF-8\";\n.profile[_ngcontent-%COMP%] {\n  color: #fff;\n  margin: 1rem 0;\n  width: 50%;\n}\n.profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%] {\n  position: relative;\n  height: 25rem;\n}\n.profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]   .profile__header-title[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5%;\n  left: 5%;\n}\n.profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]   .profile__header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  font-weight: 700;\n}\n.profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]   .profile__header-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  filter: brightness(0.5);\n  border-radius: 10px;\n}\n.profile[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%] {\n  background-color: var(--bg-secondary);\n  border-radius: 10px;\n  padding: 0.5rem;\n  margin: 0.5rem 0;\n  display: flex;\n  align-items: center;\n}\n.profile[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]   .top__track-item-number[_ngcontent-%COMP%] {\n  width: 5rem;\n  font-size: 3rem;\n  color: var(--light-success);\n  font-weight: 700;\n  padding: 0 1rem;\n}\n.profile[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]   .top_track-item-img[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 4rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 10px;\n}\n.profile[_ngcontent-%COMP%]   .top__track-item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  cursor: pointer;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n}\n@media screen and (max-width: 768px) {\n  .profile[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%] {\n    position: relative;\n    height: 25rem;\n  }\n  .profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]   .profile__header-title[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 5%;\n    left: 5%;\n  }\n  .profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]   .profile__header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    font-weight: 700;\n  }\n  .profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]   .profile__header-img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    filter: brightness(0.5);\n    border-radius: 10px;\n  }\n  .profile[_ngcontent-%COMP%]   .top__track-item-number[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    width: 5rem;\n  }\n  .profile[_ngcontent-%COMP%]   .top_track-item-img[_ngcontent-%COMP%] {\n    width: 3rem;\n    height: 3rem;\n  }\n  .profile[_ngcontent-%COMP%]   .top_track-item-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    width: 8rem;\n    \n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL0M6XFxVc2Vyc1xcUXVhY2ggQ29uZyBUdWFuXFxEZXNrdG9wXFxzcG90aWZ5L3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBREVGO0FDREU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7QURHSjtBQ0ZJO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBRElOO0FDSE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QURLUjtBQ0ZJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRElOO0FDQUU7RUFDRSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FERUo7QUNESTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURHTjtBQ0RJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsbUJBQUE7QURHTjtBQ0RJO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7QURHTjtBQ0VBO0VBQ0U7SUFDRSxXQUFBO0VEQ0Y7RUNDRTtJQUNFLGtCQUFBO0lBQ0EsYUFBQTtFRENKO0VDQUk7SUFDRSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxRQUFBO0VERU47RUNETTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFREdSO0VDQUk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLG9CQUFBO09BQUEsaUJBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0VERU47RUNFRTtJQUNFLGVBQUE7SUFDQSxXQUFBO0VEQUo7RUNFRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VEQUo7RUNJSTtJQUNFLGVBQUE7SUFDQSxXQUFBO0lBQWEsdUNBQUE7SUFDYixnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7RURETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnByb2ZpbGUge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIHdpZHRoOiA1MCU7XG59XG4ucHJvZmlsZSAucHJvZmlsZV9faGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDI1cmVtO1xufVxuLnByb2ZpbGUgLnByb2ZpbGVfX2hlYWRlciAucHJvZmlsZV9faGVhZGVyLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDUlO1xuICBsZWZ0OiA1JTtcbn1cbi5wcm9maWxlIC5wcm9maWxlX19oZWFkZXIgLnByb2ZpbGVfX2hlYWRlci10aXRsZSBoMSB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5wcm9maWxlIC5wcm9maWxlX19oZWFkZXIgLnByb2ZpbGVfX2hlYWRlci1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucHJvZmlsZSAudG9wX190cmFjay1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnByb2ZpbGUgLnRvcF9fdHJhY2staXRlbSAudG9wX190cmFjay1pdGVtLW51bWJlciB7XG4gIHdpZHRoOiA1cmVtO1xuICBmb250LXNpemU6IDNyZW07XG4gIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMCAxcmVtO1xufVxuLnByb2ZpbGUgLnRvcF9fdHJhY2staXRlbSAudG9wX3RyYWNrLWl0ZW0taW1nIHtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucHJvZmlsZSAudG9wX190cmFjay1pdGVtOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9maWxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvZmlsZSAucHJvZmlsZV9faGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyNXJlbTtcbiAgfVxuICAucHJvZmlsZSAucHJvZmlsZV9faGVhZGVyIC5wcm9maWxlX19oZWFkZXItdGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDUlO1xuICAgIGxlZnQ6IDUlO1xuICB9XG4gIC5wcm9maWxlIC5wcm9maWxlX19oZWFkZXIgLnByb2ZpbGVfX2hlYWRlci10aXRsZSBoMSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgLnByb2ZpbGUgLnByb2ZpbGVfX2hlYWRlciAucHJvZmlsZV9faGVhZGVyLWltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbiAgLnByb2ZpbGUgLnRvcF9fdHJhY2staXRlbS1udW1iZXIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB3aWR0aDogNXJlbTtcbiAgfVxuICAucHJvZmlsZSAudG9wX3RyYWNrLWl0ZW0taW1nIHtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDNyZW07XG4gIH1cbiAgLnByb2ZpbGUgLnRvcF90cmFjay1pdGVtLXRpdGxlIGgzIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgd2lkdGg6IDhyZW07XG4gICAgLyogxJDhurd0IGNoaeG7gXUgcuG7mW5nIGPhu5EgxJHhu4tuaCBjaG8gcGjhuqduIHThu60gKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cbn0iLCIucHJvZmlsZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgd2lkdGg6IDUwJTtcclxuICAucHJvZmlsZV9faGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjVyZW07XHJcbiAgICAucHJvZmlsZV9faGVhZGVyLXRpdGxlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDUlO1xyXG4gICAgICBsZWZ0OiA1JTtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvZmlsZV9faGVhZGVyLWltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC41KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50b3BfX3RyYWNrLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctc2Vjb25kYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAudG9wX190cmFjay1pdGVtLW51bWJlciB7XHJcbiAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgfVxyXG4gICAgLnRvcF90cmFjay1pdGVtLWltZyB7XHJcbiAgICAgIHdpZHRoOiA0cmVtO1xyXG4gICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucHJvZmlsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAucHJvZmlsZV9faGVhZGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDI1cmVtO1xyXG4gICAgICAucHJvZmlsZV9faGVhZGVyLXRpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiA1JTtcclxuICAgICAgICBsZWZ0OiA1JTtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucHJvZmlsZV9faGVhZGVyLWltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudG9wX190cmFjay1pdGVtLW51bWJlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICB9XHJcbiAgICAudG9wX3RyYWNrLWl0ZW0taW1nIHtcclxuICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgIGhlaWdodDogM3JlbTtcclxuICAgIH1cclxuXHJcbiAgICAudG9wX3RyYWNrLWl0ZW0tdGl0bGUge1xyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIHdpZHRoOiA4cmVtOyAvKiDEkOG6t3QgY2hp4buBdSBy4buZbmcgY+G7kSDEkeG7i25oIGNobyBwaOG6p24gdOG7rSAqL1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss'],
            }]
    }], function () { return [{ type: _services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pipes_text_length_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/text-length.pipe */ "./src/app/pipes/text-length.pipe.ts");







function SearchComponent_div_2_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Artists");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/artist", a1]; };
function SearchComponent_div_2_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "textLength");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, item_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", (item_r8.images[0] == null ? null : item_r8.images[0].url) ? item_r8.images[0] == null ? null : item_r8.images[0].url : "https://www.logo.wine/a/logo/Spotify/Spotify-Icon-White-Dark-Background-Logo.wine.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r8 == null ? null : item_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, item_r8 == null ? null : item_r8.name, 15), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, item_r8 == null ? null : item_r8.type));
} }
function SearchComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_2_div_2_div_1_Template, 11, 12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.searchResultsArtist);
} }
function SearchComponent_div_2_h4_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Albums");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["/album", a1]; };
function SearchComponent_div_2_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "textLength");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c1, item_r10.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r10.images[0] == null ? null : item_r10.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, item_r10.name, 15));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, item_r10.type));
} }
function SearchComponent_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_2_div_4_div_1_Template, 11, 12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.searchResultsAlbum);
} }
function SearchComponent_div_2_h4_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Playlists");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function (a1) { return ["/playlist", a1]; };
function SearchComponent_div_2_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "textLength");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, item_r12.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r12.images[0] == null ? null : item_r12.images[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", item_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, item_r12.name, 20));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 8, item_r12.type));
} }
function SearchComponent_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_2_div_6_div_1_Template, 11, 12, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.searchResultsPlaylist);
} }
function SearchComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_2_h4_1_Template, 2, 0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComponent_div_2_div_2_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchComponent_div_2_h4_3_Template, 2, 0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComponent_div_2_div_4_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_div_2_h4_5_Template, 2, 0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SearchComponent_div_2_div_6_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchResultsArtist.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchResultsArtist);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchResultsAlbum.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchResultsAlbum);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchResultsPlaylist.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchResultsPlaylist);
} }
class SearchComponent {
    constructor(searchServices) {
        this.searchServices = searchServices;
        this.searchItem = '';
    }
    ngOnInit() { }
    search() {
        if (this.searchItem) {
            this.searchServices.search(this.searchItem).subscribe((data) => {
                this.searchResultsTrack = data['tracks'].items;
                this.searchResultsArtist = data['artists'].items;
                this.searchResultsAlbum = data['albums'].items;
                this.searchResultsPlaylist = data['playlists'].items;
            });
        }
        else {
            this.reset();
        }
    }
    reset() {
        this.searchResultsTrack = [];
        this.searchResultsArtist = [];
        this.searchResultsAlbum = [];
        this.searchResultsPlaylist = [];
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 3, vars: 2, consts: [[1, "form-group", "w-25", "mx-auto", "my-3"], ["type", "text", "name", "searchItem", "placeholder", "Search for an artist...", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], ["class", "search w-50 mx-auto", 4, "ngIf"], [1, "search", "w-50", "mx-auto"], [4, "ngIf"], ["class", "search-result", 4, "ngIf"], [1, "search-result"], ["class", "search-result-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "search-result-item", 3, "routerLink"], [1, "search-result-item-image"], ["alt", "", 3, "src"], [1, "group-title", "d-flex", "align-items-center"], [1, "search-result-item-info"], [3, "title"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchItem = $event; })("keyup", function SearchComponent_Template_input_keyup_1_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComponent_div_2_Template, 7, 6, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResultsAlbum.length > 0 || ctx.searchResultsArtist.length > 0 || ctx.searchResultsPlaylist.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_pipes_text_length_pipe__WEBPACK_IMPORTED_MODULE_5__["TextLengthPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]], styles: [".search[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background-color: var(--bg-secondary);\n  border-radius: 0.5rem;\n}\n.search[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #fff;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1rem;\n  color: #fff;\n  margin: 1rem 0;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0.5rem;\n  background-color: var(--bg-primary);\n  padding: 1rem;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 10rem;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin: 0.5rem 0;\n  padding: 0;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 0;\n  padding: 0;\n}\n.search[_ngcontent-%COMP%]   .search-result[_ngcontent-%COMP%]   .search-result-item[_ngcontent-%COMP%]:hover {\n  background-color: var(--bg-primary);\n  cursor: pointer;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n  transform: scale(1.05);\n  color: var(--light-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0M6XFxVc2Vyc1xcUXVhY2ggQ29uZyBUdWFuXFxEZXNrdG9wXFxzcG90aWZ5L3NyY1xcYXBwXFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLHFCQUFBO0FDQ0Y7QURBRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0VKO0FEQUU7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNFSjtBRERJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSxhQUFBO0FDR047QURGTTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0lSO0FERk07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDSVI7QURGTTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0lSO0FERk07RUFDRSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNJUiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXNlY29uZGFyeSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIGg0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbiAgLnNlYXJjaC1yZXN1bHQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgICBncmlkLWdhcDogMXJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgICAuc2VhcmNoLXJlc3VsdC1pdGVtIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctcHJpbWFyeSk7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgfVxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuc2VhcmNoIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctc2Vjb25kYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xufVxuLnNlYXJjaCBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNlYXJjaCAuc2VhcmNoLXJlc3VsdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdyaWQtZ2FwOiAxcmVtO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG4uc2VhcmNoIC5zZWFyY2gtcmVzdWx0IC5zZWFyY2gtcmVzdWx0LWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgcGFkZGluZzogMXJlbTtcbn1cbi5zZWFyY2ggLnNlYXJjaC1yZXN1bHQgLnNlYXJjaC1yZXN1bHQtaXRlbSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHJlbTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uc2VhcmNoIC5zZWFyY2gtcmVzdWx0IC5zZWFyY2gtcmVzdWx0LWl0ZW0gaDMge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgcGFkZGluZzogMDtcbn1cbi5zZWFyY2ggLnNlYXJjaC1yZXN1bHQgLnNlYXJjaC1yZXN1bHQtaXRlbSBwIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4uc2VhcmNoIC5zZWFyY2gtcmVzdWx0IC5zZWFyY2gtcmVzdWx0LWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgY29sb3I6IHZhcigtLWxpZ2h0LXN1Y2Nlc3MpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss'],
            }]
    }], function () { return [{ type: _services_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/artist.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/artist.service.ts ***!
  \********************************************/
/*! exports provided: ArtistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistService", function() { return ArtistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ArtistService {
    constructor(http) {
        this.http = http;
    }
    getShow() {
        return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=12');
    }
    getMyPlaylist() {
        return this.http.get('https://api.spotify.com/v1/me/playlists');
    }
}
ArtistService.ɵfac = function ArtistService_Factory(t) { return new (t || ArtistService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ArtistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ArtistService, factory: ArtistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthService {
    constructor(router) {
        this.router = router;
        this.baseUrl = 'https://accounts.spotify.com/authorize';
        this.token = '';
        this.client_id = 'b3367fa6e0ad4cdfa803f930d8f8b8cb';
        this.client_secret = '22cc9fd47ccb4164976531e126056a71';
        this.callback = 'https://top-spotify.vercel.app/home';
        this.token = localStorage.getItem('token') || '';
        if (window.location.hash) {
            const hash = window.location.hash.substring(1);
            const params = new URLSearchParams(hash);
            this.token = params.get('access_token') || '';
            localStorage.setItem('token', this.token);
            this.router.navigate(['/home']);
        }
    }
    isLoggedIn() {
        return typeof this.token === 'string' && this.token.length > 0;
    }
    logout() {
        localStorage.removeItem('token');
        this.token = '';
        this.router.navigate(['/']);
    }
    getToken() {
        return this.token;
    }
    login() {
        window.location.href =
            'https://accounts.spotify.com/authorize?client_id=' +
                this.client_id +
                '&response_type=token&redirect_uri=' +
                this.callback +
                '&scope=user-read-private%20user-read-email%20user-top-read%20playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20playlist-modify-private&show_dialog=true ';
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




class ProfileService {
    constructor(http, auth) {
        this.http = http;
        console.log(auth.getToken());
    }
    getProfile() {
        return this.http.get('https://api.spotify.com/v1/me');
    }
    getPlaylists() {
        return this.http.get('https://api.spotify.com/v1/me/playlists');
    }
    getTopTracks() {
        return this.http.get('https://api.spotify.com/v1/me/top/tracks' + '?limit=5');
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class SearchService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://api.spotify.com/v1/';
    }
    search(query) {
        return this.http.get(`${this.baseUrl}search?q=${query}&type=track,artist,album,playlist&market=VN&limit=4`);
    }
    getArtist(id) {
        return this.http.get(`${this.baseUrl}artists/${id}`);
    }
    getAlbums(id) {
        return this.http.get(`${this.baseUrl}artists/${id}/albums?include_groups=album&market=VN&limit=5`);
    }
    getTopTracks(id) {
        return this.http.get(`${this.baseUrl}artists/${id}/top-tracks?market=VN`);
    }
    getAlbumTracks(id) {
        return this.http.get(`${this.baseUrl}albums/${id}/tracks?market=VN`);
    }
    getAlbum(id) {
        return this.http.get(`${this.baseUrl}albums/${id}`);
    }
    getPlaylist(id) {
        return this.http.get(`${this.baseUrl}playlists/${id}`);
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 9, vars: 0, consts: [[1, "row"], [1, "welcome"], [1, "title"], [1, "btn", "btn-primary"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Build with Spotify\u2019s 100 million songs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "5 million podcasts and much more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "See it in action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".row[_ngcontent-%COMP%] {\n  background-image: url('tutorial-background.svg');\n  background-color: var(--bg-secondary);\n  background-size: cover;\n  background-position: calc(100% - 25rem) calc(100% + 1rem);\n  height: 100%;\n}\n.row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5rem 0;\n  color: var(--light-success);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  font-weight: 700;\n}\n.row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 400;\n  margin-bottom: 5rem;\n}\n.row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  padding: 1rem 2.5rem;\n  border-radius: 3rem;\n  background-color: var(--bg-info);\n  color: var(--primary);\n}\n@media (max-width: 768px) {\n  .row[_ngcontent-%COMP%] {\n    background-position: calc(100% - 20rem) calc(100% + 1rem);\n  }\n  .row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin: 1rem;\n  }\n  .row[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS9DOlxcVXNlcnNcXFF1YWNoIENvbmcgVHVhblxcRGVza3RvcFxcc3BvdGlmeS9zcmNcXGFwcFxcd2VsY29tZVxcd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0RBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EseURBQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDRUo7QURESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0dOO0FEREk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNHTjtBRERJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0FDR047QURFQTtFQUNFO0lBQ0UseURBQUE7RUNDRjtFREFFO0lBQ0UsV0FBQTtFQ0VKO0VEREk7SUFDRSxlQUFBO0VDR047RURESTtJQUNFLGVBQUE7SUFDQSxZQUFBO0VDR047RURESTtJQUNFLGVBQUE7RUNHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3N2Zy90dXRvcmlhbC1iYWNrZ3JvdW5kLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjVyZW0pIGNhbGMoMTAwJSArIDFyZW0pO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAudGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXJlbSAwO1xyXG4gICAgY29sb3I6IHZhcigtLWxpZ2h0LXN1Y2Nlc3MpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGgxIHtcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMi41cmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1pbmZvKTtcclxuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAyMHJlbSkgY2FsYygxMDAlICsgMXJlbSk7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5yb3cge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvc3ZnL3R1dG9yaWFsLWJhY2tncm91bmQuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1zZWNvbmRhcnkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAyNXJlbSkgY2FsYygxMDAlICsgMXJlbSk7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5yb3cgLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cmVtIDA7XG4gIGNvbG9yOiB2YXIoLS1saWdodC1zdWNjZXNzKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5yb3cgLnRpdGxlIGgxIHtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLnJvdyAudGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xufVxuLnJvdyAudGl0bGUgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDFyZW0gMi41cmVtO1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1pbmZvKTtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnJvdyB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjByZW0pIGNhbGMoMTAwJSArIDFyZW0pO1xuICB9XG4gIC5yb3cgLnRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucm93IC50aXRsZSBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG4gIC5yb3cgLnRpdGxlIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW46IDFyZW07XG4gIH1cbiAgLnJvdyAudGl0bGUgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Quach Cong Tuan\Desktop\spotify\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map