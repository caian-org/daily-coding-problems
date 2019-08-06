function removeDuplicatesTwo(nums: number[]): number[]
{
    let i = 0;

    while (i < nums.length) {
        while (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
        }

        i++;
    }

    return nums;
}

function removeDuplicates(nums: number[]): number[]
{
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            nums[++i] = nums[j];
        }
    }

    return nums;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(nums));
