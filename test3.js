function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    const result = new ListNode(null);
    let curr = result;
    let save = 0;

    while (l1?.val || l2?.val || save) {
        let sum = save;

        if (l1?.val && l2?.val) {
            sum += l1.val + l2.val;
            l1 = l1.next;
            l2 = l2.next;
        } else {
            if (l1?.val) {
                sum += l1.val;
                l1 = l1.next;
            } else {
                if (l2?.val) {
                    sum += l2.val;
                    l2 = l2.next;
                } else {
                    sum = save;
                    save = 0;
                }
            }
        }

        if (sum >= 10) {
            save = sum - 9;
            sum -= 10;
        }

        curr.next = new ListNode(sum);
        curr = curr.next;
    }

    return result.next;
};

const node1 = new ListNode(4, null)
const node2 = new ListNode(6, node1);
const node6 = new ListNode(5, node1);

const node3 = new ListNode(3, null);
const node4 = new ListNode(4, node3);
const node5 = new ListNode(2, node4);

console.log(addTwoNumbers(node6, node5))