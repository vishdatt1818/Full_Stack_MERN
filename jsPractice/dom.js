let output = document.getElementById("show")
function logic(e){
    e.preventDefault()
   let email =  document.getElementById("exampleInputEmail1").value
    let pass = document.getElementById("exampleInputPassword1").value
    if(email === ""){
        output.innerText= "Kindly fill the value"
    }
   else if(email === "admin@gmail.com" && pass === "123"){
    document.getElementById("show").innerText ="login Success"
    output.style.color = "green"
   }else{
     document.getElementById("show").innerText ="login failed"
     output.style.color = "red"
   }
}

function show(){
    const eleInput = document.querySelector("#showPass")
    const btn =  document.getElementById("btn1")
    if(btn.textContent == "show"){
        showPass.type = "text"
        btn.innerText ="Hide"
    }else{
        btn.innerText ="show"
        showPass.type = "password"

    }
}

let countBtn = document.getElementById("countChar")
let countOutput = document.getElementById("count")
let label = document.querySelector("label span")

countOutput.addEventListener("keypress", ()=> {
        label.innerHTML=countOutput.value.length
})