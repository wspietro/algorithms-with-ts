type Node<T> = {
  value: T,
  prev?: Node<T>, // visualizar de maneira mais fácio o fluxo
}

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.length = 0
    this.head = undefined
  }

  // adds
  push(item: T): void {
    const node: Node<T> = { value: item, prev: this.head }
    this.length++

    this.head = node
  }

  // removes and returns
  pop(): T | undefined {
    if (!this.head) {
      return undefined
    }

    this.length--;


    const head = this.head
    this.head = head.prev
    head.prev = undefined

    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}