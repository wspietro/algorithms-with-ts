export default class MinHeap {
  public length: number;
  private data: number[];


  constructor() {
    this.data = [];
    this.length = 0;
  }

  insert(value: number): void {
    this.data[this.length] = value
    this.heapifyUp(this.length);

    this.length++;
  }

  delete(): number {
    if (this.length === 0) {
      return -1;
    }

    const out = this.data[0]
    this.length--; // heapify down consider lenght 
    if (this.length === 0) {
      this.data = []
      return out;
    }

    this.data[0] = this.data[this.length]
    this.heapifyDown(0)

    console.log(out)
    return out
  }

  private heapifyDown(idx: number): void {
    const leftIdx = this.leftChildIdx(idx);
    const rightIdx = this.rightChildIdx(idx);

    if (idx >= this.length || leftIdx >= this.length) {
      return
    }

    const leftValue = this.data[leftIdx]
    const rightValue = this.data[rightIdx]
    const value = this.data[idx]

    if (leftValue > rightValue && value > rightValue) {
      this.data[idx] = rightValue
      this.data[rightIdx] = value
      this.heapifyDown(rightIdx)
    } else if (rightValue > leftValue && value > leftValue) {
      this.data[idx] = leftValue
      this.data[leftIdx] = value
      this.heapifyDown(leftIdx)
    }
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) {
      return;
    }

    const parentIdx = this.parentIdx(idx)
    const parentValue = this.data[parentIdx]
    const value = this.data[idx]

    if (parentValue > value) {
      // swap and start again with parent idx
      this.data[idx] = parentValue
      this.data[parentIdx] = value

      this.heapifyUp(parentIdx)
    }
  }

  // take the parent to heapifyup
  private parentIdx(idx: number): number {
    return Math.floor((idx - 1) / 2)
  }

  private leftChildIdx(idx: number): number {
    return idx * 2 + 1;
  }

  private rightChildIdx(idx: number): number {
    return idx * 2 + 2;
  }
}