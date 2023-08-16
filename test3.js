const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    let n;
    const text_dict = {};

    rl.question('Enter the value of n: ', (nInput) => {
        n = parseInt(nInput);

        let count = 0;
        function processLine() {
            rl.question('Enter a line of text: ', (line) => {
                const words = line.trim().split(' ');

                const row_count = count + 1;
                for (const word of words) {
                    if (word in text_dict) {
                        if (row_count in text_dict[word]) {
                            text_dict[word][row_count] += 1;
                        } else {
                            text_dict[word][row_count] = 1;
                        }
                    } else {
                        text_dict[word] = { [row_count]: 1 };
                    }
                }

                count++;
                if (count < n) {
                    processLine();
                } else {
                    processSearch();
                }
            });
        }

        function processSearch() {
            let m;
            rl.question('Enter the value of m: ', (mInput) => {
                m = parseInt(mInput);

                let search_count = 0;
                function processSearchLine() {
                    rl.question('Enter a line of search words: ', (line) => {
                        const search_words = line.trim().split(' ');

                        const unique_words = new Set();
                        const search = {};

                        for (const word of search_words) {
                            if (word in text_dict && !unique_words.has(word)) {
                                unique_words.add(word);
                                for (const doc_dict in text_dict[word]) {
                                    const relevance = text_dict[word][doc_dict];
                                    if (doc_dict in search) {
                                        search[doc_dict] += relevance;
                                    } else {
                                        search[doc_dict] = relevance;
                                    }
                                }
                            }
                        }

                        let count = 0;
                        for (const [key, value] of Object.entries(search).sort((a, b) => b[1] - a[1] || a[0] - b[0])) {
                            if (count === 5) {
                                break;
                            }
                            process.stdout.write(`${key} `);
                            count++;
                        }
                        if (Object.keys(search).length > 0) {
                            process.stdout.write('\n');
                        }

                        search_count++;
                        if (search_count < m) {
                            processSearchLine();
                        } else {
                            rl.close();
                        }
                    });
                }

                processSearchLine();
            });
        }

        processLine();
    });
}

main();