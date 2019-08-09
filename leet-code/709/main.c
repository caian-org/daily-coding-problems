#include <stdio.h>
#include <string.h>


char *toLowerCaseTwo(char *text)
{
    size_t length = strlen(text);
    char s[length + 1];

    strncpy(s, text, length);

    for(size_t i = 0; i < length; i++) {
        if ((s[i] > 64) && (s[i] < 91)) {
            s[i] += 32;
        }
    }

    s[length] = '\0';

    char *n = s;
    return n;
}

char *toLowerCase(char *text)
{
    for (size_t i = 0; i < strlen(text); i++) {
        if ((text[i] > 64) && (text[i] < 91)) {
            text[i] += 32;
        }
    }

    return text;
}


int main()
{
    char *lower = toLowerCaseTwo("HELLo wORLD");
    printf("%s \n", lower);

    return 0;
}
