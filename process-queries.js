const processQueries = function(c, connections, queries) {
    const parent = Array.from({length: c + 1}, (_, i) => i)
    const find = x => parent[x] === x ? x : parent[x] = find(parent[x])
    const union = (a, b) => parent[find(a)] = find(b)
    for (const [u, v] of connections) union(u, v)

    const groups = {}
    for (let i = 1; i <= c; i++) {
        const p = find(i)
        if (!groups[p]) groups[p] = new Set()
        groups[p].add(i)
    }

    const online = new Set(Array.from({length: c}, (_, i) => i + 1))
    const result = []
    for (const [type, x] of queries) {
        if (type === 1) {
            if (online.has(x)) result.push(x)
            else {
                const p = find(x)
                const candidates = [...groups[p]].filter(v => online.has(v))
                result.push(candidates.length ? Math.min(...candidates) : -1)
            }
        } else {
            online.delete(x)
        }
    }
    return result
}



