/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let k = 0; k <= nums.length; k++) {
      for (let i = k + 1; i<= nums.length; i++) {
        if(nums[k] === nums[i]) {
          nums.splice(i, 1)
          i--
        }
      }
    }
    return nums.length
};
// @lc code=end

