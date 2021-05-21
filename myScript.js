// Varible Storage
let displayNumber1 = ""
let displayNumber2 = ""
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
            displayNumber2 = "";
            selOperator = "";
            break
        case "subtract":
            result= subtract(x, y);
            displayNumber1 = "";
            displayNumber2 = "";
            selOperator = "";
            break
        case "multiply":
            result= multiply(x, y);
            displayNumber1 = "";
            displayNumber2 = "";
            selOperator = "";
            break
        case "divide":
            result= divide(x, y);
            displayNumber1 = "";
            displayNumber2 = "";
            selOperator = "";
            break
        default:
            return "Operator not Found"
    }
}

const displayValue = (x) => {
    if (screenDisplay.innerHTML.length < 11){
        screenDisplay.innerHTML = x;
    }else{
        screenDisplay.innerHTML = "NaN"
    }
    
}

// Display Numbers when pressed
document.querySelectorAll('.button').forEach(item => {
    if (parseInt(item.innerHTML) >= 0 && parseInt(item.innerHTML) <= 9){
    item.addEventListener('click', event => {
        if (displayNumber1.length < 12){
            displayNumber1 += item.innerHTML;
            displayValue(displayNumber1);
        }else{
            displayValue(displayNumber1);
        }
        
    })}
  })
  
// A/C Button Function to clear display
deLete.addEventListener('click', event => {
    displayNumber1 = "";
    displayNumber2 = "";
    selOperator = "";
    result = undefined;
    displayValue(0);
})

// Negative Operator Event
plus_Negative.addEventListener('click', event => {
    if (screenDisplay.innerHTML.search("-") == -1){
        screenDisplay.innerHTML =  "-" + screenDisplay.innerHTML;
    }else{
        return displayValue(screenDisplay.innerHTML.slice(1));
    }
})

// Divide Operator Event
diVide.addEventListener('click', event => {
    if (result == undefined && displayNumber2 == "" ){
        displayNumber2 = screenDisplay.innerHTML;
        displayNumber1 = "";
        selOperator = "divide"
    }else if (result != undefined && displayNumber2 == "") {
        displayNumber2 = result;
        result = undefined;
        selOperator = "divide";
        displayValue(displayNumber2);
    }else if(displayNumber2 != "" && displayNumber1 != ""){
        operate(selOperator, Number(displayNumber2), Number(displayNumber1));
        displayValue(result);
        selOperator = "divide";
        displayNumber2 = result;
        result = undefined;
    }else{
        displayValue(displayNumber1)
    }
    
})

// Multiply Operator Event
mulTiply.addEventListener('click', event => {
    if (result == undefined && displayNumber2 == "" ){
        displayNumber2 = screenDisplay.innerHTML;
        displayNumber1 = "";
        selOperator = "multiply"
    }else if (result != undefined && displayNumber2 == "") {
        displayNumber2 = result;
        result = undefined;
        selOperator = "multiply";
        displayValue(displayNumber2);
    }else if(displayNumber2 != "" && displayNumber1 != ""){
        operate(selOperator, Number(displayNumber2), Number(displayNumber1));
        displayValue(result);
        selOperator = "multiply";
        displayNumber2 = result;
        result = undefined;
    }else{
        displayValue(displayNumber1)
    }
    
})

// Subtract Operator Event
subTract.addEventListener('click', event => {
    if (result == undefined && displayNumber2 == "" ){
        displayNumber2 = screenDisplay.innerHTML;
        displayNumber1 = "";
        selOperator = "subtract"
    }else if (result != undefined && displayNumber2 == "") {
        displayNumber2 = result;
        result = undefined;
        selOperator = "subtract";
        displayValue(displayNumber2);
    }else if(displayNumber2 != "" && displayNumber1 != ""){
        operate(selOperator, Number(displayNumber2), Number(displayNumber1));
        displayValue(result);
        selOperator = "subtract";
        displayNumber2 = result;
        result = undefined;
    }else{
        displayValue(displayNumber1)
    }
    
})

// Add Operator Event
aDd.addEventListener('click', event => {
    if (result == undefined && displayNumber2 == "" ){
        displayNumber2 = screenDisplay.innerHTML;
        displayNumber1 = "";
        selOperator = "add"
    }else if (result != undefined && displayNumber2 == "") {
        displayNumber2 = result;
        result = undefined;
        selOperator = "add";
        displayValue(displayNumber2);
    }else if(displayNumber2 != "" && displayNumber1 != ""){
        operate(selOperator, Number(displayNumber2), Number(displayNumber1));
        displayValue(result);
        selOperator = "add";
        displayNumber2 = result;
        result = undefined;
    }else{
        displayValue(displayNumber1)
    }
    
})

// Equal Operator Event
eQual.addEventListener('click', event => {
    if (result == undefined && displayNumber2 != ""){
        operate(selOperator, Number(displayNumber2), Number(displayNumber1))
        displayValue(result);
    }else{
        displayValue(screenDisplay.innerHTML);
    }
    
})

