// Definition for a Linked List node
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
import { ListNode } from "./ds_v1/LinkedList.js";

function removeNthLastNode(head, n) {
  if (!head || n <= 0) return head;

  // Anchor node before head (avoids special-case removal of head)
  // Create anchor and set next explicitly to be robust if ListNode
  // constructor doesn't accept a `next` argument.
  const anchor = new ListNode(0);
  anchor.next = head;
  let lead = anchor;
  let trail = anchor;

  // Advance lead n+1 steps ahead; if n > length, return original head
  for (let i = 0; i <= n; i++) {
    lead = lead.next;
    if (!lead && i < n) return head;
  }

  // Move both pointers until lead reaches the end
  while (lead) {
    lead = lead.next;
    trail = trail.next;
  }

  // Remove the nth node from the end
  if (trail.next) trail.next = trail.next.next;

  return anchor.next;
}
export { removeNthLastNode };
