type Node<T> = {
  data: T
  next: Node<T> | null
}
export default class SinglyLinkedList<T> {
  // Linked List não possui o método lenght implementado como um array. Devemos manter o registro
  public length: number;
  public head: Node<T> | null;


  constructor() {
    this.length = 0
    this.head = null
  }

  prepend(item: T): void {
    if (this.head === null) {
      this.head = { data: item, next: null }
    } else {
      const node: Node<T> = { data: item, next: this.head }
      this.head = node
    }
    this.length++;
  }


  insertAt(item: T, idx: number): void {
    // idx = posição
    if (idx > this.length || idx < 0) { // validando idx
      return;
    } else if (idx === 0) {
      // já faz o controle de lenght
      this.prepend(item)
      return
    } else if (idx === this.length) {
      // já faz o controle de lenght
      this.append(item)
      return
    }

    let curr = this.head
    // queremos parar no nó anterior a posição de inserção. idx = 2, paramos no 1
    for (let i = 0; i < idx - 1; i++) {
      // TS não identifica validações feitas anteriormente. 
      if (!curr) {
        break
      }

      curr = curr.next
    }

    if (!curr) {
      return;
    }

    // garantindo que link para o próximo seja mantido
    const node: Node<T> = { data: item, next: curr?.next }
    curr.next = node
    this.length++
  }


  append(item: T): void {
    const node: Node<T> = { data: item, next: null };

    // Verifica existência de head
    if (this.head === null) {
      this.head = node;
      this.length++
      return;
    }

    // Atravessa a Linked List até encontrar a tail (next será null)
    // Se current.next === null, estamos no último item da lista
    let curr = this.head
    while (curr.next !== null) {
      curr = curr.next
    }

    curr.next = node
    this.length++
  }


  remove(item: T): T | undefined {
    let out: T | undefined;
    if (this.head === undefined) {
      return undefined;
    }

    let curr = this.head;

    while (curr && curr.next) {
      if (curr.data === item) {
        break;
      }

      if (curr.next.data === item) {
        break;
      }
      curr = curr.next;
    }

    if (!curr) {
      return undefined;
    } else if (!curr.next) {
      if (curr.data !== item) {
        return undefined;
      }
      this.head = curr.next;
      this.length--;
      return item;
    }

    if (curr === this.head) {
      if (curr.data === item) {
        out = curr.data;
        this.head = curr.next;
      } else {
        out = curr.next.data;
        curr.next = curr.next.next;
      }
      this.length--;
    } else if (curr.next.data === item) {
      out = curr.next.data;
      curr.next = curr.next.next;
      this.length--;
    }
    return out;
  }

  get(idx: number): T | undefined {
    // idx é o indice, posição inicial é o 0
    let curr = this.head
    for (let i = 0; i < idx; i++) {
      if (!curr) {
        break
      }

      curr = curr?.next
    }

    if (!curr) {
      return undefined
    }

    return curr.data

  }
  removeAt(idx: number): T | undefined {
    if (idx > this.length || idx < 0) {
      return undefined
    }

    let item: T
    this.length--;

    // desconectadn primeiro item
    if (idx === 0 && this.head) {
      item = this.head.data
      this.head = this.head.next
      return item
    }

    let curr = this.head;
    for (let i = 0; i < idx - 1; ++i) {
      if (!curr) {
        break;
      }
      curr = curr.next;
    }

    if (!curr || !curr.next) {
      return undefined;
    }

    if (curr === this.head) {
      this.head.next = curr.next;
    }

    item = curr.next.data;
    curr.next = curr.next.next;
    return item;
  }
}
