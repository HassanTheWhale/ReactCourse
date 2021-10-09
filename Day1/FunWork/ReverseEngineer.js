
let universes = [
    {},
    {
        villains: [
            {},
            { name: "Venom" }
        ]
    }
];

let sports = [
    {},
    {
        team: [
            {
                activePlayers: [
                    {}, {}, {},
                    {name: "Lebron"}
                ]
            }
        ]
    }
];

let farms = [
    {
        stocks: {
            fruits: [
                {  name: "Apple" }
            ]
        }
    }
]
console.log(universes[1].villains[1].name) //Venom
console.log(sports[1].team[0].activePlayers[3].name) //Lebron
console.log(farms[0].stocks.fruits[0].name); //Apple