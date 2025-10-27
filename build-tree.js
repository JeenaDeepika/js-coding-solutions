const buildTree = function(preorder, inorder) {
    const inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }
    let preorderIndex = 0;
    function build(inStart, inEnd) {
        if (inStart > inEnd) {
            return null;
        }
        const rootValue = preorder[preorderIndex];
        const root = new TreeNode(rootValue);
        preorderIndex++;
        const rootInorderIndex = inorderMap.get(rootValue);
        root.left = build(inStart, rootInorderIndex - 1);
        root.right = build(rootInorderIndex + 1, inEnd);
        return root;
    }
    return build(0, inorder.length - 1);
};
