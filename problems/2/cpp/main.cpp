#include <vector>
#include <iostream>


std::vector<long> prod_of_all_brute(std::vector<long> arr)
{
    std::vector<long> a;

    for(uint16_t i = 0; i < arr.size(); i++)
    {
        long x = 1;

        for(uint16_t j = 0; j < arr.size(); j++)
        {
            if(arr[i] == arr[j])
                continue;

            x *= arr[j];
        }

        a.push_back(x);
    }

    return a;
}


std::vector<long> prod_of_all(std::vector<long> arr)
{
    uint16_t q = arr.size();
    std::vector<long> a (q);
    std::vector<long> b (q);
    std::vector<long> r (q);

    long p = 1;
    for(uint16_t i = 0; i < q; i++)
    {
        a[i] = p;
        p *= arr[i];
    }

    p = 1;
    for(int j = (q - 1); j >= 0; j--)
    {
        b[j] = p;
        p *= arr[j];
    }

    for(uint16_t k = 0; k < q; k++)
    {
        long v = (a[k] * b[k]);
        r[k] = v;
    }

    return r;
}


int main()
{
    std::vector<long> L {1, 2, 3, 4, 5};
    std::vector<long> M;

    M = prod_of_all_brute(L);

    for(uint16_t i = 0; i < L.size(); i++)
    {
        long v = M[i];

        std::cout << v << ' ';
    }
    std::cout << std::endl;
}
