let number = [1, 2, 3, 4, 5];

function minMaxSum(arr) {
    let sumArray = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            sum += arr[j];
        }
        sum -= arr[i];
        sumArray.push(sum);
    }
    // from MDN
    // let maxSum = Math.max(...sumArray);
    // let minSum = Math.min(...sumArray);

    let maxSum = sumArray[0];
    let minSum = sumArray[0];

    for (let i = 0; i < sumArray.length; i++) {
        if (sumArray[i] > maxSum) {
            maxSum = sumArray[i];
        }
        if (sumArray[i] < minSum) {
            minSum = sumArray[i];
        }
    }
    let result = [minSum, maxSum];
    return result;
}
