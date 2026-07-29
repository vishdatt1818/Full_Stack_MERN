let no = 1231231;
// let reverseno = 0;

// while (no > 0) {
//     let lastDigit = no % 10;                  // Gets the last digit (e.g., 1)
//     reverseno = (reverseno * 10) + lastDigit; // Shifts existing digits left and adds the new one
//     no = Math.floor(no / 10);                 // Removes the last digit from the original number
// }


// let year = 2000;

// if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
//     console.log(year, " leap year");

// } else {
//     console.log("not leap year");

// }


// let num = 4;

// if (num > 0 && num % 2 === 0) {
//     console.log("num is positive even");

// } else {
//     console.log("num is positive even");

// }

// let wether = 45;

// if (wether >= 35) {
//     console.log("very hot");

// }
// else if (wether >= 25) {
//     console.log("hot");

// }
// else if (wether >= 15) {
//     console.log("Pleasant");

// } else {
//     console.log("very cold");

// }


// let a = 10;
// let b = 55;
// let c = 65;

// if (a > b) {
//     if (a > c) {
//         console.log("a is greatest");

//     }else{
//         console.log("c is greatest");

//     }
// }else{
//     if(b>c){
//           console.log("b is greatest");
//     }else{
//         console.log("c is greatest");
//     }
// }


// else if(b>a){
//     if(b>c){
//         console.log("b is greatest");
//     }
// }
// else if(c>a){
//     if(c>b){
//         console.log("c is greatest");
//     }
// }


// let arr = [4, 9, 2, 7]

// let largest = (arr) =>{
//     let lar = arr[0]

//     for(let i=0 ; i<arr.length ; i++){
//         if(arr[i]> lar){
//             lar = arr[i]
//         }
//     }
//     return lar
// }
// console.log(
//     largest([4, 9, 2, 7])

// );

// let findDuplicate = (arr) =>{
//     let dup = {}

//      for(let i=0 ; i<arr.length ; i++){
//         if(dup[arr[i]]){
//             dup[arr[i]]++
//         }else{
//             dup[arr[i]] = 1
//         }


// }
// return dup
// }
// console.log(findDuplicate([1,2,3,2,4,1]));

// let arr = [2,4,4,5,6,6,7]
// dup =[]
//  for(let i=0 ; i<arr.length ; i++){
//      for(let j=i+1 ; j<arr.length ; j++){
//             if(arr[i] == arr[j]){
//                 dup.push(arr[i])
//             }
//      }
//  }
//  console.log(dup);

// function fib(num){
//  let a = 0
//  let b = 1

//  for(let i=0 ; i<num; i++){
//     // console.log(a);

//     c = a+b
//     a = b
//     b = c
//     console.log(c);

//  }

// }

// fib(7)

// function moveZero(arr){
//     let index = 0;

//     for(let i=0; i<arr.length; i++){
//       if(arr[i] !== 0){
//          arr[index] = arr[i]
//          index++
//       }
//    }

//   while (index < arr.length){
//    arr[index] = 0
//    index++
//   }

// return arr
// }
// console.log(

//    moveZero([3,4,5,6,0,1,0,9,0])
// );

// function reverseWords(str){
//      let result = ""
//      let word = ""

//      for(let i= str.length-1; i>=0 ; i--){
//       if(str[i] !== " "){
//          word =  str[i] + word
//       }else{
//          result += word + " ";
//          word = ""
//       }
//      }
//      result += word
//      return result
// }
// console.log(reverseWords("reverse this string"));


// function removeDup(str){

//    let result = ""

//    for(let i=0; i<str.length ; i++){

//       let found = false

//       for(let j=0; j<result.length; j++){
//               if(str[i] === result[j]){
//                found = true;
//                break;
//               }
//       }
//       if(!found){
//          result += str[i]
//       }
//    }
//    return result;     
// }

// console.log(
//    removeDup("asdfsdffaasgg")
// );


// function longestWord(){

// }

// let a ="vaasudatt"
// let b = "singh"

// function abc(x,y){
//    let newStr = ""

//    let maxLength = Math.max(x.length, y.length);

//    for(let i=0; i< maxLength; i++){
//      if(i <x.length){
//       newStr += x[i]
//      }
//       if(i <y.length){
//       newStr += y[i]
//      }

//    }
//    return newStr
// }
// console.log(
//    abc(a,b)
// );



// function longestWord(str){
//    let word = ""
//    let longest = ""

