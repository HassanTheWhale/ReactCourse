//Test 1
//How to make this code run?
//books[2].authors[1].name | Mohammad

let books = [
    //book 1
    {
        name: "Hello World Part 1",
        authours: [
            {name: "Hassan", age: 19},
            {name: "Sarah", age: 21}
        ]
    },
    //book 2
    {
        name: "Hello World Part 2",
        authours: [
            {name: "Ali", age: 22},
            {name: "Moudhi", age: 21}
        ]
    },
    //book 3
    {
        name: "Hello World Part 3",
        authours: [
            {name: "Sami", age: 10},
            {name: "Mohammad", age: 24}
        ]
    }
];

console.log( books[2].authours[1].name )
console.log("Books: ");
console.log(books);

//Test 2
//How to make this code run?
//sportsman[0].name | Tennis

let sportsman = [
    {name: 'Tennis'},
    {name: 'Booling'}
]

console.log( sportsman[0].name )

//Test 3
//How to make this code run?
//cars[1] | { brand: 'BMW', color: 'Grey'}

let cars = [ 
    {
        brand: "Ford",
        color: "Blue"
    },
    {
        brand: "BMW",
        color: "Grey"
    }
]

console.log( cars[1] )

//Test 4
//How to make this code run?
//classroom[0].student[0] | { name: 'Salem', age: 12 }

let classroom = [
    {
        student: [
            {
                name: "Salem",
                age: 12
            }
        ]
    }
]

console.log( classroom[0].student[0] );