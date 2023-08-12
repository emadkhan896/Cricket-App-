let myDetails = {
    "fName" : "Emad",
    "lName": "khan",
    "age" : 23,
    skills : ["HTML", "CSS", "JS", "APEX", "LWC"]
}
console.log("myDetails", myDetails)
console.log(typeof myDetails)

// json.stringify --> convert object to string
let jsonString = JSON.stringify(myDetails)
console.log(jsonString)
console.log(typeof jsonString)

// json.parse --> convert string into object
let jsonObject = JSON.parse(jsonString)
console.log(jsonObject)
console.log(typeof jsonObject)

// Modify the property --> "." Notation
myDetails.dob = "01/06/2000"
console.log(myDetails)

myDetails.age = 50
console.log(myDetails)

// '[]' modify value using bracket 
myCountry = "country"
myDetails[myCountry] = "india"
console.log(myDetails)

myDetails["myCity"] = "pune"
console.log(myDetails)

//Acess the value from object '.', '[]'

let myage = myDetails.age
console.log("myage", myage)


let city = myDetails["myCity"]
console.log("city", city)