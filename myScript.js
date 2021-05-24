// Varible Storage
let displayNumber1 = ""
let memory = ""
let selOperator = ""
let result = undefined
const screenDisplay = document.getElementById("screen")
const deLete = document.getElementById("delete")
const diVide = document.getElementById("divide")
const mulTiply = document.getElementById("multiply")
const aDd = document.getElementById("add")
const subTract = document.getElementById("subtract")
const eQual = document.getElementById("equal")
const plus_Negative = document.getElementById("plus_negative")
const dot = document.getElementById("dot")

// Operation Functions
const add = (x, y) => {return x+y}
const subtract = (x, y) => {return x-y}
const multiply = (x, y) => {return x*y}
const divide = (x, y) => {return x/y}

// Operate Function
const operate = (operator, x, y) => {
    switch(operator){
        case "add":
            result= add(x, y);
            displayNumber1 = "";
            memory = "";
            selOperator = "";
            break
        case "subtract":
            result= subtract(x, y);
            displayNumber1 = "";
            memory = "";
            selOperator = "";
            break
        case "multiply":
            result= multiply(x, y);
            displayNumber1 = "";
            memory = "";
            selOperator = "";
            break
        case "divide":
            result= divide(x, y);
            displayNumber1 = "";
            memory = "";
            selOperator = "";
            break
        default:
            return "Operator not Found"
    }
}

// Displaying Values so they fix on Screen with proper Notation
const displayValue = (x) => {
    if (x.toString().length < 12 && x.toString().includes(".") == false){
        screenDisplay.innerHTML = x;
    }else if (x.toString().length >= 12 && x.toString().includes(".") == true) {
        screenDisplay.innerHTML = Number(x).toFixed(9);
    }else if (x.toString().length > 12 && x.toString().includes(".") == false){
        screenDisplay.innerHTML = Number(x).toExponential(2);
    }else{
        screenDisplay.innerHTML = x;
    }
}


// Display Numbers when pressed
document.querySelectorAll('.button').forEach(item => {
    if (parseInt(item.innerHTML) >= 0 && parseInt(item.innerHTML) <= 9){
    item.addEventListener('click', event => {
        if (displayNumber1.length < 12){
            displayNumber1 = displayNumber1 + item.innerHTML;
            displayValue(displayNumber1);
        }else{
            displayValue(displayNumber1)
        }
    })}
  })
  
// A/C Button Function to clear display
deLete.addEventListener('click', event => {
    displayNumber1 = "";
    memory = "";
    selOperator = "";
    result = undefined;
    displayValue(0);
})

// Dot Function
dot.addEventListener('click', event => {
    if (screenDisplay.innerHTML.includes(".") == false && selOperator == ""){
        displayNumber1 = screenDisplay.innerHTML + ".";
        return displayValue(displayNumber1)
    }else if (screenDisplay.innerHTML.includes(".") == true && displayNumber1 != ""){
        return displayValue(screenDisplay.innerHTML);
    }else if (screenDisplay.innerHTML != ""){
        displayNumber1 =  displayNumber1 + "0.";
        displayValue(displayNumber1);
    }
})


// Negative Operator Event
plus_Negative.addEventListener('click', event => {
    if (screenDisplay.innerHTML.includes("-") == false && screenDisplay.innerHTML != "0"){
        displayNumber1 =  "-" + screenDisplay.innerHTML;
        return displayValue(displayNumber1)
    }else if(screenDisplay.innerHTML == "0"){
        return displayValue(screenDisplay.innerHTML);
    }else {
       return displayValue(screenDisplay.innerHTML.slice(1))
    }
})

// Divide Operator Event
diVide.addEventListener('click', event => {
    if (result == undefined && memory == "" ){
        memory = screenDisplay.innerHTML;
        displayNumber1 = "";
        selOperator = "divide"
    }else if (result != undefined && memory == "") {
        memory = result;
        result = undefined;
        selOperator = "divide";
        displayValue(memory);
    }else if(memory != "" && displayNumber1 != ""){
        operate(selOperator, Number(memory), Number(displayNumber1));
        displayValue(result);
        selOperator = "divide";
        memory = result;
        result = undefined;
    }else{
        displayValue(displayNumber1)
    }
    
})

// Multiply Operator Event
mulTiply.addEventListener('click', event => {
    if (result == undefined && memory == "" ){
        memory = screenDisplay.innerHTML;
        displayNumber1 = "";
        selOperator = "multiply"
    }else if (result != undefined && memory == "") {
        memory = result;
        result = undefined;
        selOperator = "multiply";
        displayValue(memory);
    }else if(memory != "" && displayNumber1 != ""){
        operate(selOperator, Number(memory), Number(displayNumber1));
        displayValue(result);
        selOperator = "multiply";
        memory = result;
        result = undefined;
    }else{
        displayValue(displayNumber1)
    }
    
})

// Subtract Operator Event
subTract.addEventListener('click', event => {
    if (result == undefined && memory == "" ){
        memory = screenDisplay.innerHTML;
        displayNumber1 = "";
        selOperator = "subtract"
    }else if (result != undefined && memory == "") {
        memory = result;
        result = undefined;
        selOperator = "subtract";
        displayValue(memory);
    }else if(memory != "" && displayNumber1 != ""){
        operate(selOperator, Number(memory), Number(displayNumber1));
        displayValue(result);
        selOperator = "subtract";
        memory = result;
        result = undefined;
    }else{
        displayValue(displayNumber1)
    }
    
})

// Add Operator Event
aDd.addEventListener('click', event => {
    if (result == undefined && memory == "" ){
        memory = screenDisplay.innerHTML;
        displayNumber1 = "";
        selOperator = "add"
    }else if (result != undefined && memory == "") {
        memory = result;
        result = undefined;
        selOperator = "add";
        displayValue(memory);
    }else if(memory != "" && displayNumber1 != ""){
        operate(selOperator, Number(memory), Number(displayNumber1));
        displayValue(result);
        selOperator = "add";
        memory = result;
        result = undefined;
    }else{
        displayValue(displayNumber1)
    }
    
})

// Equal Operator Event
eQual.addEventListener('click', event => {
    if (result == undefined && memory != ""){
        operate(selOperator, Number(memory), Number(displayNumber1))
        displayValue(result);
    }else{
        displayValue(screenDisplay.innerHTML);
    }
    
})