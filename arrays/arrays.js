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
    this.numbers[this.count++] = item;
  }

}

let arrClass = new Main()
arrClass.insert(10)
arrClass.insert(20)
arrClass.print()
