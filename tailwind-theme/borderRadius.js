const MIN = 0; // 最小値
const MAX = 20; // 最大値
const INCREMENTS_NUM = 1; // 增量
let incrementsObj = createIncrementsObj();

const OTHER_OBJ = {
  none: "0px",
  full: "9999px",
};

let borderRadius = Object.assign(incrementsObj, OTHER_OBJ);

function createIncrementsObj() {
  let obj = {};
  let i = MIN;
  while (MAX >= i) {
    obj[`${i}px`] = `${i}px`;
    i = i + INCREMENTS_NUM;
  }
  return obj;
}

module.exports = borderRadius;
