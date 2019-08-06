function lengthOfLastWordTwo(s: string): number
{
    let c = 0;
    let lastSpace = false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            if (lastSpace) {
                c = 1;
                lastSpace = false;
            }
            else {
                c++;
            }
        }
        else {
            lastSpace = true;
        }
    }

    return c;
}

function lengthOfLastWord(s: string): number
{
    let x = 0;
    let c = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            c = 0;
        }
        else {
            x = ++c;
        }
    }

    return x;
}

console.log(lengthOfLastWord('Hello World'));
