#!/usr/bin/env node


const cons = (a, b) =>
{
    const pair = (f) =>
    {
        return f(a, b);
    }

    return pair;
}


const car = (f) =>
{
    return f((a, b) => { return a; })
}


const cdr = (f) =>
{
    return f((a, b) => { return b; })
}


console.log(car(cons(3, 4)));
console.log(cdr(cons(3, 4)));
