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
      this.prepend(item) // já faz o controle de lenght
      return
    } else if (idx === this.length) {
      this.append(item) // já faz o controle de lenght
      return
    }

    let curr = this.head
    for (let i = 0; i < idx - 1; i++) { // queremos parar no nó anterior a posição de inserção. isx = 2, paramos no 1
      if (!curr) { // TS não identifica validações feitas anteriormente. 
        break
      }

      curr = curr.next
    }

    if (!curr) {
      return;
    }

    const node: Node<T> = { data: item, next: curr?.next } // garantindo que link para o próximo seja mantido
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

  }
}