class CustomArray {
  constructor (length) {
    this.items = new Array(length)
    this.count = 0;
  }

  print () {
    for (let i = 0; i < this.count; i++) 
      console.log(this.items[i])
  }

  resize () {
    let newItems = new Array (this.count * 2)
    for (let i = 0; i < this.count; i++) 
      newItems[i] = this.items[i]

    return newItems
  }
  insert (item) {
    if (this.items.length == this.count) {
      this.items = this.resize()
    }
    this.items[this.count++] = item
  }

  removeAt(index) {
    // throw error if invalid index - done
    // delete item at index by:
    // moving the next items to 
    // cover each other up and fill up space made by removal

    if (index < 0 || index >= this.count) 
       throw new Error('Illegal Arguement Exception');

    for (let i = index; i < this.count; i++) 
      this.items[i] = this.items[i + 1];

    this.count--;

  }

  indexOf(item) {
    for (let i = 0; i < this.count; i++) {
      if (this.items[i] == item) return i     
    }
    return -1
  }

  getMax () {
    let max = this.items[0];
    for (let i = 0; i < this.count; i++) 
      if (this.items[i] > max) max = this.items[i]
    return max;
  }

  intersect (otherArray) {
    let commonItems = []
    for (let i = 0; i < this.count; i++) {
      for (let j = 0; j < otherArray.count; j++) {
        if (this.items[i] == otherArray.items[j])
          commonItems.push(this.items[i])
      }
    }
    return commonItems
  }

  reverse () {
    let reversedItems = new Array(this.count)
    let lastCharIndex = this.count -1 
    for (let i = 0; i < this.count; i++) 
      reversedItems[i] = this.items[lastCharIndex - i]
    
    this.items = reversedItems
  }

  insertAt (index, item) {
    // if index is last position, run insert()
    // throw if invalid index
    // if arr is full, resize
    // push items from index to right
    // increase count
    if (index == this.count - 1) return this.insert(item)
    
    if (index < 0 || index >= this.count) 
    throw new Error('Illegal Arguement Exception');

    if (this.items.length == this.count) 
      this.items = this.resize()
    
    for (let i = this.count; i >= index ; i--) 
      this.items[i] = this.items[i - 1];

    this.items[index] = item
    this.count++;
  
  }
}
let customArray = new CustomArray(2)
let customArray2 = new CustomArray(2)
customArray.insert(10)
customArray.insert(20)
customArray.insert(30)
customArray.insert(40)
customArray.insert(70)

customArray2.insert(30)
customArray2.insert(10)

customArray.intersect(customArray2)

// customArray.reverse()

customArray.insertAt(3, 50)
customArray.print()