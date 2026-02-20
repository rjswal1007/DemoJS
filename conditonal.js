// if else

let age =8;

if (age >= 18) {
    // console.log('Adult');

} else {
    // console.log('Minnor');
}

// if else if



let mark =49;

if (mark>=85){
    // console.log("Grade A");
} else if (mark>=60){
    // console.log("Grade B");
    
}else if (mark<=50){
    // console.log("Fail");
}

// && and || 


// && --> this is used for both 

//  || --> this is used for the OR

const userLogIn = true
const enterwithcard = true
const loginbyemail = true
const loginbygoogle = false

if (userLogIn && enterwithcard){

    console.log('This is best manner');
}


if (loginbyemail || loginbygoogle){
    console.log("Now it is correct");
}

// Switch

let day = 4;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid");
}
