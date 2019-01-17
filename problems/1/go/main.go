package main

import "fmt"

func sumOfTwoBrute(list []int, k int) bool {

    for i, va := range list {
        n := list
        n = append(n[:i], n[i + 1:]...)

        for _, vb := range n {
            if (va + vb) == k {
                return true
            }
        }
    }

    return false;
}


func sumOfTwo(list []int, k int) bool {

    r := make(map[int]bool)

    for _, v := range list {

        sub := k - v
        if r[sub] {
            return true
        }

        r[v] = true
    }

    return false
}


func main() {

    list := []int{10, 15, 3, 7}
    k := 13

    fmt.Println(sumOfTwo(list, k))
}
