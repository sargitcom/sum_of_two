function twoNumberSum(array, targetSum) {
    const potentialNums = {};
    for (index in array) {
        const searchedNumber = targetSum - array[index];

        if (searchedNumber in potentialNums) {
            return [array[index], searchedNumber];
        } else {
            potentialNums[array[index]] = true;
        }
    }

    return [];
}
