function sumOfTwoBrute(list: number[], k: number): boolean
{
    for(let i = 0; i < list.length; i++) {
        const n = JSON.parse(JSON.stringify(list));
        n.splice(i, 1);

        const value = list[i];
        for(let j = 0; j < n.length; j++) {
            if((value + n[j]) == k) {
                return true;
            }
        }
    }

    return false;
}

function sumOfTwo(list: number[], k: number): boolean
{
    const r = {};

    for(let i = 0; i < list.length; i++) {
        let c = list[i],
            sub = k - c;

        if(r[sub])
            return true;

        r[c] = true;
    }

    return false;
}


const L = [10, 15, 3, 7];
const K = 18;

console.log(sumOfTwo(L, K));