//    for(let i=0; i<str.length ; i++){
//       if(str[i] == " " || i == str.length-1){
//          if(word.length > longest.length){
//             longest = word
//          }
//          word = ""
//       }else{
//          word += str[i]
//       }
//    }
//    return longest
// }

// console.log(
//    longestWord("now check longest word")
// );


function add(a) {
   return function (b) {
      return function (c) {
         console.log(a + b + c);
         // add(1)(2)(3)

      }
   }
}
add(1)(2)(3)

//  let arr = ["vaasu" , 1,2,3, "c", "h"]

//  function seperate(arr){
//    let number = []
//    let char = []
//    let word = []

//    for(let item of arr){

//      if(typeof(item) == "number"){
//           number.push(item)
//      }
//       if(typeof(item) == "string"){
//          if(item.length> 1){

//             word.push(item)
//          }else{
//             char.push(item)
//          }
//      }
//    }
//      return {number, char, word}
//  }
//  console.log(
//     seperate(arr)

//  );


//  let arr = [1,3,4,5,6,10,8]

//  function sum(arr){

//      for(let i=0; i<arr.length; i++){
//        for(let j=0 ; j<arr.length ; j++){
//           if(arr[i] + arr[j] === 18){
//             return {i,j}
//           }
//        }
//      }
//  }

//  console.log(
//    sum(arr)
//  );

//  function isAnagram(str1, str2){
//    if(str1.length !== str2.length) return false

//    const charCount = {}

//    for(let char of str1){
//       if(charCount[char] === undefined){
//          charCount[char] = 1
//       }else{
//          charCount[char] = charCount[char] + 1
//       }
//    }
// o7@2026#o7

//    for(let char of str2){
//       if(charCount[char] === undefined){
//          return false;
//       }else if (charCount[char] === 0){
//          return false
//       }else{
//          charCount[char] = charCount[char] -1
//       }
//    }

//    return true
//  }

//  console.log(

//    isAnagram("silent", "listen")
//  );


// console.log("Strat");

// setTimeout(() => {
//    console.log("Timeout");
// }, 0);

// Promise.resolve().then(
//    () => {
//       setTimeout(() => {
//          console.log("Promise");
//       }, 2000);

//    }
// )

// console.log("End");



// function twoSum(arr){
//     result = 10
//     for(let i=0; i<arr.length; i++){
//       for(let j=i+1 ; j<arr.length; j++){
//          if(arr[i]+ arr[j] == result){
//             return{i,j};

//          }
//       }
//     }
// }
// console.log(
//    twoSum([5,1,2,3,4,5])

// );

// function twoSum(arr, target){

//      left = 0
//      right = arr.length-1

//        for(let i=0; i<arr.length; i++){
//         let sum = arr[left] +arr[right]

//         if(sum == target){
//          return [left,right]
//         }else if(sum < target){
//             left++
//         }else{
//          right--
//         }
//        }
// }
// console.log(
//    twoSum([2, 7, 11, 15],18)
// );

// function twoSumUnsorted(arr , target){
//    let seen = {}

//    for(let i=0; i<arr.length ; i++){
//        let currentNum = arr[i]
//        let neededNum = target - currentNum

//        if(neededNum in seen){
//          return [seen[neededNum] , i]
//        }
//        seen[currentNum] = i
//    }
//    return null
// }
// console.log(twoSumUnsorted([5, 1, 2, 3, 4, 5], 10))


// function maxiof(arr,k){
//     result = 0
//     for(let i=0; i<arr.length; i++){
//       for(let j=i+1 ; j<arr.length; j++){
//          for(let k=i+2; k<arr.length ; k++){

//             if(arr[i]+ arr[j] +arr[k] > result){
//                result = arr[i]+ arr[j] +arr[k]
//          }

//          }
//       }
//     }
//     return result
// }
// console.log(
//    maxiof([2, 1, 5, 1, 3, 2], k = 3)

// );


// function sum(x,...rest){
//    return a+b
// }

// console.log(
//    sum(1,2)
// );

// fun()
// var fun = function () {
//    console.log("will this print");

// }
// fun()

// function fun() {
//    console.log("This  is vaasu");

// }

// fun()
// function fun() {
//    console.log("how are you");

// }
// fun()


// let a = "vaasu"
// let b = "zzzzzzzzz"

// maxLength = Math.max(a.length, b.length)
// let merge = ""
// for(let i=0 ; i<maxLength ; i++){
     
//      if(i<a.length){
//       merge += a[i]
//      }
//      if(i<b.length){
//       merge += b[i]
//      }
// }

// console.log(
//    merge
// );

