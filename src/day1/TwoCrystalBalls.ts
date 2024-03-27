// Given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized way.

// we want to jump by sqrt(n)
// sqrt(n) is the only way we can change this from nonlinear running
// using sqrt(n) means that in the second ball, the worst case scenario is to walk sqrt(n)
// we use our first ball to see where it wil break and then we jump back sqrt(n) and walk forward sqrt(n) to find the exact point
// find the point where it breaks, walk back sqrt(n) and then walk foward sqrt(n)


export default function two_crystal_balls(breaks: boolean[]): number {
  const jmpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jmpAmount
  for (; i < breaks.length; i += jmpAmount) {
    if (breaks[i]) { // find where the crystall ball is going to break
      break; // ends the loop and go to the next instruction
    }
  }

  i -= jmpAmount; // jumped back sqrt(n) after finding a point where breaks its already true
  for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i)// walk foward
    if (breaks[i]) {
      return i;
    }

  return -1
}