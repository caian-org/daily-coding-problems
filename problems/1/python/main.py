#!/usr/bin/env python3


def add_up_to(list_, k):
    for i in range(0, len(list_)):
        n = list_[:]
        n.pop(i)
        value = list_[i]

        for j in n:
            if j + value is k:
                return True

    return False


L = [10, 15, 3, 7]
K = 25


print(add_up_to(L, K))
