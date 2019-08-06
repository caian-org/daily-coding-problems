#!/usr/bin/env python3


def cons(a, b):
    def pair(f):
        return f(a, b)

    return pair


def car(f):
    x = lambda a, b: a
    return f(x)


def cdr(f):
    x = lambda a, b: b
    return f(x)


print(car(cons(3, 4)))
print(cdr(cons(3, 4)))
