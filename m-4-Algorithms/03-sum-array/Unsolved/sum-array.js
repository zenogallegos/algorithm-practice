// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    let currentNum = 0

    for (let i = 0; i < arr.length; i++) {
        let currentArr = arr[i]
        currentNum += currentArr;
    }

    return currentNum;
};
