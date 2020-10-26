class Main {
	constructor () { 
    this.numbers = []
    this.count = this.numbers.length;
  }

  print () {
    for (let i = 0; i < this.count; i++) {
      console.log(this.numbers[i])
      
    }
  }
  insert (item) {
    if (this.numbers.length == this.count) {
      let newNums = new Array(this.count * 2)
      console.log(newNums)
      for (let i = 0; i < this.count; i++) {
        newNums[i] = this.numbers[i];
      }
      this.numbers = newNums
    }
    this.numbers[this.count++] = item;
  }

}

let arrClass = new Main()
arrClass.insert(10)
arrClass.insert(20)
arrClass.insert(30)
arrClass.insert(40)
arrClass.print()
console.log(arrClass.numbers)
