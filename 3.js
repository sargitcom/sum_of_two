function twoNumberSum(array, targetSum) {

    array.sort((a, b) => a - b);

    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex < rightIndex) {
        let sum = array[leftIndex] + array[rightIndex];

        if (sum === targetSum) {
            return [array[leftIndex], array[rightIndex]];
        } else if (sum < targetSum) {
            leftIndex++;
        } else if (sum > targetSum) {
            rightIndex--;
        }
    }

    return [];
}
