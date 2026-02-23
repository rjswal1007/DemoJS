// For Loop 

for (let i = 1; i<=10; i++) {
    console.log(i);
}

// loop in between somew this write 

for (let index = 0; index <8; index++) {
    const element = index;
    if (element == 5){
        // console.log("5 is Good number" );

    }
    
    // console.log(index);
}

let myArr = ["raj","Tina","Lalman"];
myArr.push("Ratnesh");

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
    
}


// Break and continue 


// break

for (let index = 1; index <=10; index++) {
    if(index == 5){
        // console.log('Good');
        break;
    }
    // console.log(index);

}


// continue

for (let index = 1; index <=10; index++) {
    if(index == 5){
        // console.log('Good');
        continue;
    }
    // console.log(index);

}


///   While Loop

let i = 2;

while (i <=8){
    console.log(i);
    i++;
}

// While with array

let arr1 = ['sandeep', 'shyam', 'jasneek'];
let arr = 0;
while (arr < arr1.length) {
    // console.log(arr1[arr]);
    arr = arr + 1;
}   




// DO while Loop 

let score = 10;

do {
    // console.log(score);
    score++
    
} while (score <= 10);


// for of 


const arr3 = [1,2,3,4,5]

for (const num of arr3) {
    // console.log(num);
    
}

// Maps

// In map If you have to enter the 2 country name it will we print only once.


const map = new Map()  
map.set('IN', "India")
map.set('USA', "United state of America")

// console.log(map);


// string 
 
for (const [key, value] of map) {

    // console.log(key, ':-', value);    
}

// For In 

const programming1 = ["java","cpp"]

for (const key in programming1) {

    // console.log(programming[key]);
    
    
}

const coding = ["js","cpp","node"]
 
coding.forEach( (iteam, index, arr) => {
    console.log(iteam, index, arr);
    
});



const myCoding = [
    {
        language: "javaSCript",
        languageFileName: "js"
    },

    {
        language: "Python",
        languageFileName: "PY"
    },

    {
        language: "C++",
        languageFileName: "CPP"
    }
]

myCoding.forEach(iteam => {
    console.log(iteam.language)  // here you have to find all data acording to your need
    
});