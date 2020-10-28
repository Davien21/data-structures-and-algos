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
    this.size = 0;
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
    this.size++;
  }

  addLast (item) {
    let node = new Node(item);

    if (this.isEmpty()) 
      this.first = this.last = node
    else {
      this.last.next = node
      this.last = node
    }
    this.size++;


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
 
  removeFirst () {
    if (this.isEmpty()) throw new Error('no such element')
    if (this.first == this.last) 
      first = last = null 
    else {
      let second = this.first.next
      this.first.next = null
      this.first = second
    }

    this.size--;
  }

  removeLast () {
    if (this.isEmpty()) throw new Error('no such element')
    if (this.first == this.last) 
      first = last = null 
    else {
      let previous = this.getPrevious(this.last);
      this.last = previous;
      this.last.next = null
    }

    this.size--;
  }

  length () {
    return this.size;

  }

  getPrevious (node) {
    let current = this.first;
    while(current != null) {
      if (current.next == node) return current;
      current = current.next;
    }
    return null;
  }

  toArray () {
    let arr = []
    let current = this.first
    while (current != null) {
      arr.push(current.value)
      current = current.next
    }
    return arr
  }
  

}

let list = new LinkedList()
list.addLast(10)
list.addLast(20)
list.addLast(30)
list.removeLast()
list.toArray()
list.indexOf(30)
 