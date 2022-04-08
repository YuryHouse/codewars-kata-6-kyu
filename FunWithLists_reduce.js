Implement the method reduce, which accepts three arguments:

linked list (head)
bi-function - (accumulated_value, current_element_data)
initial value
This method should return the result of applying the given function on every element with the accumulating result, starting with the initial value.

For example:

Given the list: 1 -> 2 -> 3, the function (acc, curr) => acc + curr and an initial value of 0, reduce should return 6, because:

(0, 1) and the function (acc, curr) => acc + curr gives 1
(1, 2) and the function (acc, curr) => acc + curr gives 3
(3, 3) and the function (acc, curr) => acc + curr gives 6
Another example:

Given the list: 1 -> 2 -> 3 -> 4, the function (acc, curr) => acc * curr and an initial value of 1, reduce should return 24

The linked list is defined as follows:

function Node(data, next = null) {
  this.data = data;
  this.next = next;
}
Note: the list may be null and can hold any type of value.

Good luck!

This kata is part of fun with lists series:

Fun with lists: length
Fun with lists: indexOf
Fun with lists: lastIndexOf
Fun with lists: countIf
Fun with lists: anyMatch + allMatch
Fun with lists: filter
Fun with lists: map
Fun with lists: reduce

function reduce(head, f, init) {
  return head ? reduce(head.next, f, f(init, head.data)) : init;
}
