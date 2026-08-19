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

// let arr = [0, 1, 0, 3, 12,23];

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

// console.log(NaN === NaN);

// function sum(a){
//   return function(b){
//         if(b !== undefined){
//             return sum(a+b)
//         }
//         return a
//     }
// }
// console.log(sum(1) (43) (3) ());

// let ss = [2,4,6,7,8,9]

// function secondLargest(arr){
//     let largest = 0
//     let secondLargest = 0

//     for( char of arr){
//         if(char > largest){
//             let temp = largest
//             largest = char
//             secondLargest = temp
//         }
//         if(char > secondLargest && char < largest){
//             secondLargest = char
//         }
//     }
//     return secondLargest

// }
// console.log(secondLargest(ss));

    
// function removeDup(arr){
//     let uni=[]
//     for(let i=0 ; i<arr.length ; i++){
//         let isDuplicate = false
//         for(let j =i+1 ; j<arr.length ; j++){
//             if(arr[i] === arr[j]){
//                 isDuplicate = true
//                 break
//             }
//         }
//         if(!isDuplicate){
//             uni.push(arr[i])
//         }
//     }
//     return uni
// }
// console.log(removeDup(arr));

// let x ={}
// y= {name: "vaasu"}
// z= {name: "datt"}
// x[y] = {name: "ram"}
// x[z] = {name: "kapil"}
// console.log(x[y]);

// const a = {name: "aa" , age:23, city: "jal"}
// let b = {...a, name: "rahul"}
// const {name, ...xyz} = a
// console.log(a);

// console.log(xyz, b);
// console.log(name);


// let arr = [2,3,4,5,6,7,8,3,3,3]

// function countFre(arr){
//     let fre ={}
//     for(char of arr){
//         if(fre[char] == undefined){
//             fre[char] =1
//         }else{
//             fre[char] += 1
//         }
//     }
//     return fre
// }
// console.log(countFre(arr));


// let arr = [1,2,3,4,5,6,7]

// function reverseIn(arr){
//     let left = 0
//     let right = arr.length-1

//     while(left<right){
//         let temp = arr[left]
//         arr[left] = arr[right]
//         arr[right] = temp

//         left++
//         right--
//     }
//     return arr
// }
// console.log(reverseIn(arr));

// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 4, 6, 8];

// arr1.push(...arr2).sort((a,b) => a-b )
// console.log(
// arr1
    // arr1.concat(arr2).sort((a,b) => a-b)
// );

// let i = 0
// let j = 0

// result = []

// while(i < arr1.length && j < arr2.length){
//  result.push(arr1[i])
//  i++
//  result.push(arr2[j])
//  j++
// }
// console.log(result);


// let arr = [3, 0, 1];

// function findMissing(arr){
//     let box = {}
//     for(num of arr){
//         if(box[num] == undefined){
//             box[num] = 1
//         }else{
//             box[num]++
//         }
//     }

//     for(let i=0; i<arr.length ; i++){
//         if(!(i in box)){

//         }
//     }
    
// }
// console.log(findMissing(arr));


// const str = "well reverse this"

// function reverse(str){
//     rev = ''

//     for(let i=str.length-1 ; i>0 ; i--){
//         rev += str[i]
//     }
//     return rev
// }
// console.log(
//     reverse(str)

// );

// if([]){
//     console.log("hello");
    
// }else{
//     console.log("else block");
    
// }

// function prime(no){
//     for(let i = 2 ; i<no ; i++){
//         if(no%i == 0){
//             return false
//         }else{
//             return true
//         }
//     }
// }
// console.log(prime(10));

let arr =[3,5,1,2,434,54,64,4]

function sortt(arr){
    

    for(let i =0 ; i < arr.length-1 ; i++){
        for(let j=0 ; j < arr.length -i -1 ; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log(sortt(arr));

