"use strict";
exports.__esModule = true;
var QQlevelConfig = /** @class */ (function () {
    function QQlevelConfig() {
        this.maxLevelLimit = 255;
        this.minLevelLimit = 0;
        this.icon = {
            crown: './assets/crown.svg',
            sun: './assets/sun.svg',
            moon: './assets/moon.svg',
            star: './assets/star.svg'
        };
        this.iconString = {
            crown: '👑',
            sun: '🌞',
            moon: '🌙',
            star: '⭐'
        };
        this.iconLevel = {
            crown: 64,
            sun: 16,
            moon: 4,
            star: 1
        };
        this.iconStyle = "width: 1em;height: 1em;";
        this.iconWrapStyle = "display: flex;align-items: center;font-szie: 12px;";
    }
    return QQlevelConfig;
}());
exports.QQlevelConfig = QQlevelConfig;
;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.inRange = function (x, range) {
        return x >= range.min && x <= range.max;
    };
    return Utils;
}());
exports.Utils = Utils;
var QQlevel = /** @class */ (function () {
    function QQlevel(level, config) {
        this.config = new QQlevelConfig();
        this.level = {
            level: Number(-1),
            crown: Number(-1),
            sun: Number(-1),
            moon: Number(-1),
            star: Number(-1)
        };
        if (config) {
            this.setConfig(config);
        }
        if (level) {
            this.setLevel(level);
            this.calcLevel();
        }
    }
    QQlevel.prototype.getConfig = function () {
        return this.config;
    };
    QQlevel.prototype.setConfig = function (config) {
        this.config = config;
    };
    QQlevel.prototype.setLevelLimit = function (range) {
        if (range.max > range.min
            && range.max >= this.config.iconLevel.crown
            && range.min <= this.config.iconLevel.star) {
            this.config.maxLevelLimit = range.max;
            this.config.minLevelLimit = range.min;
        }
        else {
            throw Error('Illegal Range');
        }
    };
    QQlevel.prototype.setIconLevel = function (iconLevel) {
        if (iconLevel.crown > iconLevel.sun
            && iconLevel.sun > iconLevel.moon
            && iconLevel.moon > iconLevel.star
            && iconLevel.crown <= this.config.maxLevelLimit
            && iconLevel.star >= this.config.minLevelLimit) {
            this.config.iconLevel = iconLevel;
        }
        else {
            throw Error('Illegal IconLevel');
        }
    };
    QQlevel.prototype.setIconString = function (iconString) {
        this.config.iconString = iconString;
    };
    QQlevel.prototype.setIcon = function (icon) {
        this.config.icon = icon;
    };
    QQlevel.prototype.setIconStyle = function (style) {
        this.config.iconStyle = style;
    };
    QQlevel.prototype.addIconStyle = function (style) {
        this.config.iconStyle = "" + this.config.iconStyle + style;
    };
    QQlevel.prototype.setIconWrapStyle = function (style) {
        this.config.iconWrapStyle = style;
    };
    QQlevel.prototype.addIconWrapStyle = function (style) {
        this.config.iconWrapStyle = "" + this.config.iconWrapStyle + style;
    };
    QQlevel.prototype.setLevel = function (level) {
        var _a = this.config, maxLevelLimit = _a.maxLevelLimit, minLevelLimit = _a.minLevelLimit;
        if (Utils.inRange(level, {
            max: maxLevelLimit,
            min: minLevelLimit
        })) {
            this.level.level = level;
        }
        else if (level > maxLevelLimit) {
            this.level.level = level;
        }
        else {
            this.level.level = minLevelLimit;
        }
    };
    QQlevel.prototype.getLevel = function () {
        return this.calcLevel();
    };
    QQlevel.prototype.calcLevel = function () {
        if (this.level.level < 0) {
            throw Error("Please set a number to level first by constructor or setLevel()");
        }
        this.level = this.coreCalc(this.level.level);
        return this.level;
    };
    QQlevel.prototype.coreCalc = function (level) {
        var cCount = 0;
        var sCount = 0;
        var mCount = 0;
        var stCount = 0;
        var restC = 0;
        var restS = 0;
        var restM = 0;
        var _a = this.config, maxLevelLimit = _a.maxLevelLimit, iconLevel = _a.iconLevel;
        if (level > maxLevelLimit) {
            cCount = 4;
        }
        else if (level >= iconLevel.crown) {
            cCount = Math.floor(level / iconLevel.crown);
            restC = level % iconLevel.crown;
            if (restC >= iconLevel.sun) {
                sCount = Math.floor(restC / iconLevel.sun);
                restS = restC % iconLevel.sun;
                if (restS >= iconLevel.moon) {
                    mCount = Math.floor(restS / iconLevel.moon);
                    restM = restS % iconLevel.moon;
                    if (restM >= iconLevel.star) {
                        stCount = restM;
                    }
                }
                else {
                    stCount = restS;
                }
            }
            else {
                if (restC >= iconLevel.moon) {
                    mCount = Math.floor(restC / iconLevel.moon);
                    restM = restC % iconLevel.moon;
                    if (restM >= iconLevel.star) {
                        stCount = restM;
                    }
                }
                else {
                    stCount = restC;
                }
            }
        }
        else if (level >= iconLevel.sun) {
            sCount = Math.floor(level / iconLevel.sun);
            restS = level % iconLevel.sun;
            if (restS >= iconLevel.moon) {
                mCount = Math.floor(restS / iconLevel.moon);
                restM = restS % iconLevel.moon;
                if (restM >= iconLevel.star) {
                    stCount = restM;
                }
            }
            else {
                stCount = restS;
            }
        }
        else if (level >= iconLevel.moon) {
            mCount = Math.floor(level / iconLevel.moon);
            restM = level % iconLevel.moon;
            if (restM >= iconLevel.star) {
                stCount = restM;
            }
        }
        else if (level >= iconLevel.star) {
            stCount = level;
        }
        return {
            level: level,
            crown: cCount,
            sun: sCount,
            moon: mCount,
            star: stCount
        };
    };
    QQlevel.prototype.outputLevelHTML = function () {
        if (this.level.level < 0) {
            throw Error("Please set a number to level first by constructor or setLevel()");
        }
        var _a = this.level, crown = _a.crown, sun = _a.sun, moon = _a.moon, star = _a.star;
        if (crown === -1 || sun === -1 || moon === -1 || star === -1) {
            var reTry = this.getLevel();
            crown = reTry.crown;
            sun = reTry.sun;
            moon = reTry.moon;
            star = reTry.star;
        }
        var _b = this.config, icon = _b.icon, iconStyle = _b.iconStyle, iconWrapStyle = _b.iconWrapStyle;
        var crowStr = '';
        var sunStr = '';
        var moonStr = '';
        var starStr = '';
        var warpBegin = "<div style='" + iconWrapStyle + "'>";
        var warpEnd = '</div>';
        for (var i = 0; i < crown; i++) {
            crowStr += "<img src='" + icon.crown + "' style='" + iconStyle + "'>";
        }
        for (var i = 0; i < sun; i++) {
            sunStr += "<img src='" + icon.sun + "' style='" + iconStyle + "'>";
        }
        for (var i = 0; i < moon; i++) {
            moonStr += "<img src='" + icon.moon + "' style='" + iconStyle + "'>";
        }
        for (var i = 0; i < star; i++) {
            starStr += "<img src='" + icon.star + "' style='" + iconStyle + "'>";
        }
        return "" + warpBegin + crowStr + sunStr + moonStr + starStr + warpEnd;
    };
    QQlevel.prototype.outputLevelString = function () {
        if (this.level.level < 0) {
            throw Error("Please set a number to level first by constructor or setLevel()");
        }
        var _a = this.level, crown = _a.crown, sun = _a.sun, moon = _a.moon, star = _a.star;
        if (crown === -1 || sun === -1 || moon === -1 || star === -1) {
            var reTry = this.getLevel();
            crown = reTry.crown;
            sun = reTry.sun;
            moon = reTry.moon;
            star = reTry.star;
        }
        var iconString = this.config.iconString;
        var crowStr = '';
        var sunStr = '';
        var moonStr = '';
        var starStr = '';
        for (var i = 0; i < crown; i++) {
            crowStr += "" + iconString.crown;
        }
        for (var i = 0; i < sun; i++) {
            sunStr += "" + iconString.sun;
        }
        for (var i = 0; i < moon; i++) {
            moonStr += "" + iconString.moon;
        }
        for (var i = 0; i < star; i++) {
            starStr += "" + iconString.star;
        }
        return "" + crowStr + sunStr + moonStr + starStr;
    };
    return QQlevel;
}());
exports.QQlevel = QQlevel;
exports["default"] = QQlevel;
