const sumRootToLeaf = function(root) {
    const dfs = (node, currentVal) => {
        if (!node) return 0;
        currentVal = (currentVal << 1) | node.val;
        if (!node.left && !node.right) {
            return currentVal;
        }
        return dfs(node.left, currentVal) + dfs(node.right, currentVal);
    };

    return dfs(root, 0);
};
