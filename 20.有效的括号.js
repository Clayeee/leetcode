/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let left = ['(', '[', '{']
  let right = [')', ']', '}']
  let arr = []
  for(let i = 0; i < s.length; i++) {
    if (left.indexOf(s[i]) !== -1) {
      arr.push(s[i])
    } else {
      if(s[i] === right[left.indexOf(arr[arr.length - 1])]) {
        arr.pop()
      } else {
        return false
      }
    }
  }
  if (arr.length === 0) {
    return true
  } else {
    return false
  }
};
// @lc code=end

