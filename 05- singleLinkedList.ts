//! 05 – Linked List – Introduction – Singly list implementation
//! Single Linked List
//! Infrastructure:
// independent Nonconsecutive memory stores

//! Operations:
// get length

// traverse
// find

// insert first
// delete first
// insert last
// delete last
// insert after
// insert before
//!----------------------------------------------------------------------------------------------------------------

//! Name: insert last

//! Assumptions:
// -

//! Inputs:
// - new data

//! Processes:
// - validations

// create new node
// if list is empty
//     - make head and tail is the new node
// else
//     - make tail next is the new node
//     - make tail is the new node

//! Outputs:
// - nothing


//! Implementation:
class LinkedListNode {
  public data: number;
  public next!: LinkedListNode;

  constructor(_data: number) {
    this.data = _data
  }
}

class LinkedListIterator {
  private currentNode!: LinkedListNode;

  constructor(node: LinkedListNode) {
    this.currentNode = node
  }

  public data(): number {
    return this.currentNode.data
  }

  public next(): LinkedListIterator {
    this.currentNode = this.currentNode.next;
    return this;
  }

  public current(): LinkedListNode {
    return this.currentNode;
  }

}


class LinkedList {
  private length: number = 0;
  public head: LinkedListNode | null = null;
  public tail: LinkedListNode | null = null;

  public addHead(node: LinkedListNode) {
    this.head = node;
    this.tail = node
  }

  public insertLast(data: number) {
    let newNode: LinkedListNode = new LinkedListNode(data)
    if (this.head == null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  public insertAfter(node: LinkedListNode, data: number) {
    let newNode: LinkedListNode = new LinkedListNode(data);
    newNode.next = node.next;
    node.next = newNode
    if (newNode.next == null) {
      this.tail = newNode
    }
    this.length++;
  }

  public deleteNode(node: LinkedListNode) {
    if (this.head == this.tail) {
      this.head = null;
      this.tail = null
    } else if (this.head == node) {
      this.head == node.next
    } else {
      let parentNode: LinkedListNode = this.findParent(node) as LinkedListNode;
      if (this.tail == node) {
        this.tail = parentNode
      } else {
        parentNode!.next = node.next
      }
    }
    this.length--;
  }

  public DeleteNode(data: number) {
    let node: LinkedListNode = this.find(data) as unknown as LinkedListNode;
    if (node == null) return;

    this.deleteNode(node)
  }

  public deleteHead() {
    if (this.head == null) return;
    this.deleteNode(this.head)
  }

  public insertBefore(node: LinkedListNode, data: number) {
    let newNode: LinkedListNode = new LinkedListNode(data);
    newNode.next = node;

    let parentNode: LinkedListNode = this.findParent(node) as LinkedListNode;
    if (parentNode == null) {
      this.head = newNode
    } else {
      parentNode.next = newNode;
    }
    this.length++;
  }

  public find(data: number): number {
    let sum: number = 0
    for (let itr: LinkedListIterator = this.begin(); itr.current() != null; itr.next()) {
      sum += itr.data()
    }
    return sum;
  }

  public findParent(node: LinkedListNode): LinkedListNode | null {
    for (let itr: LinkedListIterator = this.begin(); itr.current() != null; itr.next()) {
      if (itr.current().next == node) {
        return itr.current();
      }
    }
    return null;
  }

  public getLengthItr() {
    let count: number = 0;
    for (let itr: LinkedListIterator = this.begin(); itr.current() != null; itr.next()) {
      count++;
    }
    return count;
  }

  public Length(): number {
    return this.length;
  }

  public printList() {
    for (let itr: LinkedListIterator = this.begin(); itr.current() != null; itr.next()) {
      console.log(itr.data() + " -> ")
    }
    console.log('\n')
  }

  public sum(): number {
    let sum: number = 0;
    for (let itr: LinkedListIterator = this.begin(); itr.current() != null; itr.next()) {
      sum += itr.data();
    }
    return sum;
  }

  public begin(): LinkedListIterator {
    let itr: LinkedListIterator = new LinkedListIterator(this.head!)
    return itr;
  }
}
let list: LinkedList = new LinkedList();
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
console.log(list.sum());
list.printList();

// list.insertAfter(list.find(2), 98);
// list.printList();

// list.deleteNode(list.find(2));
// list.printList();

// list.insertBefore(list.find(98), 76);
// list.printList();

// list.deleteNode(list.find(1));
// list.printList()