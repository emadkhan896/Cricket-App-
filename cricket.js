const game = {
    team1: "India",
    team2: "Australia",
    players: [
      [
        "Dhoni",
        "Sharma",
        "Kohli",
        "Rahul",
        "Jadeja",
        "Pandey",
        "Ashwin",
        "Chahal",
        "Khan",
        "Bhumra",
        "Shami",
      ],
      [
        "Wade",
        "Cummins",
        "Green",
        "Maxwell",
        "Finch",
        "Hazelwood",
        "Marsh",
        "Stoinis",
        "Richardson",
        "Starc",
        "Warner",
      ],
    ],
    Century: ["Kohli", "Sharma", "Warner", "Maxwell"],
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

// Create one player array for each team (variables 'players1' and 'players2')
  const [players1, players2] = game.players;
  //console.log(players1)
  //console.log(players2)

// The first player in any player array is the wicketkeeper and the others are field players
const [Ind, ...fieldplayers1] = game.players[0]
console.log("wicketkeeper for Team 1", Ind)
console.log("Field players for Team 2", fieldplayers1)

const [Aus, ...fieldplayers2] = game.players[1]
console.log("wicketkeeper for Team 1", Aus)
console.log("Field players for Team 2", fieldplayers1)

//  Create an array 'allPlayers' containing all players of both teams (22 players)
let allPlayers = [...players1, ...players2]
console.log(allPlayers)

// During the game, India (team 1) used 3 substitute players. So create a new array ('players1Final') 
// containing all the original team1 players plus 'Sandeep', 'John' and 'Sunil'

let players1Final = [...players1, 'Sandeep', 'John', 'Sunil']
console.log(players1Final)

//  Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

const {team1, x:draw, team2} = game.odds
console.log('Odds for Team 1', team1)
console.log('Odds for Draw ', draw)
console.log('Odds for Team 2', team2)

// he team with the lower odd is more likely to win.Print to the console which team is more likely to win, 
// WITHOUT using an if/else statement or the ternary operator.

const likelyWinner = (team1 < team2 && game.team1) || game.team2
console.log(`the more likely winner is : ${likelyWinner}`)

// Loop over the game.Century array and print each player name to the 
// console, along with the Century number (Example: "Century 1: Kohli")

for(let [index, player] of game.Century.entries()){
    let centuryNumber = index + 1
    console.log(`Century ${centuryNumber}: ${player}`)
}

// Use a loop to calculate the average odd and log it to the console 

const oddValues = Object.values(game.odds)
let totalOdds = 0

for(const odd of oddValues){
    totalOdds += odd
}

const averageOdd = totalOdds/ oddValues.length
console.log(`Average odd: ${averageOdd.toFixed(2)}`)