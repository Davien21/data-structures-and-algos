class Node {
  constructor (value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor () {
    this.first;
    this.last;
    this.size = 0;
  }

  isEmpty () {
    return this.first == null
  }
  addFirst (item) {
    // make new node
    // if list is empty, first = last node
    // else set first node to new node and next to former first
    let node = new Node(item)
    if (this.isEmpty()) 
      this.first = this.last = node
    else {
      node.next = this.first
      this.first = node;
    }

    this.size++;
  }

  addLast (item) {
    // make node and handle if empty
    // set last node next to new last
    // increase size
    let node = new Node(item)
    if (this.isEmpty()) 
      this.first = this.last = node
    else {
      this.last.next = node
      this.last = node;
    } 
    this.size++;
  }

  removeFirst () {
    // if empty throw err - no such element
    // if just one, first = last = null
    // else set first to next node
    if (this.isEmpty()) 
      throw new Error('no such element')

    if (this.first == this.last) 
      first = last = null 
    else {
      let second = this.first.next
      this.first.next = null
      this.first = second
    }
    
    
  }
}