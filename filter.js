const myNum = [1, 3, 4, 5, 6, 7]

// first type 

const newNum = myNum.filter((num) => {
    return num > 4

})

console.log(newNum);

// Second types 

const newNum1 = []

myNum.forEach((num) => {
    if (num < 4) {
        newNum1.push(num)
    }
})
// console.log(newNum1);

const books = [
    { tittle: 'book One', genre: 'Fiction', publish: 1981, edition: 2004 },

    { tittle: 'book two', genre: 'Non-Fiction', publish: 1985, edition: 2009 },

    { tittle: 'book Three', genre: 'Histroy', publish: 2001, edition: 2012 },

    { tittle: 'book four', genre: 'Geo', publish: 1989, edition: 2000 },

    { tittle: 'book five', genre: 'Math', publish: 2000, edition: 2014 },


    { tittle: 'book Six', genre: 'Fiction', publish: 1999, edition: 2022 },

    { tittle: 'book Seven', genre: 'Science', publish: 1888, edition: 2012 },

    
];


//******** Maps & Filter ************//

  
const userbooks = books.filter ( (BK) => BK.genre === 'Fiction')


console.log(userbooks);

const userbooks2 = books.filter ( (BK) => BK.publish >=2000 )


console.log(userbooks2);



const myArr = [1,2,3,4,5,6,7,8];

const number = myArr
.map( (number) => number + 10) 
// .map( (number) => number * 5) 


console.log(number);


