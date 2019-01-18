#!/usr/bin/env python3


def prod_of_all_brute(arr):
    a = []

    for i in arr:
        x = 1
        for j in arr:
            if i is j:
                continue

            x *= j

        a.append(x)

    return a


def prod_of_all(arr):
    q = len(arr)
    a = [None] * q
    b = [None] * q

    p = 1
    for i in range(0, q):
        a[i] = p
        p *= arr[i]

    p = 1
    for j in range((q - 1), -1, -1):
        b[j] = p
        p *= arr[j]

    r = []
    for k in range(0, q):
        r.append(a[k] * b[k])

    return r


L = [1, 2, 3, 4, 5]


print(prod_of_all(L))
