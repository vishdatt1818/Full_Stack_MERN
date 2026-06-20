
// let a = 10;
// let b = 5;
// let c = 60;

// if (a > b) {
//     if (a > c) {
//         console.log("a is greatest");
//     } else {
//         console.log("c is greatest");
//     }
// } else {
//     if (b > c) {
//         console.log("b is greatest");
//     } else {
//         console.log("c is greatest");
//     }
// }


// const user = {
//   name: "Alex",
//   age: 28,
//   role: "Developer"
// };

// // Iterating over the object keys
// for (const key in user) {
//   // Accessing the property name (key)
// //   console.log( key,user[key]); 
  
//   // Accessing the property value using bracket notation
// //   console.log("Value:", user[key]); 
// }



// // Function Declaration
// function square(x) {
//   return x * x;
// }

// // Function Expression
// const squareExpr = function(x) {
//   return x * x;
// };


// // Explicit Return (with curly braces)
// const squareArrow = (x) => {
//   return x * x;
// };

// // Implicit Return (single-line shortcut)
// const squareShort = x => x * x;

// console.log(

//     squareArrow(6)
// );


// const x= [1,2,3,4,5]
// const y= [4,5,6,7,8,9,0]

// let common = []

// for(let i=0 ; i <x.length ;i++){
//     for(let j=0 ;j<y.length ; j++){
//         if(x[i] == y[j]){
//             common.push(x[i])
//         }
//     }
// }
// console.log(common);

// for( let v of x){
//     if( y.includes(v)){
//         console.log(v);
        
//     }
// }

// const dub= [4,5,4,5,6,7,8,9,0]

// let box = {}


// for(let i=0 ; i <dub.length ;i++){
//     let x = dub[i];
//     if(box[x] === undefined){
//         box[x] = 1
//     }else{
//         box[x]++
//     }
// }
// console.log(box);

// const maxx= [4,5,4,5,6,7,8,9,0]

// let max =0

// for( let v of maxx){
//     if(v > max){
//         max = v
//     }
// }
// console.log(max);


// const countVowels = (str) => {

//     let count = 0;
//     let vowel = "aeiouAEIOU"
//     for(let v of str){
//     if(vowel.includes(v)){
//         count++
//     }
//     }
//     return count
// }

// console.log(

//     countVowels("adfdfe")
// );

// const fact = (x) => {
//     let num = 1

//     for(let i=1 ; i <=x ;i++){
//         num = num *i
//     }
//     return num
// }
// console.log(

//     fact(5)
// );


// let sen = 'count the words in this sentence'

// const wordsCount = (str) =>{
//     return str.split(" ").length
// }
// console.log(wordsCount(sen));


// const user = { name: "Alex", roles: ["admin", "editor"] };

// const { name, roles } = user; 



// const displayRoles = () => roles.map(role => `Role: ${role}`);

// const isAdmin = roles.includes("admin") && "Access Granted";

// console.log(name);          
// // Output: "Alex"

// console.log(displayRoles()); 
// // Output: [ "Role: admin", "Role: editor" ]

// console.log(isAdmin);       
// // Output: "Access Granted"


// const user = { name: "Alex", roles: ["free", "premium"] };
// const { roles } = user;
// console.log(roles);


// // You want to check if they are premium OR admin
// const show4KButton = roles.includes("premium" || "admin") && "🟢 Show 4K Button";

// console.log(show4KButton);

// const user = { name: "Chris", roles: ["admin"] };
// const { roles } = user;
// console.log(roles);
// console.log(user.name);


//  const show4KButton =( roles.includes("premium") || roles.includes("admin") ) && "🟢 Show 4K Button";
//  console.log(show4KButton);

//  const maxx= [4,5,4,5,6,7,8,9,0]

//  maxx.forEach((x) => {
//     // console.log(x*x);
    
//  })


 async function fetchUserDashboard() {
    try{
        console.log("Fetching user data");

        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');

        const user = await userResponse.json();

        console.log(`User found: ${user.name}. Fetching their to-do list...`);

        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`);

        await todoResponse.json()

        todoResponse.slice(0,3).foreach(todo =>)
    }catch(error){
            console.error("An error occurred while loading the dashboard:", error.message);
    }
    }

    fetchUserDashboard();

//     const user = {
//     name: "Chris",
//     roles: ["admin"]
// };

// const { name, roles } = user;

// console.log(name);
// console.log(roles[0]);
    
 