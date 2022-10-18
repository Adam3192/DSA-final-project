const nums = [7, 3, 4, 6, 10, 8, 2, 5, 1, 9];

const mergeSort = arr => {
 if (arr.length <= 1) return arr;

 let mid = Math.floor(arr.length / 2), 

     left = mergeSort(arr.slice(0, mid)),
     right = mergeSort(arr.slice(mid));

     console.log(mid);
};

mergeSort(nums);
