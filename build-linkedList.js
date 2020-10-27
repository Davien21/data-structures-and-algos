class Node {
  constructor (value, next = null) {
    this.value = value;
    this.next;
  }
}


class LinkedList {
  constructor () {
    this.first
    this.last
  }
  isEmpty () {
    return this.first == null
  }

  addFirst (item) {
    let node = new Node(item)
    if (this.isEmpty()) 
      this.first = this.last = node
    else {
      node.next = this.first
      this.first = node
    }
     
  }

  addLast (item) {
    let node = new Node(item);

    if (this.isEmpty()) 
      this.first = this.last = node
    else {
      this.last.next = node
      this.last = node
    }

  }

  indexOf (item) {
    let index = 0;
    let current = this.first;
    while(current != null) {
      if (current.value == item) return index
      current = current.next;
      index++;
    }
    return -1
  }

  contains (item) {
    let current = this.first;
    while(current != null) {
      if (current.value == item) return true
      current = current.next;
    }
    return false
  }
 
}

let list = new LinkedList()
list.addLast(10)
list.addLast(20)
list.addLast(30)

list.indexOf(40)
 