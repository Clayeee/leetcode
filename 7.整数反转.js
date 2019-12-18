/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var reverseStr = Math.abs(x).toString().split("").reverse().join("")
  if (x >= 0){
    var reverseNum =  parseInt(reverseStr)
  } else {
    var reverseNum = parseInt('-' + reverseStr)
  }
  if (reverseNum > Math.pow(2,31) - 1 || reverseNum < Math.pow(-2,31)) {
    return 0
  } else {
    return reverseNum
  }
};
// @lc code=end

