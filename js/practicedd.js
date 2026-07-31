// function isPalindromeBrute(s){
//     let reversed = ""

//     for(let i=s.length-1 ; i>=0 ; i--){
//         reversed += s[i]
//     }

//     if(s === reversed){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(
//     isPalindromeBrute("check")
// );


// function isPalindrome(s){
//     let left =0
//     let right =s.length-1

//     while(left<right){
//         if(s[left] !== s[right]){
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }
// console.log(

//     isPalindrome("madam")
// );

// function twoSum(arr,target){
     
//     for(let i=0 ; i<arr.length ; i++){
        
//        for(let j=i+1 ; j<arr.length ; j++){
//            if(arr[i]+arr[j] == target){
//             return[i,j]
//            }
//        }

//     }
// }
// console.log(
//     twoSum([1,2,3,4,5,6,],9)
// );

// function twoSum(arr,target){
//    let left = 0
//    let right = arr.length-1

//    while(left<right){
//     currentSum = arr[left]+arr[right]
//        if(currentSum === target){
//         return [left,right]
//        }else if(currentSum>target){
//         right--
//        }else{
//         left++
//        }
    
//    }
// }
// console.log(
//     twoSum([1,2,3,4,5,6,],6)
// );

function sum(...args){
    return args.reduce((acc,citem) =>  acc+citem,0)
}

console.log(sum(1,2,3));

let arr = [1,2,4,5,6,6,7,7]

function keepUnique(arr){
    u = []
   
    for(let i=0; i<arr.length; i++){
        isDuplicate = false
         for(let j=0 ; j<u.length; j++){
            if(arr[i] === u[j]){
                isDuplicate = true
                break
            }
        }
        if(!isDuplicate){
             u.push(arr[i])

         }
    }
    return u
}
console.log(keepUnique(arr));

let a ="vaasu"
let b= "singh"

output ="vsaian"