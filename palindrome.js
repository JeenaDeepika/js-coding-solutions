/*
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
    if (!head || !head.next) {
        return true;
    }
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let prev = null;
    let curr = slow;
    while (curr) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    let secondHalfHead = prev;
    let p1 = head;
    let p2 = secondHalfHead;
    while (p2) {
        if (p1.val !== p2.val) {
            return false;
        }
        p1 = p1.next;
        p2 = p2.next;
    }
    return true;
};
