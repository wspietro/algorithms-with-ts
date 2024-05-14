function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  // base case
  // when hiting undefined, return to the previous context
  if (!curr) {
    return path;
  }

  //pre
  path.push(curr.value)

  walk(curr.left, path) // recurse left
  walk(curr.right, path) // recurse right


  return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, [])
}