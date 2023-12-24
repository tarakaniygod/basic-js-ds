const { NotImplementedError } = require('../extensions/index.js');

// Import the ListNode class
const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {ListNode} l - Head of the linked list
 * @param {Number} k - Value to be removed
 * @return {ListNode} - Head of the modified linked list
 */
function removeKFromList(l, k) {
  if (!l) {
    return null;
  }

  const dummy = new ListNode(0);
  dummy.next = l;

  let current = dummy;

  while (current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
}

module.exports = {
  removeKFromList
};
