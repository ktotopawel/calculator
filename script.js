function add(a, b) {
    return a + b;
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

let equation = []

function getUserInput (input) {
    equation.push(input);
    equation.join('');
    console.log(equation);
}

const buttons = document.querySelector('.buttons')

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
        case 'add':
            break;
        case 'subtract':
            break;
        case 'mult':
            break;
        case 'divide':
            break;
        case 'equals':
            break;
        case 'clear':
            break;
        default:
            break;
    }
});