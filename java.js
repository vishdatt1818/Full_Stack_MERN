console.log("Hello, World!");

// let arr = [4, 9, 2, 7];

// largest = 0;

// for(let i=0; i<arr.length; i++){
//     if (arr[i]>largest){
//         largest =arr[i]
//     }

// }
// console.log(largest)



// let findDuplicate = [1,2,3,2,4,1];
// let str = "hello"

// function findDuplicateFunc(arr){

// let box ={};

// for(let i=0; i<arr.length; i++){

//     let num = arr[i]


//     if (box[num]){
//         box[num]++
//     }else{
//         box[num] =1
//     }

// }
// return box;
// }
// console.log(findDuplicateFunc(findDuplicate))
// console.log(findDuplicateFunc(str))

// function removeDuplicate(arr){

//   let box ={}
//   let unique = []

//   for(let i=0; i<arr.length; i++){

//     let num = arr[i]


//     if (box[num] !== true){
//         box[num] = true

//         unique.push(num)
// }
// }
//     return unique
// }
// console.log(removeDuplicate(findDuplicate))

// function findSecondLargest(arr){

//   largest = arr[0];
//   secondLargest = arr[0];

//    for(let i=0; i<arr.length; i++){

//     if(arr[i]>largest){
//       secondLargest = largest;
//       largest = arr[i];
//     }else if(
//       arr[i]>secondLargest && arr[i]<largest
//    ){
//      secondLargest = arr[i]
//    }
// }
// return secondLargest;
// }
// console.log(findSecondLargest(findDuplicate))



// const firstNonRepeating = (arr) =>{

//   let box ={};

// for(let i=0; i<arr.length; i++){

//     let num = arr[i]


//     if (box[num]){
//         box[num]++
//     }else{
//         box[num] =1
//     }

// }

// for(let i=0; i<arr.length; i++){
//   if(box[arr[i]] === 1){
//     return arr[i]
//   }
// }
// }

// console.log(firstNonRepeating("aabbcddee")); 

// const reverseTheWord = (arr) =>{

//     let word = arr.split(" ")
//     let reverseWord =[]

//     for(let i=word.length-1; i>=0; i--){
//         reverseWord.push(word[i])

// }
// return reverseWord.join(" ")
// }

// console.log(reverseTheWord("I love javascript"));


// const findLongestWord = (arr) =>{

//     let word = arr.split(" ");

//     longest = "";

//     for(let i=0; i<word.length; i++){
//         if(word[i].length >longest.length){
//             longest= word[i];
//         }
//   }
//   return longest;
// }

// console.log(findLongestWord("JavaScript is awesome"));

// const checkAnagram = (word1, word2) =>{

//     if(word1.length === word2.length){
//         let cleanWord1 = word1.split("").sort().join(" ")
//         let cleanWord2 = word2.split("").sort().join(" ")


//          if(cleanWord1 === cleanWord2){
//             return true
//     }else{
//         return false
//     }
// }
//     else{
//         return false
//     }
// }
// console.log(checkAnagram("listen", "silent"));
// console.log(checkAnagram("hello", "world"));


const checkAnagramBox = (arr1, arr2) => {

    if (arr1.length === arr2.length) {

        let box = {};

        for (let i = 0; i < arr1.length; i++) {

            let num = arr1[i]


            if (box[num]) {
                box[num]++
            } else {
                box[num] = 1
            }

        }
        for (let i = 0; i < arr2.length; i++) {

            let num = arr2[i]


            if (box[num]) {
                box[num]--
            } else {
                return false;
            }

        }
        return true
    } else {
        return false;
    }
}

console.log(checkAnagramBox("listen", "silent"));
console.log(checkAnagramBox("hello", "world"));


const moveZero = (arr) => {

    let zero = [];
    let nonZero = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr[i] === 0) {
            zero.push(arr[i])
        } else {
            nonZero.push(arr[i])
        }
    }
}


const moveZeroTwoPointer = (arr) => {

    let left = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[left] = arr[i]
            left++;
        }
    }
    while (left < arr.length) {
        arr[left] = 0;
        left++;
    }
    return arr

}

console.log(moveZeroTwoPointer([0, 1, 0, 3, 12]));


const moveZeroSwap = (arr) => {
    let j = 0;

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] !== 0) {

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            j++;
        }
    }

    return arr;
}
console.log("swap")
console.log(moveZeroSwap([0,1,0,3,12]));


const moveZeroLeftTwoPointer = (arr) => {

    let left = arr.length - 1;

    for (let right = arr.length - 1; right >= 0; right--) {
        if (arr[right] !== 0) {
            arr[left] = arr[right]
            left--;
        }
    }
    while (left >= 0) {
        arr[left] = 0;
        left--;
    }
    return arr

}

console.log(moveZeroLeftTwoPointer([0, 1, 0, 3, 12]));

const reverseArrey = (arr) => {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    return arr;
}
console.log(reverseArrey([1, 2, 3, 4, 5]))

const palindrome = (str) => {

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;
    

    }
    return true
}
console.log(palindrome("radar")); 
console.log(palindrome("hello")); 




