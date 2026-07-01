// time and space complexity problem

const arr = [1, 2, 3, 4, 5];

const swapElements = (arr, index1, index2) => {
    if (
        index1 >= 0 &&
        index1 < arr.length &&
        index2 >= 0 &&
        index2 < arr.length
    ) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;

    }

    return arr;

};
console.log(swapElements(arr, 1, 3));
