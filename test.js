class StackMax {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.items.length) return 'error';
        else this.items.pop();
    }

    get_max() {
        if (!this.items.length) return 'None';
        return Math.max.apply(null, this.items);
    }
}

const commandsArr = ['get_max','push 0','get_max','get_max'];
const result = [];
const stack = new StackMax();
commandsArr.forEach(el => {
    let commands = el.split(' ');
    if (commands[0] === 'push') stack.push(Number(commands[1]));
    if (commands[0] === 'pop') {
        const tmp = stack.pop();
        if (tmp) result.push(tmp);
    }
    if (commands[0] === 'get_max') {
        const tmp = stack.get_max();
        result.push(tmp);
    }
})

console.log(result)