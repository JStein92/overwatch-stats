webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormService = (function () {
    //http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=3&words=15 - WORKING API
    //https://github.com/SunDwarf/OWAPI/blob/master/api.md - Docs for OV api
    function FormService(http) {
        this.http = http;
    }
    //  private usersUrl = 'https://owapi.net/api/v3/u/Chuggsy-11927/blob';
    FormService.prototype.getData = function (userId) {
        return this.http.get('https://owapi.net/api/v3/u/' + userId + '/blob')
            .map(this.extractData);
    };
    FormService.prototype.extractData = function (res) {
        return res.json();
        //return body.data || { };
    };
    FormService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    FormService.prototype.setPlayerStats = function (userData, userName) {
        this.playerStats = userData;
        this.userName = userName;
    };
    FormService.prototype.getPlayerStats = function () {
        //  console.log("GET PLAYER STATS(): " + this.playerStats.us.stats.competitive.overall_stats.level);
        return this.playerStats;
    };
    FormService.prototype.getUserName = function () {
        return this.userName;
    };
    return FormService;
}());
FormService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FormService);

var _a;
//# sourceMappingURL=form.service.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_service__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserFormComponent = (function () {
    function UserFormComponent(formService) {
        this.formService = formService;
    }
    UserFormComponent.prototype.ngOnInit = function () {
        //alert(this.formService.getTest());
    };
    UserFormComponent.prototype.findUser = function (userSearch) {
        var _this = this;
        this.searching = true;
        this.formService.getData(userSearch).subscribe(function (userData) {
            _this.playerStats = userData;
            _this.playerName = userSearch;
        }, function (userData) {
            console.log("ERROR: ", userData);
        }, function () {
            //    console.log("Completed");
            _this.formService.setPlayerStats(_this.playerStats, _this.playerName);
            _this.doneSearching = true;
        });
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user-form',
        template: __webpack_require__(317),
        styles: [__webpack_require__(311)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__form_service__["a" /* FormService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__form_service__["a" /* FormService */]) === "function" && _a || Object])
], UserFormComponent);

var _a;
//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 234;


/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(252);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AchievementsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AchievementsComponent = (function () {
    function AchievementsComponent() {
    }
    AchievementsComponent.prototype.ngOnInit = function () {
        this.statToExclude = this.findBadData();
        console.log("EXCLUDE: " + this.statToExclude);
        this.generateHighlights();
    };
    AchievementsComponent.prototype.findBadData = function () {
        for (var i = 0; i < this.compStats.length; i++) {
            if (this.compStats[i].name.includes("overwatch")) {
                return i;
            }
        }
        return -1;
    };
    AchievementsComponent.prototype.randomExcluded = function (min, max, excluded) {
        var n = Math.floor(Math.random() * (max - min) + min);
        if (n >= excluded)
            n++;
        return n;
    };
    AchievementsComponent.prototype.generateHighlights = function () {
        var max = this.compStats.length;
        var excluded = this.statToExclude;
        var randNum1 = this.randomExcluded(0, max, excluded);
        var randNum2 = this.randomExcluded(0, max, excluded);
        var randNum3 = this.randomExcluded(0, max, excluded);
        if (this.compStats[randNum1] && this.compStats[randNum1].name) {
            //console.log(this.compStats[randNum1].name + " num:" + randNum1);
            this.highlightOne = this.compStats[randNum1];
        }
        if (this.compStats[randNum2] && this.compStats[randNum2].name) {
            //console.log(this.compStats[randNum2].name+ " num:" + randNum2);
            this.highlightTwo = this.compStats[randNum2];
        }
        if (this.compStats[randNum3] && this.compStats[randNum3].name) {
            //  console.log( this.compStats[randNum3].name+ " num:" + randNum3);
            this.highlightThree = this.compStats[randNum3];
        }
    };
    return AchievementsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], AchievementsComponent.prototype, "compStats", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], AchievementsComponent.prototype, "quickplayStats", void 0);
AchievementsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-achievements',
        template: __webpack_require__(313),
        styles: [__webpack_require__(307)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('fadeIn1', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '100' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(".5s 3s ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '100' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('fadeIn2', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '100' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(".5s 3300ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '100' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('fadeIn3', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '100' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(".5s 3600ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '100' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], AchievementsComponent);

//# sourceMappingURL=achievements.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(314),
        styles: [__webpack_require__(308)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_form_user_form_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stat_header_stat_header_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__achievements_achievements_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__time_played_time_played_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__win_rate_win_rate_component__ = __webpack_require__(251);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__user_form_user_form_component__["a" /* UserFormComponent */],
            __WEBPACK_IMPORTED_MODULE_7__stat_header_stat_header_component__["a" /* StatHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__achievements_achievements_component__["a" /* AchievementsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__time_played_time_played_component__["a" /* TimePlayedComponent */],
            __WEBPACK_IMPORTED_MODULE_11__win_rate_win_rate_component__["a" /* WinRateComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_form_user_form_component__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__user_form_user_form_component__["a" /* UserFormComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatHeaderComponent = (function () {
    function StatHeaderComponent(formService) {
        this.formService = formService;
        this.statSetToShow = "competitive";
        this.initialLoad = true;
        this.showAllBool = false;
        this.totalPlaytime = 0;
        this.heroListCompetitive = [];
        this.heroListQuickplay = [];
        this.heroList = [];
        this.heroStats = [];
        this.generalStats = [];
        this.playtimeListCompetitive = [];
        this.playtimeListQuickplay = [];
        this.playtimeList = [];
        this.playtimeListConcat = [];
        this.heroSelected = null;
        this.showBtnText = "Show All";
        this.showBtnTextWinRate = "Show All";
        this.compStats = [];
        this.quickplayStats = [];
        this.winRateList = [];
        this.winRateListConcat = [];
        this.showAllBoolWinRate = false;
        this.displayWinRate = false;
        this.displayTimePlayed = true;
    }
    StatHeaderComponent.prototype.ngOnInit = function () {
        this.playerStats = this.formService.getPlayerStats();
        this.level = this.playerStats.us.stats.competitive.overall_stats.level;
        this.compRank = this.playerStats.us.stats.competitive.overall_stats.comprank;
        this.avatar = this.playerStats.us.stats.competitive.overall_stats.avatar;
        this.tier = this.playerStats.us.stats.competitive.overall_stats.tier;
        this.userName = this.formService.getUserName();
        this.prestige = this.playerStats.us.stats.competitive.overall_stats.prestige;
        this.generateHeroLists();
        this.setStats();
        this.setHeroStats();
    };
    StatHeaderComponent.prototype.generateHeroLists = function () {
        var obj = this.playerStats.us.heroes.stats.competitive;
        this.heroListCompetitive = Object.keys(obj).map(function (key) {
            var newHero = { name: key, details: obj[key] };
            return newHero;
        });
        var objQp = this.playerStats.us.heroes.stats.quickplay;
        this.heroListQuickplay = Object.keys(objQp).map(function (key) {
            var newHero = { name: key, details: objQp[key] };
            return newHero;
        });
        var playtimeObj = this.playerStats.us.heroes.playtime.competitive;
        this.playtimeListCompetitive = Object.keys(playtimeObj).map(function (key) {
            var heroPlaytime = { name: key, playtime: playtimeObj[key] };
            return heroPlaytime;
        });
        var playtimeObjQp = this.playerStats.us.heroes.playtime.quickplay;
        this.playtimeListQuickplay = Object.keys(playtimeObjQp).map(function (key) {
            var heroPlaytime = { name: key, playtime: playtimeObjQp[key] };
            return heroPlaytime;
        });
        // for achievement cards
        var compStatsObj = this.playerStats.us.stats.competitive.game_stats;
        this.compStats = Object.keys(compStatsObj).map(function (key) {
            var keyNoUnderscores = key.replace(/_/g, " ");
            var newStat = { name: keyNoUnderscores, details: compStatsObj[key] };
            if (newStat.details % 1 != 0 && !newStat.name.includes("kpd")) {
                newStat.details = newStat.details.toFixed(2).toString() + " hours";
            }
            return newStat;
        });
        // for achievement cards
        var quckplayStatsObj = this.playerStats.us.stats.quickplay.game_stats;
        this.quickplayStats = Object.keys(quckplayStatsObj).map(function (key) {
            var keyNoUnderscores = key.replace(/_/g, " ");
            var newStat = { name: keyNoUnderscores, details: quckplayStatsObj[key] };
            if (newStat.details % 1 != 0 && !newStat.name.includes("kpd")) {
                newStat.details = newStat.details.toFixed(2).toString() + " hours";
            }
            return newStat;
        });
    };
    StatHeaderComponent.prototype.displayWinRateClick = function (hero) {
        if (!this.displayWinRate) {
            if (this.isCompetitive(hero)) {
                this.displayWinRate = true;
                this.displayTimePlayed = false;
                this.statSetToShow = "competitive";
                this.onCharSelect(hero);
            }
        }
    };
    StatHeaderComponent.prototype.displayTimePlayedClick = function () {
        this.displayWinRate = false;
        this.displayTimePlayed = true;
    };
    StatHeaderComponent.prototype.showQuickplayStats = function (hero) {
        if (this.isQuickplay(hero)) {
            this.statSetToShow = "quickplay";
            this.onCharSelect(hero);
            this.setStats();
            this.displayTimePlayedClick();
        }
    };
    StatHeaderComponent.prototype.showCompetitiveStats = function (hero) {
        if (this.isCompetitive(hero)) {
            this.statSetToShow = "competitive";
            this.onCharSelect(hero);
            this.setStats();
        }
    };
    StatHeaderComponent.prototype.isCompetitive = function (heroSelected) {
        var listContainsHero = false;
        this.heroListCompetitive.forEach(function (hero) {
            if (hero.name === heroSelected.name) {
                listContainsHero = true;
            }
        });
        return listContainsHero;
    };
    StatHeaderComponent.prototype.isQuickplay = function (heroSelected) {
        var listContainsHero = false;
        this.heroListQuickplay.forEach(function (hero) {
            if (hero.name === heroSelected.name) {
                listContainsHero = true;
            }
        });
        return listContainsHero;
    };
    StatHeaderComponent.prototype.showAll = function () {
        this.initialLoad = false;
        if (this.showAllBool) {
            console.log("showing less");
            this.showBtnText = "Show All";
            this.playtimeListConcat = [];
            this.sortList();
            this.showAllBool = false;
            this.winRateListConcat = [];
            this.sortListWinRate();
        }
        else {
            this.sortList();
            this.showBtnText = "Show Less";
            this.playtimeListConcat = this.playtimeList;
            this.showAllBool = true;
            this.sortListWinRate();
            this.winRateListConcat = this.winRateList;
        }
    };
    StatHeaderComponent.prototype.setStats = function () {
        var playtimeObj;
        if (this.statSetToShow === "competitive") {
            this.heroList = this.heroListCompetitive;
            this.playtimeList = this.playtimeListCompetitive;
        }
        else {
            this.heroList = this.heroListQuickplay;
            this.playtimeList = this.playtimeListQuickplay;
        }
        var that = this;
        if (this.heroSelected === null) {
            this.heroSelected = this.heroList[0];
            this.playtimeList.forEach(function (hero) {
                that.totalPlaytime += hero.playtime;
            });
        }
        this.winRateList = [];
        for (var i = 0; i < this.heroListCompetitive.length; i++) {
            this.winRateList.push({ name: this.heroListCompetitive[i].name, details: this.heroListCompetitive[i].details.general_stats.win_percentage });
        }
        this.sortList();
        this.sortListWinRate();
    };
    StatHeaderComponent.prototype.sortListWinRate = function () {
        this.winRateListConcat = [];
        this.winRateList = this.winRateList.filter(function (hero) {
            return (hero.details > 0);
        });
        this.winRateList.sort(function (a, b) {
            return b.details - a.details;
        });
        for (var i = 0; i < 4; i++) {
            this.winRateListConcat.push(this.winRateList[i]);
        }
        ;
    };
    StatHeaderComponent.prototype.sortList = function () {
        this.playtimeListConcat = [];
        this.playtimeList = this.playtimeList.filter(function (hero) {
            return (hero.playtime > 0);
        });
        this.playtimeList.sort(function (a, b) {
            return b.playtime - a.playtime;
        });
        for (var i = 0; i < 4; i++) {
            this.playtimeListConcat.push(this.playtimeList[i]);
        }
        ;
    };
    StatHeaderComponent.prototype.setHeroStats = function () {
        this.heroStats = null;
        this.generalStats = null;
        var heroStatObj = this.heroSelected.details.hero_stats;
        this.heroStats = Object.keys(heroStatObj).map(function (key) {
            var keyNoUnderscores = key.replace(/_/g, " ");
            var newStat = { name: keyNoUnderscores, details: heroStatObj[key] };
            //console.log(newStat);
            return newStat;
        });
        var generalStatObj = this.heroSelected.details.general_stats;
        this.generalStats = Object.keys(generalStatObj).map(function (key) {
            var keyNoUnderscores = key.replace(/_/g, " ");
            var newStat = { name: keyNoUnderscores, details: generalStatObj[key] };
            //console.log(newStat);
            return newStat;
        });
        this.heroStats.sort(function (a, b) {
            return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
        });
        this.generalStats.sort(function (a, b) {
            return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0;
        });
    };
    StatHeaderComponent.prototype.onCharSelect = function (hero) {
        this.heroSelected = null;
        if (this.statSetToShow === "competitive") {
            this.heroList = this.heroListCompetitive;
            this.playtimeList = this.playtimeListCompetitive;
        }
        else {
            this.heroList = this.heroListQuickplay;
            this.playtimeList = this.playtimeListQuickplay;
        }
        for (var i = 0; i < this.heroList.length; i++) {
            if (hero.name === this.heroList[i].name || hero === this.heroList[i].name) {
                this.heroSelected = this.heroList[i];
                break;
            }
        }
        this.setHeroStats();
    };
    StatHeaderComponent.prototype.competitiveBtn = function (heroSelected) {
        if (this.isCompetitive(heroSelected)) {
            if (this.statSetToShow === "quickplay") {
                return "btn btn-info btn-on";
            }
            else {
                return "btn btn-info btn-off";
            }
        }
        else {
            return "btn btn-info btn-disabled";
        }
    };
    StatHeaderComponent.prototype.quickplayBtn = function (heroSelected) {
        if (this.isQuickplay(heroSelected)) {
            if (this.statSetToShow === "competitive") {
                return "btn btn-info btn-on";
            }
            else {
                return "btn btn-info btn-off";
            }
        }
        else {
            return "btn btn-info btn-disabled";
        }
    };
    StatHeaderComponent.prototype.listOptionBtnCompetitive = function (heroSelected) {
        if (this.isCompetitive(heroSelected)) {
            if (this.displayWinRate) {
                return "btn btn-info listOptionBtn btn-off";
            }
            else {
                return "btn btn-info listOptionBtn btn-on";
            }
        }
        else {
            return "btn btn-info listOptionBtn list-option-btn-disabled";
        }
    };
    StatHeaderComponent.prototype.listOptionBtnQuickplay = function () {
        if (this.displayTimePlayed) {
            return "btn btn-info listOptionBtn btn-off";
        }
        else {
            return "btn btn-info listOptionBtn btn-on";
        }
    };
    return StatHeaderComponent;
}());
StatHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-stat-header',
        template: __webpack_require__(315),
        styles: [__webpack_require__(309)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('fadeIn', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '100' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])(".5s 2300ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '100' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('fadeInFast', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '100' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])(".5s 0ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '100' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('shrinkOut1', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ height: '30px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ height: '0px' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])(".5s 2300ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ height: '30px' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('shrinkOut2', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ height: '30px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ height: '0px' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])(".5s 0ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ height: '30px' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('flyInFromTop', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])(".9s ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateY(-100%)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(5px)', offset: 0.99 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
                    ]))
                ]),
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('flyInFromSide', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])("0s 0s", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                    ])),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])(".7s 1s ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateX(5px)', offset: 0.99 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                    ]))
                ]),
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('fadeInCharacterPicture', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '100' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])(".5s 0ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: '100' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('flyInCharacterContainer', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])("0s 0s", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                    ])),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])(".7s 1800ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateX(5px)', offset: 0.99 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                    ]))
                ]),
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* trigger */])('flyInCharacterStats', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(0)' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* transition */])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])("0s 0s", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                    ])),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* animate */])(".7s 1800ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateX(5px)', offset: 0.99 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
                    ]))
                ]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__form_service__["a" /* FormService */]) === "function" && _a || Object])
], StatHeaderComponent);

