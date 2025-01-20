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
let result
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
    if (result != undefined && equationArr[0] != result ) {  //checks if result is undefined (otherwise it breaks)
        equationArr.push(result);
    };
    if (equationArr.length == 0) {
        return;
    }
    if (equationArr.length == 1 && operator != 'eq') {
        equationArr.push(operator);                     // inputs the operator into
                                                        //the array to be read by =
        return;
    } else {
        switch (equationArr[1]) {
            case 'plus': 
                equationArr.push(operator);
                result = add(equationArr[0], equationArr[2]);
                screen.textContent = result;
                equationArr = [];
                break;
            case 'minus': 
                equationArr.push(operator);
                result = subtract(equationArr[0], equationArr[2]);
                screen.textContent = result;
                equationArr = [];
                break;
            case 'mult': 
                equationArr.push(operator);
                result = multiply(equationArr[0], equationArr[2]);
                screen.textContent = result;
                equationArr = [];
                break;
            case 'by': 
                equationArr.push(operator);
                result = divide(equationArr[0], equationArr[2]);
                screen.textContent = result;
                equationArr = [];
                break;
        }
        if (operator != 'eq') {                        //allows for chain operations
            equationArr.push(result, operator);
        }
    }
    screen.textContent = result;
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
            result = undefined;
            break;
        case 'float': 
            getUserInput('.')
            break;
        case 'signed': 
            changeSigned();
            break;
    }
});