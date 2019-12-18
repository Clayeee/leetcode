/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  for (var i =0;i < nums.length; i++){
    if(target <= nums[i]) {
      return i
    } else if (i === nums.length-1 && target >= nums[i]) {
      return i + 1
    }
  }
};
// @lc code=end
