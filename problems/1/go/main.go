package main

import "fmt"

func addUpTo(list []int, k int) bool {

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


func main() {

    list := []int{10, 15, 3, 7}
    k := 13

    if addUpTo(list, k) {
        fmt.Println("True")
    } else {
        fmt.Println("False")
    }
}
