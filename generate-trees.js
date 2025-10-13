const generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    return generate(1, n);
};
const generate = (start, end) => {
    if (start > end) {
        return [null];
    }
    if (start === end) {
        return [new TreeNode(start)];
    }
    const allTrees = [];
    for (let i = start; i <= end; i++) {
        const leftSubtrees = generate(start, i - 1);
        const rightSubtrees = generate(i + 1, end);
        for (const left of leftSubtrees) {
            for (const right of rightSubtrees) {
                const root = new TreeNode(i);
                root.left = left;
                root.right = right;
                allTrees.push(root);
            }
        }
    }

    return allTrees;
};
