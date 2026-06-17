// 1. Here is the main function. It needs to accept a callback function!
function pressDoorbell(callback) {
    console.log("🚨 Doorbell pressed! Turning on porch lights...");
    callback()
    // YOUR CODE HERE: How do you trigger/run the callback function that was passed in?
    
}

// 2. Here is the custom action the user wants to happen
function sendTextAlert() {
    console.log("📱 [Phone Notification]: Someone is at the front door!");
}

// 3. We call the main function and PASS the custom action into it
pressDoorbell(sendTextAlert);


function grindBeans(callback) {
    setTimeout(() => {
        console.log("☕ 1. Beans ground successfully.");
        callback();
    }, 1000); // Takes 1 second
}

function brewCoffee(callback) {
    setTimeout(() => {
        console.log("💧 2. Coffee brewed successfully.");
        callback();
    }, 1000); // Takes 1 second
}

function serveCoffee() {
    console.log("🎉 3. Coffee served! Enjoy your drink!");
}

// YOUR CODE HERE:
// How do you nest these callbacks so they run in order (1 -> 2 -> 3)?
// grindBeans(function(){
//     brewCoffee(function(){
//         serveCoffee()
//         })
//     })


function greet(callback) {
    console.log("Hello!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet(sayGoodbye);


// 1. You define what a Baker does
function baker(myPhoneRings) {
    console.log("🎂 Baker: I am baking the cake right now...");
    
    // The baker finishes baking and dials the number you handed him!
    myPhoneRings(); 
}

// 2. You define what happens when your phone rings
function myPhoneRings() {
    console.log("📱 You: Awesome, my phone is ringing! I will go pick up the cake.");
}

// 3. YOU ORDER THE CAKE: You call the baker and HAND him your phone number
baker(myPhoneRings);


function grindBeans() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("☕ 1. Beans ground.");
            resolve(); // "I'm done!"
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("💧 2. Coffee brewed.");
            resolve();
        }, 1000);
    });
}

function serveCoffee() {
    console.log("🎉 3. Coffee served!");
}


// YOUR CODE HERE:
grindBeans()

    .then(() => {
        return brewCoffee();
    })

    .then(() => {
        serveCoffee();
    })
   



    // 1. You MUST put the word 'async' before the function to use 'await' inside it
async function makeMyCoffee() {
    console.log("Starting order...");

    // 2. Tell JavaScript to PAUSE and wait for the beans to grind
    await grindBeans(); 

    // YOUR CODE HERE: 
    // How do you tell JavaScript to wait for brewCoffee next, and then run serveCoffee?
    await brewCoffee();

    serveCoffee();
    
}

// Run the master function
makeMyCoffee();