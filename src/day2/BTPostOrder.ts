function walk(curr: BinaryNode<number> | null, path: number[]): void {
  if (!curr) {
    return
  }

  walk(curr.left, path) // recurse left
  walk(curr.right, path) // recurse rigth
  path.push(curr.value)

  return;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
  const path: number[] = []
  walk(head, path)

  return path
}