var _a;
//# sourceMappingURL=stat-header.component.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimePlayedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimePlayedComponent = (function () {
    function TimePlayedComponent() {
        this.showAllSender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.selectCharacterSender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    TimePlayedComponent.prototype.ngOnInit = function () {
    };
    TimePlayedComponent.prototype.setBarOutline = function (heroName) {
        var classString = "progress time-played-bar ";
        if (heroName == this.heroSelected.name) {
            return classString += "selected-hero";
        }
        else {
            return classString;
        }
    };
    TimePlayedComponent.prototype.onCharSelect = function (hero) {
        this.selectCharacterSender.emit(hero);
    };
    TimePlayedComponent.prototype.setBarColor = function (heroOrder) {
        var classString = "progress-bar time-played-bar-fill ";
        if (heroOrder == 0) {
            return classString += "bg-success";
        }
        else if (heroOrder == 1) {
            return classString += "bg-info";
        }
        else if (heroOrder == 2) {
            return classString += "bg-warning";
        }
        else {
            return classString += "bg-danger";
        }
    };
    TimePlayedComponent.prototype.showAll = function () {
        this.showAllSender.emit();
    };
    return TimePlayedComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TimePlayedComponent.prototype, "playtimeListConcat", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TimePlayedComponent.prototype, "totalPlaytime", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TimePlayedComponent.prototype, "showBtnText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TimePlayedComponent.prototype, "heroSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], TimePlayedComponent.prototype, "showAllSender", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], TimePlayedComponent.prototype, "selectCharacterSender", void 0);
TimePlayedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-time-played',
        template: __webpack_require__(316),
        styles: [__webpack_require__(310)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('fadeIn', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '100' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(".5s 2300ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '100' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('fadeInFast', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '100' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(".5s 0ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '100' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('shrinkOut1', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ height: '30px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ height: '0px' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(".5s 2300ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ height: '30px' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('shrinkOut2', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ height: '30px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ height: '0px' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(".5s 0ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ height: '30px' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], TimePlayedComponent);

//# sourceMappingURL=time-played.component.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WinRateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WinRateComponent = (function () {
    function WinRateComponent() {
        this.showAllSender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.selectCharacterSender = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    WinRateComponent.prototype.ngOnInit = function () {
    };
    WinRateComponent.prototype.onCharSelect = function (hero) {
        this.selectCharacterSender.emit(hero);
    };
    WinRateComponent.prototype.setBarColor = function (heroOrder) {
        var classString = "progress-bar time-played-bar-fill ";
        if (heroOrder == 0) {
            return classString += "bg-success";
        }
        else if (heroOrder == 1) {
            return classString += "bg-info";
        }
        else if (heroOrder == 2) {
            return classString += "bg-warning";
        }
        else {
            return classString += "bg-danger";
        }
    };
    WinRateComponent.prototype.setBarOutline = function (heroName) {
        var classString = "progress time-played-bar ";
        if (heroName == this.heroSelected.name) {
            return classString += "selected-hero";
        }
        else {
            return classString;
        }
    };
    WinRateComponent.prototype.showAll = function () {
        this.showAllSender.emit();
    };
    return WinRateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], WinRateComponent.prototype, "winRateList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], WinRateComponent.prototype, "showBtnTextWinRate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], WinRateComponent.prototype, "heroSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], WinRateComponent.prototype, "showAllSender", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", Object)
], WinRateComponent.prototype, "selectCharacterSender", void 0);
WinRateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-win-rate',
        template: __webpack_require__(318),
        styles: [__webpack_require__(312)],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('fadeIn', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '100' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(".5s 2300ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '100' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('fadeInFast', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '100' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '0' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(".5s 0ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ opacity: '100' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('shrinkOut1', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ height: '30px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ height: '0px' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(".5s 2300ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ height: '30px' }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('shrinkOut2', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ height: '30px' })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void =>*', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ height: '0px' }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])(".5s 0ms ease", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ height: '30px' }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], WinRateComponent);

