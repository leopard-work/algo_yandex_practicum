function polyHash(a, m, s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let tmp = result + s[i].charCodeAt();
        if (i !== s.length - 1) {
            result = tmp * a % m;
        } else {
            result = tmp % m;
        }
    }

    return result;
}

// console.log(polyHash(357, 575704498, 'hOWzhqFPUmXreOzvrVNGFAacXwFSuIYqyPpKrYJxIQuxEKpgFWigjpaxbesOzTEAhEaHvRpprISWfTtAwUIFbqHJjWSINSaPThtqffRHzjOjibBcSKtmEBpsdMOHcQPXVbnRUPMvSdoXKpwTULiifREIvDPTiYvSbgmxGkeqsaOntTEPzrUmuKmPazULkRZFPwAFyinHAegEzLqDOBtVnXmYtXwrBQhugtAsgAnekDPszipwhWOswbzOesDOjBfnDQKklQPDNHrbRLWFUhMyVlCmfqDKBfGUHItjgbUvnPhOQvMnfSrsmnzGgNDeaQRofctEhoUWqKKSWpYtCdINYLaeTYWfdoYkeqJvgrITaBHLyBYhsFfiKQXJpKazezhGgaasAOaJygerGYZWgakMnkQCOfrqwKZXoTsnZbBcSYNaekDVErrJriLLHqEDShhDaTKWIFbjrYdZfIrtxVtwvHhPJLVLKUEPVschkFugQptLFEChxOOpnifrQhTRRhqtuRVhmqGtmHXFWRYfolcMKYBEKjSeoIQERylypuXONsumMxpeYMSJsvROeFKtMWjoNBVDbpAYhsyAOZjVoGLrGlwYfXLbPdBenpwFxEcGhIIuGWRIzgMIRlkJBjGgGwnJfzIPcOIwodyLyGYtIvgWWZWXSYmrNcjfvOFIrzoISBnIbORIhMBdAUsxFOHUxzDmUcglNYxngqHxaQOLKMPtHiHAcZcHLScjWbNofxvpqcuRSIhOtYLJaNbRntsaWfYZsvxaIRKGqoKnwsGnpccefNTVPvjBAgCdCVRTPokHVXoUmMQWmCggGBWavaqwyDsmdcxwwiJLbWvXWidcMjVcEBTiPkpDxQbcuHYRzHVTuwbbWKYCYnfROBOObFCjwWGcOJzZagEdfgHTYpTEHotpusAcLCKqcHPNCOHlGjoAejwilGJourGJdKxiwPSJbzzVQSukhDPnqPXNeTVqjWoXeORXLPjHIYGeNBmGqiDmRDlbYCsKAh'))

function solve() {
    const a = readInt();
    const m = readInt();
    const s = readLine();

    const result = polyHash(a,m,s);

    process.stdout.write(`${result}`);
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

function readLine() {
    const n = _inputLines[_curLine];
    _curLine++;
    return n;
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}