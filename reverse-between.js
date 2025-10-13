const reverseBetween = function(head, left, right) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;
    for (let i = 0; i < left - 1; i++) {
        pre = pre.next;
    }
    const start = pre.next;
    for (let i = 0; i < right - left; i++) {
        const temp = start.next; 
        start.next = temp.next;
        temp.next = pre.next;
        pre.next = temp;
    }
    return dummy.next;
};
