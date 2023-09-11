function test(s) {
    let result = 0;
    let zero = -1;
    let tmp = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            tmp++;
        } else {
            result = Math.max(tmp, result);

            if (zero === -1) {
                zero = i;
            } else {
                tmp = i - zero - 1;
                zero = -1;
            }
        }
    }

    result = Math.max(tmp, result);

    return result;
}

console.log(test('110111011100'))