//# sourceMappingURL=win-rate.component.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".card-deck{\r\n  margin-bottom: 30px;\r\n\r\n}\r\n.card{\r\n  background-color: #262626;\r\n  padding: 20px;\r\n  margin-top: 10px;\r\n}\r\n.card-block{\r\n  padding: 5px;\r\n}\r\n.card-img-top{\r\n  width: 50px;\r\n  margin: 5px;\r\n}\r\n.highlights-header{\r\n  text-align: center;\r\n  color: white;\r\n}\r\n.card-title{\r\n  text-align: center;\r\n  color:#f9a11c;\r\n}\r\n.card-text{\r\n  text-align: center;\r\n  color: white;\r\n  font-size: 3em;\r\n}\r\n.refresh{\r\n  margin-left: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, "html{\r\n    font-family: 'bignoodletoo';\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".jumbotron h1{\r\n    font-size: 6em;\r\n  color: #f9a11c;\r\n}\r\n.jumbotron{\r\n  background-color: #29282b;\r\n  margin-bottom: 0;\r\n  padding: 10px;\r\n}\r\n.select-character{\r\n  font-size: 2em;\r\n  padding-top: 12px;\r\n  z-index: 2;\r\n  margin: 5px;\r\n\r\n}\r\n.select-character select{\r\n    background-color: #262626;\r\n    color: white;\r\n    padding: 2px;\r\n\r\n}\r\n.prestige{\r\n  font-size: .5em;\r\n}\r\n.jumbotron img{\r\n  border-radius: 100px;\r\n  margin-right: 20px;\r\n  height: 100px;\r\n}\r\n.centered{\r\n  text-align: center;\r\n}\r\n.level-border{\r\n  position: relative;\r\n  margin-top: 0px;\r\n  padding-top: 0;\r\n  padding: 0;\r\n}\r\n\r\n.header{\r\n  padding-top: 0;\r\n  margin-top: 0;\r\n  background-color: #29282b;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.character{\r\n  margin: 15px;\r\n}\r\n.character img{\r\n  height: 500px;\r\n  z-index: 0;\r\n  display: block;\r\n  margin: auto;\r\n}\r\n.character-image-container{\r\n  float: right;\r\n  right: 0;\r\n  margin-right: 0;\r\n  padding-right: 0;\r\n\r\n}\r\n.stat-detail{\r\n  color:black;\r\n}\r\n.character-deck{\r\n  opacity: .95;\r\n}\r\n.header h1{\r\n  color: #f9a11c;\r\nfont-size: 3em;\r\n\r\n}\r\n.char-stat-block{\r\n  max-height: 440px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n.card-block{\r\n  padding: 10px;\r\n}\r\n.level, .SR{\r\n  font-size: .5em;\r\n  color: #eaeaea;\r\n}\r\n.level-header{\r\n  border-right: 6px solid #262626;\r\n  padding-right: 30px;\r\n  padding-left: 60px;\r\n}\r\n.sr-header{\r\n  padding-left: 30px;\r\n}\r\n\r\n.general-stats{\r\n  height: 440px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n.card-title{\r\n  margin-top: 10px;\r\n  font-size: 1.5em;\r\n  color:  #f9a11c;\r\n}\r\n.list-group-item{\r\n  font-size: 1.2em;\r\n}\r\n.centered-show{\r\n  text-align: center;\r\n  color: white;\r\n  margin: 10px;\r\n}\r\n.select-box{\r\n  padding: 4px;\r\n}\r\n.btn-on, .btn-off, .btn-disabled{\r\n  font-size: .6em;\r\n  margin: 5px;\r\n}\r\n.btn-on{\r\n  border: 5px solid black;\r\n\r\n}\r\n.btn-off{\r\n  border: 5px solid green;\r\n\r\n}\r\n.showAllBtn{\r\n  font-size: .3em;\r\n  margin-left: 15px;\r\n}\r\n.btn-disabled{\r\n  border: 5px solid grey;\r\n  background-color: grey;\r\n  opacity: .5;\r\n}\r\n\r\n.allHeroes{\r\n  font-size: 3em;\r\n  color: white;\r\n  margin-left: 20%;\r\n  margin-bottom: 5px;\r\n}\r\n.listOptions{\r\n  margin-left: 20%;\r\n}\r\n.listOptionBtn{\r\n  margin-right: 10px;\r\n  font-size: 1.1em;\r\n}\r\n.list-option-btn-disabled{\r\n  background-color: grey;\r\n  opacity: .5;\r\n\r\n}\r\n\r\n#style-8::-webkit-scrollbar-track\r\n{\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n#style-8::-webkit-scrollbar\r\n{\r\n\twidth: 15px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\n#style-8::-webkit-scrollbar-thumb\r\n{\r\n\tbackground-color: #000000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".char-time-played{\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.selected-hero\r\n{\r\n  border: 5px solid #ffd156;\r\n}\r\n\r\n.show-all{\r\n  background-color: grey;\r\n  width: 200px;\r\n  text-align: center;\r\n}\r\n\r\n.centered-show-all{\r\n  margin-top: 10px;\r\n  color: white;\r\n  text-align: center;\r\n  margin-bottom: -20px;\r\n}\r\n.time-played{\r\n  font-size: 3em;\r\n  color: white;\r\n  margin-left: 20%;\r\n  margin-bottom: 15px;\r\n}\r\n.time-played-bar{\r\n  margin-top: 15px;\r\n  margin-left: 20%;\r\n  margin-right: 20%;\r\n  background-color: #c6c6c6;\r\n}\r\n.time-played-bar:hover{\r\n  margin-left: 18%;\r\n  margin-right: 18%;\r\n}\r\n.time-played-bar-text-playtime {\r\n    opacity:0;\r\n    transition:.5s;\r\n    font-size: 2.5em;\r\n    padding-top: 8px;\r\n    margin-left: 13%;\r\n    position: absolute;\r\n   text-shadow: 2px 2px 3px black;\r\n}\r\n.time-played-bar:hover .time-played-bar-text-playtime{\r\n  opacity: 1\r\n}\r\n.time-played-bar-text{\r\n  font-size: 2.5em;\r\n  padding-top: 8px;\r\n  position: absolute;\r\n text-shadow: 2px 2px 3px black;\r\n\r\n}\r\n.time-played-bar-fill{\r\n  height: 30px;\r\n}\r\n\r\n\r\n.show-btn{\r\n  margin-left: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".searching{\r\n  color: white;\r\n}\r\n.btn-info{\r\n  margin-top: 10%;\r\n  font-size: .8em;\r\n}\r\n.justify-content-center{\r\n  margin-top:40%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)();
// imports


