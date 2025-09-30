// Definition for a Linked List node
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
import { ListNode } from "./ds_v1/LinkedList.js";

function removeNthLastNode(head, n) {
  let depth = findDepth(head);
  let current = head;

  // If we need to remove the head node
  if (depth === n) {
    head = head.next;
  } else {
    let targetIndex = depth - n;
    current = head;
    let index = 0;

    while (current) {
      if (index === targetIndex) {
        current.next = current.next ? current.next.next : null;
        break;
      }
      current = current.next;
      index++;
    }
  }

  return head;
}

function findDepth(node) {
  let depth = 0;
  while (node) {
    depth++;
    node = node.next;
  }
  return depth;
}

export { removeNthLastNode };
