// Media, Low, High, Value, N input
// m = [lo + (hi - lo) / 2 ] -> evita estouro de inteiros 
// v = arr[m]
// if v = n return else if v > m lo = m + 1 else hi = m
// [hi, lo). inclusive and exclusive

export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length

  do {
    const m = Math.floor(lo + (hi - lo) / 2)
    const v = haystack[m]

    if (v === needle) {
      return true
    } else if (v > needle) {
      hi = m // include
    } else {
      lo = m + 1 // exclude
    }
  } while (lo < hi);

  return false
}