// module
exports.push([module.i, ".char-time-played{\r\n  padding-bottom: 30px;\r\n\r\n}\r\n\r\n.selected-hero\r\n{\r\n  border: 5px solid #ffd156;\r\n}\r\n\r\n.show-all{\r\n  background-color: grey;\r\n  width: 200px;\r\n  text-align: center;\r\n}\r\n\r\n.centered-show-all{\r\n  margin-top: 10px;\r\n  color: white;\r\n  text-align: center;\r\n  margin-bottom: -20px;\r\n}\r\n.time-played{\r\n  font-size: 3em;\r\n  color: white;\r\n  margin-left: 20%;\r\n  margin-bottom: 15px;\r\n}\r\n.time-played-bar{\r\n  margin-top: 15px;\r\n  margin-left: 20%;\r\n  margin-right: 20%;\r\n  background-color: #c6c6c6;\r\n}\r\n.time-played-bar:hover{\r\n  margin-left: 18%;\r\n  margin-right: 18%;\r\n}\r\n.time-played-bar-text-playtime {\r\n    opacity:0;\r\n    transition:.5s;\r\n    font-size: 2.5em;\r\n    padding-top: 8px;\r\n    margin-left: 13%;\r\n    position: absolute;\r\n   text-shadow: 2px 2px 3px black;\r\n}\r\n.time-played-bar:hover .time-played-bar-text-playtime{\r\n  opacity: 1\r\n}\r\n.time-played-bar-text{\r\n  font-size: 2.5em;\r\n  padding-top: 8px;\r\n  position: absolute;\r\n text-shadow: 2px 2px 3px black;\r\n\r\n}\r\n.time-played-bar-fill{\r\n  height: 30px;\r\n}\r\n\r\n\r\n.show-btn{\r\n  margin-left: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 313:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"highlights-header\" [@fadeIn1]=\"'in'\">\r\n    <h1>Random Highlights <button class=\"btn btn-info refresh\" type=\"button\" (click)=\"generateHighlights()\" name=\"button\">Refresh</button></h1>\r\n  </div>\r\n\r\n  <div class=\"card-deck\">\r\n  <div class=\"card\"  [@fadeIn1]=\"'in'\">\r\n    <div class=\"card-block\" >\r\n      <h2 class=\"card-title\">{{highlightOne.name}}</h2>\r\n      <h3 class=\"card-text\">{{highlightOne.details}}</h3>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\"  [@fadeIn2]=\"'in'\">\r\n    <div class=\"card-block\">\r\n      <h2 class=\"card-title\">{{highlightTwo.name}}</h2>\r\n      <h3 class=\"card-text\">{{highlightTwo.details}}</h3>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card\"  [@fadeIn3]=\"'in'\">\r\n    <div class=\"card-block\">\r\n      <h2 class=\"card-title\">{{highlightThree.name}}</h2>\r\n      <h3 class=\"card-text\">{{highlightThree.details}}</h3>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

module.exports = "<html>\r\n    <router-outlet></router-outlet>\r\n\r\n</html>\r\n"

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = "<div class=\"centered jumbotron\" [@flyInFromTop]=\"'in'\">\r\n  <h1> <img src=\"{{avatar}}\" alt=\"\">{{userName}}</h1>\r\n</div>\r\n\r\n\r\n<div class=\"header row d-flex justify-content-center\"  [@flyInFromSide]=\"'in'\">\r\n  <div class=\"level-header\">\r\n    <h1><span class=\"level\">level </span>{{level}} <span class=\"prestige\" *ngIf=\"prestige > 0\">x{{prestige}}</span></h1>\r\n  </div>\r\n  <div class=\"sr-header\">\r\n    <h1><span class=\"SR\">SR </span>{{compRank}}</h1>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"heroSelected\">\r\n  <div class=\"select-character row\" [@flyInCharacterContainer]=\"'in'\" >\r\n    <div class=\"col-md-3\">\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n      <select (change)=\"onCharSelect($event.target.value)\">\r\n        <option *ngFor=\"let hero of heroList\" value=\"{{hero.name}}\" [selected] = \"hero.name == heroSelected.name\" class=\"select-box\">{{hero.name}}</option>\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"col-md-3\">\r\n      <button [class] = \"competitiveBtn(heroSelected)\" type=\"button\" name=\"button\" (click)=\"showCompetitiveStats(heroSelected)\"><span *ngIf=\"isCompetitive(heroSelected)\">Competitive</span><span *ngIf=\"!isCompetitive(heroSelected)\">No Competitive Data</span></button>\r\n      <button *ngIf=\"isQuickplay(heroSelected)\" [class] = \"quickplayBtn(heroSelected)\" type=\"button\" name=\"button\" (click)=\"showQuickplayStats(heroSelected)\"><span *ngIf=\"isQuickplay(heroSelected)\">Quickplay</span><span *ngIf=\"!isQuickplay(heroSelected)\">No Quickplay Data</span></button>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"character row\">\r\n    <div class=\"col-lg-5 character-image-container\"  [@flyInCharacterContainer]=\"'in'\">\r\n      <img *ngIf=\"heroSelected.name == 'zarya'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Zarya-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'doomfist'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Doomfist-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'genji'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Genji-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'mccree'\" [@fadeInCharacterPicture]=\"'in'\"src=\"../assets/img/Mccree-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'pharah'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Pharah-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'reaper'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Reaper-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'soldier76'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Soldier76-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'sombra'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Sombra-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'tracer'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Tracer-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'bastion'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Bastion-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'hanzo'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Hanzo-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'junkrat'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Junkrat-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'mei'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Mei-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'torbjorn'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Torbjorn-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'widowmaker'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Widowmaker-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'dva'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/DVa-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'orisa'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Orisa-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'reinhardt'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Reinhardt-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'roadhog'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Roadhog-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'winston'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Winston-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'ana'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Ana-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'lucio'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Lucio-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'mercy'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Mercy-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'symmetra'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Symmetra-portrait.png\">\r\n      <img *ngIf=\"heroSelected.name == 'zenyatta'\" [@fadeInCharacterPicture]=\"'in'\" src=\"../assets/img/Zenyatta-portrait.png\">\r\n\r\n    </div>\r\n\r\n    <div class=\"col-lg-3\" [@flyInCharacterStats]=\"'in'\" style=\"z-index: 5\">\r\n    <h4 class=\"card-title\">{{heroSelected.name}}'s Special Stats\r\n      <div class=\"btn-group\" role=\"group\">\r\n      </div>\r\n    </h4>\r\n      <div class=\"character-deck  char-stat-block\" id=\"style-8\" >\r\n        <div class=\"card stat-block\">\r\n\r\n          <ul class=\"list-group list-group-flush\">\r\n            <li *ngFor=\"let heroStat of heroStats\" class=\"list-group-item\">{{heroStat.name}}: {{heroStat.details}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-lg-3\"  [@flyInCharacterStats]=\"'in'\">\r\n      <h4 class=\"card-title\">{{heroSelected.name}}'s General Stats</h4>\r\n        <div id=\"style-8\"class=\"character-deck general-stats\" >\r\n          <div class=\"card stat-block\">\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li *ngFor=\"let generalStat of generalStats\" class=\"list-group-item\">{{generalStat.name}}: <span class=\"stat-detail\">{{generalStat.details}}</span></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div [@fadeIn] = \"'in'\">\r\n\r\n\r\n<h1 class=\"allHeroes\">My Heroes <button type=\"button\" class=\"btn btn-warning showAllBtn\"(click) =\"showAll()\" name=\"button\">{{showBtnText}}</button></h1>\r\n\r\n  <div class=\"listOptions\">\r\n    <button type=\"button\" [class]=\"listOptionBtnQuickplay()\" name=\"button\" (click) = \"displayTimePlayedClick()\">Time Played</button>\r\n\r\n    <button type=\"button\" [class]=\"listOptionBtnCompetitive(heroSelected)\" name=\"button\" (click) = \"displayWinRateClick(heroSelected)\">Win Rate (Competitive)</button>\r\n  </div>\r\n\r\n  <div *ngIf = \"displayWinRate\">\r\n    <app-win-rate [heroSelected] = \"heroSelected\" [winRateList] = \"winRateListConcat\" (selectCharacterSender) = \"onCharSelect($event)\" [showBtnTextWinRate] = \"showBtnTextWinRate\"> </app-win-rate>\r\n  </div>\r\n\r\n  <div *ngIf = \"displayTimePlayed\">\r\n    <app-time-played [heroSelected] = \"heroSelected\" [playtimeListConcat] = \"playtimeListConcat\" [totalPlaytime] = \"totalPlaytime\" [showBtnText] = \"showBtnText\" (showAllSender) = \"showAll()\" (selectCharacterSender) = \"onCharSelect($event)\"></app-time-played>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<app-achievements *ngIf=\"heroSelected\" [compStats] = \"compStats\" [quickplayStats] = \"quickplayStats\"></app-achievements>\r\n"

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

module.exports = "<div class=\"char-time-played\"  >\r\n  <div class=\"time-played-concat\" >\r\n      <div *ngFor=\"let hero of playtimeListConcat, let i = index\" [attr.data-index]=\"i\" [class] = \" setBarOutline(hero.name)\" (click)=\"onCharSelect(hero)\">\r\n        <div [class] = \" setBarColor(i)\" [@shrinkOut2]=\"'in'\" role=\"progressbar\" [style.width.%]=\"(hero.playtime/totalPlaytime)*100\">\r\n        <span [@fadeInFast]=\"'in'\" class=\"time-played-bar-text\">{{hero.name}}</span>\r\n        <span class=\"time-played-bar-text-playtime\">{{hero.playtime.toFixed(2)}} hours</span>\r\n      </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 317:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!doneSearching && !searching\" id=\"user-form\">\r\n<label for=\"\">Enter Battlenet Id</label>\r\n<input type=\"text\" value=\"Chuggsy-11927\" #battlenet class=\"form-control\">\r\n<button type=\"button\" name=\"button\" (click) = \"findUser(battlenet.value)\" class=\"btn btn-info\">Search</button>\r\n</div>\r\n\r\n<div class=\"d-flex justify-content-center\" *ngIf=\"searching && !doneSearching\">\r\n  <h1 class=\"searching\">Loading...</h1>\r\n</div>\r\n\r\n<div *ngIf=\"doneSearching\">\r\n  <app-stat-header></app-stat-header>\r\n</div>\r\n"

/***/ }),

/***/ 318:
/***/ (function(module, exports) {

module.exports = "<div class=\"char-time-played\"  >\r\n  <div class=\"time-played-concat\" >\r\n      <div *ngFor=\"let hero of winRateList, let i = index\" [attr.data-index]=\"i\" [class] = \" setBarOutline(hero.name)\" (click)=\"onCharSelect(hero)\">\r\n        <div [class] = \" setBarColor(i)\" [@shrinkOut2]=\"'in'\" role=\"progressbar\" [style.width.%]=\"(hero.details/1)*100\">\r\n        <span [@fadeInFast]=\"'in'\" class=\"time-played-bar-text\">{{hero.name}}</span>\r\n        <span class=\"time-played-bar-text-playtime\">{{hero.details}}%</span>\r\n      </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(235);


/***/ })

},[598]);
//# sourceMappingURL=main.bundle.js.map