const buildTree = function(inorder, postorder) {
    const inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }
    let postorderIndex = postorder.length - 1;
    function build(inStart, inEnd) {
        if (inStart > inEnd) {
            return null;
        }
        const rootValue = postorder[postorderIndex];
        const root = new TreeNode(rootValue);
        postorderIndex--;
        const rootInorderIndex = inorderMap.get(rootValue);
        root.right = build(rootInorderIndex + 1, inEnd);
        root.left = build(inStart, rootInorderIndex - 1);
        return root;
    }
    return build(0, inorder.length - 1);
};
