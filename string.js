const name = "ratnesh"
const lastname = "jasiwal"


// one method 

console.log (name + lastname);


const nameG = new String('subway')

console.log(nameG[0]);
console.log(nameG.__proto__);
console.log(nameG.length);
console.log(nameG.charAt(3));
console.log(nameG.indexOf('a'));

// count start to zero 
const newString = nameG.substring(0, 3)
console.log(newString);

//count start to negative 

const anotherString = nameG.slice (-5, 3);
console.log(anotherString);


// "Trim()" used for the remove the starting and ending space


const oneString = String ("  raj kumar  ")
console.log(oneString);
console.log(oneString.trim()); // Here is used trim()

// Change the Url Or Edit Url


const url = "https://naturaldroponline.com"

console.log(url.replace('online','co'));
