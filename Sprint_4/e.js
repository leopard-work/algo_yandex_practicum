function subStr(str) {

    let res = 0;
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        const hash = new Set();
        hash.add(str[i]);
        count = 1;

        for (let j = i + 1; j < str.length; j++) {
            const l = str[j];

            if (hash.has(l)) {
                break;
            } else {
                hash.add(l)
                count++;
            }
        }

        res = Math.max(count, res);
    }

    res = Math.max(count, res);

    return res;
}

// console.log(subStr('abcabcbb'))
// console.log(subStr("jgmqxnmdclxoexyswnpvowxojznizqrdjqzqozshigqvrfaekrabnwnvhejhvzozkpgwfjujethblmiscvjtfcqwcwpbdowvstkesvmfacmlejxuutvfjbnicxawcauaplrcrsufeotdhwhcejmuwceyyxnlrbanqognhrliwxtduvyswvlwxgtfvkzxdotkxduzdwtumznszvvyvnjohgmpptrsefodurvqjsztqirwpfrpysaqxkdiqfahcckzeyavtqwgwpdyizvbxdcahkrfplrhaxavomlzwkokilfrmfwlhzxhjbctmuogwzogesjxxirzemueofignbzwunswbhvjsgvhtgiqcacrotucixvxdyeypmubhge"))

function solve() {
    const str = readLine();
    const result = subStr(str);

    process.stdout.write(`${result}`);
}

function readLine() {
    const n = _inputLines[_curLine];
    _curLine++;
    return n;
}

const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);