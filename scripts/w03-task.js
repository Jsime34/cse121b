/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1, num2){
    return num1 + num2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (num1, num2){
    return num1-num2;
}

function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (num1, num2) => num1*num2;

function multiplyNumbers(){
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (num1, num2) => num1/num2;

function divideNumbers(){
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function discount(){
    let subtotal = Number(document.querySelector('#subtotal').value);
    if(document.getElementById('member').checked){
        subtotal *= 80 / 100;
        document.querySelector('#total').innerHTML = `$${subtotal}`;
    }
}
document.querySelector('#getTotal').addEventListener('click', discount)

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let arrayofnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').innerHTML = arrayofnumbers;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = arrayofnumbers.filter( number => number % 2 == 0);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = arrayofnumbers.filter(number => number % 2 == 1);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = arrayofnumbers.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = arrayofnumbers.map(number => number*2);
/* Output Sum of Multiplied by 2 Array */
duplicatedarray = arrayofnumbers.map(number => number*2);
document.querySelector('#sumOfMultiplied').innerHTML = duplicatedarray.reduce((sum, number) => sum + number);