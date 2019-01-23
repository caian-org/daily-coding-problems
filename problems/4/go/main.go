package main

import (
    "fmt"
    "sort"
)


func prepareAndSort(arr []int) []int {

    for i, v := range arr {
        if v < 1 {
            arr = append(arr[:i], arr[i + 1:]...)
        }
    }

    sort.Ints(arr)

    return arr
}


func minInt(arr []int) int {

    arr = prepareAndSort(arr)

    x := 0
    for i, v := range arr {
        if i == (len(arr) - 1) {
            x = v + 1
            break
        }

        if arr[i + 1] - v > 1 {
            x = v + 1
            break
        }
    }

    return x
}


func main() {

    x := []int{3, 4, -1 ,1}
    fmt.Println(minInt(x))
}
