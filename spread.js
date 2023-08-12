let num1 = [1, 2, 3]
let num2 = [5, 6, 7]
//concatenation of the array 
let finalNum = [...num1, ...num2]
console.log("num1", num1)
console.log("num2", num2)
console.log("finalNum", finalNum)

// Expand the string
let myName = "My Name is Emad Khan"
console.log(myName)
console.log(...myName)

// Add Element in Array
num1 = [10,11,12, ...num1, 23, 34]
console.log("num1", num1)

//concatenatnation of object 
let obj1 = {fname: "Emad", skills:["js", "LWC", "Apex"]}
let obj2 = {lName: "khan", country: "India"}

let finalObj = {...obj1, ...obj2}
console.log(finalObj)

// copy an array of object
let myFruits = ["Apple", "Lichi", "Orange"]
let myFruitsCopy =  [...myFruits] //Shallow Copy
console.log("myFruitsCopy", myFruitsCopy)
myFruitsCopy.push("cherry")
console.log("myFruitsCopy", myFruitsCopy)
console.log("myFruits", myFruits)
