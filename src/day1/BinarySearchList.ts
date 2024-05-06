// Media, Low, High, Value, N input
// m = [lo + (hi - lo) / 2 ] -> not overflow in languages with fixed sized integers (bits).
// v = arr[m]
// if v = n return else if v > m lo = m + 1 else hi = m
// [lo, hi). inclusive and exclusive

export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length

  do {
    const m = Math.floor(lo + (hi - lo) / 2)
    const v = haystack[m]

    if (v === needle) {
      return true
    } else if (v > needle) {
      hi = m
    } else {
      lo = m + 1
    }
  } while (lo < hi);

  return false
}