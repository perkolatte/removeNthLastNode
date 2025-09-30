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
  let current = head;
  let potentialNodeToRemovePrev = null;

  // First, calculate the depth of the linked list
  while (current && potentialNodeToRemovePrev === null) {
    depth++;
    current = current.next;
    if (depth === n + 1) {
      potentialNodeToRemovePrev = head;
    }
  }

  // If we never set potentialNodeToRemovePrev, we're removing the head
  if (potentialNodeToRemovePrev === null) {
    return head.next;
  }

  while (current) {
    current = current.next;
    potentialNodeToRemovePrev = potentialNodeToRemovePrev.next;
  }

  // Remove the nth node from the end
  if (potentialNodeToRemovePrev && potentialNodeToRemovePrev.next) {
    potentialNodeToRemovePrev.next = potentialNodeToRemovePrev.next.next;
  }

  return head;
}
export { removeNthLastNode };
