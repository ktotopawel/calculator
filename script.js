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
    if (b == 0) {
        return "Err";
    };
    return a / b;
};

let inputArr = []
let result = null
let equationArr = []

const screen = document.querySelector('.screen');


// puts the user input into an array (couldn't think of a better way)
function getUserInput (input) {
    inputArr.push(input);
    result = inputArr.join('');   // joins the array of numbers inputted by user 
    screen.textContent = result;
}

function evaluate (operator) {
    inputArr = [];

    if ((result != null) && (typeof(equationArr[-1]) != 'number')) {  //checks if result is null (otherwise it breaks)
        equationArr.push(result);
        result = null;
    };

    if (equationArr.length == 0) {
        return;
    }

    if (equationArr.length == 1 && operator != 'eq') {
        equationArr.push(operator);                     // inputs the operator into the array to be read by =
        return;
    } 

    else {
        if (equationArr.length == 2 && operator != 'eq') {
            equationArr.splice(1, 1, operator);
        }
        if (equationArr.length > 2) {
            switch (equationArr[1]) {
                case 'plus': 
                    result = add(equationArr[0], equationArr[2]);
                    break;
                    case 'minus': 
                    result = subtract(equationArr[0], equationArr[2]);
                    break;
                    case 'mult': 
                    result = multiply(equationArr[0], equationArr[2]);
                    break;
                    case 'by': 
                    result = divide(equationArr[0], equationArr[2]);
                    break;
                }
                screen.textContent = result;
                equationArr = [];
        }
        if (operator != 'eq' && result != null && typeof(equationArr[-1]) != result && equationArr.length != 2) {                        //allows for chain operations
            equationArr.push(result, operator);
            result = null;
        }
    }

    if (result != null) {
        screen.textContent = result;
    }

    console.log(equationArr, result);
}

function changeSigned () {
    result *= -1;
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
            evaluate('eq');
            break;
        case 'clear':
            screen.textContent = '';
            equationArr = [];
            inputArr = [];
            result = null;
            break;
        case 'float': 
            if (inputArr.length != 0) {
            getUserInput('.')
            }
            break;
        case 'signed': 
            changeSigned();
            break;
    }
});