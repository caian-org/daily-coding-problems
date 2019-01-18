package main

import "fmt"


func prodOfAllBrute(arr []int) []int {

    var a []int

    for _, i := range arr {

        x := 1
        for _, j := range arr {

            if i == j {
                continue
            }

            x *= j
        }
        a = append(a, x)
    }

    return a
}


func prodOfAll(arr []int) []int {

    q := len(arr)
    a := make([]int, q)
    b := make([]int, q)

    p := 1
    for i := 0; i < q; i++ {
        a[i] = p
        p *= arr[i]
    }

    p = 1
    for j := (q - 1); j >= 0; j-- {
        b[j] = p
        p *= arr[j]
    }

    var r []int
    for k := 0; k < q; k++ {
        r = append(r, (a[k] * b[k]))
    }

    return r
}


func main() {

    list := []int{1, 2, 3, 4, 5}

    fmt.Println(prodOfAll(list))
}
