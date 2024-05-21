export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {

  const seen = new Array(graph.length).fill(false)
  const prev = new Array(graph.length).fill(-1)

  seen[source] = true
  const q: number[] = [source]

  do {
    const curr = q.shift() as number
    if (curr === needle) break

    const adjs = graph[curr]

    for (let i = 0; i < adjs.length; i++) { // walk through and grab each one of these edges out
      if (adjs[i] === 0) continue // if there is no edge

      if (seen[i] === true) continue // if we have seen vertix

      seen[i] = true
      prev[i] = curr
      q.push(i)
    }
  } while (q.length)

  if (prev[needle] == -1) {
    return null
  }


  // build it backwards
  let curr = needle
  const out: number[] = []; // path, starting from needle to source


  while (prev[curr] !== -1) {
    out.push(curr)
    curr = prev[curr] // set it to who added me to this search
  }

  const path = [source].concat(out.reverse());
  return path;
}