#include <vector>
#include <iostream>

bool add_up_to(std::vector<uint32_t> list_, uint32_t k)
{
    for(uint16_t i = 0; i < list_.size(); i++)
    {
        std::vector<uint32_t> n = list_;
        n.erase(n.begin() + i);

        uint32_t value = list_[i];
        for(uint16_t j = 0; j < n.size(); j++)
        {
            if((value + n[j]) == k)
                return true;
        }
    }

    return false;
}

int main()
{
    std::vector<uint32_t> list_ {10, 15, 3, 7};
    uint32_t k = 10;

    std::cout << (add_up_to(list_, k) ? "True" : "False") << std::endl;

    return 0;
}
