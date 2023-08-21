function polyHash(s, a = 1000, m = 123987123) {
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

function generateWord() {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let l = 6;
    let count = 0;
    let result = "";

    while (count < l) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
        count++;
    }

    return result;
}

const map = new Map();
let tryRandom = 1000000;

while (tryRandom > 0) {
    const word = generateWord();
    const hash = polyHash(word);

    if (map.has(hash) && map.get(hash) !== word) {
        console.log(map.get(hash), word);
    } else {
        map.set(hash, word);
    }

    tryRandom--;
}

//console.log(map);
