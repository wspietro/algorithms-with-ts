type Node<T> = {
  value: T
  next?: Node<T>
}
export default class Queue<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0
    this.head = this.tail = undefined
  }

  enqueue(item: T): void {
    const node: Node<T> = { value: item }

    this.length++;
    // array vazio
    if (!this.tail) {
      this.tail = this.head = node
      return
    }

    // Cuidado para não perder referencia
    this.tail.next = node
    this.tail = node
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined
    }

    this.length--;

    // Save your head
    // update your head
    // return your head
    const head = this.head
    this.head = this.head.next

    //free
    head.next = undefined

    if (this.length === 0) {
      this.tail = undefined
    }

    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }

}