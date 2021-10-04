/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (this.head !== null) newNode.next = this.head;
    this.head = newNode;
    if (this.tail === null) this.tail = this.head;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.head === null) throw "empty list";
    let current = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return current.val;
    }
    while (current.next !== this.tail) {
      current = current.next;
    }
    const last = current.next;
    current.next = null;
    this.tail = current;
    this.length -= 1;
    return last.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.head === null) throw "empty list";
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.head = oldHead.next;
      this.length -= 1;
    }
    return oldHead.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.head === null) throw "empty list";
    let index = 0;
    let current = this.head;
    while (current !== null) {
      if (index === idx) return current.val;
      current = current.next;
      index += 1;
    }
    throw "invalid index";
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let index = 0;
    let current = this.head;
    while (current !== null) {
      if (index === idx) {
        current.val = val;
        return;
      }
      current = current.next;
      index += 1;
    }
    throw "invalid index";
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length = 1;
      return;
    }
    let index = 0;
    let current = this.head;
    while (current !== null) {
      if (index === idx - 1) {
        if (idx === this.length) {
          newNode.next = null;
          this.tail = newNode;
        } else {
          newNode.next = current.next;
        }
        current.next = newNode;
        this.length += 1;
        return;
      } else {
        current = current.next;
        index += 1;
      }
    }
    throw "invalid index";
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.head === null) throw "empty list";
    if (idx === 0) {
      const oldHead = this.head;
      this.head = oldHead.next;
      if (this.length === 1) this.tail = null;
      this.length -= 1;
      return oldHead.val;
    }
    let index = 0;
    let current = this.head;
    while (current !== null) {
      if (index === idx - 1) {
        toRemove = current.next;
        if (idx === this.length) {
          current.next = null;
          this.tail = current;
        } else {
          current.next = toRemove.next;
        }
        this.length -= 1;
      }
    }
    throw "invalid index";
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.head === null) return 0;
    let current = this.head;
    let sum = 0;
    let count = 0;
    while (current !== null) {
      sum += current.val;
      count += 1;
      current = current.next;
    }
    return sum / count;
  }
}

module.exports = LinkedList;
