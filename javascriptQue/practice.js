// let a = [1,2,3,4,5,5,6,6,7]

// let uni = []

// for(let i=0; i<a.length ; i++){
//     let duplicate = false
//     for(let j=i+1 ; j<=a.length ; j++){
//             if(a[i] === a[j]){
//                 duplicate = true
//                 break
//             }
//         }
//         if(!duplicate){
//             uni.push(a[i])
//         }
// }
// console.log(uni);

// console.log(typeof(NaN));

// console.log({} + []);

// console.log(typeof([]));

function abc(){
    return
    {
        a:1
    }
}
// console.log(abc());

// let arr = [1,0,4,5,0,5,]

// function moveZero(arr){
//     let newArr = []
//     let index = 0
//     for(let i=0; i<arr.length ; i++){
//         if(arr[i] !== 0){
//             newArr.push(arr[i])
//         }
//     }
//     while(newArr.length<arr.length){
//         newArr.unshift(0)
//     }

//     return newArr

// }
// console.log(
//     moveZero(arr)
// );


// function moveZeroInPlace(arr) {
//     let insertPos = 0;

//     // Shift all non-zero elements to the front
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             arr[insertPos] = arr[i];
//             insertPos++;
//         }
//     }

//     // Fill remaining positions with zeros
//     while (insertPos < arr.length) {
//         arr[insertPos] = 0;
//         insertPos++;
//     }

//     return arr;
// }

// let arr = [0, 1, 0, 3, 12];
// console.log(moveZeroInPlace(arr)); 
// Output: [1, 3, 12, 0, 0]

// let a = "aabbccdvvn"

// function getFirstUnique(str){

// let box = {}

// for(let i=0 ; i<a.length ; i++){
//     if(box[a[i]] == undefined){
//         box[a[i]] =1
//     }else{
//         box[a[i]]++
//     }
// }
// for(char of a){
//         if(box[char] === 1){
//             return char
//         }
//     }
// }
// // console.log(box);
// console.log(getFirstUnique(a));

// let a = "madam"

// function palin(str){
//     let left = 0
//     let right = str.length-1

//     while(left<right){
//         if(str[left] !== str[right]){
//             return false
//         }else{
//             left++
//             right--
//         }
//     }
//     return true
// }
// console.log(palin(a));


// let b = "l love javascript"

// console.log(

//     b.split(" ").reverse().join(" ")
// );

let arr = [0, 1, 0, 3, 12,23];

// output = [[0,1],[0,3],[12,23]]

// let output =[]

// for(let i= 0; i<arr.length; i += 2){
//     output.push(arr.slice(i ,i+2))
// }
// console.log(output);

// console.log([] + []);
// console.log([] + {});
// console.log({} + []);

// console.log(0 && "hello");
// console.log("hello" && 0);

// console.log(0 || "js");
// console.log("" || "default");
 
// console.log(a);
// console.log(b);

// var a=b=200

console.log(NaN === NaN);

function sum(a){
  return function(b){
        if(b !== undefined){
            return sum(a+b)
        }
    }
}
console.log(sum((a)));
