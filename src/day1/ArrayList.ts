export default class ArrayList<T> {
  public length: number;
  private data: T[];

  private growCapacity(): void {
    // memcopy? how to implement in js? .subarray?
    if (this.length === this.data.length) {
      const prevArray = this.data
      this.data = new Array(this.data.length * 2); // novo array com n posições vazias, precisamos copiar array anterior
      for (let i = 0; i < prevArray.length; i++) {
        this.data[i] = prevArray[i]
      }
    }
  }


  constructor(capacity: number = 5) { // capacidade inicial
    this.data = Array(capacity) // array com 5 posições vazias, this.data.lenght = 5 = capacity
    this.length = 0
  }

  prepend(item: T): void {
    this.insertAt(item, 0);
  }

  insertAt(item: T, idx: number): void {
    this.growCapacity();

    // começar do último ítem
    // mover os elementos até que o idx seja movido também (por isso >=)
    // mover = shift, i+1 = i
    // a cada loop, "descer" um elemento
    for (let i = this.length - 1; i >= idx; --i) {
      this.data[i + 1] = this.data[i]
    }

    this.length++;
    this.data[idx] = item
  }

  append(item: T): void {
    this.growCapacity();
    this.data[this.length] = item;
    this.length++;
  }


  remove(item: T): T | undefined {
    let itemIndex = undefined;
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === item) {
        itemIndex = i
        break
      }
    }

    if (itemIndex === undefined) { // 0 é falsy
      return undefined
    }

    return this.removeAt(itemIndex)
  }

  get(idx: number): T | undefined {
    if (idx >= this.length) {
      return undefined
    }

    return this.data[idx]
  }

  removeAt(idx: number): T | undefined {
    if (idx >= this.length) {
      return undefined
    }

    let elemetToRemove = this.data[idx];
    this.length--;

    for (let i = idx; i < this.length; i++) { // iniciando do elemento a remover, fazemos o shift para a esqueda da lista.
      this.data[i] = this.data[i + 1]
    }
    return elemetToRemove
  }
}