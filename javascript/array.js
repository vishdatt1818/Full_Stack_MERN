// let arr = [2,5,6]
// let arr1 = [1,3,4,8]

// let merge = new Array(arr.length+arr1.length)

// let i = j = k = 0;

// while(i<arr.length && j<arr1.length){
//     if(arr[i]<arr1[j]){
//     merge[k] = arr[i]
//     k++
//     i++
//     }else{
//         merge[k]= arr1[j]
//         k++
//         j++
//     }
// }

// while(i<arr.length){
//     merge[k] = arr[i]
//     k++
//     i++
// }

// while(j<arr1.length){
//     merge[k] = arr1[j]
//     k++
//     j++
// }
// console.log(merge)


// let groceryList = ["🍎 Apples", "🍌 Bananas", "🥛 Milk"];

// groceryList.forEach(function(x,y){
//     console.log(x,y)
// })

// groceryList.forEach(x => console.log(x))

// let playlist = ["Blinding Lights", "Bohemian Rhapsody", "Stayin' Alive"];

// playlist.forEach((song , index) => console.log(index+1 , song))



// const datas = [
//     {name:"Ajay", profession:"Software Engineer"},
//     {name:"Anuj", profession:"Software Engineer"}
// ]



// for(let i=0 ; i<5 ; i++){
//     for(let j=0 ; j<5 ; j++){
//         console.log("*");
        
//     }
//     console.log("<br>");
    
// }

// for(let i=0 ; i<5 ; i++){
//     for(let j=0 ; j<5 ; j++){
//         console.log(`${i} x ${j} = ${i*j}`);
        
//     }
// }

// n=28

// let isPrime = true
// for(let i=2 ; i<n ; i++){
//     if(n%i === 0){
//         isPrime = false
//         console.log(`${n} is not prime`);
//         break
    
//     }
// }
// if(isPrime){
//     console.log("no is Prime");
    
// }

// n=28;

// p=0;

// for(let i=1 ; i<n ; i++){
//     if(n%i === 0){
        
//         console.log(i);
//         p=p+i
       
        
//     }
// }
// if(p === n){
//     console.log("Perfect no");
    
// }else{
//     console.log("not Perfect No");
    
// }


let no= 12345;
let strNo = no.toString(); // Convert number to "1231231"

let reverseno= '';

let i=strNo.length-1;
while(i>=0){
    reverseno += strNo[i];
    i--
}
console.log(reverseno);

// let no = 1231231;
// let reverseno = 0;

// while (no > 0) {
//     let lastDigit = no % 10;                  // Gets the last digit (e.g., 1)
//     reverseno = (reverseno * 10) + lastDigit; // Shifts existing digits left and adds the new one
//     no = Math.floor(no / 10);                 // Removes the last digit from the original number
// }

console.log(reverseno); // Outputs: 1321321

// count =1

// for(let i=0 ; i<5 ; i++){

//     let str = '';
//     for(let j=1 ; j<=i ; j++){
//         str = str + count

//         // console.log(count);
//         count++;
        
//     }
//     console.log(str)
// }


// for(let i=1 ; i<=5 ; i++){

//     let str = '';

//     for(let j=1 ; j<=5-i ; j++){
//         str = str + " "
//     }
  
//     for(let k=1 ;k<=2*i-1 ; k++){
//         str = str + "*"
//     }
//         console.log(str)
        
//     }
//     console.log("hello");

// for (let i = 0; i < 5; i++) {
//     let str = '';

//     // 1. Add decreasing spaces
//     for (let j = 0; j < 5 - i - 1; j++) {
//         str = str + " ";
//     }

//     // 2. Add increasing stars (1, 3, 5, 7, 9)
//     for (let k = 0; k < 2 * i + 1; k++) {
//         str = str + "*";
//     }

//     // 3. Print the complete row
//     console.log(str);
// }



// for(let i=5 ; i>=0 ; i--){

//     let str = '';

//     for(let j=1 ; j<=5-i ; j++){
//         str = str + " "
//     }
  
//     for(let k=1 ;k<=2*i-1 ; k++){
//         str = str + "*"
//     }
//         console.log(str)
        
//     }
//     console.log("hello");


//  for(let i=1 ; i<=5 ; i++){

//     let str = '';

//     for(let j=1 ; j<=5 ; j++){
//         if(i == 1 || i==5 || j==1 || j==5){

//             str = str + "*"
//         }else{
//             str =str +" "
//         }
//     }
//     console.log(str);
    
// }

for(let i=1 ; i<=5 ; i++){

    let str = '';

    for(let j=1 ; j<=5-i ; j++){
        str = str + " "
    }
  
    for(let k=1 ;k<=2*i-1 ; k++){
        if(i==5 || k ==1 || k== 2*i-1){

            str = str + "*"
        }else{
            str = str + " "
        }
    }
        console.log(str)
        
    }


 
for(let i=1 ; i<=5 ; i++){

    let str = '';
    for(let j=1 ; j<=i ; j++){
        if((i+j)%2 == 0){

            str = str + "1";
        }
        else{
             str = str + "0";
        }
    }
    console.log(str);
    
} 

async function fetchUserDashboard(){

}

// for(let i=0 ; i<6 ; )

let ticketCounter = 50;

// POST-INCREMENT: You get 50, then it rolls over to 51
let myTicket = ticketCounter++; 

console.log(myTicket);      // 50 (The ticket in your hand)
console.log(ticketCounter); // 51 (The number waiting for the next person)



