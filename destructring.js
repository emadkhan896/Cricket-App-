let players = ["Rohit", "Virat","Shami", "Siraj"]
/*console.log(players[0])
console.log(players[1])
console.log(players[2]*/

let [player1, , player3, player4] = players
console.log(player1)
console.log(player3)
console.log(player4)

let favPlayer = [player1, player2, ...rest] = players
console.log(player1)
console.log(player2)
console.log(rest)


let myDetails = {
    fName : "Emad",
    lName : "Khan",
    Age : 23
}

let {fName, Age } = myDetails
console.log(fName)
console.log(Age)