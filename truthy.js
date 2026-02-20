//********falsy value**********//


// false, "", 0, -0, BigInt On, null, Undefine, NaN

//********truthy value************//


// "0", 'false', " ", [], {}, function(){} 



const userEmail = " "

if (userEmail) {
    console.log("Got the mail");

}else {

    console.log("Please enter the mail");
}


const mailtoStudent = ['All student']

if (mailtoStudent) {
    console.log("Thanks");
}else {
    console.log("Not good")
}
