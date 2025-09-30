// Definition for a Linked List node
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
import { ListNode } from "./ds_v1/LinkedList.js";

function removeNthLastNode(head, n) {
  let depth = 0;
  let lead = head; // This will advance n+1 steps ahead
  let prevToRemove = null; // This will point to the node previous to the one to remove

  // First, advance `lead` while counting steps up to n+1
  while (lead && prevToRemove === null) {
    depth++;
    lead = lead.next;
    // After advancing n+1 steps set prevToRemove=head to create the gap
    if (depth === n + 1) {
      prevToRemove = head;
    }
  }

  // If prevToRemove is null: n > length (invalid) => return head;
  // if depth === n then remove head by returning head.next
  if (prevToRemove === null) {
    if (depth < n) return head;
    return head.next;
  }

  // Now advance both lead and prevToRemove until lead reaches the end
  while (lead) {
    lead = lead.next;
    prevToRemove = prevToRemove.next;
  }

  // Now prevToRemove points to the node before the one to remove
  if (prevToRemove && prevToRemove.next) {
    prevToRemove.next = prevToRemove.next.next;
  }

  return head;
}
export { removeNthLastNode };
