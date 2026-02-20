// block scope jo {} iske indar hota hai 

// Globle jo kahe bhe ho 

// var is not used becuase the var is block scoping 

if (true) {
    let a = 20
    var b = 50
    const c = 60

}

// console.log(b);


// Netsed Scope

function one(){
    const username = "Ratnesh"
    function two(){
        const webite = "youtube"
        console.log(username);
    }
    // console.log(webite);

    two()
}  

one ()



// "this" for all data print 

// Arrow function

const addtwonum = (num1, num2) => {
    return(num1 + num2)
}
console.log(addtwonum(3,4));



// Impeset returns   [without using return we can execute  the code in a single line]
// if you are using the obects do you have to use like this ({""})

const addtwonum1 = (num1, num2) => (num1 + num2)
console.log(addtwonum1(3,4))

