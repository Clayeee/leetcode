/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits[digits.length - 1] === 9 && digits.length > 1) {
    digits[digits.length - 1] = 0
    digits[digits.length - 2]++
    for(let i = digits.length - 2; i > 0; i--){
      if (digits[i] === 10) {
        digits[i] = 0
        digits[i - 1]++
      }
    }
    if(digits[0] === 10) {
      digits[0] = 0
      digits.unshift(1)
    }
  } else if(digits[digits.length - 1] === 9 && digits.length === 1){
    digits[0] = 0
    digits.unshift(1)
  } else {
    digits[digits.length - 1]++ 
  }
  return digits
};
// @lc code=end
