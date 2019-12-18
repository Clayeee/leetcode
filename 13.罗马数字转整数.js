/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let arr = s.split('')
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'I') {
      sum = sum + 1
    } else if (arr[i] === 'V') {
      sum = sum + 5
    } else if (arr[i] === 'X') {
      sum = sum + 10
    } else if (arr[i] === 'L') {
      sum = sum + 50
    } else if (arr[i] === 'C') {
      sum = sum + 100
    } else if (arr[i] === 'D') {
      sum = sum + 500
    } else if (arr[i] === 'M') {
      sum = sum + 1000
    }
  }
  if(arr.indexOf('IV') || arr.indexOf('IX')) {
    sum = sum - (s.split('IV').length + s.split('IX').length - 2) * 2
  }
  if(arr.indexOf('XL') || arr.indexOf('XC')) {
    sum = sum - (s.split('XL').length + s.split('XC').length - 2) * 20
  }
  if(arr.indexOf('CD') || arr.indexOf('CM')) {
    sum = sum - (s.split('CD').length + s.split('CM').length - 2) * 200
  }
  return sum
};
// @lc code=end

