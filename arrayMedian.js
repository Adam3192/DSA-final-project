/* For this coding solution I chose to use the Merge Sort algorithm to first sort my array of numbers,
then I wrote a function call median that just accepts the sorted array as an input and uses some simple math to find the median of the array of numbers, if the length of the array is odd then my function returns the index of the length divided by 2 minus .5, and if the length of the array is even then my function returns the value at the index of the array length divided by 2 plus the array length divided by 2 minus one, then divide this number by two and that will be the correct value for the median. I chose to use the Merge Sort algorithm because it is the fastest sorting algorithm on average, I looked into using the Quick Sort algorithm but it kind of works off of a bit of luck depending on what index is chosen for the pivot whereas Merge Sort will always have the same time complexity of O(n log n).
*/

/* Pseudo-code : 
  1. Split the input array into halves using recursion until every array has a size of just 1.
  2. Then sort the the left half of the numbers.
  3. Then sort the right half of the numbers.
  4. Then merge the sorted halves by comparing the first two numbers in each array until the two
     arrays have been merged together into one sorted array.
*/

/* The Big O time and space complexity of my solution for this problem is time complexity = O(n log n) and space complexity = O(n log n).
*/

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

console.log(`The median array element is ${median(numArray)}`);
console.log(`The median array element is ${median(numArray2)}`);
