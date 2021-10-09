//loop and print - there are two loops....
// Name, Age and hobbies

let players = [
    {
        name:'Reem',
        age:100,
        hobbies:['Running','Organizing']
    },
    {
        name:'Moudhi',
        age:89,
        hobbies:['Breaking spirits','Acting innocent']
    },
]

function printPlayer(info) {
    console.log("Name: " + info.name);
    console.log("Age: " + info.age)
    
    let hobbies = "";
    info.hobbies.map(printHobbies);
    function printHobbies(x) {
        hobbies += (x + ", ");
    }

    console.log("Hobbies: " + hobbies);
    console.log("");
}

players.map(printPlayer)