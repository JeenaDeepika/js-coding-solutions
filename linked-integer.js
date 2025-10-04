const getDecimalValue = function(head) {
    let num = 0;
    while (head !== null) {
        num = num * 2 + head.val;
        head = head.next;
    }
    return num;
};
