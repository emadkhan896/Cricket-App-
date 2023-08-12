let num1 = 10
let num2 = "20"
console.log(typeof num1, typeof num2)
if(isNaN(num2)){
    console.log("conversion is not done beacuse input number is not a number")
}else{
console.log(num1 + Number(num2))
}

// Ternary Operator 
let age = 17
let output = age < 18 ? "not Adult" : "Adult"
console.log(output)