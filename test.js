class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
        this.current = null;
    }
}

function Queue() {
    this.node = null;
    this.size = 0;
}

Queue.prototype.put = function (item) {
    if (!this.size) {
        this.node = new Node(item);
        this.current = this.node;
    }
    else {
        this.current.next = new Node(item);
        this.current = this.current.next;
    }
    this.size++;
}

Queue.prototype.getSize = function() {
    return this.size;
}

Queue.prototype.get = function() {
    if (!this.size) return 'error';
    console.log(this.node)
    const res = this.node.value;
    if (this.size !== 1) this.node = this.node.next;
    else this.node = null;
    this.size--;
    return res;
}

//const commandsArr = ['get','size','size','get','size','size','put 26','size','size','size','size','put 6','size','put 18','size','get','get','size','get','get','size','size','size','get','size','size'];
const commandsArr = ['put 1','put 2','put 3','get','get','put 4','get','get','get']
const result = [];
const myQueue = new Queue();
commandsArr.forEach(el => {
    let commands = el.split(' ');
    if (commands[0] === 'put') myQueue.put(Number(commands[1]));
    if (commands[0] === 'get') {
        const tmp = myQueue.get();
        if (tmp === 'error') result.push(tmp);
        else result.push(Number(tmp));
    }
    if (commands[0] === 'size') {
        result.push(myQueue.getSize());
    }
})

console.log(result)