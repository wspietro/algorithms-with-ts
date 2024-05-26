function hasUnvisited(seen: boolean[], dists: number[]): boolean {
  return seen.some((seen, index) => !seen && dists[index] < Infinity) // não foi visto e distancia infinita
}

function getLowestUnvisited(seen: boolean[], dists: number[]): number {
  // walk through all of our distances and see what is the lowest distance and it has to be unseen node
  let idx = -1
  let lowestDistance = Infinity

  for (let i = 0; i < seen.length; ++i) {
    if (seen[i]) continue

    if (lowestDistance > dists[i]) {
      lowestDistance = dists[i]
      idx = i
    }
  }

  return idx // return out the lowest index
}

export default function dijkstra_list(
  source: number,
  sink: number,
  arr: WeightedAdjacencyList
): number[] {

  const seen = new Array(arr.length).fill(false)
  const prev = new Array(arr.length).fill(-1)
  const dists = new Array(arr.length).fill(Infinity)

  dists[source] = 0 // smallest distance possible, we dont know any other sitance yet

  while (hasUnvisited(seen, dists)) {
    const curr = getLowestUnvisited(seen, dists)

    seen[curr] = true

    const adjs = arr[curr]; // list of our edges
    for (let i = 0; i < adjs.length; ++i) {
      const edge = adjs[i]
      if (seen[edge.to]) continue

      const dist = dists[curr] + edge.weight;
      if (dist < dists[edge.to]) {
        dists[edge.to] = dist
        prev[edge.to] = curr
      }
    }
  }

  const out: number[] = []
  let curr = sink;

  while (prev[curr] !== -1) {
    out.push(curr)
    curr = prev[curr]
  }

  out.push(source)
  return out.reverse()
}