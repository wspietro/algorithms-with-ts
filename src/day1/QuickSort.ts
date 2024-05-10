/**
 * Generally quick sort is divided into two functions:
 * 1. Partition: produces the pivot index and moves the items that are lass than or equal on one side
 * and the items that are greather to on the other side;
 * 2. QS: calls partition, gets the pivot then recall
 */

function qs(arr: number[], lo: number, hi: number): void {
  // base case
  if (lo >= hi) {
    return
  }

  const pivotIdx = partition(arr, lo, hi);

  // repeat the sort one both sides of the array, not includin the pivot
  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

// returns the pivot array
function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi]

  // walk from the de low to the high but not including the high (high is the pivot)
  // weak sort
  let idx = lo - 1;

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= pivot) {
      idx++
      // swap <= element with index
      const tmp = arr[i]
      arr[i] = arr[idx]
      arr[idx] = tmp
    }
  }

  // swap high with index+1
  // everything to the left of the pivot needs to be <= to 
  // everything to the tigh of the pivot needs to be > to 
  idx++;
  arr[hi] = arr[idx]
  arr[idx] = pivot

  return idx
}

export default function quick_sort(arr: number[]): void {
  qs(arr, 0, arr.length - 1); //inclusive [lo, hi]
}

// Chamada inicial do quick_sort:
// O array inicial é [8, 7, 6, 4, 5].
// Chamamos a função qs(arr, 0, 4), onde lo = 0 e hi = 4.
// Primeira chamada do partition:
// O pivô é o último elemento, que é 5.
// Iniciamos idx = lo - 1 = -1.
// Percorremos o array de lo a hi - 1:
// Como arr[0] = 8 > 5, nada acontece.
// Como arr[1] = 7 > 5, nada acontece.
// Como arr[2] = 6 > 5, nada acontece.
// Como arr[3] = 4 < 5, incrementamos idx para 0 e trocamos arr[3] com arr[0].
// O array agora é [4, 7, 6, 8, 5].
// Finalmente, trocamos arr[hi] com arr[idx + 1].
// O array agora é [4, 5, 6, 8, 7].
// O pivô 5 está na posição 1.
// Retornamos 1.
// Chamada recursiva do quick_sort para a parte esquerda:
// Chamamos qs(arr, 0, 0) para a parte esquerda.
// Como lo = hi, não fazemos nada.
// Chamada recursiva do quick_sort para a parte direita:
// Chamamos qs(arr, 2, 4) para a parte direita.
// Segunda chamada do partition:
// O pivô é o último elemento, que é 7.
// Iniciamos idx = lo - 1 = 1.
// Percorremos o array de lo a hi - 1:
// Como arr[2] = 6 < 7, incrementamos idx para 2 e trocamos arr[2] com arr[2] (nada acontece).
// Como arr[3] = 8 > 7, nada acontece.
// Finalmente, trocamos arr[hi] com arr[idx + 1].
// O array agora é [4, 5, 6, 7, 8].
// O pivô 7 está na posição 3.
// Retornamos 3.
// Chamada recursiva do quick_sort para a parte esquerda:
// Chamamos qs(arr, 2, 2) para a parte esquerda.
// Como lo = hi, não fazemos nada.
// Chamada recursiva do quick_sort para a parte direita:
// Chamamos qs(arr, 4, 4) para a parte direita.
// Como lo = hi, não fazemos nada.
// Fim da recursão:
// O array [4, 5, 6, 7, 8] está ordenado.