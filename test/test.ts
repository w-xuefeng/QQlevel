import QQlevel, { QQlevelConfig } from '../src/app';

const defaultConfig: QQlevelConfig = new QQlevelConfig();
const testStartLevel: number = defaultConfig.maxLevelLimit + 1;
const endStartLevel: number = defaultConfig.minLevelLimit - 1;

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

for(let i = testStartLevel; i >= endStartLevel; i--){
  const testQQlevelinitReadME: QQlevel = new QQlevel(i);
  const {crown, sun, moon, star } = testQQlevelinitReadME.getLevel()
  console.log(`${i}|${crown}|${sun}|${moon}|${star}|${testQQlevelinitReadME.outputLevelString()}|`);
}
