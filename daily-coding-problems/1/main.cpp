#include <map>
#include <vector>
#include <iostream>

bool sum_of_two_brute(std::vector<uint32_t> arr, uint32_t k)
{
    for(uint16_t i = 0; i < arr.size(); i++)
    {
        std::vector<uint32_t> n = arr;
        n.erase(n.begin() + i);

        uint32_t value = arr[i];
        for(uint16_t j = 0; j < n.size(); j++)
        {
            if((value + n[j]) == k)
                return true;
        }
    }

    return false;
}


bool sum_of_two(std::vector<uint32_t> arr, uint32_t k)
{
    std::map<int, bool> r;

    for(uint32_t v : arr)
    {
        int sub = k - v;
        if(r.find(sub) != r.end())
            return true;

        r[v] = true;
    }

    return false;
}


int main()
{
    std::vector<uint32_t> arr {10, 15, 3, 7};
    uint32_t k = 10;

    std::cout << (sum_of_two(arr, k) ? "True" : "False") << std::endl;

    return 0;
}
