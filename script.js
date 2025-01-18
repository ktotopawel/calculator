function add(a, b) {
    return Number(a) + Number(b);
};

function subtract(a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    if (a == 0 || b == 0) {
        return "FUCK OFF";
    };
    return a / b;
};

function operate (a, b, op) {
    switch (op) {
        case "+": 
            return add(a, b)
            break;
        case "*":
            return multiply(a, b)
            break;
        case "-":
            return subtract(a, b)
            break;
        case "/":
            return divide(a, b)
            break;
    }
}

let inputArr = []
let result
let equationArr = []

const screen = document.querySelector('.screen');


// puts the user input into an array (couldn't think of a better way)
function getUserInput (input) {
    // if (equationArr.length != 0) {       BAD CODE NOT USABLE I THINK
    //     equationArr = []
    // }
    inputArr.push(input);
    result = inputArr.join('');
    screen.textContent = result;
}


// joins the array of numbers inputed by user 
function evaluate (operator) {
    inputArr = [];
    console.log(equationArr);
    if (equationArr.length < 2) {
        equationArr.push(result, operator);
        // HAVE TO ADD SOMETHING HERE FOR EQUALS 
        // LIKE PROBABLY TO OUTPUT THE VARIABLE WITHOUT PUSHING ANYTHING
        //OR MAYBE I WILL DO IT IN THE SWITCH BELOW I'LL SEE
        return;
    } else {
        equationArr.push(result);
        switch (equationArr[1]) {
            case 'plus': 
                equationArr.push(operator);
                result = add(equationArr[0], equationArr[2]);
                screen.textContent = result;
                equationArr = [];
                equationArr.push(result, operator);
                break;
            case 'minus': 
                equationArr.push(operator);
                result = subtract(equationArr[0], equationArr[2]);
                screen.textContent = result;
                equationArr = [];
                equationArr.push(result, operator);
                break;
            case 'mult': 
                equationArr.push(operator);
                result = multiply(equationArr[0], equationArr[2]);
                screen.textContent = result;
                equationArr = [];
                equationArr.push(result, operator);
                break;
            case 'by': 
                equationArr.push(operator);
                result = divide(equationArr[0], equationArr[2]);
                screen.textContent = result;
                equationArr = [];
                equationArr.push(result, operator);
                break;
        }
        console.log(equationArr, result);
    }
    screen.textContent = result;
}



const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case 'one':
            getUserInput(1);
            break;
        case 'two':
            getUserInput(2);
            break;
        case 'three':
            getUserInput(3);
            break;
        case 'four':
            getUserInput(4);
            break;
        case 'five':
            getUserInput(5);
            break;
        case 'six':
            getUserInput(6);
            break;
        case 'seven':
            getUserInput(7);
            break;
        case 'eight':
            getUserInput(8);
            break;
        case 'nine':
            getUserInput(9);
            break;
        case 'zero':
            getUserInput(0);
            break;
        case 'plus':
            evaluate('plus');
            break;
        case 'minus':
            evaluate('minus');
            break;
        case 'mult':
            evaluate('mult');
            break;
        case 'divide':
            evaluate('by');
            break;
        case 'equals':
            break;
        case 'clear':
            break;
        default:
            break;
    }
});