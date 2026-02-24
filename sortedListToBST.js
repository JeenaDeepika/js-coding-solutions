const sortedListToBST = function(head) {
    let size = 0;
    let curr = head;
    while (curr) {
        size++;
        curr = curr.next;
    }
    curr = head;
    const convert = (n) => {
        if (n <= 0) return null;
        const left = convert(Math.floor(n / 2));
        const root = new TreeNode(curr.val);
        root.left = left;
        curr = curr.next;
        root.right = convert(n - Math.floor(n / 2) - 1);
        return root;
    };
    return convert(size);
};
