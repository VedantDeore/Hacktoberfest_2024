// Quick Sort function
function quickSort(arr) {
    // Base case: if the array has 1 or no element, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Select the pivot (typically the last element of the array)
    const pivot = arr[arr.length - 1];

    // Arrays to hold elements less than and greater than the pivot
    const leftArr = [];
    const rightArr = [];

    // Partition the array into leftArr (smaller elements) and rightArr (larger elements)
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    // Recursively sort the left and right arrays, then concatenate the result
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// Test the quick sort function
const array = [10, 80, 30, 90, 40, 50, 70];

console.log("Original array:", array);
const sortedArray = quickSort(array);
console.log("Sorted array using Quick Sort:", sortedArray);
