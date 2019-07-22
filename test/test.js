"use strict";
exports.__esModule = true;
var app_1 = require("../src/app");
var defaultConfig = new app_1.QQlevelConfig();
var testStartLevel = defaultConfig.maxLevelLimit + 1;
var endStartLevel = defaultConfig.minLevelLimit - 1;
var testQQlevel = new app_1["default"]();
for (var i = testStartLevel; i >= endStartLevel; i--) {
    console.log("level: " + i);
    console.log(testQQlevel.outputLevelString(i));
}
var testQQlevel2 = new app_1["default"]();
for (var i = testStartLevel; i >= endStartLevel; i--) {
    testQQlevel2.setLevel(i);
    console.log("level: " + i);
    console.log(testQQlevel2.getLevel());
    // console.log(testQQlevel.outputLevelString());
}
// for(let i = testStartLevel; i >= endStartLevel; i--){
//   const testQQlevelinit: QQlevel = new QQlevel(i);
//   console.log(`level: ${i}`);
//   console.log(testQQlevelinit.getLevel());
// }
// for(let i = testStartLevel; i >= endStartLevel; i--){
//   const testQQlevelinitReadME: QQlevel = new QQlevel(i);
//   const {crown, sun, moon, star } = testQQlevelinitReadME.getLevel()
//   console.log(`${i}|${crown}|${sun}|${moon}|${star}|${testQQlevelinitReadME.outputLevelString()}|`);
// }
