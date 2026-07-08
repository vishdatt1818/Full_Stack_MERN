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

let largest = (arr) =>{
    let lar = arr[0]

    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]> lar){
            lar = arr[i]
        }
    }
    return lar
}
console.log(
    largest([4, 9, 2, 7])

);

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

let arr = [2,4,4,5,6,6,7]
dup =[]
 for(let i=0 ; i<arr.length ; i++){
     for(let j=i+1 ; j<arr.length ; j++){
            if(arr[i] == arr[j]){
                dup.push(arr[i])
            }
     }
 }
 console.log(dup);
 
