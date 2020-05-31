function twoNumberSum(array, targetSum) {
    for (i in array) {
        for (j in array) {
            if (i != j && array[i] + array[j] == targetSum)  {
                return [array[i], array[j]];
            }
        }
    }

    return [];
}
