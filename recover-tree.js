const recoverTree = function(root) {
    let first = null; 
    let second = null; 
    let prev = null; 
    const stack = [];
    let current = root;
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        if (prev && prev.val > current.val) {
            if (!first) {
                first = prev; 
            }
            second = current; 
        }
        prev = current;
        current = current.right;
    }
    if (first && second) {
        const temp = first.val;
        first.val = second.val;
        second.val = temp;
    }
};
