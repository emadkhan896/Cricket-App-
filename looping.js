let myCars = ['Audi', 'BMW', 'Maruti', 'Hyundai', 'Tata']

for(let i = 0; i < myCars.length; i++){
    console.log(`${i+1}. ${myCars[i]}`)
}

// while(condition)
let currentIndex = 0
console.log(myCars.length)
while(currentIndex < myCars.length){
    console.log(`${currentIndex +1}. ${myCars[currentIndex]}`)
    currentIndex = currentIndex + 1
}

// do-while
do{
    console.log("do while loop")
}
while(1==2)

// for-of loop

for(let curritem of myCars){
    console.log(curritem)
}

// index and item 

for(let [index, car] of myCars.entries()){
    console.log(`${index+1}.${car}`)
}

let myDetails = {
    "fName" : "Emad",
    "lName" : "Khan",
    "Age"   : 23
}

// for-of loop in object
for(let curritem of Object.keys(myDetails)){
    console.log("currItem", curritem)
    console.log("property", myDetails[curritem])
}

for(let curritem of Object.values(myDetails)){
    console.log("currItem", curritem)
}

for(let [key, value] of Object.entries(myDetails)){
    console.log('Keys', key)
    console.log('Values', value)
}

// for-in loop 
for(let curritem in myCars){
    console.log("curritem", myCars[curritem])
}

for(let curritem in myDetails){
    console.log(curritem, myDetails[curritem])
}

// Example 
let openingHours = {
    Mon : {open : "10 AM ", closed : "7 PM"},
    Tue : {open : "10 AM ", closed : "7 PM"},
    Wed : {open : "10 AM ", closed : "7 PM"}
}

for(let curritem in openingHours){
    console.log(curritem)
    console.log(openingHours[curritem])

    let {open, closed} = openingHours[curritem]
    console.log(open, closed)
    console.log(`On ${curritem} office start at ${open} and closed at ${closed}`)
}

for(let [day, {open, closed}] of Object.entries(openingHours)){
    console.log(day, open, closed)
    console.log(`On ${day} office start at ${open} and closed at ${closed}`)

}