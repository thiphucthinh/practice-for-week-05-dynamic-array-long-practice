class DynamicArray {

  constructor(capacity= 4) {
    this.capacity = capacity;
    this.length = 0;
    this.data = new Array(capacity);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.length === this.capacity) { this.resize() }

    this.data[this.length] = val;
    this.length++;
  }


  pop() {
    if (this.length === 0) return undefined;
    const poppedValue = this.data[this.length - 1];
    this.data[this.length - 1] = undefined;
    this.length--;
    return poppedValue;
  }

  shift() {
    if (this.length === 0) return undefined;
    const shiftedValue = this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.data[this.length - 1] = undefined;
    this.length--;
    return shiftedValue;
  }

  unshift(val) {
    if (this.length === this.capacity) { this.resize() }

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) return i;
    }
    return -1;
  }

  resize() {
    this.capacity *= 2;
    const newData = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
  }

}


module.exports = DynamicArray;
