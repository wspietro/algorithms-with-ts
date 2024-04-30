// Given an array nums of size n, return the majority element.
// majority é a definição para  > 50%
// Boyer-Moore majority vote algorithm
// appears more than ⌊n / 2⌋ times.

function majorityElement(nums: number[]): number | undefined {
  let majorityCandidate;
  let count = 0

  for (const value of nums) {
    if (count === 0) {
      majorityCandidate = value;
    }

    const vote = value === majorityCandidate ? 1 : -1
    count += vote
  }

  return majorityCandidate
}