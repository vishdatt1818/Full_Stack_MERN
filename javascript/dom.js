

let first = document.getElementById("first")
function changeImg(){
    first.src = "https://images.unsplash.com/photo-1601314167099-232775b3d6fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
     first.style.transform = "translateY(250px) scale(1.4)"
    first.style.borderRadius = "50%"
}

function resetImg(){
    first.src = "https://images.unsplash.com/photo-1516617442634-75371039cb3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww"
       first.style.transform = "rotate(0deg)";
        first.style.borderRadius = "0%";
}

function changeImg1(){
    document.getElementById("first").src = "https://plus.unsplash.com/premium_photo-1710119487743-48959c984d45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
    first.style.transform = "translateX(300px) scale(1.4)";
    first.style.borderRadius = "50%"
}

function resetImg1(){
    document.getElementById("first").src = "https://images.unsplash.com/photo-1516617442634-75371039cb3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww"
     first.style.transform = "rotate(0deg)";
        first.style.borderRadius = "0%";
}

function changeImg2(){
    document.getElementById("first").src = "https://images.unsplash.com/photo-1723384747376-90f201a3bd55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D"
     first.style.transform = "translateX(-300px) scale(1.4)";
    first.style.borderRadius = "50%"
}

function resetImg2(){
    document.getElementById("first").src = "https://images.unsplash.com/photo-1516617442634-75371039cb3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww"
        first.style.transform = "rotate(0deg)";
        first.style.borderRadius = "0%";
}

let changeImg3 = () => {
    document.getElementById("first").src = "https://images.unsplash.com/photo-1631631480669-535cc43f2327?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww"
      first.style.transform = "translateY(250px) scale(1.4)"
    first.style.borderRadius = "50%"
}

let resetImg3 = () => {
    document.getElementById("first").src = "https://images.unsplash.com/photo-1516617442634-75371039cb3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGltYWdlfGVufDB8fDB8fHww"
     first.style.transform = "rotate(0deg)";
        first.style.borderRadius = "0%";
}

  const countDisply = document.querySelector("#countDisply")
        const btn = document.querySelector("#btn")
        
        let count = 0;
        
        btn.addEventListener("click", () =>{
            count++;
            countDisply.textContent = count;
        })
        
        const body = document.querySelector("body")
        const btn1 = document.querySelector("#btn1")

        btn1.addEventListener("click" , () =>{
            if(body.style.backgroundColor === "white"){
                body.style.backgroundColor = "teal"
            }else{
                body.style.backgroundColor = "white"
            }
        })