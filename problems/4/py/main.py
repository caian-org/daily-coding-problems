#!/usr/bin/env python3


def min_int(arr):
    arr = sorted([x for x in arr if x > 0])

    for i, v in enumerate(arr):
        if i is (len(arr) - 1):
            return v + 1

        if arr[i + 1] - v > 1:
            return v + 1


x = [3, 4, -1, 1]


print(min_int(x))
