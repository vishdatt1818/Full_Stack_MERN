// let promise = new Promise((res , rej) => {
//     setTimeout(() => {
//         rej("data rece")
        
//     }, 2000);
// })

// promise.then((data) =>{
//     console.log(data);
    
// }).catch((err) =>{
//     console.log("error" ,err);
    
// })


function getUser() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({
                id: 101,
                name: "Vishnu"
            });
        }, 1000);

    });
}


function getOrders(userId) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve([
                {
                    id: 501,
                    product: "Laptop"
                }
            ]);
        }, 1000);

    });
}


function getPayment(orderId) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({
                orderId: orderId,
                amount: 50000,
                status: "Paid"
            });
        }, 1000);

    });
}


// Calling the functions

getUser()
    .then((user) => {

        console.log("User:", user);

        return getOrders(user.id);

    })
    .then((orders) => {

        console.log("Orders:", orders);

        return getPayment(orders[0].id);

    })
    .then((payment) => {

        console.log("Payment:", payment);

    })
    .catch((err) => {

        console.log("Error:", err);

    });



//     async function test() {

//     try {

//         let user = await getUser();

//         console.log("User:", user);


//         let orders = await getOrders(user.id);

//         console.log("Orders:", orders);


//         let payment = await getPayment(orders[0].id);

//         console.log("Payment:", payment);

//     }
//     catch (err) {

//         console.log("Error:", err);

//     }

// }

// test();