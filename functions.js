// function basic 


function Myname () {
    // console.log(Myname);
}

Myname()

// add two nubers 

function addTwoNumber (num1, num2) { 
    // console.log(num1 + num2);

}
addTwoNumber(3, 1) 


function loginUser(username = "sam"){
    if (username === undefined) {
        console.log("Please enter the user name");
        return
        
    }
    return `${username} just logged in`

}

// console.log(loginUser("RajRam"))



// Calculate the cart in function

function calculateCartPrice (...num1){  //   this is rest operators (...)
    return num1

}
// console.log(calculateCartPrice(200,300,400,500))


// object in function 

const user = {
    username: "rajt",
    price: 122

}
function handelObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}

handelObject(user)


// Array in obeject


const mynewArray = [200,300,4000,6000]

function returnSecondvalue(getArray){
    return getArray[3]
}
console.log(returnSecondvalue(mynewArray));