class Main {
	constructor () { 
    this.items = []
    this.count = this.items.length;
  }

  print () {
    for (let i = 0; i < this.count; i++) {
      console.log(this.items[i])
      
    }
  }
  insert (item) {
    if (this.items.length == this.count) {
      let newItems = new Array(this.count * 2)

      for (let i = 0; i < this.count; i++) 
        newItems[i] = this.items[i];
      
      this.items = newItems
    }
    this.items[this.count++] = item;
  }

  removeAt (index) {
    if (index < 0 || index >= this.count) 
       throw new Error('Illegal Arguement Exception');

    for (let i = index; i < this.items.length; i++) 
      this.items[i] = this.items[i + 1];

    this.count--;
  }

  indexOf (item) {
    for (let i = 0; i < this.count; i++) {
      if(this.items[i] == item)
        return i
    return -1
    }
  }

  getMax () {
    let max = 0;
    for (let i = 0; i < this.count; i++) 
      if (this.items[i] > max) max = this.items[i]
    return max;
  }

  reverse () {
    let reversedArr = new Array(this.items.length)
    for (let i = this.items.length; i >= 0 ; i--) 
      reversedArr[i-1] = this.items[this.items.length - i];
    this.items =  reversedArr
  }

  insertAt (item, index) {
    if (index < 0 || index >= this.count) 
       throw new Error('Illegal Arguement Exception');
    if (this.items.length == this.count) {
      let newItems = new Array(this.count * 2)
    for (let i = index; i < this.items.length; i++) 
      this.items[i] = this.items[i + 1];

    this.count++;
  }
    // if invalid index throw
    // increase arr size if count == length
    // if not inserted at last position, shift items to right
  }


}

let arrClass = new Main()
arrClass.insert(10)
arrClass.insert(20)
arrClass.insert(30)
arrClass.insert(40)
// console.log( arrClass.getMax() )
console.log()
arrClass.reverse()
arrClass.print()
// console.log(arrClass.items)
