// console.log("Strat");

// Promise.resolve().then( () => console.log("Promise"))

// setTimeout(() => {
//     console.log("Timeout");
    
// }, 0);

// console.log("End");


// async function fetchUserDashboard() {
//     // 1. Ask for the data and WAIT for the server to reply
//     const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
//     // 2. See what we got
//     console.log(userResponse);
// }

// fetchUserDashboard();clearInterval


// async function fetchUserDashboard() {
//     const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    
//     // Unpack the data and WAIT until it's finished unpacking
//     const user = await userResponse.json();
    
//     // Now we can read it like normal JS!
//     console.log("User Name is:", user);
// }

// fetchUserDashboard();

async function fetchUserDashboard() {
    // 1. Get the user
    const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await userResponse.json();
    
    console.log(`Got user: ${user.name}. Now fetching their todos...`);

    // 2. Use user.id to fetch their specific todos
    const todosResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user.id}`);
    const todos = await todosResponse.json();

    // 3. Print the result
    console.log(`Success! Found ${todos.length} tasks.`);
    console.log(`First task title: ${todos[0].title}`);
}

fetchUserDashboard();