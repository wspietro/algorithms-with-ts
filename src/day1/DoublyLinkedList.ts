type Node<T> = {
  prev: Node<T> | null
  data: T
  next: Node<T> | null
}
export default class DoublyLinkedList<T> {
  public length: number;
  public head: Node<T> | null;
  public tail: Node<T> | null;

  private getAt(idx: number): Node<T> | undefined {
    let curr = this.head;

    for (let i = 0; curr && i < idx; ++i) {
      curr = curr.next
    }

    if (!curr) {
      return undefined
    }

    return curr
  }

  private removeNode(node: Node<T>): T | undefined {

    this.length--;
    if (this.length === 0) {
      const out = this.head?.data
      this.head = this.tail = null
      return out
    }

    if (node.prev) {
      node.prev.next = node.next
    }

    if (node.next) {
      node.next.prev = node.prev
    }


    if (node == this.head) {
      this.head = node.next
    }

    if (node == this.tail) {
      this.tail = node.prev
    }

    node.prev = node.next = null;
    return node.data
  }

  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  prepend(item: T): void {
    const node: Node<T> = { prev: null, data: item, next: null }

    this.length++
    if (!this.head) {
      this.head = this.tail = node
      return;
    }

    node.next = this.head
    this.head.prev = node
    this.head = this.head.prev
  }

  insertAt(item: T, idx: number): void {
    if (idx > this.length || idx < 0) {
      throw new Error('Oh no')
    }

    if (idx === 0) {
      this.prepend(item)
      return
    }

    if (idx === this.length) {
      this.append(item)
      return
    }



    this.length++
    const curr = this.getAt(idx)
    const node: Node<T> = { prev: null, data: item, next: null }

    if (!curr) {
      return
    }

    node.next = curr
    node.prev = curr.prev
    curr.prev = node

    if (node.prev) {
      node.prev.next == curr
    }

  }

  append(item: T): void {
    const node: Node<T> = { prev: null, data: item, next: null }

    this.length++
    if (!this.tail) {
      this.head = this.tail = node
      return;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node
  }


  remove(item: T): T | undefined {
    let curr = this.head

    for (let i = 0; curr && i < this.length; i++) {
      if (curr.data === item) {
        break
      }

      curr = curr.next
    }

    if (!curr) {
      return undefined
    }

    return this.removeNode(curr)

  }

  get(idx: number): T | undefined {
    return this.getAt(idx)?.data
  }

  removeAt(idx: number): T | undefined {
    const node = this.getAt(idx)
    if (!node) {
      return undefined;
    }
    return this.removeNode(node)
  }
}