const checkbox = document.getElementById('switch');
const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');
const equalsButton = document.getElementById('equal');
const inputField = document.getElementById('input');
const outputField = document.getElementById('output');

checkbox.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})

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

