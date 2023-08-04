const fs = require('fs');
eval(fs.readFileSync('k.js')+'');

const lines = (fs.readFileSync('26.input.txt', 'utf-8')).split('\n');
if (lines[0].trim() === "sort") {
	const n = parseInt(lines[1], 10);
	const a = []
	const values = lines[2].trim().split(' ');
	for (let i = 0; i < n; i++) {
		a.push(parseInt(values[i], 10))
	}
	merge_sort(a, 0, n)
	console.log(a.join(' '))
} else {
	const n = parseInt(lines[1], 10);
	const values_a = lines[2].trim().split(' ');
	const m = parseInt(lines[3], 10);
	const values_b = lines[4].trim().split(' ');
	const a = [];
	for (let i = 0; i < n; i++) {
		a.push(parseInt(values_a[i], 10));
	}
	for (let i = 0; i < m; i++) {
		a.push(parseInt(values_b[i], 10));
	}
	const c = merge(a, 0, n, n + m);
	// console.log(c.join(' '))
	// let tmp = a.slice(0, n);
	// console.log(tmp.join(' '));
	tmp = a.slice(n, n + m);
	console.log(tmp.join(' '));
}