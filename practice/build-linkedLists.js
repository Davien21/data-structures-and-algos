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
    // else store second node and redo ref
    if (this.isEmpty()) 
      throw new Error('no such element')

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
    // if empty throw err - no such element
    // if just one, first = last = null
    // traverse to find penultimate node and redo refs
    // else store second node and redo ref
    if (this.isEmpty()) 
      throw new Error('no such element')

    if (this.first == this.last) 
      first = last = null 

    let previous = this.getPrevious(this.last);
    this.last = previous;
    this.last.next = null; 

    this.size++
  }
  
  getPrevious(node) {
    while (current != null) {
      if (current.next == node) return current
      current = current.next
    }
  }

  contains (item) {
    return this.indexOf(item) != -1
  }

  indexOf (item) {
    let index = 0; 
    let current = this.first
    while (current != null) {
      if (current.value == item) return index
      index++
    }
    return -1
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

  reverse () {
    if (this.isEmpty()) return 

    let storedReverse = this.first, prev, current = this.first;
    
    while (current.next != null) { //ignore the last node
      if (current == this.first) storedReverse = new Node(current.value); 
      prev = storedReverse 
      
      storedReverse = new Node(current.next.value, prev);  
      
      current = current.next
    }
    this.last = this.first
    this.last.next = null
    this.first = storedReverse 
  }
}

let list = new LinkedList()
list.addLast(10)
list.addLast(20)
list.addLast(30)
list.addLast(40)
list.addLast(50)
list.addLast(60)
list.addLast(70)
list.addLast(80)
list.addLast(90)
list.reverse()
console.log(list.toArray())
list.reverse()
console.log(list.toArray())
list.reverse()
console.log(list.toArray())
 