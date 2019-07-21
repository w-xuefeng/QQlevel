"use strict";
exports.__esModule = true;
var app_1 = require("../src/app");
var defaultConfig = new app_1.QQlevelConfig();
var testStartLevel = defaultConfig.maxLevelLimit + 1;
var endStartLevel = defaultConfig.minLevelLimit - 1;
// const testQQlevel: QQlevel = new QQlevel();
// for(let i = testStartLevel; i >= endStartLevel; i--){
//   testQQlevel.setLevel(i);
//   console.log(`level: ${i}`);
//   console.log(testQQlevel.getLevel());
//   console.log(testQQlevel.outputLevelString());
// }
// for(let i = testStartLevel; i >= endStartLevel; i--){
//   const testQQlevelinit: QQlevel = new QQlevel(i);
//   console.log(`level: ${i}`);
//   console.log(testQQlevelinit.getLevel());
// }
for (var i = testStartLevel; i >= endStartLevel; i--) {
    var testQQlevelinitReadME = new app_1["default"](i);
    var _a = testQQlevelinitReadME.getLevel(), crown = _a.crown, sun = _a.sun, moon = _a.moon, star = _a.star;
    console.log(i + "|" + crown + "|" + sun + "|" + moon + "|" + star + "|" + testQQlevelinitReadME.outputLevelString() + "|");
}
