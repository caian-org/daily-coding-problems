#!/usr/bin/env python3

def sum_of_two_brute(arr, k):
    for i in range(0, len(arr)):
        n = arr[:]
        n.pop(i)
        value = arr[i]

        for j in n:
            if j + value is k:
                return True

    return False


def sum_of_two(arr, k):
    r = []

    for v in arr:
        sub = k - v
        if sub in r:
            return True

        r.append(v)

    return False


L = [10, 15, 3, 7]
K = 25


print(sum_of_two(L, K))
