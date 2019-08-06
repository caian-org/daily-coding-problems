function cons(a: number, b: number): Function
{
    const pair = (f: Function): number =>
    {
        return f(a, b);
    };

    return pair;
}


/* eslint-disable @typescript-eslint/no-unused-vars */
function car(f: Function): Function
{
    // @ts-ignore
    return f((a: number, b: number): number => { return a; });
}


function cdr(f: Function): Function
{
    // @ts-ignore
    return f((a: number, b: number): number => { return b; });
}
/* eslint-enable */


/* eslint-disable no-console */
console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));
/* eslint-enable */
