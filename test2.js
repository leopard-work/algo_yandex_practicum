function blockPrint(input){
    const db = {};
    let result = "";

    db['a'] = [" AAA ", "A   A", "A   A", "AAAAA", "A   A", "A   A", "A   A"];
    db['b'] = ["BBBB ", "B   B", "B   B", "BBBB ", "B   B", "B   B", "BBBB "];
    db['c'] = [" CCC ", "C   C", "C    ", "C    ", "C    ", "C   C", " CCC "];
    db['d'] = ["DDDD ", "D   D", "D   D", "D   D", "D   D", "D   D", "DDDD "];
    db['e'] = ["EEEEE", "E    ", "E    ", "EEEEE", "E    ", "E    ", "EEEEE"];
    db['f'] = ["FFFFF", "F    ", "F    ", "FFFFF", "F    ", "F    ", "F    "];
    db['g'] = [" GGG ", "G   G", "G    ", "G GGG", "G   G", "G   G", " GGG "];
    db['h'] = ["H   H", "H   H", "H   H", "HHHHH", "H   H", "H   H", "H   H"];
    db['i'] = ["IIIII", "  I  ", "  I  ", "  I  ", "  I  ", "  I  ", "IIIII"];
    db['j'] = ["JJJJJ", "    J", "    J", "    J", "    J", "    J", "JJJJ "];
    db['k'] = ["K   K", "K  K ", "K K  ", "KK   ", "K K  ", "K  K ", "K   K"];
    db['l'] = ["L    ", "L    ", "L    ", "L    ", "L    ", "L    ", "LLLLL"];
    db['m'] = ["M   M", "MM MM", "M M M", "M   M", "M   M", "M   M", "M   M"];
    db['n'] = ["N   N", "NN  N", "N   N", "N N N", "N   N", "N  NN", "N   N"];
    db['o'] = [" OOO ", "O   O", "O   O", "O   O", "O   O", "O   O", " OOO "];
    db['p'] = ["PPPP ", "P   P", "P   P", "PPPP ", "P    ", "P    ", "P    "];
    db['q'] = [" QQQ ", "Q   Q", "Q   Q", "Q   Q", "Q Q Q", "Q  QQ", " QQQQ"];
    db['r'] = ["RRRR ", "R   R", "R   R", "RRRR ", "R R  ", "R  R ", "R   R"];
    db['s'] = [" SSS ", "S   S", "S    ", " SSS ", "    S", "S   S", " SSS "];
    db['t'] = ["TTTTT", "  T  ", "  T  ", "  T  ", "  T  ", "  T  ", "  T  "];
    db['u'] = ["U   U", "U   U", "U   U", "U   U", "U   U", "U   U", " UUU "];
    db['v'] = ["V   V", "V   V", "V   V", "V   V", "V   V", " V V ", "  V  "];
    db['w'] = ["W   W", "W   W", "W   W", "W W W", "W W W", "W W W", " W W "];
    db['x'] = ["X   X", "X   X", " X X ", "  X  ", " X X ", "X   X", "X   X"];
    db['y'] = ["Y   Y", "Y   Y", " Y Y ", "  Y  ", "  Y  ", "  Y  ", "  Y  "];
    db['z'] = ["ZZZZZ", "    Z", "   Z ", "  Z  ", " Z   ", "Z    ", "ZZZZZ"];
    db['space'] = ["     ", "     ", "     ", "     ", "     ", "     ", "     "];

    input = input.trim().toLowerCase();

    if (!input) return "";

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[j] === " ") {
                result += db['space'][i];
            }
            else {
                result += db[input[j]][i];
            }

            if (j !== input.length - 1) {
                result += " ";
            } else {
                result = result.trimEnd();
            }
        }

        if (i !== 6) result += "\n";
    }

    return result;
}

console.log(blockPrint(""))