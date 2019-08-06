#include <stdio.h>

int ack(int m, int n)
{
    int ans = 0;

    if (m == 0) {
        ans = n + 1;
    }
    else if (n == 0) {
        ans = ack(m - 1, 1);
    }
    else {
        ans = ack(m - 1, ack(m, n - 1));
    }

    return ans;
}

int main()
{
    for (int i = 0; i < 6; i++) {
        for (int j = 0; j < 6; j++) {
            printf("ackermann (%d, %d) is %d\n", i, j, ack(i, j));
        }
    }
}
