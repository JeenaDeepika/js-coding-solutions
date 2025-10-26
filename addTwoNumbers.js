const addTwoNumbers = function(l1, l2) {
        let exmple = new ListNode(0);
    let first = exmple;
    let second = 0;
    while (l1 !== null || l2 !== null) {
        let x = l1 ? l1.val : 0;
        let y = l2 ? l2.val : 0;
        let sum = x + y + second;
        second = Math.floor(sum / 10);
        first.next = new ListNode(sum % 10);
        first = first.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (second > 0) {
        first.next = new ListNode(second);
    }
    return exmple.next;
};
