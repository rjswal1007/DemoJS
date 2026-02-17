/// Objects ///



let person = {
    name: 'ratnesh',
    age: 20,
    id: 12016609,
    city: 'Gurugram'
};

console.log(person.id)



// modify

let person1 = {
    name: 'ratnesh',
    age: 20,
    id: 12016609,
    city: 'Gurugram'

};
person1.age=30;

console.log(person1)

// same as add new , Delete 


// Object insid eobject 

let person2 = {
    name: 'ratnesh',
    age: {
        num: 20,
        id: 12016609,
        city: 'Gurugram'
    }

    };
    console.log(person2.age.num);



// Object inside array /// Important



let user = [

   {name: 'ratnesh', age:22},
   {name: 'shyam', age:25}

]

console.log(user[0].age);
console.log(user[0].name);
console.log(user[1].age);
console.log(user[1].name);

