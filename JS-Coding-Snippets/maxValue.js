let maxValue = (arr) => {
    let max = -99999999;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    return max;
}

console.log(maxValue([1, 5, 100, 50, -30]));