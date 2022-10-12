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

const numArray = mergeSort(nums);

function median(array) {
  let length = array.length;

  if(length % 2 == 1) {
    // length is odd
    console.log(array[(length/2) - .5]);
    return array[(length/2) - .5]
  }

  else {
    console.log((nums[length/2] + nums[(length/2) - 1]) / 2);
    return (nums[length/2] + nums[(length/2) - 1]) / 2
  }
}
