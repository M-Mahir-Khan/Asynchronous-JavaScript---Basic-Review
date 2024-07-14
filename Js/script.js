// console.log(1); 
// console.log(2);
// setTimeout(()=>{
//     console.log("callback function fired")
// },0);
// console.log(3);
// console.log(4);

// output  
// 1
// 2
// 3
// 4
// callback function fired

// why🤔 the settime callback function is firedat last hmmm.??

//  the reason is the setimeout is fasad funciton which mean in javascript the settimeout is not there it's taking help from browser and told the brower ("plz run this callback after certain time after the time is completed this callback funtion is goes into callback queue after the synchronous code completed the event loop jobs come here. the event loop is a watch dog which mean it's check whether the synchronous code is completed if it is then it will goes in to microtask if the micotask is empty then finally goes into callback queue")

const getTools = () => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)

                resolve(data)
            } else if (request.readyState === 4) {
                reject("could not fetch data")
            }
        })


        request.open("GET", "User.json");
        request.send();
        // UNSENT 0
        // OPENED  1
        // HEADERS_RECEIVED 2
        // LOADING 3
        // DONE 4
    })
}

getTools().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})


// =================== fetch api ==========================

fetch("User.json").then(data => {
    return data.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(errs);
})

// =================== Async & Await ==========================

const getInfo = async () => {
    const response = await fetch("User.json");

    if(response.status !== 200){
        throw new Error("could not fetch data")
    }
    const data = await response.json();
    return data
}

getInfo()
    .then(data => console.log("Resolved",data))
    .catch(err => console.log("Rejected",err.message));