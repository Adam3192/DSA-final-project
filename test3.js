function merge(arr1, arr2) {
 let i = 0;
 let j = 0;
 let results = [];

 // console.log(`arr1 is ${arr1}`);
 // console.log(`arr2 is ${arr2}`);
 // console.log('merge');

 while(i < arr1.length && j < arr2.length) {
     if (arr2[j] > arr1[i]) {
         results.push(arr1[i]);
         i++;  
     } else {
         results.push(arr2[j])
         j++
     }

     // console.log(`i = ${i}`);
     // console.log(`j = ${j}`);
     // console.log(`results array = ${results}`)
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

 console.log(`line 37 = ${arr}`);

 let mid = Math.floor(arr.length / 2), 
     left = mergeSort(arr.slice(0, mid)),
     right = mergeSort(arr.slice(mid));

  // console.log(`mergeSort`);

 return merge(left, right);
};

const nums = [5, 7, 2, 4, 9, 6];
const nums2 = [5, 7, 10, 2, 4, 9, 6];

const numArray = mergeSort(nums);
// const numArray2 = mergeSort(nums2);

console.log(numArray);
