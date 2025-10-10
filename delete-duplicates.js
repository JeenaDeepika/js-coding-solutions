const deleteDuplicates = function(head) {
    if (!head) return null;
    let dummy = new ListNode(0, head);
    let prev = dummy;
    let current = head;
    while (current) {
        if (current.next && current.val === current.next.val) {
            while (current.next && current.val === current.next.val) {
                current = current.next;
            }
            prev.next = current.next;
        } else {
            prev = prev.next;
        }
        current = current.next;
    }

    return dummy.next;
};
