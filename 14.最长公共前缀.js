/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) {
    return ""
  } else if (strs.length === 1) {
    return strs[0]
  } else {
    let str = ''
    for (let k = 0; k < strs[0].length; k++) {
      for (let i = 1; i < strs.length; i++) {
        if(strs[i][k] === strs[i-1][k]){
          if(i === strs.length - 1){
            str = str + strs[i][k]
          }
        } else {
          return str
        }
      }
    }
    return str
  }
};
// @lc code=end

