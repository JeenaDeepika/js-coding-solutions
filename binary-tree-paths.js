const binaryTreePaths = function(root) {
    const paths = [];
    const dfs = (node, currentPath) => {
        if (node === null) {
            return;
        }
        const newPath = currentPath === "" ? 
                        String(node.val) : 
                        currentPath + "->" + String(node.val);
        if (node.left === null && node.right === null) {
            paths.push(newPath);
            return;
        }
        dfs(node.left, newPath);
        dfs(node.right, newPath);
    };
    dfs(root, "");
    return paths;
};
