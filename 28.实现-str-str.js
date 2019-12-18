/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle === ''){
    return 0
  }
  for(let i = 0; i < haystack.length; i++){
    if(needle[0] === haystack[i]) {
      if(needle.length === 1) {
        return i
      } else {
        for(let k = 1; k < needle.length; k++){
          if (needle[k] === haystack[i+k]){
            if (k === needle.length - 1) {
              return i
            }
          } else {
            break
          }
        }
      }
    }
  }
  return -1
};
// @lc code=end

