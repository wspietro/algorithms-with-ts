// compares left element with the right one
// if x[i] > x[i + 1], swap
// bubles the element tho its correct position(last). Then we dont need to campare the last one in the next loop

export default function bubble_sort(arr: number[]): void {
  for (let i = 0; i < arr.length; ++i) { // ultimo elemento sempre estará ordenado.
    for (let j = 0; j < arr.length - 1 - i; ++j) {// up too but not include also the last element to the first iteration cuz we r gonna do a plus 1.  The last element becomes the largest, we dont need to redo that. thas why we have minus i
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp
      }
    }
  }
}