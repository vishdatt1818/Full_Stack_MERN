console.log("Strat");

Promise.resolve().then( () => console.log("Promise"))

setTimeout(() => {
    console.log("Timeout");
    
}, 0);

console.log("End");
