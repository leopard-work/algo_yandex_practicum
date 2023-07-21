const merge = ss => {
    ss = ss.sort((a, b) => a.start - b.start)
    let c = ss.shift()
    const m = [c]
    console.log(m)
    ss.forEach(s => (s.start <= c.end) ? (s.end > c.end) && (c.end = s.end) : m.push(c = s))
    return m
}

console.log(merge([
    { start: 7, end: 8 },
    { start: 7, end: 8 },
    { start: 2, end: 3 },
    { start: 6, end: 10 }
]))