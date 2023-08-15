function f(a) {
    console.log(a)
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

function throttle(f, ms) {
    let check = false
    let saveArgs;
    let saveThis;

    function wrap() {
        if (check) {
            saveArgs = arguments;
            saveThis = this;
            return;
        }

        f.apply(this, arguments);
        check = true;

        setTimeout(() => {
            check = false;
            f.apply(saveThis, saveArgs);
            saveThis = null;
            saveArgs = null;
        }, ms)
    }

    return wrap;
}