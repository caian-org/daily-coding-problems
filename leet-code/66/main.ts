function plusOne(digits: number[]): number[]
{
    let flag = true;

    for (let i = digits.length - 1; i >= 0; i--) {
        if (flag) {
            digits[i]++;
            flag = false;
        }

        if (digits[i] > 9) {
            digits[i] -= 10;
            flag = true;
        }
    }

    if (flag) {
        digits.unshift(1);
    }

    return digits;
}


console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9, 9, 9]));
console.log(plusOne([9, 9, 8, 9, 9]));
