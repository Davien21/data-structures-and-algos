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

  reverse () {
    let previous = this.first
    let current = this.first.next

    while (current != null) {
      var next = current.next;
      current.next = previous;
      previous = current
      current = next;
    }
    this.last = this.first;
    this.last.next = null
    this.first = previous
  }

  getKthNodeFromTheEnd (k) {
    let a = this.first
    let b = this.first
    if (this.isEmpty()) throw new Error('no such element')

    for(let i = 0; i < k - 1; i++) {
      b = b.next
      if (b == null) throw new Error('no such element')
    }
    
    while (b != this.last) {
      a = a.next
      b = b.next
    }
    return a.value
  }
  
  printMiddle () {
    let a = this.first, b = this.first
    if (b == null) throw new Error('no such element')
    
    while (b != this.last && b.next != this.last) {
      b = b.next.next
      a = a.next
    }
    if (b == this.last) return a.value
    return [a.value, a.next.value]
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
// list.reverse()
console.log(
list.toArray())
list.indexOf(30)

console.log(
  list.getKthNodeFromTheEnd(-1)
)

 