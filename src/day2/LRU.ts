type Node<T> = {
  value: T,
  next?: Node<T>,
  prev?: Node<T>,
}

function createNode<V>(value: V): Node<V> {
  return { value }
}


export default class LRU<K, V> {
  private length: number
  private head?: Node<V>
  private tail?: Node<V>

  private lookup: Map<K, Node<V>>
  private reverseLookupe: Map<Node<V>, K> // we need to be able to go from a node back to the key, delete that out, then delete out the key that is in the lookup

  constructor(private capacity: number = 10) {
    this.length = 0
    this.head = this.tail = undefined
    this.lookup = new Map<K, Node<V>>()
    this.reverseLookupe = new Map<Node<V>, K>()
  }

  update(key: K, value: V): void {
    /**
     * does it exist?
     * no -> insert
     *    - check capacity and evict if over capacity
     * 
     * yes -> update to the front of the list and update the value
     */

    let node = this.lookup.get(key)
    if (!node) {
      node = createNode(value)
      this.length++;
      this.prepend(node)
      this.trimCache()

      this.lookup.set(key, node);
      this.reverseLookupe.set(node, key)
    } else {
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
  }

  get(key: K): V | undefined {
    // check the cache for existence, if no, return undefined
    const node = this.lookup.get(key)
    if (!node) {
      return undefined;
    }

    // update teh value we found and move it to the front
    this.detach(node);
    this.prepend(node);

    // return out the value found
    return node.value
  }

  private detach(node: Node<V>) {
    if (node.prev) {
      node.prev.next = node.next
    }

    if (node.next) {
      node.next.prev = node.prev
    }

    if (this.head === node) {
      this.head = this.head.next;
    }

    if (this.tail === node) {
      this.tail = this.tail.prev
    }

    node.next = undefined
    node.prev = undefined
  }

  private prepend(node: Node<V>) {
    if (!this.head) {
      this.head = this.tail = node
      return
    }

    node.next = this.head
    this.head.prev = node
    this.head = node
  }

  private trimCache(): void {
    if (this.length <= this.capacity) {
      return;
    }

    const tail = this.tail as Node<V>
    this.detach(this.tail as Node<V>)

    const key = this.reverseLookupe.get(tail) as K;
    this.lookup.delete(key)
    this.reverseLookupe.delete(tail)
    this.length--
  }
}


