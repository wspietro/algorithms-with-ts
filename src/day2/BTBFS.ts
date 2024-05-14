export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  // try to reafactor to a queue, not array list. 
  // when using array list, run time is o(n²). shift method its o(n).
  const queue: (BinaryNode<number> | null)[] = [head];

  while (queue.length) {
    // FIFO principles
    const curr = queue.shift() as BinaryNode<number> | undefined | null;

    if (!curr) {
      continue;
    }

    // search
    if (curr.value === needle) {
      return true
    }

    queue.push(curr.left)
    queue.push(curr.right)
  }

  return false

}