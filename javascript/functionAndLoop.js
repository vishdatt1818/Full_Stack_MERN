let person_name = "Vishnu"
console.log(person_name);


let num1= 10
let num2= 40

console.log(num1-num2);
console.log(num1+num2);
console.log(num1*num2);
console.log(num1/num2);


// for(let i=0 ; i<=50 ; i++){f
//     if(i%2 ===0 ){
//         console.log(i);
        
//     }
// }

for(let i=0 ; i<6 ; i++){
    let k =''
    for(let j=0 ; j<i ; j++){
        k = k + "*"
        
    }
    console.log(k);
    
}

for(let i=1 ; i<11 ; i++){
    console.log(`6 x ${i} = ${6*i}`);
    
}

console.log(typeof("sdfsdf"));

function posNeg(x) {
    if(x < 0){
        console.log("negative no");
        
    }else{
        console.log("positive no");
        
    }
}

posNeg(234234)

const evenOdd = function(x){
    if(x%2 === 0 ){
        console.log("Even no");
        
    }else{
        console.log("odd no");
        
    }
}
evenOdd(324324)

let stringNumber = (x) =>{
    if(typeof(x) === "number"){
        console.log("Entered text is number");
        
    }else{
         console.log("Entered text is text");
    }
}

stringNumber(32423432.6676)

console.log(typeof(32423424.23424324));


const square = (x) => x*x;

let bb = square(5)
console.log(bb);

