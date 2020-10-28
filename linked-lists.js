const { LinkedList } = require('buckets-js')

let list = LinkedList();
list.add(10)
list.add(20)
list.add(30)
console.log(list.toArray())
console.log(list.size())
console.log(list.contains(10))
console.log(list.indexOf(10))