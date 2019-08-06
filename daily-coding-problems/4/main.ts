function minInt(arr: number[]): number
{
    arr = arr
        .map((x)    => { return x })
        .filter((x) => { return x > 0 });

    arr.sort();

    for(let i = 0; i < arr.length; i++)
    {
        if(i == (arr.length - 1)) {
            return (arr[i] + 1);
        }

        if(arr[i + 1] - arr[i] > 1) {
            return (arr[i] + 1);
        }
    }
}


const x = [3, 4, -1, 1];

console.log(minInt(x));
