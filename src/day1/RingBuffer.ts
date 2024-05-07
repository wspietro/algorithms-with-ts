export default class RingBuffer<T> {
  public length: number;
  private data: T[];
  private capacity: number;
  private readPointer: number;
  private writePointer: number;

  constructor(capacity: number = 5) {
    this.data = Array(capacity)
    this.capacity = this.data.length
    this.length = 0
    this.readPointer = 0
    this.writePointer = -1
  }

  // 
  push(item: T): void {
    this.writePointer = (this.writePointer + 1) % this.capacity
    this.data[this.writePointer] = item

    this.length++
  }

  pop(): T | undefined {
    if (this.writePointer === -1 || this.readPointer > this.writePointer) {
      return undefined
    }

    const idx = this.readPointer

    this.readPointer = (this.readPointer + 1) % this.capacity
    console.log(this.readPointer)
    return this.data[idx];
  }

  get(idx: number): T | undefined {
    if (idx >= this.length || idx < 0) {
      return undefined;
    }

    return this.data[(this.readPointer + idx) % this.capacity];
  }
}