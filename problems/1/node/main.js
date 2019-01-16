#!/usr/bin/env node


const addUpTo = (list, k) =>
{
    for(let i = 0; i < list.length; i++)
    {
        const n = JSON.parse(JSON.stringify(list));
        n.splice(i, 1);

        const value = list[i];
        for(let j = 0; j < n.length; j++)
            if((value + n[j]) == k) return true;
    }
    return false;
}


const L = [10, 15, 3, 7];
const K = 17;


console.log(addUpTo(L, K));
