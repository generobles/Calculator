const checkbox = document.getElementById('switch');
const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const equalsButton = document.getElementById('equal');
const inputField = document.getElementById('input');
const outputField = document.getElementById('output');

checkbox.checked = false;

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
})

window.onload = checkTheme();

function checkTheme() {
    const localStorageTheme = localStorage.getItem('theme');
    if (localStorageTheme !== null && localStorageTheme === 'dark') {
        document.body.className = localStorageTheme;
        checkbox.checked = true;
    }
}

function inputNumber(num) {
    inputField.innerHTML += num;
}

function inputOperator(operator) {
    inputField.innerHTML += operator;
}

function transformOprtr(keyInput) {
    if (keyInput === '*') {
        return '×';
    }
    if (keyInput === '/') {
        return '÷';
    }
}

function deleteInput(){
    let text = inputField.innerHTML;
    inputField.innerHTML = text.slice(0, -1);
}

function clear() {
    inputField.innerHTML = "";
    outputField.innerHTML = "";
}

function equals() {
    const inputDisp = inputField.textContent;
    const inputDisp1 = inputDisp.replaceAll('÷', '/');
    const inputDisp2 = inputDisp1.replaceAll('×', '*');
    let answer = eval(inputDisp2);
    outputField.innerHTML = "= " + Math.round(answer * 100000) / 100000;
}

function keyboardInput(event) {
    if (event.key >= 0 && event.key <= 9 || event.key === '.') {
        inputNumber(event.key);
    }
    if (event.key === 'Escape') {
        clear();
    }
    if (event.key === 'Backspace') {
        deleteInput();
    }
    if (event.key === '=' || event.key === 'Enter') {
        equals();
    }

    if (event.key === '+' || event.key === '-' ) {
        inputOperator(event.key);
    }

    if (event.key === '*' || event.key === '/') {
        inputOperator(transformOprtr(event.key));
    }
}

const add = (x, y) => { x + y; };
const subtract = (x, y) => { x - y; };
const multiply = (x, y) => { x * y; };
const divide = (x, y) => { x / y; };

function operate(operator, x, y) {
    x = Number(x);
    y = Number(y);
    switch(operator) {
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y);
        case '×':
            return multiply(x,y);
        case '÷':
            if (y === 0) {
                return 'undefined';
            }
            else if (x === 0 && y === 0) {
                return 'infinity';
            }
            else {
                return divide(x,y);
            }
        default:
            return null;
    }
}


numButtons.forEach((button) => {
    button.addEventListener('click', () => inputNumber(button.textContent))    
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => inputOperator(button.textContent))
})

window.addEventListener('keydown', keyboardInput);
clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteInput);
equalsButton.addEventListener('click', equals)

