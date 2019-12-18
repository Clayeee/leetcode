/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let arr = x.toString().split("")
  for (let i = 0; i < arr.length/2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false
    }
  }
  return true
};
// @lc code=end

