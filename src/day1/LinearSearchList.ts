// Simplest aproach to search for an element in a data set;
// examines each element untill it finds a match;
// O(n);
// indexOf()

export default function linear_search(haystack: number[], needle: number): boolean {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true
    }
  }

  return false
}

