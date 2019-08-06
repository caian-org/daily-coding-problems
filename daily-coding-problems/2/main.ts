function prodOfAllBrute(arr: number[]): number[]
{
    const a = [];

    for(let i = 0; i < arr.length; i++) {
        let x = 1;

        for(let j = 0; j < arr.length; j++) {
            if(arr[i] == arr[j]) {
                continue;
            }

            x *= arr[j];
        }

        a.push(x);
    }

    return a;
}


function prodOfAll(arr: number[]): number[]
{
    const q = arr.length,
        a = new Array(q),
        b = new Array(q);

    let p = 1;
    for(let i = 0; i < q; i++)
    {
        a[i] = p;
        p *= arr[i];
    }

    p = 1;
    for(let j = (q - 1); j >= 0; j--)
    {
        b[j] = p;
        p *= arr[j];
    }

    const r = [];
    for(let k = 0; k < q; k++)
        r.push(a[k] * b[k]);

    return r;
}


const L = [1, 2, 3, 4, 5];

console.log(prodOfAll(L));
