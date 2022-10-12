function merge(arr1, arr2) {
 let i = 0;
 let j = 0;
 let results = [];

 while(i < arr1.length && j < arr2.length) {
     if (arr2[j] > arr1[i]) {
         results.push(arr1[i]);
         i++;  
     } else {
         results.push(arr2[j])
         j++
     }
 }
 while(i < arr1.length) {
     results.push(arr1[i]);
     i++;
 }
 while(j < arr2.length) {
     results.push(arr2[j]);
     j++;
 }
 return results
}

const mergeSort = arr => {
 if (arr.length <= 1) return arr;

 let mid = Math.floor(arr.length / 2), 
     left = mergeSort(arr.slice(0, mid)),
     right = mergeSort(arr.slice(mid));

 return merge(left, right);
};

const nums = [5, 7, 2, 4, 9, 6];
const nums2 = [5, 7, 10, 2, 4, 9, 6];

const numArray = mergeSort(nums);
const numArray2 = mergeSort(nums2);

function median(array) {
  let length = array.length;

  if(length % 2 == 1) {
    // length is odd
    return array[(length/2) - .5]
  }

  else {
    return (array[length/2] + array[(length/2) - 1]) / 2
  }
}

console.log(`problem #1 answer is ${median(numArray)}`);
console.log(`problem #2 answer is ${median(numArray2)}`);
