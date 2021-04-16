const MIN = 75; // 最小値
const MAX = 300; // 最大値
const INCREMENTS_NUM = 5; // 增量
let incrementsObj = createIncrementsObj();

const OTHER_OBJ = {
  none: "1",
};

let lineHeight = Object.assign(incrementsObj, OTHER_OBJ);

function createIncrementsObj() {
  let obj = {};
  let i = MIN;
  while (MAX >= i) {
    obj[`${i}`] = `${i * 0.01}`;
    i = i + INCREMENTS_NUM;
  }
  return obj;
}

module.exports = lineHeight;
