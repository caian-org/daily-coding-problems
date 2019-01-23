#include <vector>
#include <iostream>
#include <algorithm>


std::vector<int> prepare_and_sort(std::vector<int> arr)
{
    for(uint16_t i = 0; i < arr.size(); i++)
    {
        if(arr[i] < 0)
            arr.erase(arr.begin() + i);
    }

    std::sort(arr.begin(), arr.end());

    return arr;
}


unsigned int min_int(std::vector<int> arr)
{
    arr = prepare_and_sort(arr);

    unsigned int x = 0;
    for(uint16_t i = 0; i < arr.size(); i++)
    {
        if(i == (arr.size() - 1))
        {
            x = arr[i] + 1;
            break;
        }

        if(arr[i + 1] - arr[i] > 1)
        {
            x = arr[i] + 1;
            break;
        }
    }

    return x;
}


int main()
{
    std::vector<int> x {3, 4, -1, 1};
    std::cout << min_int(x) << std::endl;
}
