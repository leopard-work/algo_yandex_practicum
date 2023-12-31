// Замыкания — это одна из фундаментальных концепций JavaScript, вызывающая сложности у многих новичков, знать и понимать которую должен каждый JS-программист. Хорошо разобравшись с замыканиями, вы сможете писать более качественный, эффективный и чистый код. А это, в свою очередь, будет способствовать вашему профессиональному росту.
//
// function sum(a, b = 0) {
//     if (!a) return b;
//
//     b = b + a;
//
//     return function (a) {
//         return sum(a,b);
//     }
// }
//
// function sum(a) {
//     let currentSum = a;
//
//     function f(b) {
//         currentSum += b;
//         return f;
//     }
//
//     f.toString = function () {
//         return currentSum;
//     };
//
//     return f;
// }
//
//
// function foo(value) {
//     var acc = value;
//     function addNext(next) {
//         acc += next;
//         return addNext;
//     }
//     addNext.toString = addNext.valueOf = function() {
//         return acc;
//     }
//     return addNext;
// }
//
// console.log(sum(1)(2)(3))
// alert(sum(1)(2)(3));
//
//
// Область видимости — это часть программы, в которой мы можем обратиться к переменной, функции или объекту. Этой частью может быть функция, блок или вся программа в целом — то есть мы всегда находимся как минимум в одной области видимости.
//
//     (function foo() {
//         // ...Тело функции
//     })()
//
// var a
//
// function scope() {
//     a = 42
//     var b = 43
// }
//
// scope()
// console.log(b)
//
//
// Event Loop? Или как устроен цикл событий
// https://learn.javascript.ru/event-loop
//
// throttle и debounce
// Декоратор получает функцию и возвращает обёртку, которая делает что-то своё «вокруг» вызова основной функции.
// Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.
//
// throttle
//
// function f(a) {
//     console.log(a)
// }
//
// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);
//
// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)
//
// function throttle(func, ms) {
//
//     let isThrottled = false,
//         savedArgs,
//         savedThis;
//
//     function wrapper() {
//
//         if (isThrottled) { // (2)
//             savedArgs = arguments;
//             savedThis = this;
//             return;
//         }
//
//         func.apply(this, arguments); // (1)
//
//         isThrottled = true;
//
//         setTimeout(function() {
//             isThrottled = false; // (3)
//             if (savedArgs) {
//                 wrapper.apply(savedThis, savedArgs);
//                 savedArgs = savedThis = null;
//             }
//         }, ms);
//     }
//
//     return wrapper;
// }
//
// Вызов throttle(func, ms) возвращает wrapper.
//
//     Во время первого вызова обёртка просто вызывает func и устанавливает состояние задержки (isThrottled = true).
//     В этом состоянии все вызовы запоминаются в saveArgs / saveThis. Обратите внимание, что контекст и аргументы одинаково важны и должны быть запомнены. Они нам нужны для того, чтобы воспроизвести вызов позднее.
// … Затем по прошествии ms миллисекунд срабатывает setTimeout. Состояние задержки сбрасывается (isThrottled = false). И если мы проигнорировали вызовы, то «обёртка» выполняется с последними запомненными аргументами и контекстом.
//     На третьем шаге выполняется не func, а wrapper, потому что нам нужно не только выполнить func, но и ещё раз установить состояние задержки и таймаут для его сброса.
//
//
// debounce
// debounce() — это функция, которая «откладывает» вызов другой функции до того момента, когда с последнего вызова пройдёт определённое
//
// let f = debounce(alert, 1000);
//
// f(1); // выполняется немедленно
// f(2); // проигнорирован
//
// setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => f(4), 1100); // выполняется
// setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
//
// function debounce(f, ms) {
//
//     let isCooldown = false;
//
//     return function() {
//         if (isCooldown) return;
//
//         f.apply(this, arguments);
//
//         isCooldown = true;
//
//         setTimeout(() => isCooldown = false, ms);
//     };
//
// }
//
//
// мемо

// function memoize(fn){
//     const cache = {}
//     return function(param){
//         if(cache[param]){
//             console.log('cached')
//             return cache[param]
//         } else{
//             let result = fn(param)
//             cache[param] = result
//             console.log('not cached')
//             return result
//         }
//     }
// }
//
// const toUpper = (str = '') => str.toUpperCase()
//
// const toUpperMemoized = memoize(toUpper)
//
// toUpperMemoized('abcdef')
// toUpperMemoized('abcdef') // не выполнится
