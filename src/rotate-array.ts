// Given an array, rotate the array to the right by k steps, where k is non-negative.

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {

    //naive solution
    // splice the nums array with last index each time and shift the element to the //front
    // let subArr=[];
    // subArr=nums.splice(nums.length-(k), k);
    // nums = subArr.concat(nums);


    //Approach #2
    //inplace
    // for(let i=0; i<k;i++){
    //     //pop
    //     const temp:any = nums.pop();
    //     //shift
    //     nums.unshift(temp)
    // }

    //Approach #3
    // O(n) time and O(1) space complexity
    if(nums.length ===1){return}

    //reverse total array
    let i = 0;
    let j = nums.length - 1;
    k=k%nums.length; //************** K could be GREATER than the array length */
    swap(nums, i, j);

    // reverse first k elements
    i = 0;
    j = k - 1;
    swap(nums, i, j)

    // reverse next n-k elements
    i = k - 1;
    j = nums.length - 1;
    swap(nums, i, j)
};
function swap(nums: number[], i: number, j: number) {
    while (i < j) {
        const temp: any = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;

    }
}
rotate([1, 2, 3, 4, 5, 6, 7],
    3);