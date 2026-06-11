let arr = [2,5,6]
let arr1 = [1,3,4,8]

let merge = new Array(arr.length+arr1.length)

let i = j = k = 0;

while(i<arr.length && j<arr1.length){
    if(arr[i]<arr1[j]){
    merge[k] = arr[i]
    k++
    i++
    }else{
        merge[k]= arr1[j]
        k++
        j++
    }
}

while(i<arr.length){
    merge[k] = arr[i]
    k++
    i++
}

while(j<arr1.length){
    merge[k] = arr1[j]
    k++
    j++
}
console.log(merge)


let groceryList = ["🍎 Apples", "🍌 Bananas", "🥛 Milk"];

groceryList.forEach(function(x,y){
    console.log(x,y)
})

groceryList.forEach(x => console.log(x))

let playlist = ["Blinding Lights", "Bohemian Rhapsody", "Stayin' Alive"];

playlist.forEach((song , index) => console.log(index+1 , song))



const datas = [
    {name:"Ajay", profession:"Software Engineer"},
    {name:"Anuj", profession:"Software Engineer"}
]