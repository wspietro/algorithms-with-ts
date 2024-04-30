function removeDuplicatesFromSortedArray(nums: number[]): number {
  let k = 1; // Inicializamos k como 1 porque o primeiro elemento sempre é único

  // Iteramos sobre os elementos de nums a partir do segundo elemento
  for (let i = 1; i < nums.length; i++) {
    // Se o elemento atual for diferente do anterior, atualizamos nums[k] com o elemento atual
    // Isso garante que mantemos apenas elementos únicos até o índice k
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++
    }
  }

  return k; // k representa o novo comprimento do array após a remoção das duplicatas
}
