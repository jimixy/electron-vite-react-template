const MIN_HEIGHT = 0; // 最小値
const MAX_HEIGHT = 100; // 最大値
const INCREMENTS_NUM = 1; // 增量
let incrementsObj = createIncrementsObj();

const OTHER_OBJ = {
  auto: "auto",
  full: "100%",
  screen: "100vh",
};

let height = Object.assign(incrementsObj, OTHER_OBJ);

function createIncrementsObj() {
  let obj = {};
  let i = MIN_HEIGHT;
  while (MAX_HEIGHT >= i) {
    obj[`${i}px`] = `${i}px`;
    i = i + INCREMENTS_NUM;
  }
  return obj;
}

module.exports = height;
