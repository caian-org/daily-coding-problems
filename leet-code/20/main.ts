enum Align { Open, Close }
enum Type { Parentheses, Brackets, Curly }


const symbols = new Map();

symbols.set('(', [Type.Parentheses, Align.Open]);
symbols.set(')', [Type.Parentheses, Align.Close]);

symbols.set('[', [Type.Brackets, Align.Open]);
symbols.set(']', [Type.Brackets, Align.Close]);

symbols.set('{', [Type.Curly, Align.Open]);
symbols.set('}', [Type.Curly, Align.Close]);


function cut(s: string, p: number): string
{
    return (s.substring(0, p) + s.substring(p + 1));
}

function isValid(s: string, begin = 0): boolean
{
    const l = s.length;

    // success exit case
    if (l == 0) {
        return true;
    }

    for (let i = begin; i < l - 1; i++) {
        const [cT, cA] = symbols.get(s[i]);
        const [nT, nA] = symbols.get(s[i + 1]);

        if (cA == Align.Close) {
            return false;
        }

        if (cA == Align.Open && nA == Align.Close && cT == nT) {
            s = cut(s, i + 1);
            s = cut(s, i);

            return isValid(s)
        }
        else {
            return isValid(s, begin + 1);
        }
    }

    return false;
}

const input = ['()', '()[]{}', '(]', '([)]', '{[]}'];

input.forEach((i: string): void => {
    console.log(`Input: "${i}"`);
    console.log(`Output: ${isValid(i)}\n`);
});
