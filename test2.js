var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let prev = new Map();
    let result = 0;

    while (i < s.length) {
        if (prev.has(s[i])) {
            i = prev.get(s[i]) + 1;
            prev.clear();
        }
        prev.set(s[i], i)

        result = Math.max(result, prev.size);
        i++;
    }

    return result;
};

console.log(lengthOfLongestSubstring("bbbbb"));

