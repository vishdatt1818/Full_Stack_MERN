let no = 1231231;
// let reverseno = 0;

// while (no > 0) {
//     let lastDigit = no % 10;                  // Gets the last digit (e.g., 1)
//     reverseno = (reverseno * 10) + lastDigit; // Shifts existing digits left and adds the new one
//     no = Math.floor(no / 10);                 // Removes the last digit from the original number
// }


let year = 2000;

if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    console.log(year, " leap year");

} else {
    console.log("not leap year");

}


let num = 4;

if (num > 0 && num % 2 === 0) {
    console.log("num is positive even");

} else {
    console.log("num is positive even");

}

let wether = 45;

if (wether >= 35) {
    console.log("very hot");

}
else if (wether >= 25) {
    console.log("hot");

}
else if (wether >= 15) {
    console.log("Pleasant");

} else {
    console.log("very cold");

}


let a = 10;
let b = 55;
let c = 65;

if (a > b) {
    if (a > c) {
        console.log("a is greatest");

    }else{
        console.log("c is greatest");
        
    }
}else{
    if(b>c){
          console.log("b is greatest");
    }else{
        console.log("c is greatest");
    }
}


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



